export default  [
    {
        value: 'tianditu', label: '天地图',
        children: [
            {value: 'td_wgs84_lng_lat', label: 'WGS84 / 经纬度'},
            {value: 'td_g2000_lng_lat', label: 'CGCS2000 / 经纬度'},
            {value: 'td_web', label: 'Web墨卡托'}
        ]
    },
    {
        value: 'lng_lat', label: '经纬度',children: [
            {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
            {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'},
        ]
    },
    {
        value: 'web', label: 'Web墨卡托',children: [
            {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
            {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
        ]
    },
    {
        value: 'pgis', label: 'PGIS',children: [
            {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
            {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'},
            {value: '2', label: '适配天地图'}
        ]
    },


    // {
    //     value: 'self_server', label: '自定义',
    //     children: [
    //         // {value: 'self_g2000', label: '国家2000',disabled: true,children: [
    //         //         {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //         //         {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //         //     ]},
    //         // {value: 'self_dataset', label: '原始投影',disabled: true,children: [
    //         //         {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //         //         {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'},
    //         //         // {value: 'dpi_set', label: 'DPI设置',
    //         //         //     children:[
    //         //         //         {value: '0', label: '90.7142857'},
    //         //         //         {value: '1', label: '90.8156652'},
    //         //         //         {value: '2', label: '96'}
    //         //         //         ]
    //         //         // }
    //         //     ]},


    //         {
    //             value: 'self_gj2000', label: '国家2000/高斯投影', disabled: false, children: [
    //                 {
    //                     value: '3度分带（带带号）', label: '3度分带（带带号）', children: [
    //                         {
    //                             value: '00003435-3133-0000-0000-000000000000', label: '25（75E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3134-0000-0000-000000000000', label: '26（78E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3135-0000-0000-000000000000', label: '27（81E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3136-0000-0000-000000000000', label: '28（84E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3137-0000-0000-000000000000', label: '29（87E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3138-0000-0000-000000000000', label: '30（90E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3139-0000-0000-000000000000', label: '31（93E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3230-0000-0000-000000000000', label: '32（96E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3231-0000-0000-000000000000', label: '33（99E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3232-0000-0000-000000000000', label: '34（102E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3233-0000-0000-000000000000', label: '35（105E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3234-0000-0000-000000000000', label: '36（108E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3235-0000-0000-000000000000', label: '37（111E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3236-0000-0000-000000000000', label: '38（114E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3237-0000-0000-000000000000', label: '39（117E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3238-0000-0000-000000000000', label: '40（120E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3239-0000-0000-000000000000', label: '41（123E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3330-0000-0000-000000000000', label: '42（126E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3331-0000-0000-000000000000', label: '43（129E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3332-0000-0000-000000000000', label: '44（132E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3333-0000-0000-000000000000', label: '45（135E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     value: '3度分带（无带号）', label: '3度分带（无带号）', children: [
    //                         {
    //                             value: '00003435-3334-0000-0000-000000000000', label: '75E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3335-0000-0000-000000000000', label: '78E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3336-0000-0000-000000000000', label: '81E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3337-0000-0000-000000000000', label: '84E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3338-0000-0000-000000000000', label: '87E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3339-0000-0000-000000000000', label: '90E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3430-0000-0000-000000000000', label: '93E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3431-0000-0000-000000000000', label: '96E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3432-0000-0000-000000000000', label: '99E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3433-0000-0000-000000000000', label: '102E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3434-0000-0000-000000000000', label: '105E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3435-0000-0000-000000000000', label: '108E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3436-0000-0000-000000000000', label: '111E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3437-0000-0000-000000000000', label: '114E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3438-0000-0000-000000000000', label: '117E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3439-0000-0000-000000000000', label: '120E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3530-0000-0000-000000000000', label: '123E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3531-0000-0000-000000000000', label: '126E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3532-0000-0000-000000000000', label: '129E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3533-0000-0000-000000000000', label: '132E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3534-0000-0000-000000000000', label: '135E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     value: '6度分带（带带号）', label: '6度分带（带带号）', children: [
    //                         {
    //                             value: '00003434-3931-0000-0000-000000000000', label: '13（75E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003434-3932-0000-0000-000000000000', label: '14（81E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003434-3933-0000-0000-000000000000', label: '15（87E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003434-3934-0000-0000-000000000000', label: '16（93E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003434-3935-0000-0000-000000000000', label: '17（99E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003434-3936-0000-0000-000000000000', label: '18（105E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003434-3937-0000-0000-000000000000', label: '19（111E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003434-3938-0000-0000-000000000000', label: '20（117E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003434-3939-0000-0000-000000000000', label: '21（123E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3030-0000-0000-000000000000', label: '22（129E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3031-0000-0000-000000000000', label: '23（135E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     value: '6度分带（无带号）', label: '6度分带（无带号）', children: [
    //                         {
    //                             value: '00003435-3032-0000-0000-000000000000', label: '75E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3033-0000-0000-000000000000', label: '81E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3034-0000-0000-000000000000', label: '87E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3035-0000-0000-000000000000', label: '93E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3036-0000-0000-000000000000', label: '99E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3037-0000-0000-000000000000', label: '105E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3038-0000-0000-000000000000', label: '111E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3039-0000-0000-000000000000', label: '117E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3130-0000-0000-000000000000', label: '123E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3131-0000-0000-000000000000', label: '129E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003435-3132-0000-0000-000000000000', label: '135E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         }
    //                     ]
    //                 },
    //             ]
    //         },
    //         {
    //             value: 'self_xian80', label: '西安80/高斯投影', disabled: false, children: [
    //                 {
    //                     value: '3度分带（带带号）', label: '3度分带（带带号）', children: [
    //                         {
    //                             value: '00003233-3439-0000-0000-000000000000', label: '25（75E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3530-0000-0000-000000000000', label: '26（78E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3531-0000-0000-000000000000', label: '27（81E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3532-0000-0000-000000000000', label: '28（84E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3533-0000-0000-000000000000', label: '29（87E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3534-0000-0000-000000000000', label: '30（90E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3535-0000-0000-000000000000', label: '31（93E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3536-0000-0000-000000000000', label: '32（96E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3537-0000-0000-000000000000', label: '33（99E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3538-0000-0000-000000000000', label: '34（102E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3539-0000-0000-000000000000', label: '35（105E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3630-0000-0000-000000000000', label: '36（108E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3631-0000-0000-000000000000', label: '37（111E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3632-0000-0000-000000000000', label: '38（114E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3633-0000-0000-000000000000', label: '39（117E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3634-0000-0000-000000000000', label: '40（120E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3635-0000-0000-000000000000', label: '41（123E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3636-0000-0000-000000000000', label: '42（126E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3637-0000-0000-000000000000', label: '43（129E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3638-0000-0000-000000000000', label: '44（132E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3639-0000-0000-000000000000', label: '45（135E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     value: '3度分带（无带号）', label: '3度分带（无带号）', children: [
    //                         {
    //                             value: '00003233-3730-0000-0000-000000000000', label: '75E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3731-0000-0000-000000000000', label: '78E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3732-0000-0000-000000000000', label: '81E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3733-0000-0000-000000000000', label: '84E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3734-0000-0000-000000000000', label: '87E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3735-0000-0000-000000000000', label: '90E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3736-0000-0000-000000000000', label: '93E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3737-0000-0000-000000000000', label: '96E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3738-0000-0000-000000000000', label: '99E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3739-0000-0000-000000000000', label: '102E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3830-0000-0000-000000000000', label: '105E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3831-0000-0000-000000000000', label: '108E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3832-0000-0000-000000000000', label: '111E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3833-0000-0000-000000000000', label: '114E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3834-0000-0000-000000000000', label: '117E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3835-0000-0000-000000000000', label: '120E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3836-0000-0000-000000000000', label: '123E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3837-0000-0000-000000000000', label: '126E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3838-0000-0000-000000000000', label: '129E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3839-0000-0000-000000000000', label: '132E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3930-0000-0000-000000000000', label: '135E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     value: '6度分带（带带号）', label: '6度分带（带带号）', children: [
    //                         {
    //                             value: '00003233-3237-0000-0000-000000000000', label: '13（75E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3238-0000-0000-000000000000', label: '14（81E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3239-0000-0000-000000000000', label: '15（87E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3330-0000-0000-000000000000', label: '16（93E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3331-0000-0000-000000000000', label: '17（99E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3332-0000-0000-000000000000', label: '18（105E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3333-0000-0000-000000000000', label: '19（111E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3334-0000-0000-000000000000', label: '20（117E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3335-0000-0000-000000000000', label: '21（123E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3336-0000-0000-000000000000', label: '22（129E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3337-0000-0000-000000000000', label: '23（135E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     value: '6度分带（无带号）', label: '6度分带（无带号）', children: [
    //                         {
    //                             value: '00003233-3338-0000-0000-000000000000', label: '75E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3339-0000-0000-000000000000', label: '81E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3430-0000-0000-000000000000', label: '87E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3431-0000-0000-000000000000', label: '93E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3432-0000-0000-000000000000', label: '99E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3433-0000-0000-000000000000', label: '105E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3434-0000-0000-000000000000', label: '111E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3435-0000-0000-000000000000', label: '117E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3436-0000-0000-000000000000', label: '123E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3437-0000-0000-000000000000', label: '129E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003233-3438-0000-0000-000000000000', label: '135E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         }
    //                     ]
    //                 },
    //             ]
    //         },
    //         {
    //             value: 'self_bj54', label: '北京54/高斯投影', disabled: false, children: [
    //                 {
    //                     value: '3度分带（带带号）', label: '3度分带（带带号）', children: [
    //                         {
    //                             value: '00003234-3031-0000-0000-000000000000', label: '25（75E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003234-3032-0000-0000-000000000000', label: '26（78E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003234-3033-0000-0000-000000000000', label: '27（81E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003234-3034-0000-0000-000000000000', label: '28（84E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003234-3035-0000-0000-000000000000', label: '29（87E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003234-3036-0000-0000-000000000000', label: '30（90E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003234-3037-0000-0000-000000000000', label: '31（93E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003234-3038-0000-0000-000000000000', label: '32（96E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003234-3039-0000-0000-000000000000', label: '33（99E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003234-3130-0000-0000-000000000000', label: '34（102E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003234-3131-0000-0000-000000000000', label: '35（105E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003234-3132-0000-0000-000000000000', label: '36（108E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003234-3133-0000-0000-000000000000', label: '37（111E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003234-3134-0000-0000-000000000000', label: '38（114E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003234-3135-0000-0000-000000000000', label: '39（117E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003234-3136-0000-0000-000000000000', label: '40（120E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003234-3137-0000-0000-000000000000', label: '41（123E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003234-3138-0000-0000-000000000000', label: '42（126E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003234-3139-0000-0000-000000000000', label: '43（129E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003234-3230-0000-0000-000000000000', label: '44（132E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003234-3231-0000-0000-000000000000', label: '45（135E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     value: '3度分带（无带号）', label: '3度分带（无带号）', children: [
    //                         {
    //                             value: '00003234-3232-0000-0000-000000000000', label: '75E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003234-3233-0000-0000-000000000000', label: '78E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003234-3234-0000-0000-000000000000', label: '81E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003234-3235-0000-0000-000000000000', label: '84E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003234-3236-0000-0000-000000000000', label: '87E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003234-3237-0000-0000-000000000000', label: '90E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003234-3238-0000-0000-000000000000', label: '93E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003234-3239-0000-0000-000000000000', label: '96E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003234-3330-0000-0000-000000000000', label: '99E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003234-3331-0000-0000-000000000000', label: '102E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003234-3332-0000-0000-000000000000', label: '105E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003234-3333-0000-0000-000000000000', label: '108E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003234-3334-0000-0000-000000000000', label: '111E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003234-3335-0000-0000-000000000000', label: '114E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003234-3336-0000-0000-000000000000', label: '117E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003234-3337-0000-0000-000000000000', label: '120E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003234-3338-0000-0000-000000000000', label: '123E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003234-3339-0000-0000-000000000000', label: '126E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003234-3430-0000-0000-000000000000', label: '129E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003234-3431-0000-0000-000000000000', label: '132E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003234-3432-0000-0000-000000000000', label: '135E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     value: '6度分带（带带号）', label: '6度分带（带带号）', children: [
    //                         {
    //                             value: '00003231-3431-3300-0000-000000000000', label: '13（75E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003231-3431-3400-0000-000000000000', label: '14（81E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003231-3431-3500-0000-000000000000', label: '15（87E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003231-3431-3600-0000-000000000000', label: '16（93E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003231-3431-3700-0000-000000000000', label: '17（99E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003231-3431-3800-0000-000000000000', label: '18（105E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003231-3431-3900-0000-000000000000', label: '19（111E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003231-3432-3000-0000-000000000000', label: '20（117E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003231-3432-3100-0000-000000000000', label: '21（123E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003231-3432-3200-0000-000000000000', label: '22（129E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003231-3432-3300-0000-000000000000', label: '23（135E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     value: '6度分带（无带号）', label: '6度分带（无带号）', children: [
    //                         {
    //                             value: '00003231-3435-3300-0000-000000000000', label: '75E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003231-3435-3400-0000-000000000000', label: '81E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003231-3435-3500-0000-000000000000', label: '87E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003231-3435-3600-0000-000000000000', label: '93E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003231-3435-3700-0000-000000000000', label: '99E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003231-3435-3800-0000-000000000000', label: '105E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003231-3435-3900-0000-000000000000', label: '111E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003231-3436-3000-0000-000000000000', label: '117E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003231-3436-3100-0000-000000000000', label: '123E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003231-3436-3200-0000-000000000000', label: '129E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003231-3436-3300-0000-000000000000', label: '135E', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         }
    //                     ]
    //                 },
    //             ]
    //         },
    //         {
    //             value: 'self_utm', label: 'WGS 84/UTM', disabled: false, children: [
    //                 {
    //                     value: '6度分带（带带号）', label: '6度分带（带带号）', children: [
    //                         {
    //                             value: '00003332-3634-3300-0000-000000000000', label: '43N（75E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003332-3634-3400-0000-000000000000', label: '44N（81E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003332-3634-3500-0000-000000000000', label: '45N（87E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003332-3634-3600-0000-000000000000', label: '46N（93E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003332-3634-3700-0000-000000000000', label: '47N（99E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003332-3634-3800-0000-000000000000', label: '48N（105E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003332-3634-3900-0000-000000000000', label: '49N（111E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003332-3635-3000-0000-000000000000', label: '50N（117E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003332-3635-3100-0000-000000000000', label: '51N（123E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003332-3635-3200-0000-000000000000', label: '52N（129E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         },
    //                         {
    //                             value: '00003332-3635-3300-0000-000000000000', label: '53N（135E）', children: [
    //                                 {value: '0', label: '适配ArcGIS（10.2/10.3）版本'},
    //                                 {value: '1', label: '适配ArcGIS（10.1/10.4/10.5）版本、Google、QGIS等'}
    //                             ]
    //                         }
    //                     ]
    //                 },
    //             ]
    //         },
    //     ]
    // },
]

