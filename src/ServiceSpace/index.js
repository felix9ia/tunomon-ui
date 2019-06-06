import serverTypeList from './static/serverTypeSet';
import analys from './static/analysServerType';
import initServeType from './static/initServeType';
import spr2_uuid from './static/spr2_uuid.json';
import spaceList from './static/spaceList';

const sprList = spr2_uuid;

class ServiceSpace {
  constructor() {}
  // value: ['00003433-3236-0000-0000-000000000000', 2, 2]
  initService(spr_uuid, dpi, title_type) {
    return initServeType(spr_uuid, dpi, title_type);
  }

  // 获取服务类型
  getServiceList() {
    return serverTypeList;
  }

  // 获取服务类型 对应的 dpi title_type
  // value: ['tianditu', 'td_wgs84_lng_lat']
  analysService(value) {
    return analys(value);
  }

  // 获取影像的空间参考类型
  // spr_uuid 00003433-3236-0000-0000-000000000000
  initSpatialType(spr_uuid) {
    const name = sprList[spr_uuid].name.split('/')[0];
    return [name, spr_uuid]
  }

  // 获取影像空间参考详细信息
  // 获取
  getSpatialMeta(spr_uuid) {
    const name = sprList[spr_uuid].name.split('/')[0];
    return  sprList[spr_uuid]
  }

  // 获取影像空间参考列表
  getSpaceList() {
    return spaceList;
  }
}

export default ServiceSpace;
