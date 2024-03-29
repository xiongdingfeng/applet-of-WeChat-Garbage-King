// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //轮播图图片
    imgUrls: [
      '/assets/images/bg_4.jpg',
      '/assets/images/bg_4.jpg',
      '/assets/images/bg_4.jpg',
      '/assets/images/bg_4.jpg',
      '/assets/images/bg_4.jpg'
    ],
    //随机图片
    imgRandomArr: [
      '/assets/images/im1.1.jpg',
      '/assets/images/im2.1.jpg',
      '/assets/images/im3.jpg',
      '/assets/images/im4.jpg'
    ],
    randomImgUrl:'',
    //轮播图配置
    indicatorDots: true,
    indicatorColor: "rgba(255, 255, 255, .6)",
    indicatorActiveColor: "rgba(0, 178, 106, .8)",
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular: true,
    sourceData: [
      {
        "name": "阿司匹林",
        "categroy": 2
      },
      {
        "name": "阿尔卑斯糖",
        "categroy": 4
      },
      {
        "name": "艾草",
        "categroy": 4
      },
      {
        "name": "艾叶",
        "categroy": 4
      },
      {
        "name": "安全帽",
        "categroy": 1
      },
      {
        "name": "安全套",
        "categroy": 8
      },
      {
        "name": "按摩棒",
        "categroy": 8
      },
      {
        "name": "密胺碗",
        "categroy": 1
      },
      {
        "name": "密胺餐具",
        "categroy": 1
      },
      {
        "name": "档案袋",
        "categroy": 1
      },
      {
        "name": "肮脏塑料袋",
        "categroy": 8
      },
      {
        "name": "棉袄",
        "categroy": 1
      },
      {
        "name": "芭蕉叶",
        "categroy": 4
      },
      {
        "name": "八角",
        "categroy": 4
      },
      {
        "name": "八宝饭",
        "categroy": 4
      },
      {
        "name": "八宝粥",
        "categroy": 4
      },
      {
        "name": "锅巴",
        "categroy": 4
      },
      {
        "name": "泥巴",
        "categroy": 8
      },
      {
        "name": "巴旦木壳",
        "categroy": 4
      },
      {
        "name": "扫把",
        "categroy": 8
      },
      {
        "name": "拖把",
        "categroy": 8
      },
      {
        "name": "旧拖把",
        "categroy": 8
      },
      {
        "name": "浴霸灯",
        "categroy": 1
      },
      {
        "name": "浴霸灯泡",
        "categroy": 2
      },
      {
        "name": "白菜",
        "categroy": 4
      },
      {
        "name": "白纸",
        "categroy": 1
      },
      {
        "name": "百洁布",
        "categroy": 8
      },
      {
        "name": "玻璃摆件",
        "categroy": 1
      },
      {
        "name": "一般铁罐",
        "categroy": 1
      },
      {
        "name": "板栗",
        "categroy": 4
      },
      {
        "name": "复印件版纸",
        "categroy": 1
      },
      {
        "name": "干拌面",
        "categroy": 4
      },
      {
        "name": "搅拌棒",
        "categroy": 8
      },
      {
        "name": "搅拌勺",
        "categroy": 8
      },
      {
        "name": "花瓣",
        "categroy": 4
      },
      {
        "name": "衣服半成品",
        "categroy": 1
      },
      {
        "name": "手办",
        "categroy": 1
      },
      {
        "name": "蹄膀",
        "categroy": 4
      },
      {
        "name": "鸡翅膀",
        "categroy": 4
      },
      {
        "name": "蹄膀骨头",
        "categroy": 8
      },
      {
        "name": "棒骨",
        "categroy": 8
      },
      {
        "name": "胶棒",
        "categroy": 8
      },
      {
        "name": "棉棒",
        "categroy": 8
      },
      {
        "name": "蚌壳",
        "categroy": 8
      },
      {
        "name": "包包",
        "categroy": 1
      },
      {
        "name": "包子",
        "categroy": 4
      },
      {
        "name": "布包",
        "categroy": 1
      },
      {
        "name": "包装薄膜",
        "categroy": 8
      },
      {
        "name": "塑料薄膜",
        "categroy": 8
      },
      {
        "name": "薄型塑料袋",
        "categroy": 8
      },
      {
        "name": "保健品",
        "categroy": 2
      },
      {
        "name": "保龄球",
        "categroy": 8
      },
      {
        "name": "保暖杯",
        "categroy": 1
      },
      {
        "name": "汉堡",
        "categroy": 4
      },
      {
        "name": "汉堡包",
        "categroy": 4
      },
      {
        "name": "汉堡盒",
        "categroy": 8
      },
      {
        "name": "宝特瓶",
        "categroy": 1
      },
      {
        "name": "抱枕",
        "categroy": 1
      },
      {
        "name": "报刊",
        "categroy": 1
      },
      {
        "name": "报纸",
        "categroy": 1
      },
      {
        "name": "海报",
        "categroy": 1
      },
      {
        "name": "鲍鱼",
        "categroy": 8
      },
      {
        "name": "鲍鱼壳",
        "categroy": 8
      },
      {
        "name": "爆竹",
        "categroy": 8
      },
      {
        "name": "爆米花",
        "categroy": 4
      },
      {
        "name": "铁杯",
        "categroy": 1
      },
      {
        "name": "纸杯",
        "categroy": 8
      },
      {
        "name": "旧背包",
        "categroy": 1
      },
      {
        "name": "贝壳",
        "categroy": 8
      },
      {
        "name": "扇贝",
        "categroy": 8
      },
      {
        "name": "贝壳类",
        "categroy": 8
      },
      {
        "name": "电脑设备",
        "categroy": 1
      },
      {
        "name": "被单",
        "categroy": 1
      },
      {
        "name": "被套",
        "categroy": 1
      },
      {
        "name": "被芯",
        "categroy": 1
      },
      {
        "name": "本子",
        "categroy": 1
      },
      {
        "name": "绘本",
        "categroy": 1
      },
      {
        "name": "课本",
        "categroy": 1
      },
      {
        "name": "绷带",
        "categroy": 8
      },
      {
        "name": "鼻毛",
        "categroy": 8
      },
      {
        "name": "鼻屎",
        "categroy": 8
      },
      {
        "name": "鼻涕纸",
        "categroy": 8
      },
      {
        "name": "笔",
        "categroy": 8
      },
      {
        "name": "笔袋",
        "categroy": 8
      },
      {
        "name": "雪碧瓶",
        "categroy": 1
      },
      {
        "name": "碧根果壳",
        "categroy": 8
      },
      {
        "name": "冥币",
        "categroy": 8
      },
      {
        "name": "游戏币",
        "categroy": 1
      },
      {
        "name": "避孕套",
        "categroy": 8
      },
      {
        "name": "避孕药",
        "categroy": 2
      },
      {
        "name": "用过的避孕套",
        "categroy": 8
      },
      {
        "name": "鞭炮",
        "categroy": 8
      },
      {
        "name": "牛鞭",
        "categroy": 4
      },
      {
        "name": "纸张鞭炮",
        "categroy": 8
      },
      {
        "name": "编织袋",
        "categroy": 8
      },
      {
        "name": "便签",
        "categroy": 8
      },
      {
        "name": "变质食品",
        "categroy": 4
      },
      {
        "name": "变质的食物",
        "categroy": 4
      },
      {
        "name": "标签",
        "categroy": 8
      },
      {
        "name": "鼠标",
        "categroy": 1
      },
      {
        "name": "标签卡",
        "categroy": 8
      },
      {
        "name": "手表",
        "categroy": 1
      },
      {
        "name": "钟表",
        "categroy": 1
      },
      {
        "name": "电表盒",
        "categroy": 1
      },
      {
        "name": "别针",
        "categroy": 8
      },
      {
        "name": "曲别针",
        "categroy": 8
      },
      {
        "name": "瘪掉的篮球",
        "categroy": 1
      },
      {
        "name": "冰袋",
        "categroy": 8
      },
      {
        "name": "冰柜",
        "categroy": 1
      },
      {
        "name": "冰糖",
        "categroy": 4
      },
      {
        "name": "葡萄柄",
        "categroy": 4
      },
      {
        "name": "游戏手柄",
        "categroy": 1
      },
      {
        "name": "丙烯",
        "categroy": 8
      },
      {
        "name": "饼干",
        "categroy": 4
      },
      {
        "name": "大饼",
        "categroy": 4
      },
      {
        "name": "粉饼",
        "categroy": 8
      },
      {
        "name": "病人换下来的纸尿裤",
        "categroy": 8
      },
      {
        "name": "玻璃",
        "categroy": 1
      },
      {
        "name": "玻璃杯",
        "categroy": 1
      },
      {
        "name": "玻璃尺",
        "categroy": 1
      },
      {
        "name": "菠菜",
        "categroy": 4
      },
      {
        "name": "菠萝",
        "categroy": 4
      },
      {
        "name": "菠萝干",
        "categroy": 4
      },
      {
        "name": "数字音乐播放器",
        "categroy": 1
      },
      {
        "name": "微波炉",
        "categroy": 1
      },
      {
        "name": "铂金纸",
        "categroy": 8
      },
      {
        "name": "铝箔",
        "categroy": 1
      },
      {
        "name": "鋁箔",
        "categroy": 1
      },
      {
        "name": "锡箔",
        "categroy": 8
      },
      {
        "name": "鸭脖",
        "categroy": 4
      },
      {
        "name": "鸭脖子",
        "categroy": 4
      },
      {
        "name": "捕蚊灯",
        "categroy": 1
      },
      {
        "name": "萝卜",
        "categroy": 4
      },
      {
        "name": "胡萝卜",
        "categroy": 4
      },
      {
        "name": "萝卜干",
        "categroy": 4
      },
      {
        "name": "不锈钢",
        "categroy": 1
      },
      {
        "name": "不粘锅",
        "categroy": 1
      },
      {
        "name": "尿不湿",
        "categroy": 8
      },
      {
        "name": "布",
        "categroy": 1
      },
      {
        "name": "布袋",
        "categroy": 1
      },
      {
        "name": "电话簿",
        "categroy": 1
      },
      {
        "name": "板擦儿",
        "categroy": 8
      },
      {
        "name": "擦屎纸",
        "categroy": 8
      },
      {
        "name": "擦手巾",
        "categroy": 8
      },
      {
        "name": "药材",
        "categroy": 4
      },
      {
        "name": "彩笔",
        "categroy": 8
      },
      {
        "name": "彩电",
        "categroy": 1
      },
      {
        "name": "彩票",
        "categroy": 8
      },
      {
        "name": "菜",
        "categroy": 4
      },
      {
        "name": "餐盒",
        "categroy": 8
      },
      {
        "name": "餐巾",
        "categroy": 8
      },
      {
        "name": "餐纸",
        "categroy": 8
      },
      {
        "name": "西洋参",
        "categroy": 4
      },
      {
        "name": "蚕丝",
        "categroy": 1
      },
      {
        "name": "蚕豆壳",
        "categroy": 4
      },
      {
        "name": "残羹",
        "categroy": 4
      },
      {
        "name": "残花",
        "categroy": 4
      },
      {
        "name": "残枝",
        "categroy": 4
      },
      {
        "name": "苍蝇",
        "categroy": 4
      },
      {
        "name": "苍蝇拍",
        "categroy": 8
      },
      {
        "name": "草",
        "categroy": 4
      },
      {
        "name": "草莓",
        "categroy": 4
      },
      {
        "name": "厕纸",
        "categroy": 8
      },
      {
        "name": "厕所纸",
        "categroy": 8
      },
      {
        "name": "手册",
        "categroy": 1
      },
      {
        "name": "相册",
        "categroy": 8
      },
      {
        "name": "宣传册",
        "categroy": 1
      },
      {
        "name": "插排",
        "categroy": 1
      },
      {
        "name": "插头",
        "categroy": 1
      },
      {
        "name": "插座",
        "categroy": 1
      },
      {
        "name": "叉子",
        "categroy": 1
      },
      {
        "name": "塑料叉子",
        "categroy": 8
      },
      {
        "name": "一次性叉子",
        "categroy": 8
      },
      {
        "name": "茶",
        "categroy": 4
      },
      {
        "name": "茶包",
        "categroy": 8
      },
      {
        "name": "茶袋",
        "categroy": 8
      },
      {
        "name": "搽鼻涕纸",
        "categroy": 8
      },
      {
        "name": "火柴",
        "categroy": 8
      },
      {
        "name": "硅胶铲",
        "categroy": 8
      },
      {
        "name": "木铲板",
        "categroy": 1
      },
      {
        "name": "电器产品",
        "categroy": 1
      },
      {
        "name": "电子产品",
        "categroy": 1
      },
      {
        "name": "水产类弃物",
        "categroy": 4
      },
      {
        "name": "常温牛奶盒",
        "categroy": 1
      },
      {
        "name": "常温牛奶盒子",
        "categroy": 1
      },
      {
        "name": "平常喝的茶叶",
        "categroy": 4
      },
      {
        "name": "长靴",
        "categroy": 1
      },
      {
        "name": "长毛绒",
        "categroy": 1
      },
      {
        "name": "长生果",
        "categroy": 4
      },
      {
        "name": "红肠",
        "categroy": 4
      },
      {
        "name": "香肠",
        "categroy": 4
      },
      {
        "name": "鱼肠",
        "categroy": 4
      },
      {
        "name": "唱片",
        "categroy": 8
      },
      {
        "name": "黑胶唱片",
        "categroy": 8
      },
      {
        "name": "超能胶",
        "categroy": 8
      },
      {
        "name": "手抄报",
        "categroy": 8
      },
      {
        "name": "点钞机",
        "categroy": 1
      },
      {
        "name": "过朝食品",
        "categroy": 4
      },
      {
        "name": "防潮盒",
        "categroy": 1
      },
      {
        "name": "防潮剂",
        "categroy": 8
      },
      {
        "name": "吸潮剂",
        "categroy": 8
      },
      {
        "name": "炒面",
        "categroy": 4
      },
      {
        "name": "炒板栗",
        "categroy": 4
      },
      {
        "name": "炒花生壳",
        "categroy": 4
      },
      {
        "name": "尘土",
        "categroy": 8
      },
      {
        "name": "灰尘",
        "categroy": 8
      },
      {
        "name": "陈皮",
        "categroy": 4
      },
      {
        "name": "衬衫",
        "categroy": 1
      },
      {
        "name": "衬衣",
        "categroy": 1
      },
      {
        "name": "橙",
        "categroy": 4
      },
      {
        "name": "橙皮",
        "categroy": 4
      },
      {
        "name": "橙子",
        "categroy": 4
      },
      {
        "name": "中成药",
        "categroy": 2
      },
      {
        "name": "成人尿布",
        "categroy": 8
      },
      {
        "name": "集成电路板",
        "categroy": 1
      },
      {
        "name": "体重秤",
        "categroy": 1
      },
      {
        "name": "吃过的甘蔗",
        "categroy": 4
      },
      {
        "name": "吃剩的快餐",
        "categroy": 4
      },
      {
        "name": "吃过的棒棒糖",
        "categroy": 8
      },
      {
        "name": "钥匙",
        "categroy": 1
      },
      {
        "name": "车钥匙",
        "categroy": 8
      },
      {
        "name": "金属汤匙",
        "categroy": 1
      },
      {
        "name": "電池",
        "categroy": 2
      },
      {
        "name": "蓄电池",
        "categroy": 2
      },
      {
        "name": "充电电池",
        "categroy": 2
      },
      {
        "name": "齿轮",
        "categroy": 1
      },
      {
        "name": "牙齿",
        "categroy": 8
      },
      {
        "name": "掉下来的牙齿",
        "categroy": 8
      },
      {
        "name": "尺",
        "categroy": 8
      },
      {
        "name": "尺子",
        "categroy": 1
      },
      {
        "name": "铁尺",
        "categroy": 1
      },
      {
        "name": "鸡翅",
        "categroy": 4
      },
      {
        "name": "鸡翅骨头",
        "categroy": 4
      },
      {
        "name": "白炽灯",
        "categroy": 2
      },
      {
        "name": "白炽灯泡",
        "categroy": 2
      },
      {
        "name": "充电宝",
        "categroy": 1
      },
      {
        "name": "充电器",
        "categroy": 1
      },
      {
        "name": "充电线",
        "categroy": 1
      },
      {
        "name": "冲泡饮料",
        "categroy": 4
      },
      {
        "name": "虫",
        "categroy": 4
      },
      {
        "name": "虫子",
        "categroy": 4
      },
      {
        "name": "米虫",
        "categroy": 4
      },
      {
        "name": "宠物毛",
        "categroy": 8
      },
      {
        "name": "抽纸",
        "categroy": 8
      },
      {
        "name": "绸带",
        "categroy": 1
      },
      {
        "name": "丝绸制品",
        "categroy": 1
      },
      {
        "name": "臭豆腐",
        "categroy": 4
      },
      {
        "name": "臭鸡蛋",
        "categroy": 4
      },
      {
        "name": "臭袜子",
        "categroy": 8
      },
      {
        "name": "打印出来的纸",
        "categroy": 1
      },
      {
        "name": "厨余",
        "categroy": 4
      },
      {
        "name": "厨房纸",
        "categroy": 8
      },
      {
        "name": "厨房垃圾",
        "categroy": 4
      },
      {
        "name": "除草剂",
        "categroy": 2
      },
      {
        "name": "除湿盒",
        "categroy": 1
      },
      {
        "name": "除湿机",
        "categroy": 1
      },
      {
        "name": "传单",
        "categroy": 1
      },
      {
        "name": "传真机",
        "categroy": 1
      },
      {
        "name": "传真纸",
        "categroy": 1
      },
      {
        "name": "手串",
        "categroy": 8
      },
      {
        "name": "窗帘",
        "categroy": 1
      },
      {
        "name": "窗纱",
        "categroy": 8
      },
      {
        "name": "床单",
        "categroy": 1
      },
      {
        "name": "创可贴",
        "categroy": 8
      },
      {
        "name": "创口贴",
        "categroy": 8
      },
      {
        "name": "用的创可贴",
        "categroy": 8
      },
      {
        "name": "吹风机",
        "categroy": 1
      },
      {
        "name": "电吹风",
        "categroy": 1
      },
      {
        "name": "锤子",
        "categroy": 1
      },
      {
        "name": "铁锤",
        "categroy": 1
      },
      {
        "name": "春梅",
        "categroy": 4
      },
      {
        "name": "唇膏",
        "categroy": 8
      },
      {
        "name": "润唇膏",
        "categroy": 8
      },
      {
        "name": "磁带",
        "categroy": 8
      },
      {
        "name": "磁卡",
        "categroy": 8
      },
      {
        "name": "磁铁",
        "categroy": 1
      },
      {
        "name": "瓷片",
        "categroy": 8
      },
      {
        "name": "瓷器",
        "categroy": 8
      },
      {
        "name": "瓷碗",
        "categroy": 8
      },
      {
        "name": "鱼刺",
        "categroy": 4
      },
      {
        "name": "一次性碗",
        "categroy": 8
      },
      {
        "name": "一次塑料杯",
        "categroy": 8
      },
      {
        "name": "一次性杯子",
        "categroy": 8
      },
      {
        "name": "葱",
        "categroy": 4
      },
      {
        "name": "葱蒜",
        "categroy": 4
      },
      {
        "name": "大葱",
        "categroy": 4
      },
      {
        "name": "醋瓶",
        "categroy": 1
      },
      {
        "name": "脆骨",
        "categroy": 4
      },
      {
        "name": "水果脆",
        "categroy": 4
      },
      {
        "name": "内存条",
        "categroy": 1
      },
      {
        "name": "3.5英寸软盘",
        "categroy": 8
      },
      {
        "name": "打包袋",
        "categroy": 8
      },
      {
        "name": "打包盒",
        "categroy": 8
      },
      {
        "name": "打底裤",
        "categroy": 1
      },
      {
        "name": "担担面",
        "categroy": 4
      },
      {
        "name": "鸡毛掸",
        "categroy": 8
      },
      {
        "name": "鸡毛掸子",
        "categroy": 8
      },
      {
        "name": "海胆",
        "categroy": 4
      },
      {
        "name": "海胆壳",
        "categroy": 8
      },
      {
        "name": "鸡旦壳",
        "categroy": 4
      },
      {
        "name": "淡菜",
        "categroy": 4
      },
      {
        "name": "弹簧",
        "categroy": 1
      },
      {
        "name": "子弹",
        "categroy": 8
      },
      {
        "name": "蛋",
        "categroy": 4
      },
      {
        "name": "蛋糕",
        "categroy": 4
      },
      {
        "name": "蛋黄",
        "categroy": 4
      },
      {
        "name": "麦当劳纸袋",
        "categroy": 1
      },
      {
        "name": "刀片",
        "categroy": 1
      },
      {
        "name": "飞刀",
        "categroy": 1
      },
      {
        "name": "剪刀",
        "categroy": 1
      },
      {
        "name": "导线",
        "categroy": 1
      },
      {
        "name": "塑料管道",
        "categroy": 1
      },
      {
        "name": "拍立得",
        "categroy": 1
      },
      {
        "name": "的确良",
        "categroy": 1
      },
      {
        "name": "破的碗",
        "categroy": 8
      },
      {
        "name": "贝壳的肉",
        "categroy": 4
      },
      {
        "name": "灯管",
        "categroy": 2
      },
      {
        "name": "灯泡",
        "categroy": 2
      },
      {
        "name": "登山杖",
        "categroy": 1
      },
      {
        "name": "低温牛奶盒子",
        "categroy": 1
      },
      {
        "name": "竹笛",
        "categroy": 8
      },
      {
        "name": "底片",
        "categroy": 8
      },
      {
        "name": "粉底",
        "categroy": 8
      },
      {
        "name": "地毯",
        "categroy": 1
      },
      {
        "name": "烟蒂",
        "categroy": 8
      },
      {
        "name": "香烟蒂",
        "categroy": 8
      },
      {
        "name": "抽完的烟蒂",
        "categroy": 8
      },
      {
        "name": "快递袋",
        "categroy": 8
      },
      {
        "name": "快递盒",
        "categroy": 1
      },
      {
        "name": "快递箱",
        "categroy": 1
      },
      {
        "name": "糕点",
        "categroy": 4
      },
      {
        "name": "早点盒",
        "categroy": 8
      },
      {
        "name": "垫子",
        "categroy": 1
      },
      {
        "name": "护垫",
        "categroy": 8
      },
      {
        "name": "电灯",
        "categroy": 1
      },
      {
        "name": "电锅",
        "categroy": 1
      },
      {
        "name": "淀粉",
        "categroy": 4
      },
      {
        "name": "木雕",
        "categroy": 1
      },
      {
        "name": "掉落的头发",
        "categroy": 8
      },
      {
        "name": "吊牌",
        "categroy": 8
      },
      {
        "name": "衣服吊牌",
        "categroy": 8
      },
      {
        "name": "钓鱼竿",
        "categroy": 8
      },
      {
        "name": "钓鱼钩",
        "categroy": 8
      },
      {
        "name": "钓鱼线",
        "categroy": 8
      },
      {
        "name": "空调",
        "categroy": 1
      },
      {
        "name": "空调机",
        "categroy": 1
      },
      {
        "name": "空调扇",
        "categroy": 1
      },
      {
        "name": "碟片",
        "categroy": 8
      },
      {
        "name": "光碟",
        "categroy": 8
      },
      {
        "name": "碗碟",
        "categroy": 8
      },
      {
        "name": "丁字裤",
        "categroy": 8
      },
      {
        "name": "铁钉",
        "categroy": 1
      },
      {
        "name": "图钉",
        "categroy": 8
      },
      {
        "name": "洋钉",
        "categroy": 1
      },
      {
        "name": "机顶盒",
        "categroy": 1
      },
      {
        "name": "吸顶灯",
        "categroy": 2
      },
      {
        "name": "电视机顶盒",
        "categroy": 1
      },
      {
        "name": "订书钉",
        "categroy": 8
      },
      {
        "name": "订书机",
        "categroy": 1
      },
      {
        "name": "订书针",
        "categroy": 8
      },
      {
        "name": "冬瓜",
        "categroy": 4
      },
      {
        "name": "冬笋壳",
        "categroy": 4
      },
      {
        "name": "冬枣核",
        "categroy": 4
      },
      {
        "name": "动物毛",
        "categroy": 8
      },
      {
        "name": "果冻",
        "categroy": 4
      },
      {
        "name": "果冻盒",
        "categroy": 8
      },
      {
        "name": "冷冻食品",
        "categroy": 4
      },
      {
        "name": "电熨斗",
        "categroy": 1
      },
      {
        "name": "水斗漏网",
        "categroy": 8
      },
      {
        "name": "大豆",
        "categroy": 4
      },
      {
        "name": "豆腐",
        "categroy": 4
      },
      {
        "name": "豆类",
        "categroy": 4
      },
      {
        "name": "毒鼠强",
        "categroy": 2
      },
      {
        "name": "杀毒剂",
        "categroy": 2
      },
      {
        "name": "消毒药片",
        "categroy": 2
      },
      {
        "name": "电子书阅读器",
        "categroy": 1
      },
      {
        "name": "杜蕾斯",
        "categroy": 8
      },
      {
        "name": "温度计",
        "categroy": 2
      },
      {
        "name": "废温度计",
        "categroy": 2
      },
      {
        "name": "电子温度计",
        "categroy": 1
      },
      {
        "name": "短裤",
        "categroy": 8
      },
      {
        "name": "缎带",
        "categroy": 1
      },
      {
        "name": "多肉",
        "categroy": 4
      },
      {
        "name": "多肉植物",
        "categroy": 4
      },
      {
        "name": "养乐多瓶",
        "categroy": 1
      },
      {
        "name": "花朵",
        "categroy": 4
      },
      {
        "name": "鹅",
        "categroy": 4
      },
      {
        "name": "儿童玩具",
        "categroy": 1
      },
      {
        "name": "婴儿尿布",
        "categroy": 8
      },
      {
        "name": "耳环",
        "categroy": 1
      },
      {
        "name": "耳机",
        "categroy": 1
      },
      {
        "name": "耳屎",
        "categroy": 8
      },
      {
        "name": "二手衣物",
        "categroy": 1
      },
      {
        "name": "发胶",
        "categroy": 8
      },
      {
        "name": "发蜡",
        "categroy": 8
      },
      {
        "name": "发票",
        "categroy": 8
      },
      {
        "name": "盐酸伐昔洛韦片",
        "categroy": 2
      },
      {
        "name": "书法纸",
        "categroy": 1
      },
      {
        "name": "帆布包",
        "categroy": 1
      },
      {
        "name": "番茄",
        "categroy": 4
      },
      {
        "name": "番薯",
        "categroy": 4
      },
      {
        "name": "番茄酱",
        "categroy": 4
      },
      {
        "name": "饭",
        "categroy": 4
      },
      {
        "name": "菜饭",
        "categroy": 4
      },
      {
        "name": "饭菜",
        "categroy": 4
      },
      {
        "name": "魔方",
        "categroy": 8
      },
      {
        "name": "方便筷",
        "categroy": 8
      },
      {
        "name": "方便面",
        "categroy": 4
      },
      {
        "name": "防腐剂",
        "categroy": 8
      },
      {
        "name": "纺织布",
        "categroy": 1
      },
      {
        "name": "纺织品",
        "categroy": 1
      },
      {
        "name": "纺织物",
        "categroy": 1
      },
      {
        "name": "放大镜",
        "categroy": 1
      },
      {
        "name": "录放机",
        "categroy": 1
      },
      {
        "name": "咖啡",
        "categroy": 4
      },
      {
        "name": "咖啡包",
        "categroy": 4
      },
      {
        "name": "咖啡袋",
        "categroy": 8
      },
      {
        "name": "飞机杯",
        "categroy": 8
      },
      {
        "name": "肥料",
        "categroy": 8
      },
      {
        "name": "肥皂",
        "categroy": 8
      },
      {
        "name": "花肥",
        "categroy": 8
      },
      {
        "name": "夫妻肺片",
        "categroy": 4
      },
      {
        "name": "废铝",
        "categroy": 1
      },
      {
        "name": "废书",
        "categroy": 1
      },
      {
        "name": "废铁",
        "categroy": 1
      },
      {
        "name": "电费账单",
        "categroy": 1
      },
      {
        "name": "粉笔",
        "categroy": 8
      },
      {
        "name": "信封",
        "categroy": 1
      },
      {
        "name": "封箱带",
        "categroy": 8
      },
      {
        "name": "密封袋",
        "categroy": 8
      },
      {
        "name": "蜂蜜罐",
        "categroy": 1
      },
      {
        "name": "风扇",
        "categroy": 1
      },
      {
        "name": "风衣",
        "categroy": 1
      },
      {
        "name": "风筝",
        "categroy": 8
      },
      {
        "name": "缝纫针",
        "categroy": 8
      },
      {
        "name": "敷料",
        "categroy": 8
      },
      {
        "name": "护肤品",
        "categroy": 8
      },
      {
        "name": "润肤霜",
        "categroy": 1
      },
      {
        "name": "护肤霜瓶",
        "categroy": 1
      },
      {
        "name": "服装",
        "categroy": 1
      },
      {
        "name": "衣服",
        "categroy": 1
      },
      {
        "name": "废衣服",
        "categroy": 1
      },
      {
        "name": "腐肉",
        "categroy": 4
      },
      {
        "name": "复写纸",
        "categroy": 8
      },
      {
        "name": "复印机",
        "categroy": 1
      },
      {
        "name": "复印纸",
        "categroy": 1
      },
      {
        "name": "富贵竹",
        "categroy": 4
      },
      {
        "name": "高附加值可回收物",
        "categroy": 1
      },
      {
        "name": "咖啡纸杯(内表面附塑料膜)",
        "categroy": 8
      },
      {
        "name": "涂改笔",
        "categroy": 8
      },
      {
        "name": "氯化钙除湿剂",
        "categroy": 8
      },
      {
        "name": "笔盖",
        "categroy": 8
      },
      {
        "name": "锅盖",
        "categroy": 8
      },
      {
        "name": "铝盖",
        "categroy": 1
      },
      {
        "name": "干果",
        "categroy": 4
      },
      {
        "name": "干花",
        "categroy": 4
      },
      {
        "name": "甘蔗",
        "categroy": 4
      },
      {
        "name": "甘蔗皮",
        "categroy": 8
      },
      {
        "name": "甘蔗渣",
        "categroy": 4
      },
      {
        "name": "笔杆",
        "categroy": 8
      },
      {
        "name": "晾衣杆",
        "categroy": 1
      },
      {
        "name": "桔柑",
        "categroy": 4
      },
      {
        "name": "竹竿",
        "categroy": 8
      },
      {
        "name": "鸡肝",
        "categroy": 4
      },
      {
        "name": "感光片",
        "categroy": 2
      },
      {
        "name": "感冒药",
        "categroy": 2
      },
      {
        "name": "感光胶片",
        "categroy": 2
      },
      {
        "name": "麦秆",
        "categroy": 4
      },
      {
        "name": "钢笔",
        "categroy": 8
      },
      {
        "name": "烟缸",
        "categroy": 1
      },
      {
        "name": "鱼缸",
        "categroy": 1
      },
      {
        "name": "高粱",
        "categroy": 4
      },
      {
        "name": "乐高",
        "categroy": 1
      },
      {
        "name": "高跟鞋",
        "categroy": 1
      },
      {
        "name": "石膏",
        "categroy": 8
      },
      {
        "name": "牙膏",
        "categroy": 8
      },
      {
        "name": "糕饼",
        "categroy": 4
      },
      {
        "name": "草稿纸",
        "categroy": 1
      },
      {
        "name": "写过的草稿纸",
        "categroy": 1
      },
      {
        "name": "广告单",
        "categroy": 1
      },
      {
        "name": "广告纸",
        "categroy": 1
      },
      {
        "name": "小广告",
        "categroy": 1
      },
      {
        "name": "大哥大",
        "categroy": 1
      },
      {
        "name": "鸽子",
        "categroy": 4
      },
      {
        "name": "皮革",
        "categroy": 1
      },
      {
        "name": "旧包皮革",
        "categroy": 1
      },
      {
        "name": "皮革制品",
        "categroy": 1
      },
      {
        "name": "蛤蜊",
        "categroy": 8
      },
      {
        "name": "蛤蟆",
        "categroy": 4
      },
      {
        "name": "花蛤",
        "categroy": 8
      },
      {
        "name": "隔离霜",
        "categroy": 8
      },
      {
        "name": "隔夜菜",
        "categroy": 4
      },
      {
        "name": "个人计算机",
        "categroy": 1
      },
      {
        "name": "各式皮包",
        "categroy": 1
      },
      {
        "name": "各类刀、刀片",
        "categroy": 1
      },
      {
        "name": "各类过期食品",
        "categroy": 4
      },
      {
        "name": "菜根",
        "categroy": 4
      },
      {
        "name": "树根",
        "categroy": 4
      },
      {
        "name": "菜梗",
        "categroy": 4
      },
      {
        "name": "桔梗",
        "categroy": 4
      },
      {
        "name": "菜梗菜叶",
        "categroy": 4
      },
      {
        "name": "工资卡",
        "categroy": 1
      },
      {
        "name": "美工刀",
        "categroy": 1
      },
      {
        "name": "公仔",
        "categroy": 1
      },
      {
        "name": "公交卡",
        "categroy": 1
      },
      {
        "name": "含汞体温计",
        "categroy": 2
      },
      {
        "name": "含汞温度计",
        "categroy": 2
      },
      {
        "name": "含汞血压计",
        "categroy": 2
      },
      {
        "name": "铁钩",
        "categroy": 1
      },
      {
        "name": "勾线笔",
        "categroy": 8
      },
      {
        "name": "水垢",
        "categroy": 8
      },
      {
        "name": "购物纸袋",
        "categroy": 1
      },
      {
        "name": "塑料购物袋",
        "categroy": 8
      },
      {
        "name": "纸质购物袋",
        "categroy": 1
      },
      {
        "name": "菌菇",
        "categroy": 4
      },
      {
        "name": "蘑菇",
        "categroy": 4
      },
      {
        "name": "香菇",
        "categroy": 4
      },
      {
        "name": "晒鼓墨盒",
        "categroy": 1
      },
      {
        "name": "古筝",
        "categroy": 1
      },
      {
        "name": "大骨",
        "categroy": 8
      },
      {
        "name": "谷物",
        "categroy": 4
      },
      {
        "name": "鸡屁股",
        "categroy": 4
      },
      {
        "name": "鸭屁股",
        "categroy": 4
      },
      {
        "name": "烟屁股",
        "categroy": 8
      },
      {
        "name": "固体胶",
        "categroy": 8
      },
      {
        "name": "雨刮器",
        "categroy": 8
      },
      {
        "name": "刮胡子刀片",
        "categroy": 1
      },
      {
        "name": "汽车雨刮器",
        "categroy": 8
      },
      {
        "name": "瓜",
        "categroy": 4
      },
      {
        "name": "瓜果",
        "categroy": 4
      },
      {
        "name": "挂历",
        "categroy": 1
      },
      {
        "name": "挂钟",
        "categroy": 1
      },
      {
        "name": "挂号纸",
        "categroy": 1
      },
      {
        "name": "铝管",
        "categroy": 1
      },
      {
        "name": "吸管",
        "categroy": 8
      },
      {
        "name": "罐头",
        "categroy": 1
      },
      {
        "name": "铝罐",
        "categroy": 1
      },
      {
        "name": "陶罐",
        "categroy": 8
      },
      {
        "name": "光盘",
        "categroy": 8
      },
      {
        "name": "光驱",
        "categroy": 1
      },
      {
        "name": "玫瑰",
        "categroy": 4
      },
      {
        "name": "玫瑰花",
        "categroy": 4
      },
      {
        "name": "干枯玫瑰花",
        "categroy": 4
      },
      {
        "name": "硅胶",
        "categroy": 8
      },
      {
        "name": "乌龟壳",
        "categroy": 8
      },
      {
        "name": "桂圆",
        "categroy": 4
      },
      {
        "name": "桂圆核",
        "categroy": 4
      },
      {
        "name": "桂圆壳",
        "categroy": 4
      },
      {
        "name": "铁棍",
        "categroy": 1
      },
      {
        "name": "冰棍棒",
        "categroy": 8
      },
      {
        "name": "糖葫芦棍",
        "categroy": 8
      },
      {
        "name": "锅",
        "categroy": 1
      },
      {
        "name": "过滤盒",
        "categroy": 8
      },
      {
        "name": "过滤器",
        "categroy": 8
      },
      {
        "name": "哈密瓜皮",
        "categroy": 4
      },
      {
        "name": "孩子尿片",
        "categroy": 8
      },
      {
        "name": "小孩尿布",
        "categroy": 8
      },
      {
        "name": "海带",
        "categroy": 4
      },
      {
        "name": "有害垃圾",
        "categroy": 2
      },
      {
        "name": "含油抹布",
        "categroy": 8
      },
      {
        "name": "焊丝",
        "categroy": 1
      },
      {
        "name": "汗衫",
        "categroy": 1
      },
      {
        "name": "记号笔",
        "categroy": 8
      },
      {
        "name": "取号纸",
        "categroy": 8
      },
      {
        "name": "喝过的茶叶",
        "categroy": 4
      },
      {
        "name": "喝完的药瓶",
        "categroy": 2
      },
      {
        "name": "喝过的茶叶渣",
        "categroy": 4
      },
      {
        "name": "荷包蛋",
        "categroy": 4
      },
      {
        "name": "果核",
        "categroy": 4
      },
      {
        "name": "梨核",
        "categroy": 4
      },
      {
        "name": "桃核",
        "categroy": 4
      },
      {
        "name": "糖和藕粉",
        "categroy": 4
      },
      {
        "name": "铝合金",
        "categroy": 1
      },
      {
        "name": "复合包装",
        "categroy": 8
      },
      {
        "name": "合金玩具",
        "categroy": 1
      },
      {
        "name": "笔盒",
        "categroy": 1
      },
      {
        "name": "饭盒",
        "categroy": 8
      },
      {
        "name": "河豚",
        "categroy": 4
      },
      {
        "name": "贺卡",
        "categroy": 1
      },
      {
        "name": "黑豆",
        "categroy": 4
      },
      {
        "name": "黑猪",
        "categroy": 4
      },
      {
        "name": "烘干机",
        "categroy": 1
      },
      {
        "name": "烘手器",
        "categroy": 1
      },
      {
        "name": "红笔",
        "categroy": 8
      },
      {
        "name": "红薯",
        "categroy": 4
      },
      {
        "name": "猕猴桃",
        "categroy": 4
      },
      {
        "name": "厚纸板",
        "categroy": 1
      },
      {
        "name": "厚塑料袋",
        "categroy": 8
      },
      {
        "name": "厚型塑料袋",
        "categroy": 8
      },
      {
        "name": "粉碎后的打印纸",
        "categroy": 8
      },
      {
        "name": "洗净后的牛奶盒",
        "categroy": 1
      },
      {
        "name": "打印后的彩色照片",
        "categroy": 2
      },
      {
        "name": "呼叫器",
        "categroy": 1
      },
      {
        "name": "珊瑚",
        "categroy": 8
      },
      {
        "name": "茶壶",
        "categroy": 8
      },
      {
        "name": "油壶",
        "categroy": 1
      },
      {
        "name": "玻璃壶",
        "categroy": 1
      },
      {
        "name": "胡子",
        "categroy": 8
      },
      {
        "name": "胡椒粉",
        "categroy": 4
      },
      {
        "name": "浆糊",
        "categroy": 8
      },
      {
        "name": "虎牙",
        "categroy": 8
      },
      {
        "name": "护目镜",
        "categroy": 8
      },
      {
        "name": "花",
        "categroy": 4
      },
      {
        "name": "菜花",
        "categroy": 4
      },
      {
        "name": "华为手机",
        "categroy": 1
      },
      {
        "name": "金华火腿",
        "categroy": 4
      },
      {
        "name": "精华液瓶",
        "categroy": 1
      },
      {
        "name": "防滑垫",
        "categroy": 1
      },
      {
        "name": "润滑剂",
        "categroy": 8
      },
      {
        "name": "润滑油",
        "categroy": 8
      },
      {
        "name": "画笔",
        "categroy": 8
      },
      {
        "name": "画纸",
        "categroy": 1
      },
      {
        "name": "胶画",
        "categroy": 8
      },
      {
        "name": "绿化",
        "categroy": 4
      },
      {
        "name": "钢化膜",
        "categroy": 8
      },
      {
        "name": "电话",
        "categroy": 1
      },
      {
        "name": "话梅",
        "categroy": 4
      },
      {
        "name": "话筒",
        "categroy": 1
      },
      {
        "name": "坏发卡",
        "categroy": 8
      },
      {
        "name": "坏钢笔",
        "categroy": 8
      },
      {
        "name": "手环",
        "categroy": 8
      },
      {
        "name": "环保袋",
        "categroy": 1
      },
      {
        "name": "黄豆",
        "categroy": 4
      },
      {
        "name": "黄瓜",
        "categroy": 4
      },
      {
        "name": "灰",
        "categroy": 8
      },
      {
        "name": "徽章",
        "categroy": 8
      },
      {
        "name": "回收物",
        "categroy": 1
      },
      {
        "name": "回形针",
        "categroy": 8
      },
      {
        "name": "可回收",
        "categroy": 1
      },
      {
        "name": "花卉",
        "categroy": 4
      },
      {
        "name": "花卉绿植",
        "categroy": 4
      },
      {
        "name": "花卉植物",
        "categroy": 4
      },
      {
        "name": "会员卡",
        "categroy": 1
      },
      {
        "name": "婚戒",
        "categroy": 1
      },
      {
        "name": "结婚证书",
        "categroy": 1
      },
      {
        "name": "活性炭",
        "categroy": 8
      },
      {
        "name": "活性炭滤芯",
        "categroy": 8
      },
      {
        "name": "火锅",
        "categroy": 4
      },
      {
        "name": "干货",
        "categroy": 4
      },
      {
        "name": "干垃圾",
        "categroy": 8
      },
      {
        "name": "干拉圾",
        "categroy": 8
      },
      {
        "name": "垃圾袋",
        "categroy": 8
      },
      {
        "name": "火机",
        "categroy": 8
      },
      {
        "name": "积木",
        "categroy": 1
      },
      {
        "name": "木积木",
        "categroy": 1
      },
      {
        "name": "塑料积木",
        "categroy": 1
      },
      {
        "name": "冰激淋",
        "categroy": 4
      },
      {
        "name": "冰激凌",
        "categroy": 4
      },
      {
        "name": "冰激凌木棒",
        "categroy": 8
      },
      {
        "name": "鸡",
        "categroy": 4
      },
      {
        "name": "鸡蛋",
        "categroy": 4
      },
      {
        "name": "书籍",
        "categroy": 1
      },
      {
        "name": "水产及其加工食品",
        "categroy": 4
      },
      {
        "name": "食物残渣及宠物饲料",
        "categroy": 4
      },
      {
        "name": "急支糖浆",
        "categroy": 2
      },
      {
        "name": "月季",
        "categroy": 4
      },
      {
        "name": "药剂",
        "categroy": 2
      },
      {
        "name": "除湿剂",
        "categroy": 8
      },
      {
        "name": "计算机",
        "categroy": 1
      },
      {
        "name": "计算器",
        "categroy": 1
      },
      {
        "name": "体温计",
        "categroy": 2
      },
      {
        "name": "笔记本",
        "categroy": 1
      },
      {
        "name": "笔记本纸",
        "categroy": 1
      },
      {
        "name": "夹克",
        "categroy": 1
      },
      {
        "name": "衣夹",
        "categroy": 8
      },
      {
        "name": "马夹袋",
        "categroy": 8
      },
      {
        "name": "家电",
        "categroy": 1
      },
      {
        "name": "废家电",
        "categroy": 1
      },
      {
        "name": "加湿器",
        "categroy": 1
      },
      {
        "name": "加工类食品",
        "categroy": 4
      },
      {
        "name": "肉蛋加工食品",
        "categroy": 4
      },
      {
        "name": "花甲",
        "categroy": 8
      },
      {
        "name": "甲油",
        "categroy": 2
      },
      {
        "name": "甲鱼",
        "categroy": 4
      },
      {
        "name": "高铁酸钾",
        "categroy": 2
      },
      {
        "name": "假发",
        "categroy": 8
      },
      {
        "name": "假牙",
        "categroy": 8
      },
      {
        "name": "假发套",
        "categroy": 8
      },
      {
        "name": "铁架",
        "categroy": 1
      },
      {
        "name": "坚果",
        "categroy": 8
      },
      {
        "name": "坚果壳",
        "categroy": 8
      },
      {
        "name": "坚果果壳",
        "categroy": 8
      },
      {
        "name": "卫生间纸",
        "categroy": 8
      },
      {
        "name": "打印间碎纸",
        "categroy": 1
      },
      {
        "name": "卫生间废纸",
        "categroy": 8
      },
      {
        "name": "煎鍋",
        "categroy": 1
      },
      {
        "name": "生煎",
        "categroy": 4
      },
      {
        "name": "生煎包",
        "categroy": 4
      },
      {
        "name": "碱性无汞电池",
        "categroy": 8
      },
      {
        "name": "剪纸",
        "categroy": 8
      },
      {
        "name": "剪子",
        "categroy": 1
      },
      {
        "name": "键盘",
        "categroy": 1
      },
      {
        "name": "废键盘",
        "categroy": 1
      },
      {
        "name": "文件袋",
        "categroy": 8
      },
      {
        "name": "文件夹",
        "categroy": 1
      },
      {
        "name": "过期保健品",
        "categroy": 2
      },
      {
        "name": "蜜饯",
        "categroy": 4
      },
      {
        "name": "姜",
        "categroy": 4
      },
      {
        "name": "生姜",
        "categroy": 4
      },
      {
        "name": "麻将牌",
        "categroy": 8
      },
      {
        "name": "麻将台",
        "categroy": 1
      },
      {
        "name": "豆浆袋",
        "categroy": 8
      },
      {
        "name": "豆浆袋子",
        "categroy": 8
      },
      {
        "name": "果酱",
        "categroy": 4
      },
      {
        "name": "酱料",
        "categroy": 4
      },
      {
        "name": "酱汁",
        "categroy": 4
      },
      {
        "name": "可降解塑料",
        "categroy": 1
      },
      {
        "name": "可降解垃圾袋",
        "categroy": 8
      },
      {
        "name": "可降解塑料袋",
        "categroy": 8
      },
      {
        "name": "香蕉",
        "categroy": 4
      },
      {
        "name": "烂香蕉",
        "categroy": 4
      },
      {
        "name": "菜椒",
        "categroy": 4
      },
      {
        "name": "花椒",
        "categroy": 4
      },
      {
        "name": "辣椒",
        "categroy": 4
      },
      {
        "name": "交通卡",
        "categroy": 1
      },
      {
        "name": "木质搅拌棒",
        "categroy": 8
      },
      {
        "name": "泔脚",
        "categroy": 4
      },
      {
        "name": "脚皮",
        "categroy": 8
      },
      {
        "name": "猪脚",
        "categroy": 4
      },
      {
        "name": "菱角",
        "categroy": 4
      },
      {
        "name": "牛角",
        "categroy": 8
      },
      {
        "name": "饺子",
        "categroy": 4
      },
      {
        "name": "水饺",
        "categroy": 4
      },
      {
        "name": "水饺袋",
        "categroy": 8
      },
      {
        "name": "污染较严重的纸张",
        "categroy": 8
      },
      {
        "name": "接线板",
        "categroy": 1
      },
      {
        "name": "节能灯",
        "categroy": 2
      },
      {
        "name": "废节能灯",
        "categroy": 2
      },
      {
        "name": "节能灯管",
        "categroy": 2
      },
      {
        "name": "桔",
        "categroy": 4
      },
      {
        "name": "假睫毛",
        "categroy": 8
      },
      {
        "name": "睫毛膏",
        "categroy": 8
      },
      {
        "name": "睫毛刷",
        "categroy": 8
      },
      {
        "name": "清洁瓶",
        "categroy": 1
      },
      {
        "name": "毛豆结",
        "categroy": 4
      },
      {
        "name": "结成团的猫砂",
        "categroy": 8
      },
      {
        "name": "戒指",
        "categroy": 1
      },
      {
        "name": "金戒指",
        "categroy": 1
      },
      {
        "name": "毛巾",
        "categroy": 8
      },
      {
        "name": "湿巾",
        "categroy": 8
      },
      {
        "name": "牛筋",
        "categroy": 4
      },
      {
        "name": "皮筋",
        "categroy": 8
      },
      {
        "name": "黄金",
        "categroy": 1
      },
      {
        "name": "金属",
        "categroy": 1
      },
      {
        "name": "金鱼",
        "categroy": 4
      },
      {
        "name": "香烟灰烬",
        "categroy": 8
      },
      {
        "name": "根茎蔬菜",
        "categroy": 4
      },
      {
        "name": "蔬菜茎叶",
        "categroy": 4
      },
      {
        "name": "水果茎枝",
        "categroy": 4
      },
      {
        "name": "液晶屏",
        "categroy": 1
      },
      {
        "name": "液晶电视",
        "categroy": 1
      },
      {
        "name": "鸡精",
        "categroy": 4
      },
      {
        "name": "味精",
        "categroy": 4
      },
      {
        "name": "镜子",
        "categroy": 8
      },
      {
        "name": "墨镜",
        "categroy": 8
      },
      {
        "name": "眼镜",
        "categroy": 8
      },
      {
        "name": "净水器",
        "categroy": 1
      },
      {
        "name": "干净塑料",
        "categroy": 1
      },
      {
        "name": "净水滤芯",
        "categroy": 8
      },
      {
        "name": "韭菜",
        "categroy": 4
      },
      {
        "name": "针灸针",
        "categroy": 8
      },
      {
        "name": "酒酿",
        "categroy": 4
      },
      {
        "name": "酒瓶",
        "categroy": 1
      },
      {
        "name": "旧报",
        "categroy": 1
      },
      {
        "name": "旧书",
        "categroy": 1
      },
      {
        "name": "旧鞋",
        "categroy": 1
      },
      {
        "name": "聚乙烯饭盒",
        "categroy": 8
      },
      {
        "name": "收据",
        "categroy": 8
      },
      {
        "name": "数据线",
        "categroy": 1
      },
      {
        "name": "皮具",
        "categroy": 1
      },
      {
        "name": "蛋卷",
        "categroy": 4
      },
      {
        "name": "胶卷",
        "categroy": 2
      },
      {
        "name": "卷烟",
        "categroy": 8
      },
      {
        "name": "杀菌剂",
        "categroy": 2
      },
      {
        "name": "无菌包装塑料",
        "categroy": 8
      },
      {
        "name": "卡",
        "categroy": 8
      },
      {
        "name": "开心果",
        "categroy": 4
      },
      {
        "name": "开心果壳",
        "categroy": 4
      },
      {
        "name": "旧报刊",
        "categroy": 1
      },
      {
        "name": "糠",
        "categroy": 4
      },
      {
        "name": "糠饼",
        "categroy": 4
      },
      {
        "name": "考卷",
        "categroy": 1
      },
      {
        "name": "考试卷",
        "categroy": 1
      },
      {
        "name": "烤箱",
        "categroy": 1
      },
      {
        "name": "烧烤棒",
        "categroy": 8
      },
      {
        "name": "靠垫",
        "categroy": 1
      },
      {
        "name": "靠枕",
        "categroy": 1
      },
      {
        "name": "笔壳",
        "categroy": 8
      },
      {
        "name": "咳嗽糖浆",
        "categroy": 2
      },
      {
        "name": "可擦笔",
        "categroy": 8
      },
      {
        "name": "扑克",
        "categroy": 1
      },
      {
        "name": "马克笔",
        "categroy": 8
      },
      {
        "name": "空罐头",
        "categroy": 1
      },
      {
        "name": "空酒瓶",
        "categroy": 1
      },
      {
        "name": "遥控车",
        "categroy": 1
      },
      {
        "name": "遥控器",
        "categroy": 1
      },
      {
        "name": "空调遥控器",
        "categroy": 1
      },
      {
        "name": "口红",
        "categroy": 8
      },
      {
        "name": "口罩",
        "categroy": 8
      },
      {
        "name": "纽扣",
        "categroy": 8
      },
      {
        "name": "钮扣",
        "categroy": 8
      },
      {
        "name": "纽扣电池",
        "categroy": 2
      },
      {
        "name": "枯叶",
        "categroy": 4
      },
      {
        "name": "枯枝",
        "categroy": 4
      },
      {
        "name": "干枯花",
        "categroy": 4
      },
      {
        "name": "裤袜",
        "categroy": 1
      },
      {
        "name": "裤子",
        "categroy": 1
      },
      {
        "name": "铁块",
        "categroy": 1
      },
      {
        "name": "筷子",
        "categroy": 8
      },
      {
        "name": "木筷",
        "categroy": 1
      },
      {
        "name": "竹筷",
        "categroy": 8
      },
      {
        "name": "快餐盒",
        "categroy": 8
      },
      {
        "name": "塑料筐",
        "categroy": 1
      },
      {
        "name": "塑料篮筐",
        "categroy": 1
      },
      {
        "name": "塑料水果筐",
        "categroy": 1
      },
      {
        "name": "相框",
        "categroy": 1
      },
      {
        "name": "黑框眼镜",
        "categroy": 8
      },
      {
        "name": "矿水瓶",
        "categroy": 1
      },
      {
        "name": "矿泉水瓶",
        "categroy": 1
      },
      {
        "name": "矿泉水瓶子",
        "categroy": 1
      },
      {
        "name": "头盔",
        "categroy": 8
      },
      {
        "name": "葵花籽",
        "categroy": 4
      },
      {
        "name": "葵花子壳",
        "categroy": 4
      },
      {
        "name": "葵花籽壳",
        "categroy": 4
      },
      {
        "name": "死昆虫",
        "categroy": 4
      },
      {
        "name": "垃圾桶",
        "categroy": 1
      },
      {
        "name": "拉链",
        "categroy": 8
      },
      {
        "name": "拉拉裤",
        "categroy": 8
      },
      {
        "name": "蜡笔",
        "categroy": 8
      },
      {
        "name": "蜡纸",
        "categroy": 8
      },
      {
        "name": "腊肉",
        "categroy": 4
      },
      {
        "name": "辣酱",
        "categroy": 4
      },
      {
        "name": "辣条",
        "categroy": 4
      },
      {
        "name": "剩莱",
        "categroy": 4
      },
      {
        "name": "一次性莱盒",
        "categroy": 8
      },
      {
        "name": "自来水滤芯",
        "categroy": 8
      },
      {
        "name": "蓝莓干",
        "categroy": 4
      },
      {
        "name": "塑胶菜蓝子",
        "categroy": 1
      },
      {
        "name": "花篮",
        "categroy": 8
      },
      {
        "name": "篮球",
        "categroy": 1
      },
      {
        "name": "竹篮",
        "categroy": 8
      },
      {
        "name": "西兰花",
        "categroy": 4
      },
      {
        "name": "电缆",
        "categroy": 1
      },
      {
        "name": "烂桔",
        "categroy": 4
      },
      {
        "name": "烂桃",
        "categroy": 4
      },
      {
        "name": "烂菜叶",
        "categroy": 4
      },
      {
        "name": "槟榔",
        "categroy": 4
      },
      {
        "name": "榔头",
        "categroy": 1
      },
      {
        "name": "槟榔壳",
        "categroy": 4
      },
      {
        "name": "老鼠药",
        "categroy": 2
      },
      {
        "name": "死老鼠",
        "categroy": 4
      },
      {
        "name": "奶酪",
        "categroy": 4
      },
      {
        "name": "可乐杯",
        "categroy": 8
      },
      {
        "name": "可乐罐",
        "categroy": 1
      },
      {
        "name": "肋骨",
        "categroy": 8
      },
      {
        "name": "肋排",
        "categroy": 4
      },
      {
        "name": "布类",
        "categroy": 1
      },
      {
        "name": "蛋类",
        "categroy": 4
      },
      {
        "name": "擦眼泪的纸",
        "categroy": 8
      },
      {
        "name": "瓦楞纸",
        "categroy": 1
      },
      {
        "name": "冷饮",
        "categroy": 8
      },
      {
        "name": "冷饮棒",
        "categroy": 8
      },
      {
        "name": "冷饮袋",
        "categroy": 8
      },
      {
        "name": "车厘子",
        "categroy": 4
      },
      {
        "name": "梨",
        "categroy": 4
      },
      {
        "name": "离心纸",
        "categroy": 8
      },
      {
        "name": "钢笔里的墨囊",
        "categroy": 8
      },
      {
        "name": "纸制糖果礼盒",
        "categroy": 1
      },
      {
        "name": "荔枝核",
        "categroy": 4
      },
      {
        "name": "荔枝壳",
        "categroy": 4
      },
      {
        "name": "荔枝干壳",
        "categroy": 4
      },
      {
        "name": "栗子",
        "categroy": 4
      },
      {
        "name": "板栗壳",
        "categroy": 4
      },
      {
        "name": "可丽饼",
        "categroy": 4
      },
      {
        "name": "麦丽素",
        "categroy": 4
      },
      {
        "name": "日历",
        "categroy": 1
      },
      {
        "name": "台历",
        "categroy": 1
      },
      {
        "name": "便利贴",
        "categroy": 8
      },
      {
        "name": "乐利包",
        "categroy": 1
      },
      {
        "name": "利乐包",
        "categroy": 1
      },
      {
        "name": "果粒",
        "categroy": 4
      },
      {
        "name": "牛肉粒包装袋",
        "categroy": 8
      },
      {
        "name": "沥水架",
        "categroy": 1
      },
      {
        "name": "磁力片",
        "categroy": 8
      },
      {
        "name": "魔力擦",
        "categroy": 8
      },
      {
        "name": "巧克力",
        "categroy": 4
      },
      {
        "name": "琉璃",
        "categroy": 1
      },
      {
        "name": "联通卡",
        "categroy": 8
      },
      {
        "name": "莲藕",
        "categroy": 4
      },
      {
        "name": "莲蓬",
        "categroy": 4
      },
      {
        "name": "莲雾",
        "categroy": 4
      },
      {
        "name": "连裤袜",
        "categroy": 1
      },
      {
        "name": "连衣裙",
        "categroy": 1
      },
      {
        "name": "骨肉相连",
        "categroy": 4
      },
      {
        "name": "洗脸巾",
        "categroy": 8
      },
      {
        "name": "护脸霜瓶",
        "categroy": 1
      },
      {
        "name": "塑料脸盆",
        "categroy": 1
      },
      {
        "name": "项链",
        "categroy": 1
      },
      {
        "name": "金属拉链",
        "categroy": 1
      },
      {
        "name": "练习本",
        "categroy": 1
      },
      {
        "name": "狗粮",
        "categroy": 4
      },
      {
        "name": "粮食",
        "categroy": 4
      },
      {
        "name": "猫粮",
        "categroy": 4
      },
      {
        "name": "凉皮",
        "categroy": 4
      },
      {
        "name": "凉席",
        "categroy": 8
      },
      {
        "name": "空调两用风扇",
        "categroy": 1
      },
      {
        "name": "少量泥土",
        "categroy": 8
      },
      {
        "name": "晾衣架",
        "categroy": 1
      },
      {
        "name": "塑料晾衣架",
        "categroy": 1
      },
      {
        "name": "坏了的碗",
        "categroy": 1
      },
      {
        "name": "破了的碗",
        "categroy": 1
      },
      {
        "name": "坏了的玩具",
        "categroy": 1
      },
      {
        "name": "布料",
        "categroy": 1
      },
      {
        "name": "盘尼西林",
        "categroy": 2
      },
      {
        "name": "鱼鳞",
        "categroy": 4
      },
      {
        "name": "鱼鳞鱼肠",
        "categroy": 4
      },
      {
        "name": "冰淇淋",
        "categroy": 4
      },
      {
        "name": "零食",
        "categroy": 4
      },
      {
        "name": "零食袋",
        "categroy": 8
      },
      {
        "name": "零食罐",
        "categroy": 8
      },
      {
        "name": "哑铃",
        "categroy": 1
      },
      {
        "name": "马铃薯",
        "categroy": 4
      },
      {
        "name": "马铃薯片",
        "categroy": 4
      },
      {
        "name": "领带",
        "categroy": 1
      },
      {
        "name": "红领巾",
        "categroy": 1
      },
      {
        "name": "毛领子",
        "categroy": 1
      },
      {
        "name": "溜溜球",
        "categroy": 8
      },
      {
        "name": "榴莲干",
        "categroy": 4
      },
      {
        "name": "榴莲核",
        "categroy": 8
      },
      {
        "name": "榴莲壳",
        "categroy": 8
      },
      {
        "name": "镇流器",
        "categroy": 1
      },
      {
        "name": "电子镇流器",
        "categroy": 1
      },
      {
        "name": "龙虾",
        "categroy": 4
      },
      {
        "name": "大龙虾",
        "categroy": 4
      },
      {
        "name": "龙虾壳",
        "categroy": 4
      },
      {
        "name": "鸟笼",
        "categroy": 8
      },
      {
        "name": "芦荟",
        "categroy": 4
      },
      {
        "name": "芦稷",
        "categroy": 4
      },
      {
        "name": "芦稷皮",
        "categroy": 8
      },
      {
        "name": "甜卢蜀",
        "categroy": 4
      },
      {
        "name": "炉渣",
        "categroy": 8
      },
      {
        "name": "电磁炉",
        "categroy": 1
      },
      {
        "name": "电暖炉",
        "categroy": 1
      },
      {
        "name": "卤素灯",
        "categroy": 2
      },
      {
        "name": "卤素灯泡",
        "categroy": 2
      },
      {
        "name": "花露水瓶",
        "categroy": 1
      },
      {
        "name": "沐浴露瓶",
        "categroy": 1
      },
      {
        "name": "洗发露瓶",
        "categroy": 1
      },
      {
        "name": "电路板",
        "categroy": 1
      },
      {
        "name": "路由器",
        "categroy": 1
      },
      {
        "name": "线路板",
        "categroy": 1
      },
      {
        "name": "录像带",
        "categroy": 2
      },
      {
        "name": "录音机",
        "categroy": 1
      },
      {
        "name": "铝",
        "categroy": 1
      },
      {
        "name": "旅行袋",
        "categroy": 1
      },
      {
        "name": "旅游时报",
        "categroy": 1
      },
      {
        "name": "滤网",
        "categroy": 8
      },
      {
        "name": "滤芯",
        "categroy": 8
      },
      {
        "name": "绿豆",
        "categroy": 4
      },
      {
        "name": "绿萝",
        "categroy": 4
      },
      {
        "name": "海螺",
        "categroy": 8
      },
      {
        "name": "花螺",
        "categroy": 8
      },
      {
        "name": "螺帽",
        "categroy": 1
      },
      {
        "name": "绿箩",
        "categroy": 4
      },
      {
        "name": "落发",
        "categroy": 8
      },
      {
        "name": "落叶",
        "categroy": 4
      },
      {
        "name": "落花生",
        "categroy": 4
      },
      {
        "name": "姨妈巾",
        "categroy": 8
      },
      {
        "name": "老干妈辣酱",
        "categroy": 4
      },
      {
        "name": "麻布",
        "categroy": 1
      },
      {
        "name": "麻袋",
        "categroy": 8
      },
      {
        "name": "麻绳",
        "categroy": 8
      },
      {
        "name": "密码锁",
        "categroy": 1
      },
      {
        "name": "马肉",
        "categroy": 4
      },
      {
        "name": "买菜的包装袋",
        "categroy": 8
      },
      {
        "name": "麦子",
        "categroy": 4
      },
      {
        "name": "烧卖",
        "categroy": 4
      },
      {
        "name": "外卖盒",
        "categroy": 8
      },
      {
        "name": "外卖餐盒",
        "categroy": 8
      },
      {
        "name": "馒头",
        "categroy": 4
      },
      {
        "name": "蔓藤",
        "categroy": 4
      },
      {
        "name": "藤蔓",
        "categroy": 4
      },
      {
        "name": "漫画",
        "categroy": 1
      },
      {
        "name": "漫画书",
        "categroy": 1
      },
      {
        "name": "芒果",
        "categroy": 4
      },
      {
        "name": "芒果干",
        "categroy": 4
      },
      {
        "name": "芒果核",
        "categroy": 4
      },
      {
        "name": "貂毛",
        "categroy": 8
      },
      {
        "name": "狗毛",
        "categroy": 8
      },
      {
        "name": "帽子",
        "categroy": 1
      },
      {
        "name": "浴帽",
        "categroy": 8
      },
      {
        "name": "泡沫箱属于什么垃圾",
        "categroy": 1
      },
      {
        "name": "杨梅",
        "categroy": 4
      },
      {
        "name": "发霉食物",
        "categroy": 4
      },
      {
        "name": "煤饼",
        "categroy": 8
      },
      {
        "name": "煤灰",
        "categroy": 8
      },
      {
        "name": "煤渣",
        "categroy": 8
      },
      {
        "name": "没用过尿片",
        "categroy": 8
      },
      {
        "name": "没用过的纸杯",
        "categroy": 8
      },
      {
        "name": "没用过的尿不湿",
        "categroy": 8
      },
      {
        "name": "眉笔",
        "categroy": 8
      },
      {
        "name": "美瞳",
        "categroy": 8
      },
      {
        "name": "门锁",
        "categroy": 1
      },
      {
        "name": "柠檬",
        "categroy": 4
      },
      {
        "name": "米",
        "categroy": 4
      },
      {
        "name": "大米",
        "categroy": 4
      },
      {
        "name": "菠萝蜜",
        "categroy": 4
      },
      {
        "name": "棉",
        "categroy": 1
      },
      {
        "name": "海绵",
        "categroy": 8
      },
      {
        "name": "海绵垫",
        "categroy": 8
      },
      {
        "name": "海绵纸",
        "categroy": 8
      },
      {
        "name": "面",
        "categroy": 4
      },
      {
        "name": "面包",
        "categroy": 4
      },
      {
        "name": "灭火器",
        "categroy": 1
      },
      {
        "name": "灭蚊剂",
        "categroy": 2
      },
      {
        "name": "废灭火器",
        "categroy": 1
      },
      {
        "name": "玻璃器皿",
        "categroy": 1
      },
      {
        "name": "明信片",
        "categroy": 8
      },
      {
        "name": "三明治",
        "categroy": 4
      },
      {
        "name": "说明书",
        "categroy": 1
      },
      {
        "name": "名画",
        "categroy": 8
      },
      {
        "name": "名片",
        "categroy": 1
      },
      {
        "name": "塑料模型",
        "categroy": 1
      },
      {
        "name": "面膜",
        "categroy": 8
      },
      {
        "name": "磨刀器",
        "categroy": 1
      },
      {
        "name": "磨砂膏",
        "categroy": 8
      },
      {
        "name": "摩丝",
        "categroy": 8
      },
      {
        "name": "摩易擦",
        "categroy": 8
      },
      {
        "name": "魔笔",
        "categroy": 8
      },
      {
        "name": "抹布",
        "categroy": 8
      },
      {
        "name": "废抹布",
        "categroy": 8
      },
      {
        "name": "旧抹布",
        "categroy": 8
      },
      {
        "name": "速溶饮料粉末",
        "categroy": 4
      },
      {
        "name": "墨粉",
        "categroy": 8
      },
      {
        "name": "墨盒",
        "categroy": 1
      },
      {
        "name": "默写本",
        "categroy": 1
      },
      {
        "name": "泡沫",
        "categroy": 1
      },
      {
        "name": "肉沫",
        "categroy": 4
      },
      {
        "name": "泡沫板",
        "categroy": 1
      },
      {
        "name": "牡蛎壳",
        "categroy": 8
      },
      {
        "name": "牡蛎肉",
        "categroy": 4
      },
      {
        "name": "吃剩下的牡蛎壳",
        "categroy": 8
      },
      {
        "name": "屏幕",
        "categroy": 1
      },
      {
        "name": "荧幕",
        "categroy": 1
      },
      {
        "name": "电脑屏幕",
        "categroy": 1
      },
      {
        "name": "树叶是那种垃圾",
        "categroy": 4
      },
      {
        "name": "收纳箱",
        "categroy": 1
      },
      {
        "name": "塑料收纳盒",
        "categroy": 1
      },
      {
        "name": "奶粉",
        "categroy": 4
      },
      {
        "name": "奶盒",
        "categroy": 1
      },
      {
        "name": "南瓜",
        "categroy": 4
      },
      {
        "name": "南瓜皮",
        "categroy": 4
      },
      {
        "name": "南瓜子壳",
        "categroy": 4
      },
      {
        "name": "笔囊",
        "categroy": 8
      },
      {
        "name": "胶囊",
        "categroy": 2
      },
      {
        "name": "墨囊",
        "categroy": 8
      },
      {
        "name": "电脑",
        "categroy": 1
      },
      {
        "name": "猪脑",
        "categroy": 4
      },
      {
        "name": "电脑包",
        "categroy": 1
      },
      {
        "name": "闹钟",
        "categroy": 1
      },
      {
        "name": "内裤",
        "categroy": 8
      },
      {
        "name": "内衣",
        "categroy": 8
      },
      {
        "name": "内脏",
        "categroy": 4
      },
      {
        "name": "花泥",
        "categroy": 8
      },
      {
        "name": "尼龙绳",
        "categroy": 8
      },
      {
        "name": "尼龙丝袜",
        "categroy": 8
      },
      {
        "name": "尼龙制品",
        "categroy": 8
      },
      {
        "name": "油腻的餐巾纸",
        "categroy": 8
      },
      {
        "name": "年糕",
        "categroy": 4
      },
      {
        "name": "少年报",
        "categroy": 1
      },
      {
        "name": "尿布",
        "categroy": 8
      },
      {
        "name": "尿垫",
        "categroy": 8
      },
      {
        "name": "尿裤",
        "categroy": 8
      },
      {
        "name": "镍镉电池",
        "categroy": 2
      },
      {
        "name": "牛",
        "categroy": 4
      },
      {
        "name": "塑料纽扣",
        "categroy": 1
      },
      {
        "name": "农药片",
        "categroy": 2
      },
      {
        "name": "圣女果",
        "categroy": 4
      },
      {
        "name": "女生内衣",
        "categroy": 8
      },
      {
        "name": "女性卫生用品",
        "categroy": 8
      },
      {
        "name": "暖瓶",
        "categroy": 1
      },
      {
        "name": "保暖瓶",
        "categroy": 1
      },
      {
        "name": "呕吐包",
        "categroy": 8
      },
      {
        "name": "呕吐物",
        "categroy": 4
      },
      {
        "name": "布偶",
        "categroy": 1
      },
      {
        "name": "玩偶",
        "categroy": 1
      },
      {
        "name": "布玩偶",
        "categroy": 1
      },
      {
        "name": "手帕",
        "categroy": 8
      },
      {
        "name": "电蚊拍",
        "categroy": 1
      },
      {
        "name": "大排",
        "categroy": 4
      },
      {
        "name": "鸡排",
        "categroy": 4
      },
      {
        "name": "铜牌",
        "categroy": 1
      },
      {
        "name": "菠萝派",
        "categroy": 4
      },
      {
        "name": "U盘",
        "categroy": 1
      },
      {
        "name": "乒乓板",
        "categroy": 8
      },
      {
        "name": "乒乓球",
        "categroy": 1
      },
      {
        "name": "日抛美瞳",
        "categroy": 8
      },
      {
        "name": "灯炮",
        "categroy": 2
      },
      {
        "name": "泡面",
        "categroy": 4
      },
      {
        "name": "泡馍",
        "categroy": 4
      },
      {
        "name": "水培植物",
        "categroy": 4
      },
      {
        "name": "电脑配件",
        "categroy": 1
      },
      {
        "name": "铝喷雾瓶",
        "categroy": 1
      },
      {
        "name": "喷蟑螂瓶",
        "categroy": 2
      },
      {
        "name": "杀虫喷雾",
        "categroy": 2
      },
      {
        "name": "花盆",
        "categroy": 8
      },
      {
        "name": "铝盆",
        "categroy": 1
      },
      {
        "name": "盆栽",
        "categroy": 4
      },
      {
        "name": "帐篷",
        "categroy": 1
      },
      {
        "name": "膨化食品",
        "categroy": 4
      },
      {
        "name": "膨化食品包装",
        "categroy": 8
      },
      {
        "name": "披萨",
        "categroy": 4
      },
      {
        "name": "雨披",
        "categroy": 8
      },
      {
        "name": "披萨盒",
        "categroy": 8
      },
      {
        "name": "啤酒盖",
        "categroy": 1
      },
      {
        "name": "啤酒罐",
        "categroy": 1
      },
      {
        "name": "啤酒瓶",
        "categroy": 1
      },
      {
        "name": "菜皮",
        "categroy": 4
      },
      {
        "name": "草皮",
        "categroy": 4
      },
      {
        "name": "漂白粉",
        "categroy": 8
      },
      {
        "name": "漂白剂罐",
        "categroy": 2
      },
      {
        "name": "票",
        "categroy": 8
      },
      {
        "name": "食品",
        "categroy": 4
      },
      {
        "name": "饰品",
        "categroy": 8
      },
      {
        "name": "药品",
        "categroy": 2
      },
      {
        "name": "苹果",
        "categroy": 4
      },
      {
        "name": "烂苹果",
        "categroy": 4
      },
      {
        "name": "苹果核",
        "categroy": 4
      },
      {
        "name": "平底锅",
        "categroy": 1
      },
      {
        "name": "平板玻璃",
        "categroy": 1
      },
      {
        "name": "平板电脑",
        "categroy": 1
      },
      {
        "name": "电瓶",
        "categroy": 1
      },
      {
        "name": "破布",
        "categroy": 1
      },
      {
        "name": "破碗",
        "categroy": 8
      },
      {
        "name": "破瓷品",
        "categroy": 8
      },
      {
        "name": "扑克牌",
        "categroy": 1
      },
      {
        "name": "猪肉铺",
        "categroy": 4
      },
      {
        "name": "葡萄",
        "categroy": 4
      },
      {
        "name": "葡萄皮",
        "categroy": 4
      },
      {
        "name": "普通塑料袋",
        "categroy": 8
      },
      {
        "name": "过期药",
        "categroy": 2
      },
      {
        "name": "过期饼干",
        "categroy": 4
      },
      {
        "name": "漆桶",
        "categroy": 2
      },
      {
        "name": "油漆",
        "categroy": 2
      },
      {
        "name": "废油漆",
        "categroy": 2
      },
      {
        "name": "其他垃圾桶",
        "categroy": 1
      },
      {
        "name": "象棋",
        "categroy": 8
      },
      {
        "name": "曲奇",
        "categroy": 4
      },
      {
        "name": "吃过的奇趣蛋",
        "categroy": 8
      },
      {
        "name": "电器",
        "categroy": 1
      },
      {
        "name": "陶器",
        "categroy": 8
      },
      {
        "name": "气球",
        "categroy": 8
      },
      {
        "name": "充气娃",
        "categroy": 1
      },
      {
        "name": "煤气罐",
        "categroy": 1
      },
      {
        "name": "废弃布包",
        "categroy": 1
      },
      {
        "name": "废弃地毯",
        "categroy": 1
      },
      {
        "name": "废弃电线",
        "categroy": 1
      },
      {
        "name": "铅笔",
        "categroy": 8
      },
      {
        "name": "铅桶",
        "categroy": 1
      },
      {
        "name": "铅芯",
        "categroy": 8
      },
      {
        "name": "棉签",
        "categroy": 8
      },
      {
        "name": "指甲钳",
        "categroy": 1
      },
      {
        "name": "金枪鱼罐头",
        "categroy": 1
      },
      {
        "name": "墙刷",
        "categroy": 8
      },
      {
        "name": "一块墙皮",
        "categroy": 8
      },
      {
        "name": "强化玻璃",
        "categroy": 1
      },
      {
        "name": "敲碎的碗",
        "categroy": 8
      },
      {
        "name": "巧克力袋子",
        "categroy": 8
      },
      {
        "name": "巧克力盒子",
        "categroy": 8
      },
      {
        "name": "茄子",
        "categroy": 4
      },
      {
        "name": "电子琴",
        "categroy": 1
      },
      {
        "name": "芹菜",
        "categroy": 4
      },
      {
        "name": "芹菜叶",
        "categroy": 4
      },
      {
        "name": "家禽内脏",
        "categroy": 4
      },
      {
        "name": "青菜",
        "categroy": 4
      },
      {
        "name": "氢气罐",
        "categroy": 1
      },
      {
        "name": "氢气球",
        "categroy": 8
      },
      {
        "name": "氢气球充气钢瓶",
        "categroy": 1
      },
      {
        "name": "滤清器",
        "categroy": 8
      },
      {
        "name": "汽车空气滤清器",
        "categroy": 1
      },
      {
        "name": "情趣内衣",
        "categroy": 8
      },
      {
        "name": "琼脂",
        "categroy": 4
      },
      {
        "name": "营养琼脂",
        "categroy": 4
      },
      {
        "name": "秋衣",
        "categroy": 1
      },
      {
        "name": "棉球",
        "categroy": 8
      },
      {
        "name": "皮球",
        "categroy": 1
      },
      {
        "name": "驱蚊瓶",
        "categroy": 1
      },
      {
        "name": "发圈",
        "categroy": 8
      },
      {
        "name": "铁圈",
        "categroy": 1
      },
      {
        "name": "甜甜圈",
        "categroy": 4
      },
      {
        "name": "围裙",
        "categroy": 1
      },
      {
        "name": "燃油罐",
        "categroy": 1
      },
      {
        "name": "染发剂罐",
        "categroy": 2
      },
      {
        "name": "染发剂壳",
        "categroy": 2
      },
      {
        "name": "污染报纸",
        "categroy": 8
      },
      {
        "name": "丝瓜瓤",
        "categroy": 4
      },
      {
        "name": "电热毯",
        "categroy": 1
      },
      {
        "name": "退热贴",
        "categroy": 8
      },
      {
        "name": "电热水袋",
        "categroy": 1
      },
      {
        "name": "杏仁",
        "categroy": 4
      },
      {
        "name": "瓜子仁",
        "categroy": 4
      },
      {
        "name": "虾仁壳",
        "categroy": 4
      },
      {
        "name": "无人机",
        "categroy": 1
      },
      {
        "name": "仙人球",
        "categroy": 4
      },
      {
        "name": "日报",
        "categroy": 1
      },
      {
        "name": "日光灯",
        "categroy": 2
      },
      {
        "name": "有机溶剂",
        "categroy": 2
      },
      {
        "name": "速溶咖啡包装",
        "categroy": 8
      },
      {
        "name": "电容器",
        "categroy": 1
      },
      {
        "name": "美容仪",
        "categroy": 1
      },
      {
        "name": "玻璃制容器",
        "categroy": 1
      },
      {
        "name": "绒娃娃",
        "categroy": 1
      },
      {
        "name": "绒线衣",
        "categroy": 1
      },
      {
        "name": "羽绒被",
        "categroy": 1
      },
      {
        "name": "棉柔巾",
        "categroy": 8
      },
      {
        "name": "肉",
        "categroy": 4
      },
      {
        "name": "大骨（如：猪腿骨）",
        "categroy": 8
      },
      {
        "name": "乳牙",
        "categroy": 8
      },
      {
        "name": "豆腐乳",
        "categroy": 4
      },
      {
        "name": "沐浴乳",
        "categroy": 8
      },
      {
        "name": "入厕用纸",
        "categroy": 8
      },
      {
        "name": "软骨",
        "categroy": 4
      },
      {
        "name": "软盘",
        "categroy": 8
      },
      {
        "name": "软糖",
        "categroy": 4
      },
      {
        "name": "润发乳",
        "categroy": 8
      },
      {
        "name": "花洒",
        "categroy": 1
      },
      {
        "name": "披萨饼盒",
        "categroy": 8
      },
      {
        "name": "木塞",
        "categroy": 8
      },
      {
        "name": "软木塞",
        "categroy": 8
      },
      {
        "name": "酒瓶塞子",
        "categroy": 8
      },
      {
        "name": "三杯鸡",
        "categroy": 4
      },
      {
        "name": "三文鱼",
        "categroy": 4
      },
      {
        "name": "伞",
        "categroy": 8
      },
      {
        "name": "雨伞",
        "categroy": 8
      },
      {
        "name": "旧雨伞",
        "categroy": 8
      },
      {
        "name": "散粉",
        "categroy": 8
      },
      {
        "name": "桑叶",
        "categroy": 4
      },
      {
        "name": "扫帚",
        "categroy": 8
      },
      {
        "name": "扫地机",
        "categroy": 1
      },
      {
        "name": "彩色笔",
        "categroy": 8
      },
      {
        "name": "标签色带",
        "categroy": 8
      },
      {
        "name": "彩色玻璃",
        "categroy": 1
      },
      {
        "name": "猫砂",
        "categroy": 8
      },
      {
        "name": "砂锅",
        "categroy": 8
      },
      {
        "name": "砂皮",
        "categroy": 8
      },
      {
        "name": "杀虫剂",
        "categroy": 2
      },
      {
        "name": "猫沙",
        "categroy": 8
      },
      {
        "name": "纱布",
        "categroy": 8
      },
      {
        "name": "纱窗",
        "categroy": 8
      },
      {
        "name": "防晒霜",
        "categroy": 8
      },
      {
        "name": "防晒霜罐",
        "categroy": 1
      },
      {
        "name": "山芋",
        "categroy": 4
      },
      {
        "name": "山竹",
        "categroy": 4
      },
      {
        "name": "羊毛衫",
        "categroy": 1
      },
      {
        "name": "电扇",
        "categroy": 1
      },
      {
        "name": "烫伤膏",
        "categroy": 2
      },
      {
        "name": "纸质商标",
        "categroy": 8
      },
      {
        "name": "上衣",
        "categroy": 1
      },
      {
        "name": "床上用品",
        "categroy": 1
      },
      {
        "name": "烧鸡",
        "categroy": 4
      },
      {
        "name": "红烧肉",
        "categroy": 4
      },
      {
        "name": "勺子",
        "categroy": 1
      },
      {
        "name": "塑料勺",
        "categroy": 8
      },
      {
        "name": "蛇皮袋",
        "categroy": 8
      },
      {
        "name": "摄像机",
        "categroy": 1
      },
      {
        "name": "摄像头",
        "categroy": 1
      },
      {
        "name": "注射器",
        "categroy": 8
      },
      {
        "name": "无菌注射器包装",
        "categroy": 8
      },
      {
        "name": "养身壶",
        "categroy": 1
      },
      {
        "name": "花生",
        "categroy": 4
      },
      {
        "name": "生菜",
        "categroy": 4
      },
      {
        "name": "生蚝",
        "categroy": 8
      },
      {
        "name": "棉绳",
        "categroy": 8
      },
      {
        "name": "绳子",
        "categroy": 1
      },
      {
        "name": "盛装湿垃圾的垃圾袋",
        "categroy": 8
      },
      {
        "name": "剩菜",
        "categroy": 4
      },
      {
        "name": "剩餐",
        "categroy": 4
      },
      {
        "name": "剩饭",
        "categroy": 4
      },
      {
        "name": "螺狮",
        "categroy": 4
      },
      {
        "name": "螺狮壳",
        "categroy": 4
      },
      {
        "name": "施工安全帽",
        "categroy": 1
      },
      {
        "name": "湿纸",
        "categroy": 8
      },
      {
        "name": "使用的餐巾纸",
        "categroy": 8
      },
      {
        "name": "使用过的餐盒",
        "categroy": 8
      },
      {
        "name": "使用过的猫砂",
        "categroy": 8
      },
      {
        "name": "废台式机",
        "categroy": 1
      },
      {
        "name": "硬式磁碟机",
        "categroy": 1
      },
      {
        "name": "显示器",
        "categroy": 1
      },
      {
        "name": "显示屏幕",
        "categroy": 1
      },
      {
        "name": "芝士",
        "categroy": 4
      },
      {
        "name": "芝士片",
        "categroy": 4
      },
      {
        "name": "西红柿",
        "categroy": 4
      },
      {
        "name": "乐事薯片",
        "categroy": 4
      },
      {
        "name": "擦拭过的餐巾纸",
        "categroy": 8
      },
      {
        "name": "油漆稀释剂",
        "categroy": 2
      },
      {
        "name": "电视",
        "categroy": 1
      },
      {
        "name": "电视机",
        "categroy": 1
      },
      {
        "name": "废电视",
        "categroy": 1
      },
      {
        "name": "试卷",
        "categroy": 1
      },
      {
        "name": "试纸",
        "categroy": 8
      },
      {
        "name": "寿司",
        "categroy": 4
      },
      {
        "name": "受污纸巾",
        "categroy": 8
      },
      {
        "name": "受潮的纸张",
        "categroy": 1
      },
      {
        "name": "受过污染的纸",
        "categroy": 8
      },
      {
        "name": "蔬菜",
        "categroy": 4
      },
      {
        "name": "蔬果",
        "categroy": 4
      },
      {
        "name": "烂蔬菜",
        "categroy": 4
      },
      {
        "name": "木梳",
        "categroy": 1
      },
      {
        "name": "梳子",
        "categroy": 8
      },
      {
        "name": "木梳子",
        "categroy": 1
      },
      {
        "name": "书",
        "categroy": 1
      },
      {
        "name": "熟菜",
        "categroy": 4
      },
      {
        "name": "熟鸡蛋",
        "categroy": 4
      },
      {
        "name": "熟虾壳",
        "categroy": 4
      },
      {
        "name": "薯片",
        "categroy": 4
      },
      {
        "name": "甜芦黍",
        "categroy": 4
      },
      {
        "name": "废金属",
        "categroy": 1
      },
      {
        "name": "金属罐",
        "categroy": 1
      },
      {
        "name": "美术袋",
        "categroy": 8
      },
      {
        "name": "美术黏土",
        "categroy": 8
      },
      {
        "name": "树皮",
        "categroy": 4
      },
      {
        "name": "数学书",
        "categroy": 1
      },
      {
        "name": "漱口水瓶子",
        "categroy": 1
      },
      {
        "name": "牙刷",
        "categroy": 8
      },
      {
        "name": "化妆刷",
        "categroy": 8
      },
      {
        "name": "面霜",
        "categroy": 8
      },
      {
        "name": "眼霜",
        "categroy": 8
      },
      {
        "name": "双面胶",
        "categroy": 8
      },
      {
        "name": "双面胶带",
        "categroy": 8
      },
      {
        "name": "爽肤水瓶",
        "categroy": 1
      },
      {
        "name": "胶水",
        "categroy": 8
      },
      {
        "name": "水笔",
        "categroy": 8
      },
      {
        "name": "水彩",
        "categroy": 8
      },
      {
        "name": "纸质说明书",
        "categroy": 1
      },
      {
        "name": "瓦斯桶",
        "categroy": 1
      },
      {
        "name": "手撕猪肉",
        "categroy": 4
      },
      {
        "name": "钢丝",
        "categroy": 1
      },
      {
        "name": "死花",
        "categroy": 4
      },
      {
        "name": "饲料",
        "categroy": 4
      },
      {
        "name": "猫饲料",
        "categroy": 4
      },
      {
        "name": "饲料袋",
        "categroy": 8
      },
      {
        "name": "松子",
        "categroy": 4
      },
      {
        "name": "松子壳",
        "categroy": 4
      },
      {
        "name": "松木猫砂",
        "categroy": 8
      },
      {
        "name": "素菜",
        "categroy": 4
      },
      {
        "name": "快速面盒",
        "categroy": 8
      },
      {
        "name": "速冻饺子",
        "categroy": 4
      },
      {
        "name": "速冻水饺",
        "categroy": 4
      },
      {
        "name": "粟子壳",
        "categroy": 4
      },
      {
        "name": "甜芦粟",
        "categroy": 4
      },
      {
        "name": "甜芦粟皮",
        "categroy": 8
      },
      {
        "name": "塑料",
        "categroy": 1
      },
      {
        "name": "废塑料",
        "categroy": 1
      },
      {
        "name": "酸奶袋",
        "categroy": 8
      },
      {
        "name": "酸奶盖",
        "categroy": 8
      },
      {
        "name": "蒜",
        "categroy": 4
      },
      {
        "name": "大蒜",
        "categroy": 4
      },
      {
        "name": "废弃计算机",
        "categroy": 1
      },
      {
        "name": "碎布",
        "categroy": 1
      },
      {
        "name": "碎瓷",
        "categroy": 8
      },
      {
        "name": "碎骨",
        "categroy": 4
      },
      {
        "name": "玉米穗",
        "categroy": 4
      },
      {
        "name": "破损瓷器",
        "categroy": 8
      },
      {
        "name": "污损纸张",
        "categroy": 8
      },
      {
        "name": "破损垃圾袋",
        "categroy": 8
      },
      {
        "name": "笋壳",
        "categroy": 4
      },
      {
        "name": "笋皮",
        "categroy": 4
      },
      {
        "name": "竹笋",
        "categroy": 4
      },
      {
        "name": "梭子蟹",
        "categroy": 4
      },
      {
        "name": "压缩瓶",
        "categroy": 1
      },
      {
        "name": "锁",
        "categroy": 1
      },
      {
        "name": "锁头",
        "categroy": 1
      },
      {
        "name": "厕所手纸",
        "categroy": 8
      },
      {
        "name": "蛋挞",
        "categroy": 4
      },
      {
        "name": "蛋挞壳",
        "categroy": 8
      },
      {
        "name": "蛋挞皮",
        "categroy": 4
      },
      {
        "name": "废踏垫",
        "categroy": 8
      },
      {
        "name": "脚踏板",
        "categroy": 8
      },
      {
        "name": "海苔",
        "categroy": 4
      },
      {
        "name": "海苔袋子",
        "categroy": 8
      },
      {
        "name": "台灯",
        "categroy": 1
      },
      {
        "name": "印台",
        "categroy": 8
      },
      {
        "name": "太阳帽",
        "categroy": 1
      },
      {
        "name": "太阳能热水管",
        "categroy": 1
      },
      {
        "name": "太阳能热水器",
        "categroy": 1
      },
      {
        "name": "痰盂罐",
        "categroy": 1
      },
      {
        "name": "毛毯",
        "categroy": 1
      },
      {
        "name": "碳灰",
        "categroy": 8
      },
      {
        "name": "碳粉匣",
        "categroy": 1
      },
      {
        "name": "碳纤维",
        "categroy": 8
      },
      {
        "name": "木炭",
        "categroy": 8
      },
      {
        "name": "炭包",
        "categroy": 8
      },
      {
        "name": "汤骨",
        "categroy": 8
      },
      {
        "name": "鱼汤",
        "categroy": 4
      },
      {
        "name": "火锅汤底",
        "categroy": 4
      },
      {
        "name": "搪瓷",
        "categroy": 1
      },
      {
        "name": "搪瓷杯",
        "categroy": 8
      },
      {
        "name": "搪瓷碗",
        "categroy": 1
      },
      {
        "name": "糖",
        "categroy": 4
      },
      {
        "name": "红糖",
        "categroy": 4
      },
      {
        "name": "麻辣烫",
        "categroy": 4
      },
      {
        "name": "黄桃",
        "categroy": 4
      },
      {
        "name": "桃板",
        "categroy": 4
      },
      {
        "name": "淘宝纸盒",
        "categroy": 1
      },
      {
        "name": "碎陶",
        "categroy": 8
      },
      {
        "name": "陶瓷",
        "categroy": 8
      },
      {
        "name": "笔套",
        "categroy": 8
      },
      {
        "name": "耳套",
        "categroy": 1
      },
      {
        "name": "藤席",
        "categroy": 8
      },
      {
        "name": "旧手提包",
        "categroy": 1
      },
      {
        "name": "手提电脑",
        "categroy": 1
      },
      {
        "name": "蹄髈",
        "categroy": 4
      },
      {
        "name": "猪蹄",
        "categroy": 4
      },
      {
        "name": "擦鼻涕纸",
        "categroy": 8
      },
      {
        "name": "剃须刀",
        "categroy": 1
      },
      {
        "name": "剃须刀片",
        "categroy": 1
      },
      {
        "name": "剃须泡瓶",
        "categroy": 1
      },
      {
        "name": "泡沫填充",
        "categroy": 8
      },
      {
        "name": "田螺",
        "categroy": 4
      },
      {
        "name": "甜瓜",
        "categroy": 4
      },
      {
        "name": "布条",
        "categroy": 1
      },
      {
        "name": "面条",
        "categroy": 4
      },
      {
        "name": "跳蛋",
        "categroy": 8
      },
      {
        "name": "跳跳糖包装袋",
        "categroy": 8
      },
      {
        "name": "贴纸",
        "categroy": 8
      },
      {
        "name": "铁",
        "categroy": 1
      },
      {
        "name": "暖宝宝帖",
        "categroy": 8
      },
      {
        "name": "餐厅纸",
        "categroy": 8
      },
      {
        "name": "家庭花卉",
        "categroy": 4
      },
      {
        "name": "家庭绿化",
        "categroy": 4
      },
      {
        "name": "家庭盆栽树叶",
        "categroy": 4
      },
      {
        "name": "铜皮",
        "categroy": 1
      },
      {
        "name": "废铜烂铁",
        "categroy": 1
      },
      {
        "name": "儿童尿不湿",
        "categroy": 8
      },
      {
        "name": "儿童电动玩具",
        "categroy": 1
      },
      {
        "name": "木桶",
        "categroy": 1
      },
      {
        "name": "筒骨",
        "categroy": 8
      },
      {
        "name": "针筒",
        "categroy": 2
      },
      {
        "name": "骨头",
        "categroy": 8
      },
      {
        "name": "透明胶",
        "categroy": 8
      },
      {
        "name": "透明胶带",
        "categroy": 8
      },
      {
        "name": "一次性透明盒子",
        "categroy": 8
      },
      {
        "name": "地图",
        "categroy": 1
      },
      {
        "name": "图画",
        "categroy": 8
      },
      {
        "name": "涂料",
        "categroy": 2
      },
      {
        "name": "涂料桶",
        "categroy": 2
      },
      {
        "name": "屠龙刀",
        "categroy": 1
      },
      {
        "name": "土豆",
        "categroy": 4
      },
      {
        "name": "兔肉",
        "categroy": 4
      },
      {
        "name": "兔头",
        "categroy": 4
      },
      {
        "name": "饭团",
        "categroy": 4
      },
      {
        "name": "线团",
        "categroy": 8
      },
      {
        "name": "纸团",
        "categroy": 8
      },
      {
        "name": "火腿",
        "categroy": 4
      },
      {
        "name": "鸡腿",
        "categroy": 4
      },
      {
        "name": "腿骨",
        "categroy": 8
      },
      {
        "name": "拖鞋",
        "categroy": 8
      },
      {
        "name": "蛋挞托",
        "categroy": 8
      },
      {
        "name": "食物托盘",
        "categroy": 1
      },
      {
        "name": "塑料托盘",
        "categroy": 1
      },
      {
        "name": "脱水机",
        "categroy": 1
      },
      {
        "name": "脱氧剂",
        "categroy": 8
      },
      {
        "name": "食品用脱氧剂",
        "categroy": 8
      },
      {
        "name": "牛蛙",
        "categroy": 4
      },
      {
        "name": "牛蛙骨头",
        "categroy": 4
      },
      {
        "name": "布娃娃",
        "categroy": 1
      },
      {
        "name": "棉袜",
        "categroy": 1
      },
      {
        "name": "丝袜",
        "categroy": 8
      },
      {
        "name": "外套",
        "categroy": 1
      },
      {
        "name": "水笔外壳",
        "categroy": 8
      },
      {
        "name": "豌豆壳",
        "categroy": 4
      },
      {
        "name": "豌豆殼",
        "categroy": 4
      },
      {
        "name": "玩具",
        "categroy": 1
      },
      {
        "name": "药丸",
        "categroy": 2
      },
      {
        "name": "蟑螂丸",
        "categroy": 2
      },
      {
        "name": "擦完嘴的纸",
        "categroy": 8
      },
      {
        "name": "碗",
        "categroy": 8
      },
      {
        "name": "茶碗",
        "categroy": 8
      },
      {
        "name": "万能胶水",
        "categroy": 8
      },
      {
        "name": "网线",
        "categroy": 1
      },
      {
        "name": "鱼网",
        "categroy": 8
      },
      {
        "name": "望远镜",
        "categroy": 1
      },
      {
        "name": "夏威夷果",
        "categroy": 8
      },
      {
        "name": "夏威夷果壳",
        "categroy": 8
      },
      {
        "name": "夏威夷果的壳",
        "categroy": 8
      },
      {
        "name": "围巾",
        "categroy": 1
      },
      {
        "name": "华为P20",
        "categroy": 1
      },
      {
        "name": "维生素",
        "categroy": 2
      },
      {
        "name": "人造纤维",
        "categroy": 8
      },
      {
        "name": "芦苇叶",
        "categroy": 8
      },
      {
        "name": "枯萎的花",
        "categroy": 4
      },
      {
        "name": "枯萎的鲜花",
        "categroy": 4
      },
      {
        "name": "牛尾",
        "categroy": 4
      },
      {
        "name": "燕尾夹",
        "categroy": 1
      },
      {
        "name": "长尾夹",
        "categroy": 1
      },
      {
        "name": "未使用的餐巾纸",
        "categroy": 8
      },
      {
        "name": "调味袋",
        "categroy": 8
      },
      {
        "name": "调味料",
        "categroy": 4
      },
      {
        "name": "自慰棒",
        "categroy": 1
      },
      {
        "name": "自慰器",
        "categroy": 1
      },
      {
        "name": "卫衣",
        "categroy": 1
      },
      {
        "name": "卫生巾",
        "categroy": 8
      },
      {
        "name": "保温杯",
        "categroy": 1
      },
      {
        "name": "保温棉",
        "categroy": 8
      },
      {
        "name": "保温瓶",
        "categroy": 1
      },
      {
        "name": "蚊香",
        "categroy": 8
      },
      {
        "name": "蚊帐",
        "categroy": 1
      },
      {
        "name": "蚊子",
        "categroy": 4
      },
      {
        "name": "文胸",
        "categroy": 8
      },
      {
        "name": "文竹",
        "categroy": 4
      },
      {
        "name": "公文包",
        "categroy": 1
      },
      {
        "name": "蜗牛壳",
        "categroy": 8
      },
      {
        "name": "燕窝",
        "categroy": 4
      },
      {
        "name": "钨丝",
        "categroy": 1
      },
      {
        "name": "钨丝灯泡",
        "categroy": 2
      },
      {
        "name": "污水袋",
        "categroy": 8
      },
      {
        "name": "油污布",
        "categroy": 8
      },
      {
        "name": "无纺布",
        "categroy": 8
      },
      {
        "name": "无纺布袋",
        "categroy": 1
      },
      {
        "name": "午饭",
        "categroy": 4
      },
      {
        "name": "午餐肉",
        "categroy": 4
      },
      {
        "name": "午餐肉罐",
        "categroy": 1
      },
      {
        "name": "西瓜",
        "categroy": 4
      },
      {
        "name": "西药",
        "categroy": 2
      },
      {
        "name": "西柚",
        "categroy": 4
      },
      {
        "name": "吸尘器",
        "categroy": 1
      },
      {
        "name": "稀饭",
        "categroy": 4
      },
      {
        "name": "草席",
        "categroy": 8
      },
      {
        "name": "洗发精",
        "categroy": 8
      },
      {
        "name": "洗发水",
        "categroy": 8
      },
      {
        "name": "游戏机",
        "categroy": 1
      },
      {
        "name": "虾",
        "categroy": 4
      },
      {
        "name": "虾壳",
        "categroy": 4
      },
      {
        "name": "吃剩下的葡萄杆",
        "categroy": 4
      },
      {
        "name": "仙人掌",
        "categroy": 4
      },
      {
        "name": "海鲜",
        "categroy": 4
      },
      {
        "name": "鲜花",
        "categroy": 4
      },
      {
        "name": "保鲜袋",
        "categroy": 8
      },
      {
        "name": "化纤衣物",
        "categroy": 1
      },
      {
        "name": "咸菜",
        "categroy": 4
      },
      {
        "name": "咸鱼",
        "categroy": 4
      },
      {
        "name": "咸鸭蛋壳",
        "categroy": 4
      },
      {
        "name": "显卡",
        "categroy": 1
      },
      {
        "name": "保险套",
        "categroy": 8
      },
      {
        "name": "保险箱",
        "categroy": 1
      },
      {
        "name": "线",
        "categroy": 8
      },
      {
        "name": "电线",
        "categroy": 1
      },
      {
        "name": "相机",
        "categroy": 1
      },
      {
        "name": "茴香",
        "categroy": 4
      },
      {
        "name": "冰箱",
        "categroy": 1
      },
      {
        "name": "机箱",
        "categroy": 1
      },
      {
        "name": "墨襄",
        "categroy": 8
      },
      {
        "name": "音响",
        "categroy": 1
      },
      {
        "name": "电脑小音响",
        "categroy": 1
      },
      {
        "name": "橡胶",
        "categroy": 8
      },
      {
        "name": "橡皮",
        "categroy": 8
      },
      {
        "name": "废橡胶",
        "categroy": 8
      },
      {
        "name": "象牙",
        "categroy": 8
      },
      {
        "name": "小刀",
        "categroy": 1
      },
      {
        "name": "小骨",
        "categroy": 4
      },
      {
        "name": "羊蝎子",
        "categroy": 8
      },
      {
        "name": "羊蝎子骨头",
        "categroy": 8
      },
      {
        "name": "鞋",
        "categroy": 1
      },
      {
        "name": "布鞋",
        "categroy": 1
      },
      {
        "name": "写字纸",
        "categroy": 1
      },
      {
        "name": "机械表",
        "categroy": 1
      },
      {
        "name": "卸妆巾",
        "categroy": 8
      },
      {
        "name": "卸妆棉",
        "categroy": 8
      },
      {
        "name": "卸妆油",
        "categroy": 8
      },
      {
        "name": "蟹",
        "categroy": 4
      },
      {
        "name": "螃蟹",
        "categroy": 4
      },
      {
        "name": "青蟹",
        "categroy": 4
      },
      {
        "name": "笔屑",
        "categroy": 8
      },
      {
        "name": "木屑",
        "categroy": 8
      },
      {
        "name": "皮屑",
        "categroy": 8
      },
      {
        "name": "笔芯",
        "categroy": 8
      },
      {
        "name": "玉米心",
        "categroy": 4
      },
      {
        "name": "信封带",
        "categroy": 1
      },
      {
        "name": "星巴克纸杯",
        "categroy": 8
      },
      {
        "name": "U型回形针",
        "categroy": 8
      },
      {
        "name": "隐形眼镜",
        "categroy": 8
      },
      {
        "name": "银行卡",
        "categroy": 1
      },
      {
        "name": "杏仁壳",
        "categroy": 4
      },
      {
        "name": "水性笔",
        "categroy": 8
      },
      {
        "name": "水性漆",
        "categroy": 2
      },
      {
        "name": "鸡胸",
        "categroy": 4
      },
      {
        "name": "胸罩",
        "categroy": 8
      },
      {
        "name": "修正带",
        "categroy": 8
      },
      {
        "name": "小修正带",
        "categroy": 8
      },
      {
        "name": "不锈钢刀",
        "categroy": 1
      },
      {
        "name": "不锈钢杯子",
        "categroy": 1
      },
      {
        "name": "绣花针",
        "categroy": 8
      },
      {
        "name": "胡须刀",
        "categroy": 1
      },
      {
        "name": "旧棉絮",
        "categroy": 1
      },
      {
        "name": "宣纸",
        "categroy": 8
      },
      {
        "name": "宣传单",
        "categroy": 1
      },
      {
        "name": "皮靴",
        "categroy": 1
      },
      {
        "name": "雨靴",
        "categroy": 1
      },
      {
        "name": "化学试剂包装玻璃瓶",
        "categroy": 2
      },
      {
        "name": "雪糕棒",
        "categroy": 8
      },
      {
        "name": "雪糕纸",
        "categroy": 8
      },
      {
        "name": "鸭血",
        "categroy": 4
      },
      {
        "name": "血压计",
        "categroy": 1
      },
      {
        "name": "压力罐",
        "categroy": 1
      },
      {
        "name": "压力锅",
        "categroy": 1
      },
      {
        "name": "鸭",
        "categroy": 4
      },
      {
        "name": "鸭骨",
        "categroy": 4
      },
      {
        "name": "绿豆芽",
        "categroy": 4
      },
      {
        "name": "牙",
        "categroy": 8
      },
      {
        "name": "雅漾喷雾",
        "categroy": 8
      },
      {
        "name": "亚克力",
        "categroy": 1
      },
      {
        "name": "亚克力板",
        "categroy": 1
      },
      {
        "name": "亚克力胶水",
        "categroy": 8
      },
      {
        "name": "香烟",
        "categroy": 8
      },
      {
        "name": "盐",
        "categroy": 4
      },
      {
        "name": "污染严重的纸",
        "categroy": 8
      },
      {
        "name": "污染严重的纸盒",
        "categroy": 8
      },
      {
        "name": "污染严重的纸张",
        "categroy": 8
      },
      {
        "name": "颜料",
        "categroy": 8
      },
      {
        "name": "颜料板",
        "categroy": 8
      },
      {
        "name": "颜料笔",
        "categroy": 8
      },
      {
        "name": "过期的燕麦片",
        "categroy": 4
      },
      {
        "name": "验孕棒",
        "categroy": 8
      },
      {
        "name": "羊骨",
        "categroy": 8
      },
      {
        "name": "羊毛",
        "categroy": 1
      },
      {
        "name": "洋装",
        "categroy": 1
      },
      {
        "name": "海洋球",
        "categroy": 1
      },
      {
        "name": "遮阳帽",
        "categroy": 1
      },
      {
        "name": "除氧剂",
        "categroy": 8
      },
      {
        "name": "环氧树脂",
        "categroy": 8
      },
      {
        "name": "养生壶",
        "categroy": 1
      },
      {
        "name": "家养绿植",
        "categroy": 4
      },
      {
        "name": "腰带",
        "categroy": 1
      },
      {
        "name": "腰果",
        "categroy": 4
      },
      {
        "name": "高裤腰带",
        "categroy": 8
      },
      {
        "name": "咬过的口香糖",
        "categroy": 8
      },
      {
        "name": "草药",
        "categroy": 4
      },
      {
        "name": "废药",
        "categroy": 2
      },
      {
        "name": "青椰",
        "categroy": 8
      },
      {
        "name": "椰壳",
        "categroy": 8
      },
      {
        "name": "椰子",
        "categroy": 8
      },
      {
        "name": "宣传页",
        "categroy": 1
      },
      {
        "name": "广告单页",
        "categroy": 1
      },
      {
        "name": "作业本",
        "categroy": 1
      },
      {
        "name": "叶",
        "categroy": 4
      },
      {
        "name": "菜叶",
        "categroy": 4
      },
      {
        "name": "隔夜饭",
        "categroy": 4
      },
      {
        "name": "乳液罐",
        "categroy": 1
      },
      {
        "name": "乳液瓶",
        "categroy": 1
      },
      {
        "name": "医用冰袋",
        "categroy": 8
      },
      {
        "name": "大衣",
        "categroy": 1
      },
      {
        "name": "移动电源",
        "categroy": 1
      },
      {
        "name": "移动硬盘",
        "categroy": 1
      },
      {
        "name": "行车记录仪",
        "categroy": 1
      },
      {
        "name": "易拉宝",
        "categroy": 1
      },
      {
        "name": "易拉罐",
        "categroy": 1
      },
      {
        "name": "音箱",
        "categroy": 1
      },
      {
        "name": "旧音箱",
        "categroy": 1
      },
      {
        "name": "水银",
        "categroy": 2
      },
      {
        "name": "收银条",
        "categroy": 1
      },
      {
        "name": "隐形眼镜片",
        "categroy": 8
      },
      {
        "name": "过期隐形眼镜",
        "categroy": 8
      },
      {
        "name": "印泥",
        "categroy": 8
      },
      {
        "name": "打印机",
        "categroy": 1
      },
      {
        "name": "英语书",
        "categroy": 1
      },
      {
        "name": "樱花",
        "categroy": 4
      },
      {
        "name": "樱桃",
        "categroy": 4
      },
      {
        "name": "樱桃核",
        "categroy": 4
      },
      {
        "name": "婴儿尿不湿",
        "categroy": 8
      },
      {
        "name": "婴儿纸尿裤",
        "categroy": 8
      },
      {
        "name": "萤石",
        "categroy": 8
      },
      {
        "name": "荧光棒",
        "categroy": 8
      },
      {
        "name": "荧光笔",
        "categroy": 8
      },
      {
        "name": "眼影",
        "categroy": 8
      },
      {
        "name": "电影票",
        "categroy": 1
      },
      {
        "name": "影印纸",
        "categroy": 1
      },
      {
        "name": "硬盘",
        "categroy": 1
      },
      {
        "name": "硬板纸",
        "categroy": 1
      },
      {
        "name": "硬贝壳",
        "categroy": 8
      },
      {
        "name": "游泳裤",
        "categroy": 1
      },
      {
        "name": "信用卡",
        "categroy": 1
      },
      {
        "name": "包装用纸",
        "categroy": 1
      },
      {
        "name": "厕所用纸",
        "categroy": 8
      },
      {
        "name": "优盘",
        "categroy": 1
      },
      {
        "name": "无线路由器",
        "categroy": 1
      },
      {
        "name": "黄油",
        "categroy": 4
      },
      {
        "name": "有机玻璃",
        "categroy": 1
      },
      {
        "name": "婴幼儿尿布",
        "categroy": 8
      },
      {
        "name": "旧衣服属于",
        "categroy": 1
      },
      {
        "name": "厨余果皮",
        "categroy": 4
      },
      {
        "name": "厨余垃圾",
        "categroy": 4
      },
      {
        "name": "鱼",
        "categroy": 4
      },
      {
        "name": "黄鱼",
        "categroy": 4
      },
      {
        "name": "雨鞋",
        "categroy": 1
      },
      {
        "name": "语文书",
        "categroy": 1
      },
      {
        "name": "羽毛",
        "categroy": 8
      },
      {
        "name": "羽毛球",
        "categroy": 8
      },
      {
        "name": "玉",
        "categroy": 8
      },
      {
        "name": "玉米",
        "categroy": 4
      },
      {
        "name": "玉镯",
        "categroy": 1
      },
      {
        "name": "芋艿",
        "categroy": 4
      },
      {
        "name": "芋头",
        "categroy": 4
      },
      {
        "name": "浴巾",
        "categroy": 8
      },
      {
        "name": "金属元件",
        "categroy": 1
      },
      {
        "name": "原味鸡",
        "categroy": 4
      },
      {
        "name": "原珠笔",
        "categroy": 8
      },
      {
        "name": "原子笔",
        "categroy": 8
      },
      {
        "name": "芋圆",
        "categroy": 4
      },
      {
        "name": "电源器",
        "categroy": 1
      },
      {
        "name": "电源线",
        "categroy": 1
      },
      {
        "name": "月饼",
        "categroy": 4
      },
      {
        "name": "月饼盒",
        "categroy": 1
      },
      {
        "name": "运动服",
        "categroy": 1
      },
      {
        "name": "运动鞋",
        "categroy": 1
      },
      {
        "name": "旧运动鞋",
        "categroy": 1
      },
      {
        "name": "牛杂",
        "categroy": 4
      },
      {
        "name": "杂草",
        "categroy": 4
      },
      {
        "name": "杂志",
        "categroy": 1
      },
      {
        "name": "盆栽树叶",
        "categroy": 4
      },
      {
        "name": "盆栽植物",
        "categroy": 4
      },
      {
        "name": "再生纸",
        "categroy": 1
      },
      {
        "name": "脏布",
        "categroy": 8
      },
      {
        "name": "鱼内脏",
        "categroy": 4
      },
      {
        "name": "枣",
        "categroy": 4
      },
      {
        "name": "红枣",
        "categroy": 4
      },
      {
        "name": "枣核",
        "categroy": 4
      },
      {
        "name": "洗澡掉的头发",
        "categroy": 8
      },
      {
        "name": "人造玻璃",
        "categroy": 1
      },
      {
        "name": "人造奶油",
        "categroy": 4
      },
      {
        "name": "香皂",
        "categroy": 8
      },
      {
        "name": "碎小肥皂",
        "categroy": 8
      },
      {
        "name": "干燥剂",
        "categroy": 8
      },
      {
        "name": "包装干燥剂",
        "categroy": 8
      },
      {
        "name": "石灰干燥剂",
        "categroy": 8
      },
      {
        "name": "扎带",
        "categroy": 8
      },
      {
        "name": "粽子 包扎线",
        "categroy": 8
      },
      {
        "name": "菜渣",
        "categroy": 4
      },
      {
        "name": "茶渣",
        "categroy": 4
      },
      {
        "name": "豆渣",
        "categroy": 4
      },
      {
        "name": "大闸蟹",
        "categroy": 4
      },
      {
        "name": "大闸蟹壳",
        "categroy": 4
      },
      {
        "name": "炸鸡",
        "categroy": 4
      },
      {
        "name": "粘纸",
        "categroy": 8
      },
      {
        "name": "粘鼠板",
        "categroy": 8
      },
      {
        "name": "沾有墨水的纸",
        "categroy": 8
      },
      {
        "name": "沾了油污的报纸",
        "categroy": 1
      },
      {
        "name": "沾了菜油的餐巾纸",
        "categroy": 1
      },
      {
        "name": "蘸酱",
        "categroy": 4
      },
      {
        "name": "蘸酱盒",
        "categroy": 8
      },
      {
        "name": "火锅蘸酱",
        "categroy": 4
      },
      {
        "name": "图章",
        "categroy": 8
      },
      {
        "name": "章鱼",
        "categroy": 4
      },
      {
        "name": "纸张",
        "categroy": 1
      },
      {
        "name": "废纸张",
        "categroy": 1
      },
      {
        "name": "纸张类",
        "categroy": 1
      },
      {
        "name": "擀面杖",
        "categroy": 1
      },
      {
        "name": "账单",
        "categroy": 1
      },
      {
        "name": "照片",
        "categroy": 2
      },
      {
        "name": "旧照片",
        "categroy": 2
      },
      {
        "name": "照片纸",
        "categroy": 2
      },
      {
        "name": "床罩",
        "categroy": 1
      },
      {
        "name": "奶罩",
        "categroy": 8
      },
      {
        "name": "折扇",
        "categroy": 8
      },
      {
        "name": "蔗糖",
        "categroy": 4
      },
      {
        "name": "珍珠",
        "categroy": 1
      },
      {
        "name": "黑珍猪",
        "categroy": 4
      },
      {
        "name": "珍珠米",
        "categroy": 4
      },
      {
        "name": "真空袋",
        "categroy": 8
      },
      {
        "name": "砧板",
        "categroy": 1
      },
      {
        "name": "木砧板",
        "categroy": 1
      },
      {
        "name": "针",
        "categroy": 8
      },
      {
        "name": "针管",
        "categroy": 2
      },
      {
        "name": "枕套",
        "categroy": 1
      },
      {
        "name": "震动棒",
        "categroy": 1
      },
      {
        "name": "蒸汽眼罩",
        "categroy": 8
      },
      {
        "name": "修正带内芯",
        "categroy": 8
      },
      {
        "name": "证书",
        "categroy": 1
      },
      {
        "name": "芝麻",
        "categroy": 4
      },
      {
        "name": "树枝",
        "categroy": 8
      },
      {
        "name": "蜘蛛",
        "categroy": 4
      },
      {
        "name": "树脂",
        "categroy": 2
      },
      {
        "name": "油脂",
        "categroy": 8
      },
      {
        "name": "饭汁",
        "categroy": 4
      },
      {
        "name": "蟹汁",
        "categroy": 4
      },
      {
        "name": "织物",
        "categroy": 8
      },
      {
        "name": "直尺",
        "categroy": 8
      },
      {
        "name": "废直式日光灯管",
        "categroy": 2
      },
      {
        "name": "绿植",
        "categroy": 4
      },
      {
        "name": "植物",
        "categroy": 4
      },
      {
        "name": "废植物",
        "categroy": 4
      },
      {
        "name": "指甲",
        "categroy": 8
      },
      {
        "name": "脚指甲",
        "categroy": 8
      },
      {
        "name": "手指甲脚趾甲",
        "categroy": 8
      },
      {
        "name": "纸",
        "categroy": 1
      },
      {
        "name": "瓷制品",
        "categroy": 8
      },
      {
        "name": "铝制品",
        "categroy": 1
      },
      {
        "name": "木制品",
        "categroy": 1
      },
      {
        "name": "木质菜板",
        "categroy": 1
      },
      {
        "name": "三明治包装",
        "categroy": 8
      },
      {
        "name": "中药",
        "categroy": 4
      },
      {
        "name": "中草药",
        "categroy": 4
      },
      {
        "name": "钟",
        "categroy": 8
      },
      {
        "name": "粥",
        "categroy": 4
      },
      {
        "name": "圆珠笔",
        "categroy": 8
      },
      {
        "name": "猪",
        "categroy": 4
      },
      {
        "name": "毛竹",
        "categroy": 8
      },
      {
        "name": "蜡烛",
        "categroy": 8
      },
      {
        "name": "生日蜡烛",
        "categroy": 8
      },
      {
        "name": "白煮蛋壳",
        "categroy": 4
      },
      {
        "name": "水煮肉片",
        "categroy": 4
      },
      {
        "name": "煮花生壳",
        "categroy": 4
      },
      {
        "name": "主板",
        "categroy": 1
      },
      {
        "name": "主机板",
        "categroy": 1
      },
      {
        "name": "电路主板",
        "categroy": 1
      },
      {
        "name": "鸡爪",
        "categroy": 4
      },
      {
        "name": "猪爪骨头",
        "categroy": 4
      },
      {
        "name": "西装",
        "categroy": 1
      },
      {
        "name": "彩妆",
        "categroy": 8
      },
      {
        "name": "化妆棉",
        "categroy": 8
      },
      {
        "name": "防撞塑料",
        "categroy": 8
      },
      {
        "name": "塑胶制资料夹",
        "categroy": 1
      },
      {
        "name": "紫菜",
        "categroy": 4
      },
      {
        "name": "紫砂茶具",
        "categroy": 8
      },
      {
        "name": "紫砂碎片",
        "categroy": 8
      },
      {
        "name": "牛仔裤",
        "categroy": 1
      },
      {
        "name": "葡萄籽",
        "categroy": 4
      },
      {
        "name": "西瓜籽",
        "categroy": 4
      },
      {
        "name": "被子",
        "categroy": 1
      },
      {
        "name": "自动铅",
        "categroy": 8
      },
      {
        "name": "自暖包",
        "categroy": 8
      },
      {
        "name": "油渍的报纸",
        "categroy": 8
      },
      {
        "name": "有污渍的餐盒",
        "categroy": 8
      },
      {
        "name": "签字笔",
        "categroy": 8
      },
      {
        "name": "棕叶",
        "categroy": 8
      },
      {
        "name": "棕子皮",
        "categroy": 8
      },
      {
        "name": "棕子叶",
        "categroy": 8
      },
      {
        "name": "走油肉",
        "categroy": 4
      },
      {
        "name": "足球",
        "categroy": 1
      },
      {
        "name": "电钻",
        "categroy": 1
      },
      {
        "name": "钻笔",
        "categroy": 8
      },
      {
        "name": "钻石",
        "categroy": 1
      },
      {
        "name": "香烟过滤嘴",
        "categroy": 8
      },
      {
        "name": "作文书",
        "categroy": 1
      },
      {
        "name": "竹坐垫",
        "categroy": 8
      },
      {
        "name": "led灯",
        "categroy": 2
      },
      {
        "name": "PET瓶",
        "categroy": 1
      },
      {
        "name": "LED灯泡",
        "categroy": 2
      },
      {
        "name": "kt板",
        "categroy": 1
      },
      {
        "name": "cpu",
        "categroy": 1
      },
      {
        "name": "ipad",
        "categroy": 1
      },
      {
        "name": "kindle",
        "categroy": 1
      },
      {
        "name": "PIZZA盒",
        "categroy": 8
      },
      {
        "name": "xbox",
        "categroy": 1
      },
      {
        "name": "iphone x",
        "categroy": 1
      },
      {
        "name": "IPHONE手机",
        "categroy": 1
      },
      {
        "name": "pp管",
        "categroy": 1
      },
      {
        "name": "A4纸",
        "categroy": 1
      },
      {
        "name": "cd",
        "categroy": 1
      },
      {
        "name": "CD机",
        "categroy": 1
      },
      {
        "name": "KINDLE壳",
        "categroy": 8
      },
      {
        "name": "zippo打火机",
        "categroy": 8
      },
      {
        "name": "x光片",
        "categroy": 2
      },
      {
        "name": "x光胶片",
        "categroy": 2
      },
      {
        "name": "PVC瓶",
        "categroy": 1
      },
      {
        "name": "剩菜剩饭",
        "categroy": 4
      },
      {
        "name": "食物残渣",
        "categroy": 4
      },
      {
        "name": "肉类",
        "categroy": 4
      },
      {
        "name": "鱼虾",
        "categroy": 4
      },
      {
        "name": "蛋壳",
        "categroy": 4
      },
      {
        "name": "鱼骨头",
        "categroy": 4
      },
      {
        "name": "肉骨头",
        "categroy": 4
      },
      {
        "name": "果皮",
        "categroy": 4
      },
      {
        "name": "树叶",
        "categroy": 4
      },
      {
        "name": "瓜子壳",
        "categroy": 4
      },
      {
        "name": "花生壳",
        "categroy": 4
      },
      {
        "name": "藜麦",
        "categroy": 4
      },
      {
        "name": "鸡骨头",
        "categroy": 4
      },
      {
        "name": "鸭骨头",
        "categroy": 4
      },
      {
        "name": "鹅骨头",
        "categroy": 4
      },
      {
        "name": "草莓叶",
        "categroy": 4
      },
      {
        "name": "米饭",
        "categroy": 4
      },
      {
        "name": "豌豆皮",
        "categroy": 4
      },
      {
        "name": "韩国泡菜",
        "categroy": 4
      },
      {
        "name": "普洱茶",
        "categroy": 4
      },
      {
        "name": "残枝落叶",
        "categroy": 4
      },
      {
        "name": "植物枝干",
        "categroy": 4
      },
      {
        "name": "杂菜",
        "categroy": 4
      },
      {
        "name": "动物尸体",
        "categroy": 4
      },
      {
        "name": "牲畜粪便",
        "categroy": 4
      },
      {
        "name": "橘子皮",
        "categroy": 4
      },
      {
        "name": "香蕉皮",
        "categroy": 4
      },
      {
        "name": "苹果皮",
        "categroy": 4
      },
      {
        "name": "西瓜皮",
        "categroy": 4
      },
      {
        "name": "芒果皮",
        "categroy": 4
      },
      {
        "name": "山竹壳",
        "categroy": 4
      },
      {
        "name": "洋葱皮",
        "categroy": 4
      },
      {
        "name": "中药渣",
        "categroy": 4
      },
      {
        "name": "宠物饲料",
        "categroy": 4
      },
      {
        "name": "矿物猫砂",
        "categroy": 4
      },
      {
        "name": "食用油",
        "categroy": 4
      },
      {
        "name": "动物粪便",
        "categroy": 4
      },
      {
        "name": "牛排",
        "categroy": 4
      },
      {
        "name": "喜糖",
        "categroy": 4
      },
      {
        "name": "咖啡残渣",
        "categroy": 4
      },
      {
        "name": "大白菜",
        "categroy": 4
      },
      {
        "name": "粽子馅",
        "categroy": 4
      },
      {
        "name": "宠物粪便",
        "categroy": 4
      },
      {
        "name": "猫屎",
        "categroy": 4
      },
      {
        "name": "咖啡渣",
        "categroy": 4
      },
      {
        "name": "鲜花瓣",
        "categroy": 4
      },
      {
        "name": "豆腐猫砂",
        "categroy": 4
      },
      {
        "name": "冬枣",
        "categroy": 4
      },
      {
        "name": "大蒜叶",
        "categroy": 4
      },
      {
        "name": "杏核",
        "categroy": 4
      },
      {
        "name": "纸质吸管",
        "categroy": 4
      },
      {
        "name": "茶叶渣",
        "categroy": 4
      },
      {
        "name": "小龙虾壳",
        "categroy": 4
      },
      {
        "name": "榴莲酥",
        "categroy": 4
      },
      {
        "name": "榴莲肉",
        "categroy": 4
      },
      {
        "name": "枇杷核",
        "categroy": 4
      },
      {
        "name": "百香果壳",
        "categroy": 4
      },
      {
        "name": "食品添加剂",
        "categroy": 4
      },
      {
        "name": "豆制品",
        "categroy": 4
      },
      {
        "name": "动物内脏",
        "categroy": 4
      },
      {
        "name": "脆枣",
        "categroy": 4
      },
      {
        "name": "废弃食用油",
        "categroy": 4
      },
      {
        "name": "废弃调味品",
        "categroy": 4
      },
      {
        "name": "糖果",
        "categroy": 4
      },
      {
        "name": "水蜜桃肉",
        "categroy": 4
      },
      {
        "name": "火龙果",
        "categroy": 4
      },
      {
        "name": "火锅底料",
        "categroy": 4
      },
      {
        "name": "螺蛳肉",
        "categroy": 4
      },
      {
        "name": "排骨",
        "categroy": 4
      },
      {
        "name": "蒜皮",
        "categroy": 4
      },
      {
        "name": "叉烧酥",
        "categroy": 4
      },
      {
        "name": "菠萝皮",
        "categroy": 4
      },
      {
        "name": "南瓜籽",
        "categroy": 4
      },
      {
        "name": "香瓜子",
        "categroy": 4
      },
      {
        "name": "青椒",
        "categroy": 4
      },
      {
        "name": "蒜头",
        "categroy": 4
      },
      {
        "name": "毛豆壳",
        "categroy": 4
      },
      {
        "name": "鸡肉",
        "categroy": 4
      },
      {
        "name": "鸭掌",
        "categroy": 4
      },
      {
        "name": "鱼肉",
        "categroy": 4
      },
      {
        "name": "荔枝皮",
        "categroy": 4
      },
      {
        "name": "方便面面条",
        "categroy": 4
      },
      {
        "name": "螺蛳壳",
        "categroy": 4
      },
      {
        "name": "牛油果核",
        "categroy": 4
      },
      {
        "name": "老鼠",
        "categroy": 4
      },
      {
        "name": "包裹着猫屎的豆腐猫砂",
        "categroy": 4
      },
      {
        "name": "茭白",
        "categroy": 4
      },
      {
        "name": "茭白叶",
        "categroy": 4
      },
      {
        "name": "葡萄干",
        "categroy": 4
      },
      {
        "name": "火龙果皮",
        "categroy": 4
      },
      {
        "name": "椰肉",
        "categroy": 4
      },
      {
        "name": "苹果肉",
        "categroy": 4
      },
      {
        "name": "香瓜皮",
        "categroy": 4
      },
      {
        "name": "扁豆",
        "categroy": 4
      },
      {
        "name": "玉米须",
        "categroy": 4
      },
      {
        "name": "兔子粪便",
        "categroy": 4
      },
      {
        "name": "螃蟹壳",
        "categroy": 4
      },
      {
        "name": "吸管纸质包装",
        "categroy": 4
      },
      {
        "name": "西餐糕点",
        "categroy": 4
      },
      {
        "name": "鸡脚爪",
        "categroy": 4
      },
      {
        "name": "鸭爪",
        "categroy": 4
      },
      {
        "name": "山楂",
        "categroy": 4
      },
      {
        "name": "鸭翅",
        "categroy": 4
      },
      {
        "name": "扇贝肉",
        "categroy": 4
      },
      {
        "name": "火锅渣",
        "categroy": 4
      },
      {
        "name": "布丁",
        "categroy": 4
      },
      {
        "name": "奶茶中的珍珠",
        "categroy": 4
      },
      {
        "name": "燕麦",
        "categroy": 4
      },
      {
        "name": "薯格",
        "categroy": 4
      },
      {
        "name": "甜品",
        "categroy": 4
      },
      {
        "name": "水果",
        "categroy": 4
      },
      {
        "name": "枯树叶",
        "categroy": 4
      },
      {
        "name": "蔬菜残余",
        "categroy": 4
      },
      {
        "name": "西兰花梗",
        "categroy": 4
      },
      {
        "name": "桃子",
        "categroy": 4
      },
      {
        "name": "压缩饼干",
        "categroy": 4
      },
      {
        "name": "花生衣",
        "categroy": 4
      },
      {
        "name": "结团猫砂",
        "categroy": 4
      },
      {
        "name": "红豆",
        "categroy": 4
      },
      {
        "name": "熟鸡蛋壳",
        "categroy": 4
      },
      {
        "name": "蟑螂",
        "categroy": 4
      },
      {
        "name": "西瓜子",
        "categroy": 4
      },
      {
        "name": "鸡屎",
        "categroy": 4
      },
      {
        "name": "盒饭",
        "categroy": 4
      },
      {
        "name": "奶油",
        "categroy": 4
      },
      {
        "name": "豆芽",
        "categroy": 4
      },
      {
        "name": "杏仁饼",
        "categroy": 4
      },
      {
        "name": "猫屎咖啡",
        "categroy": 4
      },
      {
        "name": "水果干",
        "categroy": 4
      },
      {
        "name": "鸭腿",
        "categroy": 4
      },
      {
        "name": "车厘子核",
        "categroy": 4
      },
      {
        "name": "平菇",
        "categroy": 4
      },
      {
        "name": "金针菇",
        "categroy": 4
      },
      {
        "name": "茨菇",
        "categroy": 4
      },
      {
        "name": "藕片",
        "categroy": 4
      },
      {
        "name": "葡萄梗",
        "categroy": 4
      },
      {
        "name": "咖啡豆",
        "categroy": 4
      },
      {
        "name": "丝瓜皮",
        "categroy": 4
      },
      {
        "name": "烂水果",
        "categroy": 4
      },
      {
        "name": "鸡皮",
        "categroy": 4
      },
      {
        "name": "海瓜子壳",
        "categroy": 4
      },
      {
        "name": "桂皮",
        "categroy": 4
      },
      {
        "name": "鸡蛋仔",
        "categroy": 4
      },
      {
        "name": "螺蛳",
        "categroy": 4
      },
      {
        "name": "猪蹄骨",
        "categroy": 4
      },
      {
        "name": "过期大米",
        "categroy": 4
      },
      {
        "name": "过期糖",
        "categroy": 4
      },
      {
        "name": "过期巧克力",
        "categroy": 4
      },
      {
        "name": "巧克力酱",
        "categroy": 4
      },
      {
        "name": "李子",
        "categroy": 4
      },
      {
        "name": "鸟粪",
        "categroy": 4
      },
      {
        "name": "栗子壳",
        "categroy": 4
      },
      {
        "name": "核桃肉",
        "categroy": 4
      },
      {
        "name": "李子核",
        "categroy": 4
      },
      {
        "name": "薯条",
        "categroy": 4
      },
      {
        "name": "柠檬皮",
        "categroy": 4
      },
      {
        "name": "柚子皮",
        "categroy": 4
      },
      {
        "name": "蛋白",
        "categroy": 4
      },
      {
        "name": "干果仁",
        "categroy": 4
      },
      {
        "name": "橄榄核",
        "categroy": 4
      },
      {
        "name": "姜糖",
        "categroy": 4
      },
      {
        "name": "瓜子皮",
        "categroy": 4
      },
      {
        "name": "玉米棒",
        "categroy": 4
      },
      {
        "name": "过期食品",
        "categroy": 4
      },
      {
        "name": "虾头",
        "categroy": 4
      },
      {
        "name": "牛蛙骨",
        "categroy": 4
      },
      {
        "name": "杨梅核",
        "categroy": 4
      },
      {
        "name": "过期调味料",
        "categroy": 4
      },
      {
        "name": "孜然粉",
        "categroy": 4
      },
      {
        "name": "蜂蜜",
        "categroy": 4
      },
      {
        "name": "红豆糕",
        "categroy": 4
      },
      {
        "name": "叉烧",
        "categroy": 4
      },
      {
        "name": "菠萝包",
        "categroy": 4
      },
      {
        "name": "干面条",
        "categroy": 4
      },
      {
        "name": "干脆面",
        "categroy": 4
      },
      {
        "name": "出前一丁面条",
        "categroy": 4
      },
      {
        "name": "多宝鱼骨头",
        "categroy": 4
      },
      {
        "name": "草本植物",
        "categroy": 4
      },
      {
        "name": "小核桃肉",
        "categroy": 4
      },
      {
        "name": "凋谢的鲜花",
        "categroy": 4
      },
      {
        "name": "咖啡豆渣",
        "categroy": 4
      },
      {
        "name": "蚌肉",
        "categroy": 4
      },
      {
        "name": "盐水花生",
        "categroy": 4
      },
      {
        "name": "盐水花生壳",
        "categroy": 4
      },
      {
        "name": "豆浆渣",
        "categroy": 4
      },
      {
        "name": "红枣核",
        "categroy": 4
      },
      {
        "name": "枣子核",
        "categroy": 4
      },
      {
        "name": "面粉",
        "categroy": 4
      },
      {
        "name": "咖啡粉",
        "categroy": 4
      },
      {
        "name": "桔子皮",
        "categroy": 4
      },
      {
        "name": "橘子",
        "categroy": 4
      },
      {
        "name": "牛油果皮",
        "categroy": 4
      },
      {
        "name": "油桃肉",
        "categroy": 4
      },
      {
        "name": "水蜜桃",
        "categroy": 4
      },
      {
        "name": "樱桃干",
        "categroy": 4
      },
      {
        "name": "龙虾片",
        "categroy": 4
      },
      {
        "name": "土豆泥",
        "categroy": 4
      },
      {
        "name": "废弃植物",
        "categroy": 4
      },
      {
        "name": "玉米猫砂",
        "categroy": 4
      },
      {
        "name": "油烟机油脂",
        "categroy": 4
      },
      {
        "name": "油条",
        "categroy": 4
      },
      {
        "name": "紫薯皮",
        "categroy": 4
      },
      {
        "name": "燕麦片",
        "categroy": 4
      },
      {
        "name": "小米",
        "categroy": 4
      },
      {
        "name": "糯米",
        "categroy": 4
      },
      {
        "name": "白糖",
        "categroy": 4
      },
      {
        "name": "榨菜",
        "categroy": 4
      },
      {
        "name": "油桃核",
        "categroy": 4
      },
      {
        "name": "酸豆角",
        "categroy": 4
      },
      {
        "name": "牛肉",
        "categroy": 4
      },
      {
        "name": "鸭肉",
        "categroy": 4
      },
      {
        "name": "话梅肉",
        "categroy": 4
      },
      {
        "name": "鱼皮花生",
        "categroy": 4
      },
      {
        "name": "咸蛋黄",
        "categroy": 4
      },
      {
        "name": "冬瓜皮",
        "categroy": 4
      },
      {
        "name": "咖啡伴侣粉",
        "categroy": 4
      },
      {
        "name": "苦瓜",
        "categroy": 4
      },
      {
        "name": "小龙虾头",
        "categroy": 4
      },
      {
        "name": "石榴",
        "categroy": 4
      },
      {
        "name": "石榴籽",
        "categroy": 4
      },
      {
        "name": "叫化鸡",
        "categroy": 4
      },
      {
        "name": "干辣椒",
        "categroy": 4
      },
      {
        "name": "山药",
        "categroy": 4
      },
      {
        "name": "土豆皮",
        "categroy": 4
      },
      {
        "name": "炒花生米",
        "categroy": 4
      },
      {
        "name": "蟹肉",
        "categroy": 4
      },
      {
        "name": "虾肉",
        "categroy": 4
      },
      {
        "name": "速冻馄饨",
        "categroy": 4
      },
      {
        "name": "棒棒糖",
        "categroy": 4
      },
      {
        "name": "蛤肉",
        "categroy": 4
      },
      {
        "name": "小龙虾肉",
        "categroy": 4
      },
      {
        "name": "蚕豆",
        "categroy": 4
      },
      {
        "name": "樱桃梗",
        "categroy": 4
      },
      {
        "name": "水果皮",
        "categroy": 4
      },
      {
        "name": "皮蛋",
        "categroy": 4
      },
      {
        "name": "咸蛋",
        "categroy": 4
      },
      {
        "name": "奇异果",
        "categroy": 4
      },
      {
        "name": "花甲壳",
        "categroy": 4
      },
      {
        "name": "海底捞锅底",
        "categroy": 4
      },
      {
        "name": "牛肉干",
        "categroy": 4
      },
      {
        "name": "椰果",
        "categroy": 4
      },
      {
        "name": "鸭下巴",
        "categroy": 4
      },
      {
        "name": "芝麻酱",
        "categroy": 4
      },
      {
        "name": "花生酱",
        "categroy": 4
      },
      {
        "name": "小龙虾黄",
        "categroy": 4
      },
      {
        "name": "肯德基炸鸡",
        "categroy": 4
      },
      {
        "name": "麦当劳炸鸡",
        "categroy": 4
      },
      {
        "name": "面饼",
        "categroy": 4
      },
      {
        "name": "鸡蛋饼",
        "categroy": 4
      },
      {
        "name": "煎饼",
        "categroy": 4
      },
      {
        "name": "哈密瓜",
        "categroy": 4
      },
      {
        "name": "哈密瓜籽",
        "categroy": 4
      },
      {
        "name": "干树叶",
        "categroy": 4
      },
      {
        "name": "绿豆糕",
        "categroy": 4
      },
      {
        "name": "乒乓糯米糍",
        "categroy": 4
      },
      {
        "name": "杏仁核",
        "categroy": 4
      },
      {
        "name": "黄杏核",
        "categroy": 4
      },
      {
        "name": "茶叶",
        "categroy": 4
      },
      {
        "name": "铁观音",
        "categroy": 4
      },
      {
        "name": "乌龙茶",
        "categroy": 4
      },
      {
        "name": "白茶",
        "categroy": 4
      },
      {
        "name": "桔普茶",
        "categroy": 4
      },
      {
        "name": "水草",
        "categroy": 4
      },
      {
        "name": "海藻",
        "categroy": 4
      },
      {
        "name": "水果软核",
        "categroy": 4
      },
      {
        "name": "咖喱粉",
        "categroy": 4
      },
      {
        "name": "瓜子",
        "categroy": 4
      },
      {
        "name": "大蒜皮",
        "categroy": 4
      },
      {
        "name": "扇贝壳",
        "categroy": 4
      },
      {
        "name": "咸蛋壳",
        "categroy": 4
      },
      {
        "name": "鸭蛋壳",
        "categroy": 4
      },
      {
        "name": "凤梨皮",
        "categroy": 4
      },
      {
        "name": "面包屑",
        "categroy": 4
      },
      {
        "name": "小龙虾",
        "categroy": 4
      },
      {
        "name": "香榧子壳",
        "categroy": 4
      },
      {
        "name": "鸡蛋皮",
        "categroy": 4
      },
      {
        "name": "凤梨酥",
        "categroy": 4
      },
      {
        "name": "苹果派",
        "categroy": 4
      },
      {
        "name": "玉米芯",
        "categroy": 4
      },
      {
        "name": "黄瓜皮",
        "categroy": 4
      },
      {
        "name": "橙子皮",
        "categroy": 4
      },
      {
        "name": "生鸡蛋壳",
        "categroy": 4
      },
      {
        "name": "花茶渣",
        "categroy": 4
      },
      {
        "name": "荷叶",
        "categroy": 4
      },
      {
        "name": "柚子核",
        "categroy": 4
      },
      {
        "name": "青蟹壳",
        "categroy": 4
      },
      {
        "name": "山楂片",
        "categroy": 4
      },
      {
        "name": "红辣椒",
        "categroy": 4
      },
      {
        "name": "巧克力粉",
        "categroy": 4
      },
      {
        "name": "鸭架",
        "categroy": 4
      },
      {
        "name": "白砂糖",
        "categroy": 4
      },
      {
        "name": "鸽粪",
        "categroy": 4
      },
      {
        "name": "桃子皮",
        "categroy": 4
      },
      {
        "name": "桂圆干",
        "categroy": 4
      },
      {
        "name": "中草药材",
        "categroy": 4
      },
      {
        "name": "梭子蟹壳",
        "categroy": 4
      },
      {
        "name": "河虾",
        "categroy": 4
      },
      {
        "name": "白米虾",
        "categroy": 4
      },
      {
        "name": "象鼻蚌",
        "categroy": 4
      },
      {
        "name": "水蜜桃核",
        "categroy": 4
      },
      {
        "name": "糯米纸",
        "categroy": 4
      },
      {
        "name": "鸡蛋卷",
        "categroy": 4
      },
      {
        "name": "鸡蛋壳",
        "categroy": 4
      },
      {
        "name": "豆干",
        "categroy": 4
      },
      {
        "name": "豆腐干",
        "categroy": 4
      },
      {
        "name": "冬瓜籽",
        "categroy": 4
      },
      {
        "name": "向日葵花束",
        "categroy": 4
      },
      {
        "name": "枯萎花束",
        "categroy": 4
      },
      {
        "name": "笋干",
        "categroy": 4
      },
      {
        "name": "白煮蛋",
        "categroy": 4
      },
      {
        "name": "花蛤肉",
        "categroy": 4
      },
      {
        "name": "蛋黄酥",
        "categroy": 4
      },
      {
        "name": "油墩子",
        "categroy": 4
      },
      {
        "name": "葱油饼",
        "categroy": 4
      },
      {
        "name": "山东煎饼",
        "categroy": 4
      },
      {
        "name": "碎骨头",
        "categroy": 4
      },
      {
        "name": "枸杞",
        "categroy": 4
      },
      {
        "name": "猪肝",
        "categroy": 4
      },
      {
        "name": "碧根果肉",
        "categroy": 4
      },
      {
        "name": "茭白皮",
        "categroy": 4
      },
      {
        "name": "西葫芦",
        "categroy": 4
      },
      {
        "name": "猪肉",
        "categroy": 4
      },
      {
        "name": "小排骨",
        "categroy": 4
      },
      {
        "name": "沙拉酱",
        "categroy": 4
      },
      {
        "name": "拉菲草",
        "categroy": 4
      },
      {
        "name": "大白兔奶糖",
        "categroy": 4
      },
      {
        "name": "猕猴桃皮",
        "categroy": 4
      },
      {
        "name": "桃仁",
        "categroy": 4
      },
      {
        "name": "杨梅干",
        "categroy": 4
      },
      {
        "name": "带子壳",
        "categroy": 4
      },
      {
        "name": "玉米塑料袋",
        "categroy": 4
      },
      {
        "name": "鸭头",
        "categroy": 4
      },
      {
        "name": "翅尖",
        "categroy": 4
      },
      {
        "name": "番茄沙司",
        "categroy": 4
      },
      {
        "name": "巴旦木",
        "categroy": 4
      },
      {
        "name": "叶子",
        "categroy": 4
      },
      {
        "name": "鸭舌",
        "categroy": 4
      },
      {
        "name": "黄芪",
        "categroy": 4
      },
      {
        "name": "三七粉",
        "categroy": 4
      },
      {
        "name": "章鱼小丸子",
        "categroy": 4
      },
      {
        "name": "鱿鱼",
        "categroy": 4
      },
      {
        "name": "鱿鱼丝",
        "categroy": 4
      },
      {
        "name": "生蚝肉",
        "categroy": 4
      },
      {
        "name": "枇杷",
        "categroy": 4
      },
      {
        "name": "烤鸭",
        "categroy": 4
      },
      {
        "name": "北京烤鸭",
        "categroy": 1
      },
      {
        "name": "洋山芋",
        "categroy": 4
      },
      {
        "name": "铁棍山药",
        "categroy": 4
      },
      {
        "name": "鸭锁骨",
        "categroy": 4
      },
      {
        "name": "海星",
        "categroy": 4
      },
      {
        "name": "黑椒牛排",
        "categroy": 4
      },
      {
        "name": "杨桃",
        "categroy": 4
      },
      {
        "name": "胡萝卜皮",
        "categroy": 4
      },
      {
        "name": "生肉",
        "categroy": 4
      },
      {
        "name": "皮蛋壳",
        "categroy": 4
      },
      {
        "name": "山楂干",
        "categroy": 4
      },
      {
        "name": "番茄皮",
        "categroy": 4
      },
      {
        "name": "番茄梗",
        "categroy": 4
      },
      {
        "name": "鲜花饼",
        "categroy": 4
      },
      {
        "name": "公丁香",
        "categroy": 4
      },
      {
        "name": "薄荷叶",
        "categroy": 4
      },
      {
        "name": "花甲粉",
        "categroy": 4
      },
      {
        "name": "金丝皇菊",
        "categroy": 4
      },
      {
        "name": "火腿肠",
        "categroy": 4
      },
      {
        "name": "藏红花",
        "categroy": 4
      },
      {
        "name": "基围虾",
        "categroy": 4
      },
      {
        "name": "基围虾壳",
        "categroy": 4
      },
      {
        "name": "烘山芋皮",
        "categroy": 4
      },
      {
        "name": "茶叶蛋壳",
        "categroy": 4
      },
      {
        "name": "咸鸡",
        "categroy": 4
      },
      {
        "name": "烤鸡",
        "categroy": 4
      },
      {
        "name": "盐水鸭",
        "categroy": 4
      },
      {
        "name": "银耳",
        "categroy": 4
      },
      {
        "name": "意大利面",
        "categroy": 4
      },
      {
        "name": "烧饼",
        "categroy": 4
      },
      {
        "name": "红薯皮",
        "categroy": 4
      },
      {
        "name": "雪花酥",
        "categroy": 4
      },
      {
        "name": "干桂圆壳",
        "categroy": 4
      },
      {
        "name": "丝瓜",
        "categroy": 4
      },
      {
        "name": "玉米粒",
        "categroy": 4
      },
      {
        "name": "胖大海",
        "categroy": 4
      },
      {
        "name": "干面粉",
        "categroy": 4
      },
      {
        "name": "薰衣草",
        "categroy": 4
      },
      {
        "name": "干花生壳",
        "categroy": 4
      },
      {
        "name": "猫冻干",
        "categroy": 4
      },
      {
        "name": "麻辣香锅残渣",
        "categroy": 4
      },
      {
        "name": "菠萝蜜肉",
        "categroy": 4
      },
      {
        "name": "五香蛋",
        "categroy": 4
      },
      {
        "name": "莴苣",
        "categroy": 4
      },
      {
        "name": "蒲公英",
        "categroy": 4
      },
      {
        "name": "小笼包",
        "categroy": 4
      },
      {
        "name": "灌汤包",
        "categroy": 4
      },
      {
        "name": "德克士炸鸡",
        "categroy": 4
      },
      {
        "name": "鲫鱼",
        "categroy": 4
      },
      {
        "name": "鳜鱼",
        "categroy": 4
      },
      {
        "name": "粉丝",
        "categroy": 4
      },
      {
        "name": "木耳",
        "categroy": 4
      },
      {
        "name": "花草茶渣",
        "categroy": 4
      },
      {
        "name": "肉夹馍",
        "categroy": 4
      },
      {
        "name": "粗盐",
        "categroy": 4
      },
      {
        "name": "豆杆",
        "categroy": 4
      },
      {
        "name": "青豆",
        "categroy": 4
      },
      {
        "name": "青豆萁",
        "categroy": 4
      },
      {
        "name": "饺子皮",
        "categroy": 4
      },
      {
        "name": "馄饨皮",
        "categroy": 4
      },
      {
        "name": "白瓜子",
        "categroy": 4
      },
      {
        "name": "煎饼果子",
        "categroy": 4
      },
      {
        "name": "小葱",
        "categroy": 4
      },
      {
        "name": "木瓜",
        "categroy": 4
      },
      {
        "name": "木瓜籽",
        "categroy": 4
      },
      {
        "name": "可降解吸管",
        "categroy": 4
      },
      {
        "name": "小肉骨头",
        "categroy": 4
      },
      {
        "name": "螺蛳粉",
        "categroy": 4
      },
      {
        "name": "芋艿皮",
        "categroy": 4
      },
      {
        "name": "花椒粉",
        "categroy": 4
      },
      {
        "name": "绿豆沙",
        "categroy": 4
      },
      {
        "name": "荞麦",
        "categroy": 4
      },
      {
        "name": "荞麦面",
        "categroy": 4
      },
      {
        "name": "阿胶",
        "categroy": 4
      },
      {
        "name": "宽粉条",
        "categroy": 4
      },
      {
        "name": "毛豆皮",
        "categroy": 4
      },
      {
        "name": "麦片",
        "categroy": 4
      },
      {
        "name": "纸吸管",
        "categroy": 4
      },
      {
        "name": "调制海藻面膜",
        "categroy": 4
      },
      {
        "name": "桂花糕",
        "categroy": 4
      },
      {
        "name": "猪皮",
        "categroy": 4
      },
      {
        "name": "臭虫",
        "categroy": 4
      },
      {
        "name": "芡实糕",
        "categroy": 4
      },
      {
        "name": "牛轧糖",
        "categroy": 4
      },
      {
        "name": "火鸡骨头",
        "categroy": 4
      },
      {
        "name": "鸡头",
        "categroy": 4
      },
      {
        "name": "猪排",
        "categroy": 4
      },
      {
        "name": "猪扒",
        "categroy": 4
      },
      {
        "name": "蜗牛",
        "categroy": 4
      },
      {
        "name": "鱼饲料",
        "categroy": 4
      },
      {
        "name": "银杏果",
        "categroy": 4
      },
      {
        "name": "麻花",
        "categroy": 4
      },
      {
        "name": "鱼头",
        "categroy": 4
      },
      {
        "name": "早餐谷物",
        "categroy": 4
      },
      {
        "name": "猪小排",
        "categroy": 4
      },
      {
        "name": "猪肉排骨",
        "categroy": 4
      },
      {
        "name": "玉米纤维袋",
        "categroy": 4
      },
      {
        "name": "话梅壳",
        "categroy": 4
      },
      {
        "name": "乌梅壳",
        "categroy": 4
      },
      {
        "name": "山竹核",
        "categroy": 4
      },
      {
        "name": "鸡软骨",
        "categroy": 4
      },
      {
        "name": "杏子核",
        "categroy": 4
      },
      {
        "name": "虾皮",
        "categroy": 4
      },
      {
        "name": "虾米",
        "categroy": 4
      },
      {
        "name": "蟠桃核",
        "categroy": 4
      },
      {
        "name": "手擀面",
        "categroy": 4
      },
      {
        "name": "甲鱼小骨",
        "categroy": 4
      },
      {
        "name": "猪肋排",
        "categroy": 4
      },
      {
        "name": "里脊肉",
        "categroy": 4
      },
      {
        "name": "木薯淀粉",
        "categroy": 4
      },
      {
        "name": "香蕉干",
        "categroy": 4
      },
      {
        "name": "鸭皮",
        "categroy": 4
      },
      {
        "name": "纸巾",
        "categroy": 8
      },
      {
        "name": "牙签",
        "categroy": 8
      },
      {
        "name": "一次性筷子",
        "categroy": 8
      },
      {
        "name": "陶瓷类废弃物",
        "categroy": 8
      },
      {
        "name": "清扫渣土",
        "categroy": 8
      },
      {
        "name": "陶瓷碗碟",
        "categroy": 8
      },
      {
        "name": "大块骨头",
        "categroy": 8
      },
      {
        "name": "植物硬壳",
        "categroy": 8
      },
      {
        "name": "枯萎花草",
        "categroy": 8
      },
      {
        "name": "塑料袋",
        "categroy": 8
      },
      {
        "name": "保鲜膜",
        "categroy": 8
      },
      {
        "name": "A4纸包装袋",
        "categroy": 8
      },
      {
        "name": "零食包装袋",
        "categroy": 8
      },
      {
        "name": "快递包装袋",
        "categroy": 8
      },
      {
        "name": "热饮杯盖",
        "categroy": 8
      },
      {
        "name": "咖啡杯杯盖",
        "categroy": 8
      },
      {
        "name": "干电池（无汞）",
        "categroy": 8
      },
      {
        "name": "纸尿裤",
        "categroy": 8
      },
      {
        "name": "卫生纸",
        "categroy": 8
      },
      {
        "name": "卫生巾外层薄塑纸",
        "categroy": 8
      },
      {
        "name": "湿纸巾",
        "categroy": 8
      },
      {
        "name": "旧浴缸",
        "categroy": 8
      },
      {
        "name": "盆子",
        "categroy": 8
      },
      {
        "name": "坏马桶",
        "categroy": 8
      },
      {
        "name": "旧水槽",
        "categroy": 8
      },
      {
        "name": "坛子",
        "categroy": 8
      },
      {
        "name": "菜板",
        "categroy": 8
      },
      {
        "name": "砖块",
        "categroy": 8
      },
      {
        "name": "杯子",
        "categroy": 8
      },
      {
        "name": "瓦片",
        "categroy": 8
      },
      {
        "name": "西梅核",
        "categroy": 8
      },
      {
        "name": "坏的花盆",
        "categroy": 8
      },
      {
        "name": "木质梳子",
        "categroy": 8
      },
      {
        "name": "脏污衣服",
        "categroy": 8
      },
      {
        "name": "湿垃圾袋",
        "categroy": 8
      },
      {
        "name": "水彩笔",
        "categroy": 8
      },
      {
        "name": "过期化妆品",
        "categroy": 8
      },
      {
        "name": "旧镜子",
        "categroy": 8
      },
      {
        "name": "猫罐头",
        "categroy": 8
      },
      {
        "name": "牙膏壳",
        "categroy": 8
      },
      {
        "name": "椰子壳",
        "categroy": 8
      },
      {
        "name": "塑料垃圾袋",
        "categroy": 8
      },
      {
        "name": "污染纸张",
        "categroy": 8
      },
      {
        "name": "废弃食品袋",
        "categroy": 8
      },
      {
        "name": "一次性餐盒",
        "categroy": 8
      },
      {
        "name": "旧毛巾",
        "categroy": 8
      },
      {
        "name": "牙膏皮",
        "categroy": 8
      },
      {
        "name": "废弃的纸张",
        "categroy": 8
      },
      {
        "name": "装修废弃物",
        "categroy": 8
      },
      {
        "name": "盛放厨余果皮的垃圾袋",
        "categroy": 8
      },
      {
        "name": "灰土",
        "categroy": 8
      },
      {
        "name": "污染较严重的纸",
        "categroy": 8
      },
      {
        "name": "核桃壳",
        "categroy": 8
      },
      {
        "name": "头发",
        "categroy": 8
      },
      {
        "name": "胶带",
        "categroy": 8
      },
      {
        "name": "一次性咖啡纸杯",
        "categroy": 8
      },
      {
        "name": "奶茶纸杯",
        "categroy": 8
      },
      {
        "name": "护理垫",
        "categroy": 8
      },
      {
        "name": "包裹着狗屎的纸巾",
        "categroy": 8
      },
      {
        "name": "包裹着狗屎的报纸",
        "categroy": 8
      },
      {
        "name": "雪糕袋",
        "categroy": 8
      },
      {
        "name": "棉花棒",
        "categroy": 8
      },
      {
        "name": "橡皮泥",
        "categroy": 8
      },
      {
        "name": "粽叶",
        "categroy": 8
      },
      {
        "name": "猫毛",
        "categroy": 8
      },
      {
        "name": "小票",
        "categroy": 8
      },
      {
        "name": "蚊香片",
        "categroy": 8
      },
      {
        "name": "暖宝宝",
        "categroy": 8
      },
      {
        "name": "干冰",
        "categroy": 8
      },
      {
        "name": "铅笔屑",
        "categroy": 8
      },
      {
        "name": "被污染的垃圾袋",
        "categroy": 8
      },
      {
        "name": "田螺壳",
        "categroy": 4
      },
      {
        "name": "蛏子壳",
        "categroy": 8
      },
      {
        "name": "文蛤壳",
        "categroy": 8
      },
      {
        "name": "水彩颜料",
        "categroy": 8
      },
      {
        "name": "一次性口罩",
        "categroy": 8
      },
      {
        "name": "口香糖",
        "categroy": 8
      },
      {
        "name": "一次性塑料袋",
        "categroy": 8
      },
      {
        "name": "污渍纸巾",
        "categroy": 8
      },
      {
        "name": "木瓶塞",
        "categroy": 8
      },
      {
        "name": "指甲片",
        "categroy": 8
      },
      {
        "name": "大米袋",
        "categroy": 8
      },
      {
        "name": "烟盒",
        "categroy": 1
      },
      {
        "name": "烧烤木签",
        "categroy": 8
      },
      {
        "name": "棉花球",
        "categroy": 8
      },
      {
        "name": "泡沫盒子",
        "categroy": 8
      },
      {
        "name": "大龙虾壳",
        "categroy": 8
      },
      {
        "name": "中药袋",
        "categroy": 8
      },
      {
        "name": "胶带纸",
        "categroy": 8
      },
      {
        "name": "薯片罐",
        "categroy": 8
      },
      {
        "name": "牙线",
        "categroy": 8
      },
      {
        "name": "塑料吸管",
        "categroy": 8
      },
      {
        "name": "一次性保鲜膜",
        "categroy": 8
      },
      {
        "name": "湿巾纸",
        "categroy": 8
      },
      {
        "name": "瓷器碎片",
        "categroy": 8
      },
      {
        "name": "砖瓦陶瓷",
        "categroy": 8
      },
      {
        "name": "雪糕包装袋",
        "categroy": 8
      },
      {
        "name": "泡面桶",
        "categroy": 8
      },
      {
        "name": "酒精棉花",
        "categroy": 8
      },
      {
        "name": "玉米皮",
        "categroy": 8
      },
      {
        "name": "奶茶塑料杯",
        "categroy": 8
      },
      {
        "name": "头屑",
        "categroy": 8
      },
      {
        "name": "帝王蟹壳",
        "categroy": 8
      },
      {
        "name": "一次性用品",
        "categroy": 8
      },
      {
        "name": "渣土",
        "categroy": 8
      },
      {
        "name": "陶瓷制品",
        "categroy": 8
      },
      {
        "name": "烘培纸",
        "categroy": 8
      },
      {
        "name": "除湿袋",
        "categroy": 8
      },
      {
        "name": "滤纸",
        "categroy": 8
      },
      {
        "name": "生蚝壳",
        "categroy": 8
      },
      {
        "name": "猪大骨",
        "categroy": 8
      },
      {
        "name": "一次性塑料餐盒",
        "categroy": 8
      },
      {
        "name": "调料袋",
        "categroy": 8
      },
      {
        "name": "发热包",
        "categroy": 8
      },
      {
        "name": "洗衣液包装袋",
        "categroy": 8
      },
      {
        "name": "咖啡滤纸",
        "categroy": 8
      },
      {
        "name": "包裹着狗屎的塑料袋",
        "categroy": 8
      },
      {
        "name": "塑料盖子",
        "categroy": 8
      },
      {
        "name": "头饰",
        "categroy": 8
      },
      {
        "name": "胶囊咖啡",
        "categroy": 8
      },
      {
        "name": "椰青壳",
        "categroy": 8
      },
      {
        "name": "吸油纸",
        "categroy": 8
      },
      {
        "name": "厨房用纸",
        "categroy": 8
      },
      {
        "name": "琴弦",
        "categroy": 8
      },
      {
        "name": "呕吐物纸巾",
        "categroy": 8
      },
      {
        "name": "纸质包装袋",
        "categroy": 8
      },
      {
        "name": "方便面桶",
        "categroy": 8
      },
      {
        "name": "面膜包装袋",
        "categroy": 8
      },
      {
        "name": "塑料拖鞋",
        "categroy": 1
      },
      {
        "name": "橡皮筋",
        "categroy": 8
      },
      {
        "name": "水笔笔芯",
        "categroy": 8
      },
      {
        "name": "湿灰尘",
        "categroy": 8
      },
      {
        "name": "蛤蜊壳",
        "categroy": 8
      },
      {
        "name": "纽扣（少量）",
        "categroy": 8
      },
      {
        "name": "一次性塑料手套",
        "categroy": 8
      },
      {
        "name": "中性笔",
        "categroy": 8
      },
      {
        "name": "KFC食物包装",
        "categroy": 8
      },
      {
        "name": "蚊香灰",
        "categroy": 8
      },
      {
        "name": "乳胶",
        "categroy": 8
      },
      {
        "name": "玻璃胶",
        "categroy": 8
      },
      {
        "name": "带有婴儿粪便的尿不湿",
        "categroy": 8
      },
      {
        "name": "暖宝宝贴",
        "categroy": 8
      },
      {
        "name": "牛奶袋",
        "categroy": 8
      },
      {
        "name": "血糖试纸",
        "categroy": 8
      },
      {
        "name": "餐饮外卖盒",
        "categroy": 8
      },
      {
        "name": "油画颜料",
        "categroy": 8
      },
      {
        "name": "油画颜料软管",
        "categroy": 8
      },
      {
        "name": "吸管塑料包装",
        "categroy": 8
      },
      {
        "name": "橡胶制品",
        "categroy": 8
      },
      {
        "name": "橡胶手套",
        "categroy": 8
      },
      {
        "name": "过期口红",
        "categroy": 8
      },
      {
        "name": "黄油包装纸",
        "categroy": 8
      },
      {
        "name": "脏纸尿裤",
        "categroy": 8
      },
      {
        "name": "蛋糕盒",
        "categroy": 8
      },
      {
        "name": "干净无油食品包装袋",
        "categroy": 8
      },
      {
        "name": "面包袋",
        "categroy": 8
      },
      {
        "name": "蛋糕袋",
        "categroy": 8
      },
      {
        "name": "快递单",
        "categroy": 8
      },
      {
        "name": "营养土",
        "categroy": 8
      },
      {
        "name": "一次性塑料盘",
        "categroy": 8
      },
      {
        "name": "冰宝贴",
        "categroy": 8
      },
      {
        "name": "一次性塑料调羹",
        "categroy": 8
      },
      {
        "name": "手指甲",
        "categroy": 8
      },
      {
        "name": "小纸屑",
        "categroy": 8
      },
      {
        "name": "眼镜架",
        "categroy": 8
      },
      {
        "name": "陶土花瓶",
        "categroy": 8
      },
      {
        "name": "牛肋骨",
        "categroy": 8
      },
      {
        "name": "被油污污染过的报纸",
        "categroy": 8
      },
      {
        "name": "脏纸巾",
        "categroy": 8
      },
      {
        "name": "衣服标签",
        "categroy": 8
      },
      {
        "name": "小核桃壳",
        "categroy": 8
      },
      {
        "name": "电蚊香片",
        "categroy": 8
      },
      {
        "name": "瓷碎片",
        "categroy": 8
      },
      {
        "name": "卫生棉条",
        "categroy": 8
      },
      {
        "name": "一次性塑料浴帽",
        "categroy": 8
      },
      {
        "name": "一次性纸餐盘",
        "categroy": 8
      },
      {
        "name": "纸巾包装袋",
        "categroy": 8
      },
      {
        "name": "抽纸塑料袋",
        "categroy": 8
      },
      {
        "name": "毛笔写过的纸",
        "categroy": 8
      },
      {
        "name": "塑料表带",
        "categroy": 8
      },
      {
        "name": "粉饼盒",
        "categroy": 8
      },
      {
        "name": "502胶水",
        "categroy": 8
      },
      {
        "name": "硅胶猫砂",
        "categroy": 8
      },
      {
        "name": "水晶猫砂",
        "categroy": 8
      },
      {
        "name": "冰淇淋包装袋",
        "categroy": 8
      },
      {
        "name": "护手霜",
        "categroy": 8
      },
      {
        "name": "粉尘",
        "categroy": 8
      },
      {
        "name": "一次性餐具",
        "categroy": 8
      },
      {
        "name": "卸妆纸巾",
        "categroy": 8
      },
      {
        "name": "洗衣粉",
        "categroy": 8
      },
      {
        "name": "气泡膜",
        "categroy": 8
      },
      {
        "name": "智齿",
        "categroy": 8
      },
      {
        "name": "钢丝球",
        "categroy": 8
      },
      {
        "name": "一次性纸杯",
        "categroy": 8
      },
      {
        "name": "大头针",
        "categroy": 8
      },
      {
        "name": "永生花",
        "categroy": 8
      },
      {
        "name": "带有婴儿粪便的纸尿裤",
        "categroy": 8
      },
      {
        "name": "塑封袋",
        "categroy": 8
      },
      {
        "name": "圆珠笔芯",
        "categroy": 8
      },
      {
        "name": "面膜外层纸",
        "categroy": 8
      },
      {
        "name": "袋泡茶",
        "categroy": 8
      },
      {
        "name": "塑料花",
        "categroy": 8
      },
      {
        "name": "冰箱贴",
        "categroy": 8
      },
      {
        "name": "假睫毛胶水",
        "categroy": 8
      },
      {
        "name": "洗碗布",
        "categroy": 8
      },
      {
        "name": "电话卡",
        "categroy": 8
      },
      {
        "name": "手机壳",
        "categroy": 8
      },
      {
        "name": "面巾纸",
        "categroy": 8
      },
      {
        "name": "泥土",
        "categroy": 8
      },
      {
        "name": "网球",
        "categroy": 8
      },
      {
        "name": "烟灰",
        "categroy": 8
      },
      {
        "name": "毛衣针",
        "categroy": 8
      },
      {
        "name": "护发精油",
        "categroy": 8
      },
      {
        "name": "紫砂壶",
        "categroy": 8
      },
      {
        "name": "防晒喷雾",
        "categroy": 8
      },
      {
        "name": "棉花",
        "categroy": 8
      },
      {
        "name": "寄居蟹",
        "categroy": 8
      },
      {
        "name": "水饺包装袋",
        "categroy": 8
      },
      {
        "name": "巧克力包装袋",
        "categroy": 8
      },
      {
        "name": "饼干包装袋",
        "categroy": 8
      },
      {
        "name": "奶嘴",
        "categroy": 8
      },
      {
        "name": "糖纸",
        "categroy": 8
      },
      {
        "name": "胡须",
        "categroy": 8
      },
      {
        "name": "包裹着痰的纸巾",
        "categroy": 8
      },
      {
        "name": "包裹着鼻涕的纸巾",
        "categroy": 8
      },
      {
        "name": "KFC纸盒",
        "categroy": 8
      },
      {
        "name": "麦当劳纸盒",
        "categroy": 8
      },
      {
        "name": "牛骨",
        "categroy": 8
      },
      {
        "name": "啤酒瓶盖",
        "categroy": 1
      },
      {
        "name": "糖果皮",
        "categroy": 8
      },
      {
        "name": "包裹着西瓜籽的纸巾",
        "categroy": 8
      },
      {
        "name": "包裹着鼻屎的纸巾",
        "categroy": 8
      },
      {
        "name": "冷饮包装",
        "categroy": 8
      },
      {
        "name": "外卖塑料袋",
        "categroy": 8
      },
      {
        "name": "外卖塑料盒",
        "categroy": 8
      },
      {
        "name": "外卖纸盒",
        "categroy": 8
      },
      {
        "name": "5号电池（无汞）",
        "categroy": 8
      },
      {
        "name": "7号电池（无汞）",
        "categroy": 8
      },
      {
        "name": "湿头发",
        "categroy": 8
      },
      {
        "name": "毛发",
        "categroy": 8
      },
      {
        "name": "一次性手套",
        "categroy": 8
      },
      {
        "name": "卸妆膏",
        "categroy": 8
      },
      {
        "name": "手机膜",
        "categroy": 8
      },
      {
        "name": "防霉防蛀片",
        "categroy": 8
      },
      {
        "name": "卫生护垫",
        "categroy": 8
      },
      {
        "name": "摩丝罐",
        "categroy": 8
      },
      {
        "name": "厨房手套",
        "categroy": 8
      },
      {
        "name": "沐浴球",
        "categroy": 8
      },
      {
        "name": "耳塞",
        "categroy": 8
      },
      {
        "name": "牙线棒",
        "categroy": 8
      },
      {
        "name": "修正液",
        "categroy": 8
      },
      {
        "name": "废纸",
        "categroy": 8
      },
      {
        "name": "卫生间用纸",
        "categroy": 8
      },
      {
        "name": "陶瓷花瓶",
        "categroy": 8
      },
      {
        "name": "陶瓷花盆",
        "categroy": 8
      },
      {
        "name": "防碎气泡膜",
        "categroy": 8
      },
      {
        "name": "污损塑料袋",
        "categroy": 8
      },
      {
        "name": "水晶泥",
        "categroy": 8
      },
      {
        "name": "胶纸",
        "categroy": 8
      },
      {
        "name": "剃须泡沫罐",
        "categroy": 8
      },
      {
        "name": "风油精",
        "categroy": 8
      },
      {
        "name": "奶茶塑料盖",
        "categroy": 8
      },
      {
        "name": "打火机",
        "categroy": 8
      },
      {
        "name": "擦碗布",
        "categroy": 8
      },
      {
        "name": "碱性电池",
        "categroy": 8
      },
      {
        "name": "烧烤锡纸",
        "categroy": 8
      },
      {
        "name": "外卖饭盒",
        "categroy": 8
      },
      {
        "name": "装过湿垃圾的塑料袋",
        "categroy": 8
      },
      {
        "name": "纸质外卖盒",
        "categroy": 8
      },
      {
        "name": "塑料外卖盒",
        "categroy": 8
      },
      {
        "name": "马桶刷",
        "categroy": 8
      },
      {
        "name": "狗尿垫",
        "categroy": 8
      },
      {
        "name": "太空沙",
        "categroy": 8
      },
      {
        "name": "带胶制品",
        "categroy": 8
      },
      {
        "name": "竹制品",
        "categroy": 8
      },
      {
        "name": "成分复杂的制品",
        "categroy": 8
      },
      {
        "name": "皮皮虾壳",
        "categroy": 8
      },
      {
        "name": "使用过的安全套",
        "categroy": 8
      },
      {
        "name": "青口贝",
        "categroy": 8
      },
      {
        "name": "碎纸屑",
        "categroy": 8
      },
      {
        "name": "洗头膏",
        "categroy": 8
      },
      {
        "name": "番茄酱包装袋",
        "categroy": 8
      },
      {
        "name": "面纸",
        "categroy": 8
      },
      {
        "name": "身体乳",
        "categroy": 8
      },
      {
        "name": "青草膏",
        "categroy": 8
      },
      {
        "name": "洁面摩丝",
        "categroy": 8
      },
      {
        "name": "一次性塑料勺子",
        "categroy": 8
      },
      {
        "name": "眼线笔",
        "categroy": 8
      },
      {
        "name": "眉粉",
        "categroy": 8
      },
      {
        "name": "沾有油渍的食品包装袋",
        "categroy": 8
      },
      {
        "name": "薯片包装袋",
        "categroy": 8
      },
      {
        "name": "自动铅笔笔芯",
        "categroy": 8
      },
      {
        "name": "香薰球",
        "categroy": 8
      },
      {
        "name": "隐形眼镜护理液",
        "categroy": 8
      },
      {
        "name": "脏卫生巾",
        "categroy": 8
      },
      {
        "name": "湿塑料袋",
        "categroy": 8
      },
      {
        "name": "牛骨棒",
        "categroy": 8
      },
      {
        "name": "草纸",
        "categroy": 8
      },
      {
        "name": "雨衣",
        "categroy": 8
      },
      {
        "name": "湿纸巾包装",
        "categroy": 8
      },
      {
        "name": "纸饭盒",
        "categroy": 8
      },
      {
        "name": "成人用品",
        "categroy": 8
      },
      {
        "name": "河蚌壳",
        "categroy": 8
      },
      {
        "name": "香肠壳",
        "categroy": 8
      },
      {
        "name": "发夹",
        "categroy": 8
      },
      {
        "name": "发带",
        "categroy": 8
      },
      {
        "name": "驱蚊香片",
        "categroy": 8
      },
      {
        "name": "薯片盒",
        "categroy": 8
      },
      {
        "name": "吸尘器灰尘",
        "categroy": 8
      },
      {
        "name": "粉扑",
        "categroy": 8
      },
      {
        "name": "咖啡胶囊",
        "categroy": 8
      },
      {
        "name": "鸡毛",
        "categroy": 8
      },
      {
        "name": "安全套包装袋",
        "categroy": 8
      },
      {
        "name": "尿片",
        "categroy": 8
      },
      {
        "name": "冰棒棍",
        "categroy": 8
      },
      {
        "name": "广告颜料",
        "categroy": 8
      },
      {
        "name": "陶泥",
        "categroy": 8
      },
      {
        "name": "猪骨头",
        "categroy": 8
      },
      {
        "name": "使用过的面膜",
        "categroy": 8
      },
      {
        "name": "使用过的卫生巾",
        "categroy": 8
      },
      {
        "name": "喝过的奶茶杯子",
        "categroy": 8
      },
      {
        "name": "高密度碎纸机处理的碎纸",
        "categroy": 8
      },
      {
        "name": "泡面袋",
        "categroy": 8
      },
      {
        "name": "太阳眼镜",
        "categroy": 8
      },
      {
        "name": "美妆蛋",
        "categroy": 8
      },
      {
        "name": "胭脂",
        "categroy": 8
      },
      {
        "name": "油条包装袋",
        "categroy": 8
      },
      {
        "name": "奶茶杯",
        "categroy": 8
      },
      {
        "name": "购物卡",
        "categroy": 1
      },
      {
        "name": "订书机钉",
        "categroy": 8
      },
      {
        "name": "彩泥",
        "categroy": 8
      },
      {
        "name": "冰贴",
        "categroy": 8
      },
      {
        "name": "棒冰棍",
        "categroy": 8
      },
      {
        "name": "香烟头",
        "categroy": 8
      },
      {
        "name": "泡沫饭盒",
        "categroy": 8
      },
      {
        "name": "PH试纸",
        "categroy": 8
      },
      {
        "name": "葡萄酒木塞",
        "categroy": 8
      },
      {
        "name": "包裹着口香糖的纸巾",
        "categroy": 8
      },
      {
        "name": "火腿肠包装纸",
        "categroy": 8
      },
      {
        "name": "艾灸条",
        "categroy": 8
      },
      {
        "name": "保冷剂",
        "categroy": 8
      },
      {
        "name": "草木灰",
        "categroy": 8
      },
      {
        "name": "驱蚊手环",
        "categroy": 8
      },
      {
        "name": "挂耳咖啡",
        "categroy": 8
      },
      {
        "name": "滤挂咖啡",
        "categroy": 8
      },
      {
        "name": "柳絮",
        "categroy": 8
      },
      {
        "name": "洗涤液包装袋",
        "categroy": 8
      },
      {
        "name": "石锅",
        "categroy": 8
      },
      {
        "name": "灭蚊灯",
        "categroy": 8
      },
      {
        "name": "红酒塞",
        "categroy": 8
      },
      {
        "name": "枕巾",
        "categroy": 8
      },
      {
        "name": "1号电池（无汞）",
        "categroy": 8
      },
      {
        "name": "电子烟烟弹",
        "categroy": 8
      },
      {
        "name": "陶瓷盘子",
        "categroy": 8
      },
      {
        "name": "榨菜袋",
        "categroy": 8
      },
      {
        "name": "卷筒纸",
        "categroy": 8
      },
      {
        "name": "方便面调味包",
        "categroy": 8
      },
      {
        "name": "脱毛膏",
        "categroy": 8
      },
      {
        "name": "三角裤",
        "categroy": 8
      },
      {
        "name": "平角裤",
        "categroy": 8
      },
      {
        "name": "海绵粉扑",
        "categroy": 8
      },
      {
        "name": "一次性竹筷子",
        "categroy": 8
      },
      {
        "name": "碎碗",
        "categroy": 8
      },
      {
        "name": "白板笔",
        "categroy": 8
      },
      {
        "name": "海螺壳",
        "categroy": 8
      },
      {
        "name": "花蛤壳",
        "categroy": 8
      },
      {
        "name": "棉线",
        "categroy": 8
      },
      {
        "name": "糖包",
        "categroy": 8
      },
      {
        "name": "鼠标垫",
        "categroy": 8
      },
      {
        "name": "便条贴",
        "categroy": 8
      },
      {
        "name": "水果塑料盒",
        "categroy": 8
      },
      {
        "name": "糖浆包",
        "categroy": 8
      },
      {
        "name": "泳镜",
        "categroy": 8
      },
      {
        "name": "粘土",
        "categroy": 8
      },
      {
        "name": "干草",
        "categroy": 8
      },
      {
        "name": "酸奶勺",
        "categroy": 8
      },
      {
        "name": "中药包",
        "categroy": 8
      },
      {
        "name": "猪腿骨",
        "categroy": 8
      },
      {
        "name": "茶叶包",
        "categroy": 8
      },
      {
        "name": "豆浆杯",
        "categroy": 8
      },
      {
        "name": "测血糖针",
        "categroy": 8
      },
      {
        "name": "唇釉",
        "categroy": 8
      },
      {
        "name": "一次性打火机",
        "categroy": 8
      },
      {
        "name": "棒棒糖棒子",
        "categroy": 8
      },
      {
        "name": "旧内衣",
        "categroy": 8
      },
      {
        "name": "牛骨头",
        "categroy": 8
      },
      {
        "name": "冰棒皮",
        "categroy": 8
      },
      {
        "name": "冰棒外包装",
        "categroy": 8
      },
      {
        "name": "滴漏式咖啡",
        "categroy": 8
      },
      {
        "name": "星巴克咖啡杯",
        "categroy": 8
      },
      {
        "name": "星巴克塑料杯",
        "categroy": 8
      },
      {
        "name": "下水道杂物",
        "categroy": 8
      },
      {
        "name": "电蚊香液瓶",
        "categroy": 8
      },
      {
        "name": "膨润土猫砂",
        "categroy": 8
      },
      {
        "name": "油污纸",
        "categroy": 8
      },
      {
        "name": "稻草",
        "categroy": 8
      },
      {
        "name": "擦过鼻涕的纸巾",
        "categroy": 8
      },
      {
        "name": "粘毛滚纸",
        "categroy": 8
      },
      {
        "name": "酱油袋",
        "categroy": 8
      },
      {
        "name": "湿海绵",
        "categroy": 8
      },
      {
        "name": "羊大骨",
        "categroy": 8
      },
      {
        "name": "塑料笔杆",
        "categroy": 8
      },
      {
        "name": "过期护肤品",
        "categroy": 8
      },
      {
        "name": "发箍",
        "categroy": 8
      },
      {
        "name": "壁纸",
        "categroy": 8
      },
      {
        "name": "墙纸",
        "categroy": 8
      },
      {
        "name": "薯片袋",
        "categroy": 8
      },
      {
        "name": "脏抹布",
        "categroy": 8
      },
      {
        "name": "润肤乳",
        "categroy": 8
      },
      {
        "name": "脏玻璃瓶",
        "categroy": 8
      },
      {
        "name": "外卖盒子",
        "categroy": 8
      },
      {
        "name": "外卖餐具",
        "categroy": 8
      },
      {
        "name": "调料包",
        "categroy": 8
      },
      {
        "name": "辣条包装袋",
        "categroy": 8
      },
      {
        "name": "储奶袋",
        "categroy": 8
      },
      {
        "name": "玉米衣",
        "categroy": 8
      },
      {
        "name": "电动牙刷刷头",
        "categroy": 8
      },
      {
        "name": "过期防晒霜",
        "categroy": 8
      },
      {
        "name": "塑料打包盒",
        "categroy": 8
      },
      {
        "name": "透明打包盒",
        "categroy": 8
      },
      {
        "name": "食品密封袋",
        "categroy": 8
      },
      {
        "name": "食品保鲜袋",
        "categroy": 8
      },
      {
        "name": "榛子壳",
        "categroy": 8
      },
      {
        "name": "气垫膜",
        "categroy": 8
      },
      {
        "name": "碧然德过滤芯",
        "categroy": 8
      },
      {
        "name": "粘尘纸",
        "categroy": 8
      },
      {
        "name": "过滤袋",
        "categroy": 8
      },
      {
        "name": "炼乳壳",
        "categroy": 8
      },
      {
        "name": "装蔬菜的塑料袋",
        "categroy": 8
      },
      {
        "name": "脚趾甲",
        "categroy": 8
      },
      {
        "name": "油画刷",
        "categroy": 8
      },
      {
        "name": "墨胆",
        "categroy": 8
      },
      {
        "name": "脏卸妆棉",
        "categroy": 8
      },
      {
        "name": "痘痘贴",
        "categroy": 8
      },
      {
        "name": "甲鱼壳",
        "categroy": 8
      },
      {
        "name": "自热火锅加热包",
        "categroy": 8
      },
      {
        "name": "酸奶杯盖",
        "categroy": 8
      },
      {
        "name": "净化器滤芯",
        "categroy": 8
      },
      {
        "name": "纸巾袋",
        "categroy": 8
      },
      {
        "name": "艾灸贴",
        "categroy": 8
      },
      {
        "name": "便纸",
        "categroy": 8
      },
      {
        "name": "双眼皮贴",
        "categroy": 8
      },
      {
        "name": "包裹着猫屎的塑料袋",
        "categroy": 8
      },
      {
        "name": "蜡烛包装",
        "categroy": 8
      },
      {
        "name": "卫生巾外包装",
        "categroy": 8
      },
      {
        "name": "豆腐盒",
        "categroy": 8
      },
      {
        "name": "卫生巾包装袋",
        "categroy": 8
      },
      {
        "name": "海绵蛋",
        "categroy": 8
      },
      {
        "name": "方便面盒",
        "categroy": 8
      },
      {
        "name": "纸皮核桃",
        "categroy": 8
      },
      {
        "name": "卷筒纸外包装",
        "categroy": 8
      },
      {
        "name": "牙签塑料盒",
        "categroy": 8
      },
      {
        "name": "醋包",
        "categroy": 8
      },
      {
        "name": "醋袋",
        "categroy": 8
      },
      {
        "name": "食品塑料盒",
        "categroy": 8
      },
      {
        "name": "仓鼠垫沙",
        "categroy": 8
      },
      {
        "name": "干发巾",
        "categroy": 8
      },
      {
        "name": "喜茶杯",
        "categroy": 8
      },
      {
        "name": "面粉袋",
        "categroy": 8
      },
      {
        "name": "吸管薄膜",
        "categroy": 8
      },
      {
        "name": "蟑螂贴",
        "categroy": 8
      },
      {
        "name": "眼贴膜",
        "categroy": 8
      },
      {
        "name": "眼膜",
        "categroy": 8
      },
      {
        "name": "鼻贴",
        "categroy": 8
      },
      {
        "name": "去黑头鼻贴",
        "categroy": 8
      },
      {
        "name": "一次性尿布",
        "categroy": 8
      },
      {
        "name": "香烟灰",
        "categroy": 8
      },
      {
        "name": "湿厕纸",
        "categroy": 8
      },
      {
        "name": "烧烤竹签",
        "categroy": 8
      },
      {
        "name": "锡箔餐盒",
        "categroy": 8
      },
      {
        "name": "湿厕纸包装袋",
        "categroy": 8
      },
      {
        "name": "酸奶吸管",
        "categroy": 8
      },
      {
        "name": "铅笔芯",
        "categroy": 8
      },
      {
        "name": "地板蜡",
        "categroy": 8
      },
      {
        "name": "粽子包裹绳",
        "categroy": 8
      },
      {
        "name": "塑料咖啡杯",
        "categroy": 8
      },
      {
        "name": "硅藻泥",
        "categroy": 8
      },
      {
        "name": "眼镜盒",
        "categroy": 8
      },
      {
        "name": "逗猫棒",
        "categroy": 8
      },
      {
        "name": "宠物饲料包装袋",
        "categroy": 8
      },
      {
        "name": "滤尘袋",
        "categroy": 8
      },
      {
        "name": "纸胶带",
        "categroy": 8
      },
      {
        "name": "膨化食品包装袋",
        "categroy": 8
      },
      {
        "name": "眼部精华胶囊",
        "categroy": 8
      },
      {
        "name": "食品干燥剂",
        "categroy": 8
      },
      {
        "name": "纸咖啡杯",
        "categroy": 8
      },
      {
        "name": "空气清新剂罐",
        "categroy": 8
      },
      {
        "name": "空调滤芯",
        "categroy": 8
      },
      {
        "name": "珍珠奶茶杯",
        "categroy": 8
      },
      {
        "name": "早餐奶包装袋",
        "categroy": 8
      },
      {
        "name": "粉底液",
        "categroy": 8
      },
      {
        "name": "墙灰",
        "categroy": 8
      },
      {
        "name": "湿抹布",
        "categroy": 8
      },
      {
        "name": "一次性内裤",
        "categroy": 8
      },
      {
        "name": "生物冰袋",
        "categroy": 8
      },
      {
        "name": "桃子核",
        "categroy": 8
      },
      {
        "name": "陶瓷杯",
        "categroy": 8
      },
      {
        "name": "脏牛奶盒",
        "categroy": 8
      },
      {
        "name": "一次性塑料杯",
        "categroy": 8
      },
      {
        "name": "乐事薯片盒",
        "categroy": 8
      },
      {
        "name": "蛋黄酥包装盒",
        "categroy": 8
      },
      {
        "name": "瓷勺",
        "categroy": 8
      },
      {
        "name": "养乐多盖",
        "categroy": 8
      },
      {
        "name": "胶布",
        "categroy": 8
      },
      {
        "name": "一次性洗脸巾",
        "categroy": 8
      },
      {
        "name": "沸石猫砂",
        "categroy": 8
      },
      {
        "name": "早餐塑料袋",
        "categroy": 8
      },
      {
        "name": "豆浆杯盖",
        "categroy": 8
      },
      {
        "name": "口红盒",
        "categroy": 8
      },
      {
        "name": "包裹着猫屎的膨润土猫砂",
        "categroy": 8
      },
      {
        "name": "游泳眼镜",
        "categroy": 8
      },
      {
        "name": "老花眼镜",
        "categroy": 8
      },
      {
        "name": "蜡烛塑料模",
        "categroy": 8
      },
      {
        "name": "塑料挂钩",
        "categroy": 8
      },
      {
        "name": "奶粉勺子",
        "categroy": 8
      },
      {
        "name": "减震泡泡膜",
        "categroy": 8
      },
      {
        "name": "擦手纸",
        "categroy": 8
      },
      {
        "name": "奶粉盖",
        "categroy": 8
      },
      {
        "name": "水粉颜料",
        "categroy": 8
      },
      {
        "name": "机票",
        "categroy": 8
      },
      {
        "name": "演唱会票",
        "categroy": 8
      },
      {
        "name": "车票",
        "categroy": 8
      },
      {
        "name": "大头钉",
        "categroy": 8
      },
      {
        "name": "热敏纸",
        "categroy": 8
      },
      {
        "name": "不干胶纸",
        "categroy": 8
      },
      {
        "name": "饮料瓶标签",
        "categroy": 8
      },
      {
        "name": "方便面包装袋",
        "categroy": 8
      },
      {
        "name": "标签纸",
        "categroy": 8
      },
      {
        "name": "沙拉袋",
        "categroy": 8
      },
      {
        "name": "快递贴纸",
        "categroy": 8
      },
      {
        "name": "气泡垫",
        "categroy": 8
      },
      {
        "name": "废瓷砖",
        "categroy": 8
      },
      {
        "name": "水果罐",
        "categroy": 8
      },
      {
        "name": "保湿喷雾",
        "categroy": 8
      },
      {
        "name": "火车票",
        "categroy": 8
      },
      {
        "name": "退烧贴",
        "categroy": 8
      },
      {
        "name": "卸妆油瓶",
        "categroy": 8
      },
      {
        "name": "水果包装袋",
        "categroy": 8
      },
      {
        "name": "泡面调料包",
        "categroy": 8
      },
      {
        "name": "冻干粉面膜",
        "categroy": 8
      },
      {
        "name": "软膜撕拉面膜",
        "categroy": 8
      },
      {
        "name": "卷笔刀",
        "categroy": 8
      },
      {
        "name": "化妆品瓶盖",
        "categroy": 8
      },
      {
        "name": "N次贴",
        "categroy": 8
      },
      {
        "name": "纳米海绵",
        "categroy": 8
      },
      {
        "name": "一次性剃须刀片",
        "categroy": 8
      },
      {
        "name": "塑料油壶",
        "categroy": 8
      },
      {
        "name": "眼线液",
        "categroy": 8
      },
      {
        "name": "避孕套包装",
        "categroy": 8
      },
      {
        "name": "兔毛",
        "categroy": 8
      },
      {
        "name": "大龙虾头",
        "categroy": 8
      },
      {
        "name": "一次性塑料鞋套",
        "categroy": 8
      },
      {
        "name": "粽子皮",
        "categroy": 8
      },
      {
        "name": "牛皮筋",
        "categroy": 8
      },
      {
        "name": "修眉刀",
        "categroy": 8
      },
      {
        "name": "头绳",
        "categroy": 8
      },
      {
        "name": "艾灸渣",
        "categroy": 8
      },
      {
        "name": "牙套",
        "categroy": 8
      },
      {
        "name": "塑料刷子",
        "categroy": 8
      },
      {
        "name": "防蚊手环",
        "categroy": 8
      },
      {
        "name": "搓澡巾",
        "categroy": 8
      },
      {
        "name": "烟丝",
        "categroy": 8
      },
      {
        "name": "方便面叉子",
        "categroy": 8
      },
      {
        "name": "汉堡纸",
        "categroy": 8
      },
      {
        "name": "眼镜布",
        "categroy": 8
      },
      {
        "name": "果冻包装盒",
        "categroy": 8
      },
      {
        "name": "干冰袋",
        "categroy": 8
      },
      {
        "name": "头皮屑",
        "categroy": 8
      },
      {
        "name": "长寿果壳",
        "categroy": 8
      },
      {
        "name": "超市塑料袋",
        "categroy": 8
      },
      {
        "name": "防震膜",
        "categroy": 8
      },
      {
        "name": "羊肉骨头",
        "categroy": 8
      },
      {
        "name": "酱油包装袋",
        "categroy": 8
      },
      {
        "name": "一次性餐具包装",
        "categroy": 8
      },
      {
        "name": "爽身粉",
        "categroy": 8
      },
      {
        "name": "84消毒液瓶",
        "categroy": 8
      },
      {
        "name": "炸鸡包装袋",
        "categroy": 8
      },
      {
        "name": "气泡纸",
        "categroy": 8
      },
      {
        "name": "液体蚊香",
        "categroy": 8
      },
      {
        "name": "织带",
        "categroy": 8
      },
      {
        "name": "液体蚊香瓶",
        "categroy": 8
      },
      {
        "name": "卸妆乳瓶",
        "categroy": 8
      },
      {
        "name": "包裹着鸡蛋壳的餐巾纸",
        "categroy": 8
      },
      {
        "name": "气泡袋",
        "categroy": 8
      },
      {
        "name": "条码纸",
        "categroy": 8
      },
      {
        "name": "干草包装袋",
        "categroy": 8
      },
      {
        "name": "猫粮包装袋",
        "categroy": 8
      },
      {
        "name": "香肠竹签",
        "categroy": 8
      },
      {
        "name": "破碎盘子",
        "categroy": 8
      },
      {
        "name": "荷兰猪毛",
        "categroy": 8
      },
      {
        "name": "碳性电池",
        "categroy": 8
      },
      {
        "name": "串串竹签",
        "categroy": 8
      },
      {
        "name": "旧口罩",
        "categroy": 8
      },
      {
        "name": "扇子",
        "categroy": 8
      },
      {
        "name": "乳垫",
        "categroy": 8
      },
      {
        "name": "吸味剂",
        "categroy": 8
      },
      {
        "name": "烟盒内锡纸",
        "categroy": 8
      },
      {
        "name": "旧牙刷",
        "categroy": 8
      },
      {
        "name": "马克杯",
        "categroy": 8
      },
      {
        "name": "绿豆包装",
        "categroy": 8
      },
      {
        "name": "菠萝蜜核",
        "categroy": 8
      },
      {
        "name": "日抛",
        "categroy": 8
      },
      {
        "name": "牙贴",
        "categroy": 8
      },
      {
        "name": "一次性电子烟",
        "categroy": 8
      },
      {
        "name": "果冻壳",
        "categroy": 8
      },
      {
        "name": "湿面巾纸",
        "categroy": 8
      },
      {
        "name": "购物小票",
        "categroy": 8
      },
      {
        "name": "冰淇淋纸",
        "categroy": 8
      },
      {
        "name": "红茶包",
        "categroy": 8
      },
      {
        "name": "自热包",
        "categroy": 8
      },
      {
        "name": "丙烯颜料",
        "categroy": 8
      },
      {
        "name": "陶瓷烟灰缸",
        "categroy": 8
      },
      {
        "name": "丝瓜筋",
        "categroy": 8
      },
      {
        "name": "带油抹布",
        "categroy": 8
      },
      {
        "name": "塑料牙签",
        "categroy": 8
      },
      {
        "name": "鸽毛",
        "categroy": 8
      },
      {
        "name": "毛笔",
        "categroy": 8
      },
      {
        "name": "脱酸素剂",
        "categroy": 8
      },
      {
        "name": "消毒棉",
        "categroy": 8
      },
      {
        "name": "油性笔",
        "categroy": 8
      },
      {
        "name": "发卡",
        "categroy": 8
      },
      {
        "name": "防潮袋",
        "categroy": 8
      },
      {
        "name": "刘海夹",
        "categroy": 8
      },
      {
        "name": "饼干袋",
        "categroy": 8
      },
      {
        "name": "浴沙",
        "categroy": 8
      },
      {
        "name": "冷饮包装纸",
        "categroy": 8
      },
      {
        "name": "一次性拖鞋",
        "categroy": 8
      },
      {
        "name": "足浴袋",
        "categroy": 8
      },
      {
        "name": "吸湿剂",
        "categroy": 8
      },
      {
        "name": "洗衣粉袋",
        "categroy": 8
      },
      {
        "name": "化妆品密封塑料膜",
        "categroy": 8
      },
      {
        "name": "湿报纸",
        "categroy": 8
      },
      {
        "name": "婴幼儿纸尿裤",
        "categroy": 8
      },
      {
        "name": "眼镜框",
        "categroy": 8
      },
      {
        "name": "油污湿巾纸",
        "categroy": 8
      },
      {
        "name": "脱氧保鲜剂",
        "categroy": 8
      },
      {
        "name": "关东煮纸杯",
        "categroy": 8
      },
      {
        "name": "碘酒棉球",
        "categroy": 8
      },
      {
        "name": "酒精棉球",
        "categroy": 8
      },
      {
        "name": "珍宝蟹",
        "categroy": 8
      },
      {
        "name": "泡脚袋",
        "categroy": 8
      },
      {
        "name": "一次性便当盒",
        "categroy": 8
      },
      {
        "name": "羊肉串棒",
        "categroy": 8
      },
      {
        "name": "碳包",
        "categroy": 8
      },
      {
        "name": "手机链",
        "categroy": 8
      },
      {
        "name": "卤料包",
        "categroy": 8
      },
      {
        "name": "五子棋",
        "categroy": 8
      },
      {
        "name": "化妆镜",
        "categroy": 8
      },
      {
        "name": "香囊",
        "categroy": 8
      },
      {
        "name": "塑料带",
        "categroy": 8
      },
      {
        "name": "测血糖试纸",
        "categroy": 8
      },
      {
        "name": "足贴",
        "categroy": 8
      },
      {
        "name": "牛肉骨头",
        "categroy": 8
      },
      {
        "name": "必胜客纸盒",
        "categroy": 8
      },
      {
        "name": "奶茶盖",
        "categroy": 8
      },
      {
        "name": "隐形眼镜盒",
        "categroy": 8
      },
      {
        "name": "酒精棉片",
        "categroy": 8
      },
      {
        "name": "光碟包",
        "categroy": 8
      },
      {
        "name": "烤串棒",
        "categroy": 8
      },
      {
        "name": "棒冰包装袋",
        "categroy": 8
      },
      {
        "name": "湿卫生纸",
        "categroy": 8
      },
      {
        "name": "席子",
        "categroy": 8
      },
      {
        "name": "竹炭包",
        "categroy": 8
      },
      {
        "name": "园艺土",
        "categroy": 8
      },
      {
        "name": "牛排包装",
        "categroy": 8
      },
      {
        "name": "蔬菜包装袋",
        "categroy": 8
      },
      {
        "name": "烫发剂壳",
        "categroy": 8
      },
      {
        "name": "瑞幸咖啡杯",
        "categroy": 8
      },
      {
        "name": "厨房纸巾",
        "categroy": 8
      },
      {
        "name": "塑料糖纸",
        "categroy": 8
      },
      {
        "name": "纸巾外包装",
        "categroy": 8
      },
      {
        "name": "卫生卷纸",
        "categroy": 8
      },
      {
        "name": "全棉时代纸巾",
        "categroy": 8
      },
      {
        "name": "雪糕棍",
        "categroy": 8
      },
      {
        "name": "卫生棒",
        "categroy": 8
      },
      {
        "name": "防蚊贴",
        "categroy": 8
      },
      {
        "name": "湿纸巾包装袋",
        "categroy": 8
      },
      {
        "name": "腋毛",
        "categroy": 8
      },
      {
        "name": "胡渣",
        "categroy": 8
      },
      {
        "name": "面条包装袋",
        "categroy": 8
      },
      {
        "name": "魔芋粉包装袋",
        "categroy": 8
      },
      {
        "name": "清凉贴",
        "categroy": 8
      },
      {
        "name": "固体清香剂",
        "categroy": 8
      },
      {
        "name": "腮红",
        "categroy": 8
      },
      {
        "name": "轻质彩泥",
        "categroy": 8
      },
      {
        "name": "巧克力锡纸",
        "categroy": 8
      },
      {
        "name": "橡皮擦",
        "categroy": 8
      },
      {
        "name": "黑板擦",
        "categroy": 8
      },
      {
        "name": "白板擦",
        "categroy": 8
      },
      {
        "name": "碗碎片",
        "categroy": 8
      },
      {
        "name": "湿烟头",
        "categroy": 8
      },
      {
        "name": "清洁抹布",
        "categroy": 8
      },
      {
        "name": "便签纸",
        "categroy": 8
      },
      {
        "name": "泡泡糖",
        "categroy": 8
      },
      {
        "name": "吸油面纸",
        "categroy": 8
      },
      {
        "name": "肉类包装盒",
        "categroy": 8
      },
      {
        "name": "扣子",
        "categroy": 8
      },
      {
        "name": "内衣包装袋",
        "categroy": 8
      },
      {
        "name": "太阳镜",
        "categroy": 8
      },
      {
        "name": "灭蚊片",
        "categroy": 8
      },
      {
        "name": "CD",
        "categroy": 8
      },
      {
        "name": "DVD",
        "categroy": 8
      },
      {
        "name": "混合猫砂",
        "categroy": 8
      },
      {
        "name": "水笔芯",
        "categroy": 8
      },
      {
        "name": "键盘清洁胶",
        "categroy": 8
      },
      {
        "name": "塑料夹子",
        "categroy": 8
      },
      {
        "name": "砚台",
        "categroy": 8
      },
      {
        "name": "证件塑料壳",
        "categroy": 8
      },
      {
        "name": "登机牌",
        "categroy": 8
      },
      {
        "name": "竹牙签",
        "categroy": 8
      },
      {
        "name": "牛尾骨",
        "categroy": 8
      },
      {
        "name": "湿纸箱",
        "categroy": 8
      },
      {
        "name": "风油精瓶",
        "categroy": 8
      },
      {
        "name": "驱蚊贴",
        "categroy": 8
      },
      {
        "name": "硅胶手环",
        "categroy": 8
      },
      {
        "name": "气垫BB霜",
        "categroy": 8
      },
      {
        "name": "橡皮屑",
        "categroy": 8
      },
      {
        "name": "中药面膜",
        "categroy": 8
      },
      {
        "name": "牙刷头",
        "categroy": 8
      },
      {
        "name": "牛肉干包装",
        "categroy": 8
      },
      {
        "name": "胸贴",
        "categroy": 8
      },
      {
        "name": "牛仔骨",
        "categroy": 8
      },
      {
        "name": "盐包装袋",
        "categroy": 8
      },
      {
        "name": "浴花",
        "categroy": 8
      },
      {
        "name": "扫描仪",
        "categroy": 1
      },
      {
        "name": "投影仪",
        "categroy": 1
      },
      {
        "name": "包装纸",
        "categroy": 1
      },
      {
        "name": "硬纸板",
        "categroy": 1
      },
      {
        "name": "纸板箱",
        "categroy": 1
      },
      {
        "name": "包装盒",
        "categroy": 1
      },
      {
        "name": "点心盒",
        "categroy": 1
      },
      {
        "name": "纸巾盒",
        "categroy": 1
      },
      {
        "name": "牛奶盒",
        "categroy": 1
      },
      {
        "name": "饮料利乐包装",
        "categroy": 1
      },
      {
        "name": "PET塑料瓶",
        "categroy": 1
      },
      {
        "name": "饮料瓶",
        "categroy": 1
      },
      {
        "name": "硬质塑料瓶",
        "categroy": 1
      },
      {
        "name": "塑料盒",
        "categroy": 1
      },
      {
        "name": "冰淇淋盒",
        "categroy": 1
      },
      {
        "name": "塑料杯",
        "categroy": 1
      },
      {
        "name": "酸奶杯",
        "categroy": 1
      },
      {
        "name": "果冻杯",
        "categroy": 1
      },
      {
        "name": "软桶",
        "categroy": 1
      },
      {
        "name": "塑料泡沫",
        "categroy": 1
      },
      {
        "name": "气泡缓冲材料",
        "categroy": 1
      },
      {
        "name": "水果网套",
        "categroy": 1
      },
      {
        "name": "废弃塑料文具",
        "categroy": 1
      },
      {
        "name": "玻璃瓶",
        "categroy": 1
      },
      {
        "name": "碎玻璃片",
        "categroy": 1
      },
      {
        "name": "其他玻璃制品",
        "categroy": 1
      },
      {
        "name": "金属盒",
        "categroy": 1
      },
      {
        "name": "其他金属制品",
        "categroy": 1
      },
      {
        "name": "金属文件柜",
        "categroy": 1
      },
      {
        "name": "沙发",
        "categroy": 1
      },
      {
        "name": "茶几",
        "categroy": 1
      },
      {
        "name": "办公桌",
        "categroy": 1
      },
      {
        "name": "文件柜",
        "categroy": 1
      },
      {
        "name": "椅子",
        "categroy": 1
      },
      {
        "name": "皮带",
        "categroy": 1
      },
      {
        "name": "香水瓶",
        "categroy": 1
      },
      {
        "name": "食品罐头",
        "categroy": 1
      },
      {
        "name": "旧书包",
        "categroy": 1
      },
      {
        "name": "旧鞋子",
        "categroy": 1
      },
      {
        "name": "旧塑料篮子",
        "categroy": 1
      },
      {
        "name": "旧玩偶",
        "categroy": 1
      },
      {
        "name": "旧铁锅",
        "categroy": 1
      },
      {
        "name": "不锈钢垃圾桶",
        "categroy": 1
      },
      {
        "name": "旧帽子",
        "categroy": 1
      },
      {
        "name": "旧夹子",
        "categroy": 1
      },
      {
        "name": "废锁头",
        "categroy": 1
      },
      {
        "name": "雨伞骨架",
        "categroy": 1
      },
      {
        "name": "旧纸袋",
        "categroy": 1
      },
      {
        "name": "纸盒",
        "categroy": 1
      },
      {
        "name": "旧玩具",
        "categroy": 1
      },
      {
        "name": "办公用纸",
        "categroy": 1
      },
      {
        "name": "广告用纸",
        "categroy": 1
      },
      {
        "name": "暖水瓶",
        "categroy": 1
      },
      {
        "name": "废弃衣服",
        "categroy": 1
      },
      {
        "name": "桌布",
        "categroy": 1
      },
      {
        "name": "塑料包装",
        "categroy": 1
      },
      {
        "name": "铁皮罐头",
        "categroy": 1
      },
      {
        "name": "报废车辆",
        "categroy": 1
      },
      {
        "name": "家电家具",
        "categroy": 1
      },
      {
        "name": "玻璃烟灰缸",
        "categroy": 1
      },
      {
        "name": "泡沫箱",
        "categroy": 1
      },
      {
        "name": "墨水瓶",
        "categroy": 1
      },
      {
        "name": "塑料垃圾桶",
        "categroy": 1
      },
      {
        "name": "塑料饮料杯",
        "categroy": 1
      },
      {
        "name": "吸铁石",
        "categroy": 1
      },
      {
        "name": "塑料假花",
        "categroy": 1
      },
      {
        "name": "指南针",
        "categroy": 1
      },
      {
        "name": "自行车轮胎",
        "categroy": 1
      },
      {
        "name": "袜子",
        "categroy": 8
      },
      {
        "name": "竹签",
        "categroy": 1
      },
      {
        "name": "旧衣服",
        "categroy": 1
      },
      {
        "name": "轮胎",
        "categroy": 1
      },
      {
        "name": "酸奶盒",
        "categroy": 1
      },
      {
        "name": "钉子",
        "categroy": 1
      },
      {
        "name": "地板砖",
        "categroy": 1
      },
      {
        "name": "塑料壳",
        "categroy": 1
      },
      {
        "name": "护肤品玻璃罐",
        "categroy": 1
      },
      {
        "name": "奶粉罐",
        "categroy": 1
      },
      {
        "name": "塑料瓶瓶盖",
        "categroy": 1
      },
      {
        "name": "锡纸",
        "categroy": 8
      },
      {
        "name": "废旧电子产品",
        "categroy": 1
      },
      {
        "name": "鞋垫",
        "categroy": 1
      },
      {
        "name": "过滤网",
        "categroy": 1
      },
      {
        "name": "皮鞋",
        "categroy": 1
      },
      {
        "name": "广告纸片",
        "categroy": 1
      },
      {
        "name": "打印纸",
        "categroy": 1
      },
      {
        "name": "菜刀",
        "categroy": 1
      },
      {
        "name": "塑料盆",
        "categroy": 1
      },
      {
        "name": "塑料桶",
        "categroy": 1
      },
      {
        "name": "塑料日用品",
        "categroy": 1
      },
      {
        "name": "塑料餐具",
        "categroy": 1
      },
      {
        "name": "塑料纸",
        "categroy": 1
      },
      {
        "name": "充电装置",
        "categroy": 1
      },
      {
        "name": "砖头",
        "categroy": 1
      },
      {
        "name": "水泥砖",
        "categroy": 1
      },
      {
        "name": "矿泉水桶",
        "categroy": 1
      },
      {
        "name": "可乐瓶",
        "categroy": 1
      },
      {
        "name": "废旧木柴",
        "categroy": 1
      },
      {
        "name": "保温袋",
        "categroy": 1
      },
      {
        "name": "碎纸",
        "categroy": 1
      },
      {
        "name": "铁盒",
        "categroy": 1
      },
      {
        "name": "插线板",
        "categroy": 1
      },
      {
        "name": "电风扇",
        "categroy": 1
      },
      {
        "name": "水龙头",
        "categroy": 1
      },
      {
        "name": "抗光屏",
        "categroy": 1
      },
      {
        "name": "幕布",
        "categroy": 1
      },
      {
        "name": "地球仪",
        "categroy": 1
      },
      {
        "name": "空气净化器过滤网",
        "categroy": 1
      },
      {
        "name": "化妆品瓶",
        "categroy": 1
      },
      {
        "name": "未被污染的输液瓶",
        "categroy": 1
      },
      {
        "name": "未被污染的输液袋",
        "categroy": 1
      },
      {
        "name": "手机",
        "categroy": 1
      },
      {
        "name": "溜冰鞋",
        "categroy": 1
      },
      {
        "name": "废电路板",
        "categroy": 1
      },
      {
        "name": "藤条",
        "categroy": 1
      },
      {
        "name": "棕榈蜡",
        "categroy": 1
      },
      {
        "name": "消毒液瓶",
        "categroy": 2
      },
      {
        "name": "自行车",
        "categroy": 1
      },
      {
        "name": "洗面奶瓶",
        "categroy": 1
      },
      {
        "name": "床垫",
        "categroy": 1
      },
      {
        "name": "木板",
        "categroy": 1
      },
      {
        "name": "铝箔纸",
        "categroy": 1
      },
      {
        "name": "铁制品",
        "categroy": 1
      },
      {
        "name": "铜制品",
        "categroy": 1
      },
      {
        "name": "泡沫塑料",
        "categroy": 1
      },
      {
        "name": "雪碧罐",
        "categroy": 1
      },
      {
        "name": "废旧小家电",
        "categroy": 1
      },
      {
        "name": "卫生纸内芯",
        "categroy": 1
      },
      {
        "name": "可口可乐瓶",
        "categroy": 1
      },
      {
        "name": "笔记本电脑",
        "categroy": 1
      },
      {
        "name": "电饭煲",
        "categroy": 1
      },
      {
        "name": "塑料玩具",
        "categroy": 1
      },
      {
        "name": "洗发水瓶",
        "categroy": 1
      },
      {
        "name": "护发素瓶",
        "categroy": 1
      },
      {
        "name": "洗衣液瓶",
        "categroy": 1
      },
      {
        "name": "皮包",
        "categroy": 1
      },
      {
        "name": "食用油桶",
        "categroy": 1
      },
      {
        "name": "塑料衣架",
        "categroy": 1
      },
      {
        "name": "铝膜",
        "categroy": 1
      },
      {
        "name": "塑料水管",
        "categroy": 1
      },
      {
        "name": "铁管",
        "categroy": 1
      },
      {
        "name": "铜管",
        "categroy": 1
      },
      {
        "name": "塑复钢管",
        "categroy": 1
      },
      {
        "name": "铝塑复合管",
        "categroy": 1
      },
      {
        "name": "金属管",
        "categroy": 1
      },
      {
        "name": "红酒瓶",
        "categroy": 1
      },
      {
        "name": "香槟瓶",
        "categroy": 1
      },
      {
        "name": "白酒瓶",
        "categroy": 1
      },
      {
        "name": "可乐瓶瓶盖",
        "categroy": 1
      },
      {
        "name": "电动玩具",
        "categroy": 1
      },
      {
        "name": "镜片",
        "categroy": 1
      },
      {
        "name": "照相机",
        "categroy": 1
      },
      {
        "name": "塑料花盆",
        "categroy": 1
      },
      {
        "name": "无纺布手提袋",
        "categroy": 1
      },
      {
        "name": "纸箱",
        "categroy": 1
      },
      {
        "name": "iPad",
        "categroy": 1
      },
      {
        "name": "墨汁瓶",
        "categroy": 1
      },
      {
        "name": "化妆水瓶",
        "categroy": 1
      },
      {
        "name": "护肤品瓶",
        "categroy": 1
      },
      {
        "name": "护肤乳液瓶",
        "categroy": 1
      },
      {
        "name": "酱油瓶",
        "categroy": 1
      },
      {
        "name": "钢琴",
        "categroy": 1
      },
      {
        "name": "手链",
        "categroy": 1
      },
      {
        "name": "手镯",
        "categroy": 1
      },
      {
        "name": "木头",
        "categroy": 1
      },
      {
        "name": "碎玻璃制品",
        "categroy": 1
      },
      {
        "name": "电动牙刷",
        "categroy": 1
      },
      {
        "name": "塑料包装纸盒",
        "categroy": 1
      },
      {
        "name": "金属香炉",
        "categroy": 1
      },
      {
        "name": "铅球",
        "categroy": 1
      },
      {
        "name": "脸摩仪",
        "categroy": 1
      },
      {
        "name": "脉动饮料瓶",
        "categroy": 1
      },
      {
        "name": "跑步机",
        "categroy": 1
      },
      {
        "name": "手电筒",
        "categroy": 1
      },
      {
        "name": "螺钉",
        "categroy": 1
      },
      {
        "name": "糖果罐",
        "categroy": 1
      },
      {
        "name": "毛绒玩具",
        "categroy": 1
      },
      {
        "name": "烧水壶",
        "categroy": 1
      },
      {
        "name": "电冰箱",
        "categroy": 1
      },
      {
        "name": "洗衣机",
        "categroy": 1
      },
      {
        "name": "电烤箱",
        "categroy": 1
      },
      {
        "name": "洗碗机",
        "categroy": 1
      },
      {
        "name": "扫地机器人",
        "categroy": 1
      },
      {
        "name": "面霜瓶",
        "categroy": 1
      },
      {
        "name": "糖果盒",
        "categroy": 1
      },
      {
        "name": "电话机",
        "categroy": 1
      },
      {
        "name": "小提琴",
        "categroy": 1
      },
      {
        "name": "塑料架",
        "categroy": 1
      },
      {
        "name": "茶叶罐",
        "categroy": 1
      },
      {
        "name": "酒精瓶",
        "categroy": 1
      },
      {
        "name": "座椅垫",
        "categroy": 1
      },
      {
        "name": "蛋挞盒",
        "categroy": 1
      },
      {
        "name": "纸质卡片",
        "categroy": 1
      },
      {
        "name": "硅胶玩具",
        "categroy": 1
      },
      {
        "name": "KFC纸袋",
        "categroy": 1
      },
      {
        "name": "旧报纸",
        "categroy": 1
      },
      {
        "name": "真空压缩袋",
        "categroy": 1
      },
      {
        "name": "螺丝",
        "categroy": 1
      },
      {
        "name": "尼龙袋",
        "categroy": 1
      },
      {
        "name": "纸塑铝复合包装",
        "categroy": 1
      },
      {
        "name": "油桶",
        "categroy": 1
      },
      {
        "name": "食品保鲜盒",
        "categroy": 1
      },
      {
        "name": "衣架",
        "categroy": 1
      },
      {
        "name": "玻璃放大镜",
        "categroy": 1
      },
      {
        "name": "窗玻璃",
        "categroy": 1
      },
      {
        "name": "刀",
        "categroy": 1
      },
      {
        "name": "螺丝刀",
        "categroy": 1
      },
      {
        "name": "枕头",
        "categroy": 1
      },
      {
        "name": "电子血压仪",
        "categroy": 1
      },
      {
        "name": "塑料饭盒",
        "categroy": 1
      },
      {
        "name": "木凳",
        "categroy": 1
      },
      {
        "name": "木椅",
        "categroy": 1
      },
      {
        "name": "收音机",
        "categroy": 1
      },
      {
        "name": "铃铛",
        "categroy": 1
      },
      {
        "name": "棉布",
        "categroy": 1
      },
      {
        "name": "咖啡隔热纸",
        "categroy": 1
      },
      {
        "name": "毛线",
        "categroy": 1
      },
      {
        "name": "塑料梳子",
        "categroy": 1
      },
      {
        "name": "旧锁",
        "categroy": 1
      },
      {
        "name": "纱线手套",
        "categroy": 1
      },
      {
        "name": "不锈钢勺子",
        "categroy": 1
      },
      {
        "name": "乐扣乐扣",
        "categroy": 1
      },
      {
        "name": "木质拼板",
        "categroy": 1
      },
      {
        "name": "眼霜罐",
        "categroy": 1
      },
      {
        "name": "马桶盖",
        "categroy": 1
      },
      {
        "name": "饮料瓶盖",
        "categroy": 1
      },
      {
        "name": "玻璃锅盖",
        "categroy": 1
      },
      {
        "name": "棉花被",
        "categroy": 1
      },
      {
        "name": "防晒衣",
        "categroy": 1
      },
      {
        "name": "地铁票",
        "categroy": 1
      },
      {
        "name": "脸盆",
        "categroy": 1
      },
      {
        "name": "脚盆",
        "categroy": 1
      },
      {
        "name": "洗脸仪",
        "categroy": 1
      },
      {
        "name": "电动剃须刀",
        "categroy": 1
      },
      {
        "name": "充电牙刷",
        "categroy": 1
      },
      {
        "name": "电炖锅",
        "categroy": 1
      },
      {
        "name": "高压锅",
        "categroy": 1
      },
      {
        "name": "热水袋",
        "categroy": 1
      },
      {
        "name": "充电热水袋",
        "categroy": 1
      },
      {
        "name": "玻璃碎片",
        "categroy": 1
      },
      {
        "name": "废钥匙",
        "categroy": 1
      },
      {
        "name": "干净饮料瓶",
        "categroy": 1
      },
      {
        "name": "废报纸",
        "categroy": 1
      },
      {
        "name": "旧被单",
        "categroy": 1
      },
      {
        "name": "废旧吸铁石",
        "categroy": 1
      },
      {
        "name": "冰红茶利乐包装",
        "categroy": 1
      },
      {
        "name": "金属瓶盖",
        "categroy": 1
      },
      {
        "name": "香烟盒",
        "categroy": 1
      },
      {
        "name": "香烟壳",
        "categroy": 1
      },
      {
        "name": "金手链",
        "categroy": 1
      },
      {
        "name": "金项链",
        "categroy": 1
      },
      {
        "name": "热水瓶",
        "categroy": 1
      },
      {
        "name": "脚垫",
        "categroy": 1
      },
      {
        "name": "钢化玻璃",
        "categroy": 1
      },
      {
        "name": "纸质杯套",
        "categroy": 1
      },
      {
        "name": "塑料杯套",
        "categroy": 1
      },
      {
        "name": "星巴克纸袋",
        "categroy": 1
      },
      {
        "name": "木条",
        "categroy": 1
      },
      {
        "name": "木棍",
        "categroy": 1
      },
      {
        "name": "簪子",
        "categroy": 1
      },
      {
        "name": "鼓棒",
        "categroy": 1
      },
      {
        "name": "奥特曼玩具",
        "categroy": 1
      },
      {
        "name": "洗手液瓶",
        "categroy": 1
      },
      {
        "name": "滑板",
        "categroy": 1
      },
      {
        "name": "电源插头",
        "categroy": 1
      },
      {
        "name": "信纸",
        "categroy": 1
      },
      {
        "name": "画框",
        "categroy": 1
      },
      {
        "name": "洗涤液瓶",
        "categroy": 1
      },
      {
        "name": "二手手机",
        "categroy": 1
      },
      {
        "name": "电动卷发棒",
        "categroy": 1
      },
      {
        "name": "洗洁精瓶",
        "categroy": 1
      },
      {
        "name": "拖把桶",
        "categroy": 1
      },
      {
        "name": "台布",
        "categroy": 1
      },
      {
        "name": "布艺窗帘",
        "categroy": 1
      },
      {
        "name": "软玻璃",
        "categroy": 1
      },
      {
        "name": "水晶板",
        "categroy": 1
      },
      {
        "name": "钨丝灯",
        "categroy": 1
      },
      {
        "name": "鲜奶盒",
        "categroy": 1
      },
      {
        "name": "球鞋",
        "categroy": 1
      },
      {
        "name": "草稿本",
        "categroy": 1
      },
      {
        "name": "鞋带",
        "categroy": 1
      },
      {
        "name": "干发帽",
        "categroy": 1
      },
      {
        "name": "铝箔袋",
        "categroy": 1
      },
      {
        "name": "纸质礼品盒",
        "categroy": 1
      },
      {
        "name": "易拉罐拉环",
        "categroy": 1
      },
      {
        "name": "书包",
        "categroy": 1
      },
      {
        "name": "铁调羹",
        "categroy": 1
      },
      {
        "name": "铁盒子",
        "categroy": 1
      },
      {
        "name": "浴帘",
        "categroy": 1
      },
      {
        "name": "泳帽",
        "categroy": 1
      },
      {
        "name": "泳衣",
        "categroy": 1
      },
      {
        "name": "电动保温箱",
        "categroy": 1
      },
      {
        "name": "起钉器",
        "categroy": 1
      },
      {
        "name": "消费卡",
        "categroy": 1
      },
      {
        "name": "步步高学习机",
        "categroy": 1
      },
      {
        "name": "塑料晾衣杆",
        "categroy": 1
      },
      {
        "name": "金属零件",
        "categroy": 1
      },
      {
        "name": "皮夹",
        "categroy": 1
      },
      {
        "name": "旧布鞋",
        "categroy": 1
      },
      {
        "name": "金子",
        "categroy": 1
      },
      {
        "name": "金器",
        "categroy": 1
      },
      {
        "name": "书本",
        "categroy": 1
      },
      {
        "name": "拉杆箱",
        "categroy": 1
      },
      {
        "name": "棉被",
        "categroy": 1
      },
      {
        "name": "金属钥匙扣",
        "categroy": 1
      },
      {
        "name": "午餐肉罐头",
        "categroy": 1
      },
      {
        "name": "帆布袋",
        "categroy": 1
      },
      {
        "name": "变形金刚",
        "categroy": 1
      },
      {
        "name": "皮质钱包",
        "categroy": 1
      },
      {
        "name": "肯德基纸袋",
        "categroy": 1
      },
      {
        "name": "纸牌",
        "categroy": 1
      },
      {
        "name": "旧拖鞋",
        "categroy": 1
      },
      {
        "name": "塑料酸奶盒",
        "categroy": 1
      },
      {
        "name": "老干妈瓶子",
        "categroy": 1
      },
      {
        "name": "洁厕灵瓶子",
        "categroy": 1
      },
      {
        "name": "耳钉",
        "categroy": 1
      },
      {
        "name": "奥特曼卡片",
        "categroy": 1
      },
      {
        "name": "旧枕头",
        "categroy": 1
      },
      {
        "name": "牛奶瓶",
        "categroy": 1
      },
      {
        "name": "衣服干洗剂瓶",
        "categroy": 1
      },
      {
        "name": "速冻食品保温袋",
        "categroy": 1
      },
      {
        "name": "泡沫保温箱",
        "categroy": 1
      },
      {
        "name": "玩具盒",
        "categroy": 1
      },
      {
        "name": "玩具塑料盒",
        "categroy": 1
      },
      {
        "name": "矿泉水瓶盖",
        "categroy": 1
      },
      {
        "name": "垃圾箱",
        "categroy": 1
      },
      {
        "name": "太空望远镜",
        "categroy": 1
      },
      {
        "name": "铁丝",
        "categroy": 1
      },
      {
        "name": "铜丝",
        "categroy": 1
      },
      {
        "name": "金属门吸",
        "categroy": 1
      },
      {
        "name": "吸门器",
        "categroy": 1
      },
      {
        "name": "瑜伽垫",
        "categroy": 1
      },
      {
        "name": "旧瑜伽垫",
        "categroy": 1
      },
      {
        "name": "纸袋子",
        "categroy": 1
      },
      {
        "name": "塑料膜",
        "categroy": 1
      },
      {
        "name": "铁罐",
        "categroy": 1
      },
      {
        "name": "鸡蛋盒",
        "categroy": 1
      },
      {
        "name": "隐形眼镜包装盒",
        "categroy": 1
      },
      {
        "name": "拍拍净瓶罐",
        "categroy": 1
      },
      {
        "name": "喜糖铁盒子",
        "categroy": 1
      },
      {
        "name": "废旧报纸",
        "categroy": 1
      },
      {
        "name": "磁带播放器",
        "categroy": 1
      },
      {
        "name": "纸质印刷品",
        "categroy": 1
      },
      {
        "name": "排插",
        "categroy": 1
      },
      {
        "name": "星巴克杯托",
        "categroy": 1
      },
      {
        "name": "料酒瓶",
        "categroy": 1
      },
      {
        "name": "木质拖把杆",
        "categroy": 1
      },
      {
        "name": "金属拖把杆",
        "categroy": 1
      },
      {
        "name": "小木棍",
        "categroy": 1
      },
      {
        "name": "旧皮鞋",
        "categroy": 1
      },
      {
        "name": "巴黎水玻璃瓶",
        "categroy": 1
      },
      {
        "name": "自拍杆",
        "categroy": 1
      },
      {
        "name": "置物架",
        "categroy": 1
      },
      {
        "name": "球拍",
        "categroy": 1
      },
      {
        "name": "清洁剂瓶",
        "categroy": 1
      },
      {
        "name": "木质玩具",
        "categroy": 1
      },
      {
        "name": "高尔夫球杆",
        "categroy": 1
      },
      {
        "name": "铜线",
        "categroy": 1
      },
      {
        "name": "快递纸箱",
        "categroy": 1
      },
      {
        "name": "旧相机",
        "categroy": 1
      },
      {
        "name": "乐高玩具",
        "categroy": 1
      },
      {
        "name": "棉拖鞋",
        "categroy": 1
      },
      {
        "name": "脏袜子",
        "categroy": 1
      },
      {
        "name": "羽毛球拍",
        "categroy": 8
      },
      {
        "name": "乒乓球拍",
        "categroy": 1
      },
      {
        "name": "电子灭蚊拍",
        "categroy": 1
      },
      {
        "name": "塑料瓶盖",
        "categroy": 1
      },
      {
        "name": "卷筒纸芯",
        "categroy": 1
      },
      {
        "name": "卡纸",
        "categroy": 1
      },
      {
        "name": "奶粉桶",
        "categroy": 1
      },
      {
        "name": "玩具塑料包装纸盒",
        "categroy": 1
      },
      {
        "name": "曲奇铁罐",
        "categroy": 1
      },
      {
        "name": "蓝罐曲奇盒",
        "categroy": 1
      },
      {
        "name": "塑料标签",
        "categroy": 1
      },
      {
        "name": "保鲜膜带齿盒",
        "categroy": 1
      },
      {
        "name": "内存卡",
        "categroy": 1
      },
      {
        "name": "背包",
        "categroy": 1
      },
      {
        "name": "酸奶玻璃瓶",
        "categroy": 1
      },
      {
        "name": "芯片",
        "categroy": 1
      },
      {
        "name": "鞋盒",
        "categroy": 1
      },
      {
        "name": "CPU",
        "categroy": 1
      },
      {
        "name": "漱口水瓶",
        "categroy": 1
      },
      {
        "name": "雨伞伞面",
        "categroy": 1
      },
      {
        "name": "电脑机箱",
        "categroy": 1
      },
      {
        "name": "塑料碗",
        "categroy": 1
      },
      {
        "name": "玻璃渣",
        "categroy": 1
      },
      {
        "name": "精华玻璃瓶",
        "categroy": 1
      },
      {
        "name": "衣服包装袋",
        "categroy": 1
      },
      {
        "name": "PS4",
        "categroy": 1
      },
      {
        "name": "蜂蜜柚子茶玻璃罐",
        "categroy": 1
      },
      {
        "name": "拖线板",
        "categroy": 1
      },
      {
        "name": "包书纸",
        "categroy": 1
      },
      {
        "name": "洁厕液瓶",
        "categroy": 1
      },
      {
        "name": "玻璃密封容器",
        "categroy": 1
      },
      {
        "name": "蓝牙耳机",
        "categroy": 1
      },
      {
        "name": "牛皮纸",
        "categroy": 1
      },
      {
        "name": "铅笔盒",
        "categroy": 1
      },
      {
        "name": "玻璃电子秤",
        "categroy": 1
      },
      {
        "name": "显示屏",
        "categroy": 1
      },
      {
        "name": "蜜蜡",
        "categroy": 1
      },
      {
        "name": "暖壶胆",
        "categroy": 1
      },
      {
        "name": "玻璃蜡烛杯",
        "categroy": 1
      },
      {
        "name": "雪弗板",
        "categroy": 1
      },
      {
        "name": "快递纸袋",
        "categroy": 1
      },
      {
        "name": "热水瓶胆",
        "categroy": 1
      },
      {
        "name": "木盒子",
        "categroy": 1
      },
      {
        "name": "枕芯",
        "categroy": 1
      },
      {
        "name": "旧跑鞋",
        "categroy": 1
      },
      {
        "name": "行李箱",
        "categroy": 1
      },
      {
        "name": "麦当劳咖啡杯杯盖（印有可回收标志）",
        "categroy": 1
      },
      {
        "name": "肯德基豆浆杯盖（印有可回收标志）",
        "categroy": 1
      },
      {
        "name": "羽绒服",
        "categroy": 1
      },
      {
        "name": "无纺布包",
        "categroy": 1
      },
      {
        "name": "保温壶",
        "categroy": 1
      },
      {
        "name": "金属晾衣杆",
        "categroy": 1
      },
      {
        "name": "橄榄球",
        "categroy": 1
      },
      {
        "name": "塑料桌布",
        "categroy": 1
      },
      {
        "name": "炒菜铁锅",
        "categroy": 1
      },
      {
        "name": "铁衣架",
        "categroy": 1
      },
      {
        "name": "网卡",
        "categroy": 1
      },
      {
        "name": "口香糖塑料盒",
        "categroy": 1
      },
      {
        "name": "美年达饮料瓶",
        "categroy": 1
      },
      {
        "name": "圆规",
        "categroy": 1
      },
      {
        "name": "布鞋套",
        "categroy": 1
      },
      {
        "name": "青铜",
        "categroy": 1
      },
      {
        "name": "皮料",
        "categroy": 1
      },
      {
        "name": "电锯",
        "categroy": 1
      },
      {
        "name": "钢尺",
        "categroy": 1
      },
      {
        "name": "水槽过滤网",
        "categroy": 1
      },
      {
        "name": "合金筷子",
        "categroy": 1
      },
      {
        "name": "螺丝钉",
        "categroy": 1
      },
      {
        "name": "饮料玻璃瓶",
        "categroy": 1
      },
      {
        "name": "玻璃花瓶",
        "categroy": 1
      },
      {
        "name": "旧剪刀",
        "categroy": 1
      },
      {
        "name": "电热水壶",
        "categroy": 1
      },
      {
        "name": "Kindle",
        "categroy": 1
      },
      {
        "name": "榨汁机",
        "categroy": 1
      },
      {
        "name": "搅拌器",
        "categroy": 1
      },
      {
        "name": "鱼竿",
        "categroy": 1
      },
      {
        "name": "芭比娃娃",
        "categroy": 1
      },
      {
        "name": "塑料储物箱",
        "categroy": 1
      },
      {
        "name": "脱排油烟机",
        "categroy": 1
      },
      {
        "name": "燃气灶",
        "categroy": 1
      },
      {
        "name": "童鞋",
        "categroy": 1
      },
      {
        "name": "闹铃",
        "categroy": 1
      },
      {
        "name": "电水壶",
        "categroy": 1
      },
      {
        "name": "旅行箱",
        "categroy": 1
      },
      {
        "name": "饼干盒",
        "categroy": 1
      },
      {
        "name": "首饰盒",
        "categroy": 1
      },
      {
        "name": "味全果汁瓶",
        "categroy": 1
      },
      {
        "name": "榨果汁机",
        "categroy": 1
      },
      {
        "name": "百叶窗",
        "categroy": 1
      },
      {
        "name": "金属鱼钩",
        "categroy": 1
      },
      {
        "name": "橡胶拖鞋",
        "categroy": 1
      },
      {
        "name": "化妆品外包装纸盒",
        "categroy": 1
      },
      {
        "name": "电瓶车防晒垫",
        "categroy": 1
      },
      {
        "name": "罐头瓶",
        "categroy": 1
      },
      {
        "name": "环保布质垃圾袋",
        "categroy": 1
      },
      {
        "name": "浴室防滑垫",
        "categroy": 1
      },
      {
        "name": "手机屏",
        "categroy": 1
      },
      {
        "name": "棉签盒",
        "categroy": 1
      },
      {
        "name": "羊毛被",
        "categroy": 1
      },
      {
        "name": "iPhone",
        "categroy": 1
      },
      {
        "name": "翡翠手镯",
        "categroy": 1
      },
      {
        "name": "汽车模型",
        "categroy": 1
      },
      {
        "name": "秋裤",
        "categroy": 1
      },
      {
        "name": "铁皮盖",
        "categroy": 1
      },
      {
        "name": "食用油玻璃瓶",
        "categroy": 1
      },
      {
        "name": "奶粉罐铝盖",
        "categroy": 1
      },
      {
        "name": "洗衣液桶",
        "categroy": 1
      },
      {
        "name": "吉他",
        "categroy": 1
      },
      {
        "name": "酱菜瓶",
        "categroy": 1
      },
      {
        "name": "腐乳瓶",
        "categroy": 1
      },
      {
        "name": "维他奶包装",
        "categroy": 1
      },
      {
        "name": "易拉罐盖",
        "categroy": 1
      },
      {
        "name": "指甲刀",
        "categroy": 1
      },
      {
        "name": "牙膏盒",
        "categroy": 1
      },
      {
        "name": "搓衣板",
        "categroy": 1
      },
      {
        "name": "咖啡杯套",
        "categroy": 1
      },
      {
        "name": "果酱瓶",
        "categroy": 1
      },
      {
        "name": "佐料瓶",
        "categroy": 1
      },
      {
        "name": "丝绸",
        "categroy": 1
      },
      {
        "name": "毛皮",
        "categroy": 1
      },
      {
        "name": "椰奶盒",
        "categroy": 1
      },
      {
        "name": "塑料文件袋",
        "categroy": 1
      },
      {
        "name": "美肤仪",
        "categroy": 1
      },
      {
        "name": "洁面仪",
        "categroy": 1
      },
      {
        "name": "健身器材",
        "categroy": 1
      },
      {
        "name": "纯牛奶纸盒",
        "categroy": 1
      },
      {
        "name": "电动刮痧板",
        "categroy": 1
      },
      {
        "name": "大提琴",
        "categroy": 1
      },
      {
        "name": "水果刀",
        "categroy": 1
      },
      {
        "name": "丝带",
        "categroy": 1
      },
      {
        "name": "塑料沙漏",
        "categroy": 1
      },
      {
        "name": "手机支撑架",
        "categroy": 1
      },
      {
        "name": "滴露瓶",
        "categroy": 1
      },
      {
        "name": "USB线",
        "categroy": 1
      },
      {
        "name": "塑料拖把杆",
        "categroy": 1
      },
      {
        "name": "番茄酱瓶",
        "categroy": 1
      },
      {
        "name": "牛奶塑料瓶",
        "categroy": 1
      },
      {
        "name": "旧窗帘",
        "categroy": 1
      },
      {
        "name": "椰汁瓶",
        "categroy": 1
      },
      {
        "name": "手机充电宝",
        "categroy": 1
      },
      {
        "name": "手机充电器",
        "categroy": 1
      },
      {
        "name": "凉鞋",
        "categroy": 1
      },
      {
        "name": "节能灯插座",
        "categroy": 1
      },
      {
        "name": "花洒软管",
        "categroy": 1
      },
      {
        "name": "软塑料隔热垫",
        "categroy": 1
      },
      {
        "name": "银行账单",
        "categroy": 1
      },
      {
        "name": "喷火枪",
        "categroy": 1
      },
      {
        "name": "酸奶瓶",
        "categroy": 1
      },
      {
        "name": "打气筒",
        "categroy": 1
      },
      {
        "name": "神仙水瓶",
        "categroy": 1
      },
      {
        "name": "塑料调色盘",
        "categroy": 1
      },
      {
        "name": "木勺",
        "categroy": 1
      },
      {
        "name": "卷纸内芯",
        "categroy": 1
      },
      {
        "name": "卷筒纸内芯",
        "categroy": 1
      },
      {
        "name": "椰奶罐",
        "categroy": 1
      },
      {
        "name": "卷纸芯",
        "categroy": 1
      },
      {
        "name": "木棒",
        "categroy": 1
      },
      {
        "name": "五金材料",
        "categroy": 1
      },
      {
        "name": "塑料锅铲",
        "categroy": 1
      },
      {
        "name": "木质锅铲",
        "categroy": 1
      },
      {
        "name": "牙线盒",
        "categroy": 1
      },
      {
        "name": "乐扣塑料盒",
        "categroy": 1
      },
      {
        "name": "乐扣玻璃盒",
        "categroy": 1
      },
      {
        "name": "木质花架",
        "categroy": 1
      },
      {
        "name": "绿茶包装盒",
        "categroy": 1
      },
      {
        "name": "电蒸锅",
        "categroy": 1
      },
      {
        "name": "钻戒",
        "categroy": 1
      },
      {
        "name": "银戒指",
        "categroy": 1
      },
      {
        "name": "即冲奶茶包装盒",
        "categroy": 1
      },
      {
        "name": "电容",
        "categroy": 1
      },
      {
        "name": "电阻",
        "categroy": 1
      },
      {
        "name": "二极管",
        "categroy": 1
      },
      {
        "name": "三极管",
        "categroy": 1
      },
      {
        "name": "废食用油瓶",
        "categroy": 1
      },
      {
        "name": "开关",
        "categroy": 1
      },
      {
        "name": "鸡蛋包装盒",
        "categroy": 1
      },
      {
        "name": "黑板",
        "categroy": 1
      },
      {
        "name": "豆浆机",
        "categroy": 1
      },
      {
        "name": "铁罐子",
        "categroy": 1
      },
      {
        "name": "CD塑料盒",
        "categroy": 1
      },
      {
        "name": "香薰玻璃瓶",
        "categroy": 1
      },
      {
        "name": "真皮制品",
        "categroy": 1
      },
      {
        "name": "羊皮制品",
        "categroy": 1
      },
      {
        "name": "皮草制品",
        "categroy": 1
      },
      {
        "name": "化妆品玻璃瓶",
        "categroy": 1
      },
      {
        "name": "帆布鞋",
        "categroy": 1
      },
      {
        "name": "休闲鞋",
        "categroy": 1
      },
      {
        "name": "关东煮隔热杯套",
        "categroy": 1
      },
      {
        "name": "烫衣板",
        "categroy": 1
      },
      {
        "name": "废弃药瓶",
        "categroy": 2
      },
      {
        "name": "手机电池",
        "categroy": 2
      },
      {
        "name": "废荧光灯管",
        "categroy": 2
      },
      {
        "name": "废水银温度计",
        "categroy": 2
      },
      {
        "name": "废水银血压计",
        "categroy": 2
      },
      {
        "name": "过期药品",
        "categroy": 2
      },
      {
        "name": "废农药",
        "categroy": 2
      },
      {
        "name": "节能灯（含水银）",
        "categroy": 2
      },
      {
        "name": "LED 灯（含水银）",
        "categroy": 2
      },
      {
        "name": "油漆桶",
        "categroy": 2
      },
      {
        "name": "酒精",
        "categroy": 2
      },
      {
        "name": "调色板",
        "categroy": 2
      },
      {
        "name": "过期的胶囊药物",
        "categroy": 2
      },
      {
        "name": "过期药片",
        "categroy": 2
      },
      {
        "name": "医用棉签",
        "categroy": 2
      },
      {
        "name": "医用手套",
        "categroy": 2
      },
      {
        "name": "农药瓶",
        "categroy": 2
      },
      {
        "name": "医用纱布",
        "categroy": 2
      },
      {
        "name": "口服液瓶",
        "categroy": 2
      },
      {
        "name": "废弃灯泡",
        "categroy": 2
      },
      {
        "name": "油漆笔",
        "categroy": 2
      },
      {
        "name": "锂电池",
        "categroy": 2
      },
      {
        "name": "生石灰",
        "categroy": 2
      },
      {
        "name": "胶卷底片",
        "categroy": 2
      },
      {
        "name": "废矿物油",
        "categroy": 2
      },
      {
        "name": "消毒剂",
        "categroy": 2
      },
      {
        "name": "胶片",
        "categroy": 2
      },
      {
        "name": "废血压计",
        "categroy": 2
      },
      {
        "name": "废镍镉电池",
        "categroy": 2
      },
      {
        "name": "氧化汞电池",
        "categroy": 2
      },
      {
        "name": "工业胶水",
        "categroy": 2
      },
      {
        "name": "胶合剂",
        "categroy": 2
      },
      {
        "name": "染发剂",
        "categroy": 2
      },
      {
        "name": "染发膏",
        "categroy": 2
      },
      {
        "name": "钮扣电池",
        "categroy": 2
      },
      {
        "name": "打印机墨盒",
        "categroy": 2
      },
      {
        "name": "硒鼓",
        "categroy": 2
      },
      {
        "name": "指甲油瓶子",
        "categroy": 2
      },
      {
        "name": "雷达瓶子",
        "categroy": 2
      },
      {
        "name": "塑料药盒",
        "categroy": 2
      },
      {
        "name": "过期指甲油",
        "categroy": 2
      },
      {
        "name": "卸甲膜",
        "categroy": 2
      },
      {
        "name": "医用针管",
        "categroy": 2
      },
      {
        "name": "膏药",
        "categroy": 8
      },
      {
        "name": "药瓶",
        "categroy": 2
      },
      {
        "name": "药包装",
        "categroy": 2
      },
      {
        "name": "咳嗽药水瓶",
        "categroy": 2
      },
      {
        "name": "针头",
        "categroy": 2
      },
      {
        "name": "塑料药瓶",
        "categroy": 2
      },
      {
        "name": "药片包装",
        "categroy": 2
      },
      {
        "name": "药品包装袋",
        "categroy": 2
      },
      {
        "name": "一次性注射器",
        "categroy": 2
      },
      {
        "name": "玻璃药瓶",
        "categroy": 2
      },
      {
        "name": "开塞露",
        "categroy": 2
      },
      {
        "name": "板蓝根冲剂",
        "categroy": 2
      },
      {
        "name": "口服液",
        "categroy": 2
      },
      {
        "name": "铅酸电池",
        "categroy": 2
      },
      {
        "name": "荧光灯",
        "categroy": 2
      },
      {
        "name": "卸甲水",
        "categroy": 2
      },
      {
        "name": "水银体温计",
        "categroy": 2
      },
      {
        "name": "X光片",
        "categroy": 2
      },
      {
        "name": "相片底片",
        "categroy": 2
      },
      {
        "name": "深海鱼油",
        "categroy": 2
      },
      {
        "name": "眼药水",
        "categroy": 2
      },
      {
        "name": "笔记本电脑电池",
        "categroy": 2
      },
      {
        "name": "过期感冒药",
        "categroy": 2
      },
      {
        "name": "冻干粉",
        "categroy": 2
      },
      {
        "name": "杀虫子罐",
        "categroy": 2
      },
      {
        "name": "染发手套",
        "categroy": 2
      },
      {
        "name": "钙片",
        "categroy": 2
      },
      {
        "name": "药膏",
        "categroy": 2
      },
      {
        "name": "药膏包装壳",
        "categroy": 2
      },
      {
        "name": "眼药水瓶",
        "categroy": 2
      },
      {
        "name": "药水玻璃瓶",
        "categroy": 2
      },
      {
        "name": "空药瓶",
        "categroy": 2
      },
      {
        "name": "空调清洗消毒液瓶",
        "categroy": 2
      },
      {
        "name": "安神补脑液瓶",
        "categroy": 2
      },
      {
        "name": "蟑螂药",
        "categroy": 2
      },
      {
        "name": "过期西药",
        "categroy": 2
      },
      {
        "name": "药品纸盒",
        "categroy": 2
      },
      {
        "name": "伤筋膏药",
        "categroy": 2
      },
      {
        "name": "伤筋药膏包装",
        "categroy": 2
      },
      {
        "name": "止痛膏",
        "categroy": 2
      },
      {
        "name": "纸药盒",
        "categroy": 2
      },
      {
        "name": "除渍剂",
        "categroy": 2
      },
      {
        "name": "西药瓶",
        "categroy": 2
      },
      {
        "name": "保健品瓶子",
        "categroy": 2
      },
      {
        "name": "打印机色带",
        "categroy": 2
      },
      {
        "name": "给药器",
        "categroy": 2
      },
      {
        "name": "松节油",
        "categroy": 2
      },
      {
        "name": "维生素瓶",
        "categroy": 2
      },
      {
        "name": "药液袋",
        "categroy": 2
      },
      {
        "name": "药片铝塑包装",
        "categroy": 2
      },
      {
        "name": "医用注射器",
        "categroy": 2
      },
      {
        "name": "输液瓶",
        "categroy": 2
      },
      {
        "name": "碳粉盒",
        "categroy": 2
      },
      {
        "name": "化学剂桶",
        "categroy": 2
      },
      {
        "name": "胶水桶",
        "categroy": 2
      },
      {
        "name": "马应龙",
        "categroy": 2
      },
      {
        "name": "鱼油胶囊",
        "categroy": 2
      },
      {
        "name": "药壶",
        "categroy": 2
      },
      {
        "name": "碘酒瓶",
        "categroy": 2
      },
      {
        "name": "外敷伤药",
        "categroy": 2
      },
      {
        "name": "膏药布",
        "categroy": 2
      },
      {
        "name": "透明塑料药瓶",
        "categroy": 2
      },
      {
        "name": "樟脑丸",
        "categroy": 2
      },
      {
        "name": "电灯泡",
        "categroy": 2
      },
      {
        "name": "金霉素眼药膏",
        "categroy": 2
      },
      {
        "name": "咳嗽药片",
        "categroy": 2
      },
      {
        "name": "达克宁药膏",
        "categroy": 2
      },
      {
        "name": "达克宁药膏皮",
        "categroy": 2
      },
      {
        "name": "卸甲油",
        "categroy": 2
      },
      {
        "name": "止咳糖浆瓶",
        "categroy": 2
      },
      {
        "name": "痔疮膏",
        "categroy": 2
      },
      {
        "name": "泡腾片",
        "categroy": 2
      },
      {
        "name": "阿胶糕",
        "categroy": 4
      },
      {
        "name": "塑料档案袋",
        "categroy": 1
      },
      {
        "name": "纸质档案袋",
        "categroy": 1
      },
      {
        "name": "河蚌",
        "categroy": 8
      },
      {
        "name": "背心",
        "categroy": 1
      },
      {
        "name": "贝壳肉",
        "categroy": 4
      },
      {
        "name": "方便面袋",
        "categroy": 8
      },
      {
        "name": "茶饼",
        "categroy": 4
      },
      {
        "name": "玻璃罐",
        "categroy": 1
      },
      {
        "name": "铝箔包",
        "categroy": 8
      },
      {
        "name": "锡箔纸",
        "categroy": 8
      },
      {
        "name": "不锈钢杯",
        "categroy": 1
      },
      {
        "name": "餐巾纸",
        "categroy": 8
      },
      {
        "name": "党参",
        "categroy": 4
      },
      {
        "name": "残渣剩饭",
        "categroy": 4
      },
      {
        "name": "草帽",
        "categroy": 8
      },
      {
        "name": "电池",
        "categroy": 2
      },
      {
        "name": "干电池",
        "categroy": 2
      },
      {
        "name": "塑料尺",
        "categroy": 1
      },
      {
        "name": "不锈钢尺",
        "categroy": 1
      },
      {
        "name": "毛毛虫",
        "categroy": 4
      },
      {
        "name": "宠物毛发",
        "categroy": 8
      },
      {
        "name": "金属厨具",
        "categroy": 1
      },
      {
        "name": "厨房垃圾袋",
        "categroy": 8
      },
      {
        "name": "纯棉靠垫",
        "categroy": 1
      },
      {
        "name": "纯棉靠枕",
        "categroy": 1
      },
      {
        "name": "磁盘盒",
        "categroy": 1
      },
      {
        "name": "磁片盒",
        "categroy": 1
      },
      {
        "name": "暖瓶玻璃内胆",
        "categroy": 1
      },
      {
        "name": "打碎的碗",
        "categroy": 8
      },
      {
        "name": "鱼的内脏",
        "categroy": 4
      },
      {
        "name": "塑料凳",
        "categroy": 1
      },
      {
        "name": "地瓜皮",
        "categroy": 4
      },
      {
        "name": "快递冰袋",
        "categroy": 8
      },
      {
        "name": "过期糕点",
        "categroy": 4
      },
      {
        "name": "冬笋",
        "categroy": 4
      },
      {
        "name": "水银温度计",
        "categroy": 2
      },
      {
        "name": "防晒霜空瓶",
        "categroy": 1
      },
      {
        "name": "废花盆",
        "categroy": 8
      },
      {
        "name": "废胶片",
        "categroy": 2
      },
      {
        "name": "凤梨",
        "categroy": 4
      },
      {
        "name": "中药敷贴",
        "categroy": 8
      },
      {
        "name": "护肤品玻璃空瓶",
        "categroy": 1
      },
      {
        "name": "护肤品塑料空瓶",
        "categroy": 1
      },
      {
        "name": "护肤霜玻璃空瓶",
        "categroy": 1
      },
      {
        "name": "猪肉脯",
        "categroy": 4
      },
      {
        "name": "可擦复写笔",
        "categroy": 8
      },
      {
        "name": "塑料盖",
        "categroy": 1
      },
      {
        "name": "青菜杆",
        "categroy": 4
      },
      {
        "name": "玻璃烟缸",
        "categroy": 1
      },
      {
        "name": "隔离霜空瓶",
        "categroy": 1
      },
      {
        "name": "各类过期药品",
        "categroy": 2
      },
      {
        "name": "金属工具",
        "categroy": 1
      },
      {
        "name": "含汞电池",
        "categroy": 2
      },
      {
        "name": "狗尿布",
        "categroy": 8
      },
      {
        "name": "鸡骨",
        "categroy": 4
      },
      {
        "name": "挂耳咖啡包",
        "categroy": 8
      },
      {
        "name": "铝锅",
        "categroy": 1
      },
      {
        "name": "过滤芯",
        "categroy": 8
      },
      {
        "name": "电焊丝",
        "categroy": 1
      },
      {
        "name": "木盒",
        "categroy": 1
      },
      {
        "name": "黑木耳",
        "categroy": 4
      },
      {
        "name": "护发素塑料空瓶",
        "categroy": 1
      },
      {
        "name": "精华液玻璃空瓶",
        "categroy": 1
      },
      {
        "name": "精华液塑料空瓶",
        "categroy": 1
      },
      {
        "name": "油画",
        "categroy": 8
      },
      {
        "name": "油画棒",
        "categroy": 8
      },
      {
        "name": "家养花卉",
        "categroy": 4
      },
      {
        "name": "木质积木",
        "categroy": 1
      },
      {
        "name": "鸡骨架",
        "categroy": 4
      },
      {
        "name": "金属衣架",
        "categroy": 1
      },
      {
        "name": "无汞碱性电池",
        "categroy": 8
      },
      {
        "name": "豆角壳",
        "categroy": 4
      },
      {
        "name": "节能灯泡",
        "categroy": 2
      },
      {
        "name": "桔子",
        "categroy": 4
      },
      {
        "name": "洗洁精空瓶",
        "categroy": 1
      },
      {
        "name": "酒精棉",
        "categroy": 8
      },
      {
        "name": "干净的纸杯",
        "categroy": 8
      },
      {
        "name": "净水器滤芯",
        "categroy": 8
      },
      {
        "name": "旧草帽",
        "categroy": 8
      },
      {
        "name": "玻璃餐具",
        "categroy": 1
      },
      {
        "name": "塑料卡片",
        "categroy": 1
      },
      {
        "name": "烤肉",
        "categroy": 4
      },
      {
        "name": "乐扣乐扣塑料盒",
        "categroy": 1
      },
      {
        "name": "木筷子",
        "categroy": 1
      },
      {
        "name": "塑料筷子",
        "categroy": 1
      },
      {
        "name": "宽粉",
        "categroy": 4
      },
      {
        "name": "金属制菜篮子",
        "categroy": 1
      },
      {
        "name": "烂黄瓜",
        "categroy": 4
      },
      {
        "name": "利乐枕",
        "categroy": 1
      },
      {
        "name": "利乐砖",
        "categroy": 1
      },
      {
        "name": "可乐空罐",
        "categroy": 1
      },
      {
        "name": "鱼类",
        "categroy": 4
      },
      {
        "name": "荔枝",
        "categroy": 4
      },
      {
        "name": "长筒连裤袜",
        "categroy": 8
      },
      {
        "name": "护脸霜玻璃空瓶",
        "categroy": 1
      },
      {
        "name": "护脸霜塑料空瓶",
        "categroy": 1
      },
      {
        "name": "鸟粮",
        "categroy": 4
      },
      {
        "name": "木质晾衣架",
        "categroy": 1
      },
      {
        "name": "不锈钢晾衣杆",
        "categroy": 1
      },
      {
        "name": "过期零食",
        "categroy": 4
      },
      {
        "name": "金属哑铃",
        "categroy": 1
      },
      {
        "name": "榴莲",
        "categroy": 8
      },
      {
        "name": "花露水玻璃空瓶",
        "categroy": 1
      },
      {
        "name": "沐浴露玻璃空瓶",
        "categroy": 1
      },
      {
        "name": "沐浴露塑料空瓶",
        "categroy": 1
      },
      {
        "name": "马甲袋",
        "categroy": 8
      },
      {
        "name": "满天星",
        "categroy": 4
      },
      {
        "name": "话梅核",
        "categroy": 4
      },
      {
        "name": "空灭火器",
        "categroy": 1
      },
      {
        "name": "灭蚊剂瓶",
        "categroy": 2
      },
      {
        "name": "包书膜",
        "categroy": 8
      },
      {
        "name": "磨砂膏塑料空瓶",
        "categroy": 1
      },
      {
        "name": "废旧抹布",
        "categroy": 8
      },
      {
        "name": "墨鱼",
        "categroy": 4
      },
      {
        "name": "泡沫餐盒",
        "categroy": 8
      },
      {
        "name": "塑料收纳箱",
        "categroy": 1
      },
      {
        "name": "无纺布收纳箱",
        "categroy": 1
      },
      {
        "name": "奶片",
        "categroy": 4
      },
      {
        "name": "胶囊药片",
        "categroy": 2
      },
      {
        "name": "镉镍电池",
        "categroy": 2
      },
      {
        "name": "镍铝电池",
        "categroy": 2
      },
      {
        "name": "泡菜",
        "categroy": 4
      },
      {
        "name": "杀虫喷雾罐",
        "categroy": 2
      },
      {
        "name": "杀虫喷雾瓶",
        "categroy": 2
      },
      {
        "name": "玻璃盆",
        "categroy": 1
      },
      {
        "name": "瓜皮",
        "categroy": 4
      },
      {
        "name": "收银小票",
        "categroy": 1
      },
      {
        "name": "废药品",
        "categroy": 2
      },
      {
        "name": "铝瓶",
        "categroy": 1
      },
      {
        "name": "破瓷瓶",
        "categroy": 8
      },
      {
        "name": "过期茶叶",
        "categroy": 4
      },
      {
        "name": "乳胶漆",
        "categroy": 2
      },
      {
        "name": "空煤气罐",
        "categroy": 1
      },
      {
        "name": "彩色铅笔",
        "categroy": 8
      },
      {
        "name": "木头铅笔",
        "categroy": 8
      },
      {
        "name": "青草",
        "categroy": 4
      },
      {
        "name": "镍氢电池",
        "categroy": 2
      },
      {
        "name": "装订铁圈",
        "categroy": 1
      },
      {
        "name": "燃气罐空瓶",
        "categroy": 1
      },
      {
        "name": "燃油罐空瓶",
        "categroy": 1
      },
      {
        "name": "染发料瓶",
        "categroy": 2
      },
      {
        "name": "日光灯管",
        "categroy": 2
      },
      {
        "name": "金属制容器",
        "categroy": 1
      },
      {
        "name": "毛绒垫",
        "categroy": 1
      },
      {
        "name": "果肉",
        "categroy": 4
      },
      {
        "name": "润发乳空瓶",
        "categroy": 1
      },
      {
        "name": "润肤霜玻璃空瓶",
        "categroy": 1
      },
      {
        "name": "砂纸",
        "categroy": 8
      },
      {
        "name": "杀虫剂罐",
        "categroy": 2
      },
      {
        "name": "杀虫剂瓶",
        "categroy": 2
      },
      {
        "name": "沙包",
        "categroy": 8
      },
      {
        "name": "防晒霜玻璃空瓶",
        "categroy": 1
      },
      {
        "name": "防晒霜塑料空瓶",
        "categroy": 1
      },
      {
        "name": "山芋皮",
        "categroy": 4
      },
      {
        "name": "剩饭剩菜",
        "categroy": 4
      },
      {
        "name": "风干食品",
        "categroy": 4
      },
      {
        "name": "过期粮食",
        "categroy": 4
      },
      {
        "name": "狗屎纸",
        "categroy": 8
      },
      {
        "name": "过期芝士",
        "categroy": 4
      },
      {
        "name": "手纸",
        "categroy": 8
      },
      {
        "name": "受污染纸张",
        "categroy": 8
      },
      {
        "name": "腐烂蔬菜",
        "categroy": 4
      },
      {
        "name": "金属锅",
        "categroy": 1
      },
      {
        "name": "漱口水塑料空瓶",
        "categroy": 1
      },
      {
        "name": "面霜塑料空瓶",
        "categroy": 1
      },
      {
        "name": "爽肤水玻璃空瓶",
        "categroy": 1
      },
      {
        "name": "爽肤水塑料空瓶",
        "categroy": 1
      },
      {
        "name": "死鱼",
        "categroy": 4
      },
      {
        "name": "速冻饺子包装",
        "categroy": 8
      },
      {
        "name": "酸奶利乐包装盒",
        "categroy": 1
      },
      {
        "name": "碎玻璃",
        "categroy": 1
      },
      {
        "name": "碎瓷片",
        "categroy": 8
      },
      {
        "name": "污损报纸",
        "categroy": 8
      },
      {
        "name": "污损纸盒",
        "categroy": 8
      },
      {
        "name": "太阳能电池",
        "categroy": 2
      },
      {
        "name": "羊毛毯",
        "categroy": 1
      },
      {
        "name": "碎陶瓷",
        "categroy": 8
      },
      {
        "name": "陶瓷刀",
        "categroy": 8
      },
      {
        "name": "田螺肉",
        "categroy": 4
      },
      {
        "name": "铁桶",
        "categroy": 1
      },
      {
        "name": "纸筒",
        "categroy": 1
      },
      {
        "name": "竹筒",
        "categroy": 8
      },
      {
        "name": "薯片外包装",
        "categroy": 8
      },
      {
        "name": "陶瓷碗",
        "categroy": 8
      },
      {
        "name": "调味品",
        "categroy": 4
      },
      {
        "name": "保温材料",
        "categroy": 8
      },
      {
        "name": "无花果壳",
        "categroy": 4
      },
      {
        "name": "衣物",
        "categroy": 1
      },
      {
        "name": "锡纸盒",
        "categroy": 8
      },
      {
        "name": "竹席",
        "categroy": 8
      },
      {
        "name": "相片",
        "categroy": 2
      },
      {
        "name": "相纸",
        "categroy": 2
      },
      {
        "name": "相片纸",
        "categroy": 2
      },
      {
        "name": "橡胶垫",
        "categroy": 8
      },
      {
        "name": "84消毒液空瓶",
        "categroy": 2
      },
      {
        "name": "小排",
        "categroy": 4
      },
      {
        "name": "卸妆油空瓶",
        "categroy": 1
      },
      {
        "name": "杏",
        "categroy": 4
      },
      {
        "name": "铅蓄电池",
        "categroy": 2
      },
      {
        "name": "雪蟹蟹壳",
        "categroy": 4
      },
      {
        "name": "龙眼壳",
        "categroy": 4
      },
      {
        "name": "过期燕麦片",
        "categroy": 4
      },
      {
        "name": "羊肉",
        "categroy": 4
      },
      {
        "name": "花椰菜",
        "categroy": 4
      },
      {
        "name": "口服液药瓶",
        "categroy": 2
      },
      {
        "name": "洗手液空瓶",
        "categroy": 1
      },
      {
        "name": "皮衣",
        "categroy": 1
      },
      {
        "name": "电影胶片",
        "categroy": 2
      },
      {
        "name": "有机溶剂包装",
        "categroy": 2
      },
      {
        "name": "玉米杆",
        "categroy": 4
      },
      {
        "name": "鲜肉月饼",
        "categroy": 4
      },
      {
        "name": "家养盆栽",
        "categroy": 4
      },
      {
        "name": "药渣",
        "categroy": 4
      },
      {
        "name": "炸鸡腿",
        "categroy": 4
      },
      {
        "name": "粘鼠胶",
        "categroy": 2
      },
      {
        "name": "木质擀面杖",
        "categroy": 1
      },
      {
        "name": "塑料擀面杖",
        "categroy": 1
      },
      {
        "name": "纸质账单",
        "categroy": 1
      },
      {
        "name": "照相机电池",
        "categroy": 2
      },
      {
        "name": "塑料砧板",
        "categroy": 1
      },
      {
        "name": "乳制品",
        "categroy": 4
      },
      {
        "name": "玻璃制品",
        "categroy": 1
      },
      {
        "name": "圆珠笔笔套",
        "categroy": 1
      },
      {
        "name": "水煮花生壳",
        "categroy": 4
      },
      {
        "name": "包装袋",
        "categroy": 8
      },
      {
        "name": "自动铅笔",
        "categroy": 8
      },
      {
        "name": "钻头",
        "categroy": 1
      }
    ],
    result:null,
    resultArr:[],
    keyWord: '',
    //banner图片显示
    showFlag:false,   
  },
  //轮播图函数开始
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  //轮播图函数结束

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    console.log()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  getKeyWord(e) {
    this.setData({
      keyWord: e.detail.value
    });
  },
  search(event) {
    //key 关键字, resultArr模糊查询结果, sourceData原始数据
    //输入为空不处理
    console.log(event.currentTarget.dataset['key']);
    let key = event.currentTarget.dataset['key'];
  if (key.trim() == '') return false;
    //清空文本框,清空精确查询结果,清空存放上一次模糊查询数据的数组resultArr
    this.setData({
      keyWord: '',
      result:null
    });
    let resultArr=[];
    let sourceData =this.data.sourceData;
    //countUnmatch 未匹配计数
    let countUnmatch=0;
    //遍历原始数据
    sourceData.some((val, index) => {
      if (val.name == key) {
        // console.log('找到了');
        this.setData({
          result: val
        });
        return true;
      } else if (val.name.match(new RegExp(key))) {
        // console.log('匹配了');
        resultArr.push(val);
      } else {
        ++countUnmatch;
        if (countUnmatch!=sourceData.length)return false;
        // console.log('未匹配')
        this.setData({
          result: {
            code: 10001,
            msg: "查询无数据"
          }
        })
      }
    });
    this.setData({
      resultArr: resultArr.slice(0,9)
    });
  },
  showImg(){
    this.setData({
      showFlag:true
    });
    let num = parseInt(Math.random() * this.data.imgRandomArr.length);
    this.setData({
      randomImgUrl: this.data.imgRandomArr[num]
    });
    // console.log(this.data.showFlag)
    // console.log(this.data.randomImgUrl)
  },
  hiddenImg() {
    this.setData({
      showFlag: false
    });
    // console.log(this.data.showFlag)
  },
  reset(){
    this.setData({
      result: null,
      resultArr: [],
    })
  }
})
