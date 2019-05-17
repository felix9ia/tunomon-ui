import {fromExtent} from 'ol/geom/Polygon';
import Feature from 'ol/Feature';
import { Vector as VectorLayer } from 'ol/layer';
import {  Vector as VectorSource } from 'ol/source';
import { Fill, Stroke, Style } from 'ol/style';
import MapHelper from './Map'

class LabelLayer {
    constructor() {

    }

    create({extent, data}) {
        const transfromedExtent = MapHelper.transformExtentToOl(extent);
        // Polygons
        const polygonStyle = () => {
            return new Style({
                stroke: new Stroke({
                    color: 'orange',
                    width: 1
                }),
                fill: new Fill({
                    color: 'rgba(255, 255, 255, 0.1)'
                }),
            });
        }
        const geometry = fromExtent(transfromedExtent);
        const feature = new Feature({
            geometry,
            data,
          });
        const source = new VectorSource({
            features: [feature]
        });
        const vectorPolygons = new VectorLayer({
            source,
            style: polygonStyle
        })
        return vectorPolygons;
    }
}

export default LabelLayer;