// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    scrollText: "周庄古镇周庄古镇位于苏州城东南，昆山、吴江、上海三地交界处，是世界文化遗产预选地、首批国家5A级旅游景区。木渎古镇，别名渎川，胥江，雅称香溪，位于江苏省东南部，苏州古城西部，地处太湖流域，是江南著名的风景名胜区，素有“吴中第一镇”、“秀绝冠江南”之誉。",
    sight: {
      title: "热门景点",
      value: "查看全部",
    },
    sightCard: [
      {
        text: '景点',
        icon: 'photo-o',
      },
      {
        text: '景点',
        icon: 'photo-o',
      },
      {
        text: '景点',
        icon: 'photo-o',
      },
      {
        text: '景点',
        icon: 'photo-o',
      },
      {
        text: '景点',
        icon: 'photo-o',
      },
      {
        text: '景点',
        icon: 'photo-o',
      },
    ],
    showCard: [
      {
        title: '这是一段标题',
        desc: '这是具体需要填充的内容',
        imgUrl: '/public/imgs/showCard/img_0.jpg',
      },
      {
        title: '这是一段标题',
        desc: '这是具体需要填充的内容',
        imgUrl: '/public/imgs/showCard/img_0.jpg',
      },
      {
        title: '这是一段标题',
        desc: '这是具体需要填充的内容',
        imgUrl: '/public/imgs/showCard/img_0.jpg',
      },
      {
        title: '这是一段标题',
        desc: '这是具体需要填充的内容',
        imgUrl: '/public/imgs/showCard/img_0.jpg',
      },
      {
        title: '这是一段标题',
        desc: '这是具体需要填充的内容',
        imgUrl: '/public/imgs/showCard/img_0.jpg',
      },
      {
        title: '这是一段标题',
        desc: '这是具体需要填充的内容',
        imgUrl: '/public/imgs/showCard/img_0.jpg',
      },
    ]
  },
})
