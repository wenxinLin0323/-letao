$(function() {
  var echars1 = echarts.init(document.querySelector(".echarts_1"));

  var option1 = {
    title: {
      text: "2020年注册人数"
    },
    tooltip: {},
    legend: {
      data: ["人数"]
    },
    xAxis: {
      data: ["1月", "2月", "3月", "4月", "5月", "6月"]
    },
    yAxis: {},
    series: [
      {
        name: "人数",
        type: "bar",
        data: [1300, 1900, 1400, 1600, 1200, 1100]
      }
    ]
  };

  echars1.setOption(option1);

  var echars2 = echarts.init(document.querySelector(".echarts_2"));
  option2 = {
    title: {
      text: "城市人均占比",
      subtext: "2020年6月",
      x: "center"
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: "vertical",
      left: "left",
      data: ["上海", "北京", "深圳", "广州", "成都"]
    },
    series: [
      {
        name: "城市",
        type: "pie",
        radius: "50%",
        center: ["50%", "60%"],
        data: [
          { value: 335, name: "上海" },
          { value: 310, name: "北京" },
          { value: 234, name: "深圳" },
          { value: 135, name: "广州" },
          { value: 1548, name: "成都" }
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 30,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 1)"
          }
        }
      }
    ]
  };
  echars2.setOption(option2);
});
