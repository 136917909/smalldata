export default {
  tooltip: {}, // 鼠标移到图里面的浮动提示框
  visualMap: { //左侧小柱子的配置
    min: 0, // 最小值
    max:150, //最大值
    left: 'left', // 定位左边
    top: 'bottom', // 定位底部
    text: ['高', '低'], // 上下两个文字
    seriesIndex: [1],
    inRange: {
      color: ['#e0ffff', '#006edd'] // 深浅颜色
    },
    calculable: true // 显示与否
  },
  geo: { // 这个是重点配置区
    map: 'china', // 表示中国地图
    roam: true,
    label: {
      normal: {
        show: false, // 是否显示对应地名
        textStyle: {
          color: 'rgba(0,0,0,0.4)'
        }
      }
    },
    itemStyle: {
      normal: {
        borderColor: 'rgba(0, 0, 0, 0.2)'
      },
      emphasis: {
        areaColor: null,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowBlur: 20,
        borderWidth: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      }
    }
  },
  series: [
    {
      type: 'scatter',
      coordinateSystem: 'geo' // 对应上方配置
    },
    {
      name: '启动次数', // 浮动框的标题
      type: 'map',
      geoIndex: 0,
      data: [
        { name: "北京", value: 177 },
        { name: "天津", value: 42 },
        { name: "河北", value: 102 },
        { name: "山西", value: 81 },
        { name: "内蒙古", value: 47 },
        { name: "辽宁", value: 67 },
        { name: "吉林", value: 82 },
        { name: "黑龙江", value: 66 },
        { name: "上海", value: 24 },
        { name: "江苏", value: 92 },
        { name: "浙江", value: 114 },
        { name: "安徽", value: 109 },
        { name: "福建", value: 116 },
        { name: "江西", value: 91 },
        { name: "山东", value: 119 },
        { name: "河南", value: 137 },
        { name: "湖北", value: 116 },
        { name: "湖南", value: 114 },
        { name: "重庆", value: 91 },
        { name: "四川", value: 125 },
        { name: "贵州", value: 62 },
        { name: "云南", value: 83 },
        { name: "西藏", value: 9 },
        { name: "陕西", value: 80 },
        { name: "甘肃", value: 56 },
        { name: "青海", value: 10 },
        { name: "宁夏", value: 18 },
        { name: "新疆", value: 67 },
        { name: "广东", value: 123 },
        { name: "广西", value: 59 },
        { name: "海南", value: 14 }
      ]// 这里就是数据，即数组可以单独放在外面也可以直接写
    }
  ]
};
