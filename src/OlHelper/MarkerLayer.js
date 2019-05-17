import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Vector as VectorLayer } from 'ol/layer';
import Overlay from 'ol/Overlay';
import OverlayPositioning from 'ol/OverlayPositioning';
import VectorSource from 'ol/source/Vector';
import { Icon, Style } from 'ol/style';

class MarkerLayer {
  popupList;
  layerList
  constructor() {
    this.popupList = []; // 用于记录弹出的overlay
    this.layerList = [];
    // this._create({ overlayTarget });
  }

  /**
   * overlay存在的原因是map添加的时候需要一个layer,一个overlay
   * 但是可以考虑把overlay的方法放到Map的类中
   * @param element
   * @returns {Overlay}
   */
  addOverlay({ element }) {
    if (!element) {
      throw new Error('未能指定overlay的target');
    }
    const popup = new Overlay({
      element,
      positioning: OverlayPositioning.BOTTOM_CENTER,
      stopEvent: false,
      offset: [0, -20],
    });
    this.popupList.push(popup);
    return popup;
  }

  /**
   * 添加marker的point到图层
   */
  createLayer({ point, data, iconConfig}) {
    const iconFeature = new Feature({
      geometry: new Point(point),
      data,
    });

    const iconStyle = new Style({
      image: new Icon(
        /** @type {module:ol/style/Icon~Options} */ ({
          anchor: [0.5, 46],
          anchorXUnits: 'fraction',
          anchorYUnits: 'pixels',
          scale: 0.2,
          ...iconConfig,
        })
      ),
    });

    iconFeature.setStyle(iconStyle);
    const vectorSource = new VectorSource({
      features: [iconFeature],
    });
    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });
    this.layerList.push(vectorLayer);
    return vectorLayer;
  }
}

export default MarkerLayer;
