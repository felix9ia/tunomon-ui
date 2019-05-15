import { WKT } from 'ol/format';
import WMTSTileGrid from 'ol/tilegrid/WMTS';
import WMTS from 'ol/source/WMTS';
import { Tile } from 'ol/layer';

const resolutions: number[] = [];
const matrixIds: string[] = [];
for (let i = 1; i < 21; i += 1) {
  const resolution = 0.703125 / Math.pow(2, i);
  resolutions.push(resolution);
  matrixIds.push(i.toString());
}

export interface CommonLayerProps {
  projection: any,
  host: string
}

export interface ResultConfig {
  preload: number,
  source: any,
  extent: any
}



class CommonLayer {
  /**
   *  弃用，通过ids获得urls
   * @param url
   * @param ids
   * @returns {*}
   */
  static getUrl = (url: string, ids: Array<any>) => ids.map(id => `${url}/${id}/wmts?`);
  host: string;
  projection: any;

  /**
   * es6不支持重载，所以要类型判断
   * @param config
   */
  constructor({ projection, host }: CommonLayerProps) {
    this.host = host;
    this.projection = projection;
  }

  getTileGrid = () => {
    return new WMTSTileGrid({
      origin: [-180, 90],
      resolutions,
      matrixIds,
      tileSize: 256,
    });
  };

  getSource(imageMeta: any, tileGrid: any) {
    return new WMTS({
      url: `${this.host}/${imageMeta._id}/wmts?`,
      layer: imageMeta.layer || imageMeta._id, // TODO 这里为了兼容uni的id和layer不一致的情况，要反映
      matrixSet: '1',
      format: 'tiles',
      projection: this.projection,
      tileGrid,
      style: 'default',
      wrapX: true,
    });
  }

  /**
   * 创建图层
   * @param imageMeta 只支持单个image
   * @param config
   * @returns {*}
   */
  createLayer(imageMeta: any, config: any) {
    if (typeof config === 'object') {
      return this.addLayerWithConfig(imageMeta, config);
    }
    return this.addLayerWithoutConfig(imageMeta);
  }

  /**
   * 外部通过指定属性，不再使用内部的函数
   * @param imageMeta
   * @returns {{source: WMTS, extent: *}}
   */
  getConfig = (imageMeta: any, config: any) => {
    // const { source, extent, preload, ...other } = config;
    // const resultConfig = {
    //   source: source || defaultSource,
    //   extent: extent || defaultExtent,
    //   preload: preload || Infinity,
    //   ...other,
    // };
    let extent;
    const tileGrid = this.getTileGrid();
    const source = this.getSource(imageMeta, tileGrid);
    // TODO 这里ImgRange有侵入性，想想吧
    if (imageMeta.ImgRange) {
      const imgFeature = new WKT().readFeature(imageMeta.ImgRange);
       extent = imgFeature.getGeometry().getExtent();
    }
    const resultConfig: ResultConfig = {
      ...config,
      preload: Infinity,
      source,
      extent
    };
    return resultConfig;
  };

  /**
   * 通过图层id，添加图层
   */
  addLayerWithConfig(imageMeta: any, config: any) {
    const resultConfig = this.getConfig(imageMeta, config);
    return this._createLayer(resultConfig);
  }

  addLayerWithoutConfig(imageMeta: any) {
    const defaultConfig = this.getConfig(imageMeta, null);
    return this._createLayer(defaultConfig);
  }

  _createLayer = (config: any) => {
    const newLayer = new Tile({
      ...config,
    });
    return newLayer;
  };
}

export default CommonLayer;
