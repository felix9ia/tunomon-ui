import serverTypeList from './static/serverTypeSet';
import analys from './static/analysServerType';
import initServeType from './static/initServeType';
import _ from 'lodash'
import _spaceList from './static/spaceList';
import _spaceMeta from './static/spr2_uuid.json';

class ServiceSpace {
  constructor({spaceList=[], spaceMeta = {}}={}) {
    this.spaceList = _.concat(_spaceList, spaceList)
    this.spaceMeta = _.assign(_spaceMeta, spaceMeta)
    this.setSpaceList = this.setSpaceList.bind(this);
    this.setSpaceMeta = this.setSpaceMeta.bind(this);
  }
  // value: ['00003433-3236-0000-0000-000000000000', 2, 2]
  setSpaceList (spaceList=[]) {
    return this.spaceList = _.concat(_spaceList,  spaceList)
  }

  setSpaceMeta (spaceMeta= {}) {
    return this.spaceMeta = _.assign(_spaceMeta, spaceMeta)
  }

  initService(spr_uuid, dpi, title_type) {
    return initServeType(spr_uuid, dpi, title_type);
  }

  initServiceLabel (spr_uuid, dpi, title_type) {
    const serverType = initServeType(spr_uuid, dpi, title_type);
    const serverLabel = []
    for ( let i =0; i<serverTypeList.length; i++) {
      const item = serverTypeList[i]
      if (item.value === serverType[0]) {
        serverLabel.push(item.label)
        const  children = item.children
        for (let j=0; j<children.length; j++) {
          const temp = children[j]
          if (temp.value === serverType[1]) {
            serverLabel.push(temp.label)
            break;
          }
        }
      }
    }
    return serverLabel.join('/')
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
  // [wgse, 152]
  initSpatialType(spr_uuid) {
    const spaceMeta = this.spaceMeta
    if (spaceMeta.hasOwnProperty(spr_uuid)) {
      const name = spaceMeta[spr_uuid].name.split('/');
      name.pop()
      return [...name, spr_uuid]
    } else {
      return []
    }

  }

  // 获取影像空间参考详细信息
  getSpatialMeta(spr_uuid) {
    const spaceMeta = this.spaceMeta
    if (spaceMeta.hasOwnProperty(spr_uuid)) {
      return spaceMeta[spr_uuid]
    } else {
      return {}
    }
  }

  // 获取影像空间参考列表
  getSpaceList() {
    return this.spaceList;
  }
}

export default ServiceSpace;
