import  serverTypeList from './static/serverTypeSet';
import  analys from './static/analysServerType';
import  initServeType from './static/initServeType';
import  spr2_uuid from './static/spr2_uuid.json';
import  spaceList  from './static/spaceList';

let sprList = spr2_uuid;

class ServiceSpace {
  
    constructor () {
        
    }
    // value: ['00003433-3236-0000-0000-000000000000', 2, 2]
    initService (spr_uuid,  dpi, title_type) {
        return initServeType(spr_uuid,  dpi, title_type)
    }
    
    // 获取服务类型
    getServiceList ( ) {
        return serverTypeList
    }

    // value: ['tianditu', 'td_wgs84_lng_lat']
    analysService (value) {
        return analys(value)
    }

    // value ['', '00003433-3236-0000-0000-000000000000']
    getSpatialMeta (value) {
        return sprList[value[1]]
    }
    
    // 获取空间参考列表
    getSpaceList () {
        return spaceList
    }

}



export default ServiceSpace
