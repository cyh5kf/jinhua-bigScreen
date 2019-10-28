export default {
  /**
   * 主屏
   */
  jycy: 'POST /JYCY', // 就业创业指数
  JYCY_ZMMY: 'POST /JYCY_ZMMY', // 就业创业指数--中美贸易摩擦就业失业预警指数
  JYCY_JQZS: 'POST /JYCY_JQZS', // 就业创业指数--就业景气指数
  RCZS: 'POST /RCZS', // 人才指数
  RCZS_RCZL: 'POST /RCZS_RCZL', // 人才指数--人才增量
  RCZS_RCPPD: 'POST /RCZS_RCPPD', // 人才指数--人才匹配度
  RCZS_GCT: 'POST /RCZS_GCT', // 人才指数--新能源构成图
  LDGX: 'POST /LDGX', // 劳动关系指数
  LDGX_RCYJ: 'POST /LDGX_RCYJ', // 劳动关系指数-人才预警率
  LDGX_YJHJ: 'POST /LDGX_YJHJ', // 劳动关系指数-预警化解率
  LDGX_LDJC: 'POST /LDGX_LDJC', // 劳动和谐关系-劳动监察案件结案率
  LDGX_RSZY: 'POST /LDGX_RSZY', // 劳动关系指数-劳动人事争议调解仲裁结案率
  SHBZ: 'POST /SHBZ', // 社会保障指数
  SHBZ_YXQYS: 'POST /SHBZ_YXQYS', //社会保障指数--社会保险费减征绩效(有效企业数)
  SHBZ_GDPZB: 'POST /SHBZ_GDPZB', // 社会保障指数-GDP占比
  SHBZ_LFNL: 'POST /SHBZ_LFNL', // 社会保障指数-社保基金养老支付能力
  SHBZ_RJFL: 'POST /SHBZ_RJFL', // 社会保障指数--社保保险人均福利额
  SHBZ_CKHY: 'POST /SHBZ_CKHY', // 社会保障指数--持卡活跃度
  GGFW: 'POST /GGFW', // 公共服务指数
  PYC_FWMYD: 'POST /PYC_FWMYD', // 公共服务指数-服务满意度
  PYC_SXBL: 'POST /PYC_SXBL', // 公共服务指数-事项实现比例
  WLXX: 'POST /WLXX', // 网络信息安全指数
  WLXX_YZCD: 'POST /WLXX_YZCD', // 网络信息安全-种类及严重程度
  MAP_ZS: 'POST /MAP_ZS', // --地图展示-指数相关
  MAP_RCLD: 'POST /MAP_RCLD', // --地图展示-人才流动
  MAP_SZRS: 'POST /MAP_SZRS', // --地图展示-数字人社
  MAP_FJLXZB: 'POST /MAP_FJLXZB', // --地图展示-附加轮询指标

  ZHZS_GDQ: 'POST /ZHZS_GDQ', // --综合指数-各地区
  ZHZS_QX: 'POST /ZHZS_QX', // --综合指数-全市

  /**
   * 劳动关系副屏
   */

  //--劳动关系预警化解 - 人均预警率
  LDGXYJHJ_RJYJL: 'post /LDGXYJHJ_RJYJL',

  //--劳动关系预警化解 - 行业
  LDGXYJHJ_HY: 'post /LDGXYJHJ_HY',

  //--预警化解率 - 当月
  YJHJL_DY: 'post /YJHJL_DY',
  LDGXXF_QS: 'post /LDGXXFJAL_QS',

  //--预警化解率 - 每月
  YJHJL_MY: 'post /YJHJL_MY',

  //--浙江无欠薪 - 抽查率
  ZJWQX_CCL: 'post /ZJWQX_CCL',

  //--浙江无欠薪 - 欠薪案件发生率
  ZJWQX_QXAJFSL: 'post /ZJWQX_QXAJFSL',

  //--金华劳动关系指数
  JHLDGX: 'post /JHLDGX',

  //--地图展示 - 金华劳动关系指数
  MAP_JHLDGX: 'post /MAP_JHLDGX',

  //--劳动关系信访
  LDGXXF: 'post /LDGXXF',

  //--劳动争议调解
  LDZXTJ: 'post /LDZXTJ',

  //--劳动争议调解 - 调解案例数分布
  LDZXTJ_TJALFB: 'post /LDZXTJ_TJALFB',

  //--劳动争议调解 - 案件结案数分布
  LDZXTJ_AJJAS: 'post /LDZXTJ_AJJAS',

  //--收入分配 - 工资
  SRFP_GZ: 'post /SRFP_GZ',

  //--收入分配 - 社会工资比值
  SRFP_SHGZBZ: 'post /SRFP_SHGZBZ',

  //--收入分配 - 最低工资比值
  SRFP_ZDGZBZ: 'post /SRFP_ZDGZBZ',

  /**
   * 就业创业副屏
   */
  JYCYZS_CZXZJYRS: 'POST /JYCYZS_CZXZJYRS', // --城镇新增就业人数

  JYCYZS_CZDJSYL: 'POST /JYCYZS_CZDJSYL', // --城镇登记失业率

  JYCYZS_ECJYQK: 'POST /JYCYZS_ECJYQK', // --二次就业情况

  ECJYQK_HYLX: 'POST /ECJYQK_HYLX', // --行业流向

  JYCYZS_XKBQYS: 'POST /JYCYZS_XKBQYS', // --新开办企业数

  JYCYZS_GTGSHS: 'POST /JYCYZS_GTGSHS', // --个体工商户数

  JYCYZS_CYQK: 'POST /JYCYZS_CYQK', // --创业情况

  JYCYZS_QRBL: 'POST /JYCYZS_QRBL', // --求人倍率

  JYCYZS_SBCBRS: 'POST /JYCYZS_SBCBRS', // --社保参保人数

  JYCYZS_WLRKS: 'POST /JYCYZS_WLRKS', // --外来人口变化

  JYCYZS_GDP: 'POST /JYCYZS_GDP', // --就业创业指数-GDP

  /**
   * page: 社会保障
   */
  // --社会保障指数-社会保险参保覆盖面
  SHBZZS_CBFGM: 'POST /SHBZZS_CBFGM',
  // --社会保障指数-保险待遇保障水平
  SHBZZS_BXDYBZSP: 'POST /SHBZZS_BXDYBZSP',
  // --社会保障指数-各类型企业待遇保障水平
  SHBZZS_GLXQYDYBZ: 'POST /SHBZZS_GLXQYDYBZ',
  // --社会保障指数-基金监督YDYBZ
  SHBZZS_GJJK: 'POST /SHBZZS_GJJK',
  // --社会保障指数-社保费减征绩效
  SHBZZS_SBJZJX: 'POST /SHBZZS_SBJZJX',
  // --社会保障指数-社保基金支付能力
  SHBZZS_SBJJZFNL: 'POST /SHBZZS_SBJJZFNL',
  SHBZZS_YLJJZF: 'POST /SHBZZS_YLJJZF',
  // --社会保障指数-社保基金支付能力预测
  SHBZZS_ZFNLYC: 'POST /SHBZZS_ZFNLYC',

  /**
   * page: 人才指数
   */
  // --人才数量-每万人口人才数
  RCSL_MWRKRCS: 'POST /RCSL_MWRKRCS',
  // --人才数量-按年份
  RCSL_ANF: 'POST /RCSL_ANF',
  // --人才学历-按年份
  RCXL_ANF: 'POST /RCXL_ANF',
  // --人才学历-按学历
  RCXL_AXL: 'POST /RCXL_AXL',
  // --人才学历-大专及以上大学生占比
  RCXL_DZJYS: 'POST /RCXL_DZJYS',
  // --人才指数-人才结构
  RCZS_RCJG: 'POST /RCZS_RCJG',
  // --人才指数-保障与成果
  RCZS_BZYCG: 'POST /RCZS_BZYCG',
  // --人才指数-人才平台数量
  RCZS_RCPTSL: 'POST /RCZS_RCPTSL',
  // --专业技术人才-专业技术人才占比
  ZYJSRC_ZB: 'POST /ZYJSRC_ZB',
  // --专业技术人才-按层次
  ZYJSRC_ACC: 'POST /ZYJSRC_ACC',
  // --高技能人才-高技能人才占比
  GJSRC_ZB: 'POST /GJSRC_ZB',
  // --高技能人才-按层次
  GJSRC_ACC: 'POST /GJSRC_ACC',
  // --人才供需-求人倍率
  RCGX_QRBL: 'POST /RCGX_QRBL',
  // --人才指数-企业用人满意情况
  RCZS_QYYRMYQK: 'POST /RCZS_QYYRMYQK',

  /**
   * page: 求人倍率
   */
  QRBL_GWLXGQRS: 'POST /QRBL_GWLXGQRS', //岗位类型的供求人数

  QRBL_GXZPM: 'POST /QRBL_GXZPM', // 各岗位薪资排名TOP10

  QRBL_GZNXGQRS: 'POST /QRBL_GZNXGQRS', //工作年限的供求人数

  QRBL_GDQQRBL: 'POST /QRBL_GDQQRBL', //各地区求人倍率

  QRBL_ZPQZ: 'POST /QRBL_ZPQZ', //招聘求职

  QRBL_QSQRBL: 'POST /QRBL_QSQRBL', //全市求人倍率

  QRBL_JBNGQQK: 'POST /QRBL_JBNGQQK', //近半年供求情况

  QRBL_XLGQRS: 'POST /QRBL_XLGQRS', //学历的供求人数TOP10

  QRBL_NLGQRS: 'POST /QRBL_NLGQRS', //年龄的供求人数

  QRBL_XBGQQK: 'POST /QRBL_XBGQQK', //性别的供求情况

};

