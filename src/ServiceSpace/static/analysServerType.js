/* eslint-disable */
import spr_uuid_table from './spr2_uuid.json';

let sprList = spr_uuid_table;
export default function analysServerType(server_type_arr) {
  var spr_uuid = '';
  var proj = '';
  var tile_type = 0;
  var desc_arr = [];
  var len = server_type_arr.length;
  let dpi = 0;

  //天地图类服务类型（WGS84经纬度、国家2000经纬度、web墨卡托）dpi_type=2（val=2）
  if (server_type_arr.indexOf('tianditu') != -1) {
    dpi = 2;
    if (server_type_arr.indexOf('td_wgs84_lng_lat') != -1) {
      //WGS84经纬度 4326 96
      tile_type = 2;
      spr_uuid = '00003433-3236-0000-0000-000000000000';
    } else if (server_type_arr.indexOf('td_g2000_lng_lat') != -1) {
      //国家2000经纬度 4490 96
      tile_type = 5;
      spr_uuid = '00003434-3930-0000-0000-000000000000';
    } else if (server_type_arr.indexOf('td_web') != -1) {
      //web墨卡托 3857 96
      tile_type = 3;
      spr_uuid = '00003338-3537-0000-0000-000000000000';
    }
  } else if (server_type_arr.indexOf('lng_lat') != -1) {
    tile_type = 2;
    spr_uuid = '00003433-3236-0000-0000-000000000000';
    dpi = Number(server_type_arr[len - 1]);
  } else if (server_type_arr.indexOf('web') != -1) {
    tile_type = 3;
    spr_uuid = '00003338-3537-0000-0000-000000000000';
    dpi = Number(server_type_arr[len - 1]);
  } else if (server_type_arr.indexOf('pgis') != -1) {
    tile_type = 4;
    spr_uuid = '00003434-3930-0000-0000-000000000000';
    dpi = Number(server_type_arr[len - 1]);
  }

  if (sprList.hasOwnProperty(spr_uuid)) {
    proj = sprList[spr_uuid].proj;
  }
  
  return { tile_type, spr_uuid, dpi, proj };
}
