import OlMap from 'ol/Map';
import View from 'ol/View';
import {  WKT } from 'ol/format';
import { Tile as TileLayer} from 'ol/layer';
import { XYZ as XYZSource } from 'ol/source';
import { get as getProjection } from 'ol/proj';

const projection = getProjection('EPSG:4326');

class Map {
  constructor({ target, defaultView }) {
    this.layerList = [];
    this.map = null;
    this.currentZoom = 4;
    this.target = target;
    this.defaultView = defaultView;
    this.init();
  }

  static transformExtentToUni(extent) {
    const east = extent[2];
    const west = extent[3];
    const south = extent[1];
    const north = extent[0];
    return [east, west, south, north];
  }

  static transformExtentToOl(extent) {
    const east = extent[0];
    const west = extent[1];
    const south = extent[2];
    const north = extent[3];
    return [west, south, east, north];
  }

  getProjection = () => projection;

  /**
   * 此方法迫不得已的情况下勿用，如果不行就扩展整个类的方法去支持
   * @returns {null}
   */
  getMap = () => this.map;

  getLaysers = () => this.layerList;

  getCurrentState = () => {
    const extent = this.map.getView().calculateExtent(this.map.getSize());
    const unispaceExtent = Map.transformExtentToUni(extent);
    return {
      zoom: this.currentZoom,
      extent: unispaceExtent,
      // extent: transformExtent(extent, 'EPSG:3857', 'EPSG:4326'),
    };
  };

  /**
   * 初始化
   */
  init() {
    const base_map = '/WorldMap/Z{z}/{y}/{x}.jpg';
    const { defaultView } = this;
    const center = [parseFloat(defaultView.center[0]), parseFloat(defaultView.center[1])];
    const zoom = parseFloat(defaultView.zoom);
    const map = new OlMap({
      layers: [
        new TileLayer({
          preload: Infinity,
          source: new XYZSource({
            url: base_map,
            minZoom: 3,
            maxZoom: 5,
            tilePixelRatio: 1,
          }),
        }),
      ],
      target: this.target,
      view: new View({
        center,
        zoom,
        extent: [-140, -85, 140, 85],
        maxZoom: 22,
        minZoom: 3,
        projection,
      }),
    });
    this.map = map;
    this._watchResolutionChage();
    return map;
  }

  /**
   * 添加标记图层
   * @param layer
   * @param overlay
   */
  addMarkerLayer = ({ layer, overlay }) => {
    if (!layer || !overlay) {
      console.warn('addMarkerLayer未能初始化某些参数');
    }
    layer && this.addLayer(layer);
    overlay && this.map.addOverlay(overlay);
  };

  addLayer(layer) {
    this.map.addLayer(layer);
  }

  removeLayer(layer) {
    this.map.removeLayer(layer, true);
  }

  /**
   * 未测试，似乎不好用
   * @param id
   * @returns {*|Array}
   */
  getCommonLayers = (id) => {
    let finedLayer;
    if (id) {
      // return this.layerList.find(layer.id === id);
      const allLayers = this.map.getLayers();
      allLayers.forEach((layer) => {
        const source = layer.getSource();
        const urls = source.getUrls(); // 这里居然可以是数组，可以放好多个！
        const layerUrl = urls[0];
        const segmentedUrl = layerUrl.split('/');
        if (segmentedUrl[3] === id) {
          finedLayer = layer;
        }
      });
    }
    return finedLayer || this.layerList;
  };

  fitByImgRange(ImgRange) {
    /**
     * 分两种情况
     * 1.如果直接给[120.28877476616279, 120.2771892039965, 36.03962683748332, 36.04903575709562]
     */
    const isNumberArray = typeof ImgRange === 'object';
    let extent;
    if (isNumberArray) {
      extent = Map.transformExtentToOl(ImgRange);
    } else {
    const imgFeature = new WKT().readFeature(ImgRange);
      extent = imgFeature.getGeometry().getExtent();
    }
    this.map.getView().fit( extent, this.map.getSize());
  }

  _watchResolutionChage() {
    // 监听图层级别
    this.map.getView().on('change:resolution', () => {
      // 为何要取整？？
      const zoom = Math.floor(this.map.getView().getZoom());
      this.currentZoom = zoom;
    });
  }
}

export default Map;
