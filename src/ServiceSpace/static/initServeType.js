/* eslint-disable */
export default function initServeType(spr_uuid, dpi, title_type) {
  let server = '';
  let type = '';

  if (spr_uuid === '00003433-3236-0000-0000-000000000000' && dpi === 2 && title_type === 2) {
    server = 'tianditu';
    type = 'td_wgs84_lng_lat';
  } else if (spr_uuid === '00003434-3930-0000-0000-000000000000' && dpi === 2 && title_type === 5) {
    server = 'tianditu';
    type = 'td_g2000_lng_lat';
  } else if (spr_uuid === '00003338-3537-0000-0000-000000000000' && dpi == 2 && title_type === 3) {
    server = 'tianditu';
    type = 'td_web';
  } else if (spr_uuid === '00003433-3236-0000-0000-000000000000' && dpi == 0 && title_type === 2) {
    // 经纬度
    server = 'lng_lat';
    type = '0';
  } else if (spr_uuid === '00003433-3236-0000-0000-000000000000' && dpi == 1 && title_type === 2) {
    server = 'lng_lat';
    type = '1';
  } else if (spr_uuid === '00003338-3537-0000-0000-000000000000' && dpi == 0 && title_type === 3) {
    server = 'web';
    type = '0';
  } else if (spr_uuid === '00003338-3537-0000-0000-000000000000' && dpi == 1 && title_type === 3) {
    server = 'web';
    type = '1';
  } else if (spr_uuid === '00003434-3930-0000-0000-000000000000' && dpi == 0 && title_type === 4) {
    server = 'pgis';
    type = '0';
  } else if (spr_uuid === '00003434-3930-0000-0000-000000000000' && dpi == 1 && title_type === 4) {
    server = 'pgis';
    type = '1';
  } else if (spr_uuid === '00003434-3930-0000-0000-000000000000' && dpi == 2 && title_type === 4) {
    server = 'pgis';
    type = '2';
  }

  return [server, type];
}
