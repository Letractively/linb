(linb.Locale.cn||(linb.Locale.cn={})).date={
    WEEKS:{
        '0':'日',
        '1':'一',
        '2':'二',
        '3':'三',
        '4':'四',
        '5':'五',
        '6':'六',
        '7':'周'
    },
    VIEWS:{
        '10 ms':'10毫秒',
        '100 ms':'100毫秒',
        '1 s':'1秒',
        '10 s':'10秒',
        '1 n':'1分钟',
        '5 n':'5分钟',
        '10 n':'10分钟',
        '30 n':'30分钟',
        '1 h':'1小时',
        '2 h':'2小时',
        '6 h':'6小时',
        '1 d':'1天',
        '1 w':'1周',
        '15 d':'15天',
        '1 m':'1月',
        '1 q':'1季度',
        '1 y':'1年',
        '1 de':'10年',
        '1 c':'1世纪'
    },
    MS:'毫秒',
    S:'秒',
    N:'分',
    H:'时',
    D:'日',
    W:'周',
    M:'月',
    Q:'季',
    Y:'年',
    DE:'十年',
    C:'世纪',
    HN:function(n,a,b){return a+'点'+b+'分'},
    DHN:function(n,a,b,c){return a+'日'+b+'点'+c+'分'},
    MDHN:function(n,a,b,c,d){return a+'月'+b+'日'+c+'点'+d+'分'},
    HNS:function(n,a,b,c){return a+'点'+b+'分'+c+'秒'},
    HNSMS:function(n,a,b,c,d){return a+'点'+b+'分'+c+'秒'+d+'毫秒'},
    YM:function(n,a,b){return a+'年'+b+'月'},
    YQ:function(n,a,b){return a+'年'+b+'季'},
    YMD:function(n,a,b,c){return a+'年'+b+'月'+c+'日'},
    MD:function(n,b,c){return b+'月'+c},
    YMDH:function(n,a,b,c,d){return a+'年'+b+'月'+c+'日'+d+'点'},
    YMDHN:function(n,a,b,c,d,e){return a+'年'+b+'月'+c+'日'+d+'点'+e+'分'},
    YMDHNS:function(n,a,b,c,d,e,f){return a+'年'+b+'月'+c+'日'+d+'点'+e+'分'+f+'秒'},
    ALL:function(n,a,b,c,d,e,f,g){return a+'年'+b+'月'+c+'日'+d+'点'+e+'分'+f+'秒' + " " +g},

    /*
    * replace '.' with '_' in key
    */
    TIMEZONE:{
        "Asia(East,North)":"东亚、北亚",

        "Brunei":"文莱 斯里巴加湾市",
        "Burma":"缅甸 仰光",
        "Cambodia":"柬埔寨 金边",
        "China":"中国 北京、重庆、上海、天津",
        "China(HK,Macau)":"中国 香港、澳门特区",
        "China(TaiWan)":"中国 台北、高雄",
        "China(Urumchi)":"中国 乌鲁木齐",
        "East Timor":"东帝汶 帝力",
        "Indonesia":"印尼 雅加达",
        "Japan":"日本 东京、大阪、札幌",
        "Kazakhstan(Aqtau)":"哈萨克斯坦 阿克图",
        "Kazakhstan(Aqtobe)":"哈萨克斯坦 阿克托别",
        "Kazakhstan(Astana)":"哈萨克斯坦 阿斯塔纳、阿拉木图",
        "Kirghizia":"吉尔吉斯 比斯凯克",
        "Korea":"韩国 汉城",
        "Laos":"老挝 万象",
        "Malaysia":"马来西亚 吉隆坡",
        "Mongolia":"蒙古 乌兰巴托、库伦",
        "Philippines":"菲律宾 马尼拉",
        "Russia(Anadyr)":"俄罗斯 阿纳德尔河",
        "Russia(Kamchatka)":"俄罗斯 堪察加半岛",
        "Russia(Magadan)":"俄罗斯 马加丹",
        "Russia(Vladivostok)":"俄罗斯 符拉迪沃斯托克(海参崴)",
        "Russia(Yakutsk)":"俄罗斯 雅库茨克",
        "Singapore":"新加坡",
        "Thailand":"泰国 曼谷",
        "Vietnam":"越南 河内",

        "Asia(South,West)":"南亚、中亚、西亚",

        "Afghanistan":"阿富汗 喀布尔",
        "Arab Emirates":"阿拉伯联合酋长国 阿布扎比",
        "Bahrain":"巴林 麦纳麦",
        "Bangladesh":"孟加拉 达卡",
        "Bhutan":"不丹 廷布",
        "Cyprus":"塞浦路斯 尼科西亚",
        "Georgia":"乔治亚 第比利斯",
        "India":"印度 新德里、孟买、加尔各答",
        "Iran":"伊朗 德黑兰",
        "Iraq":"伊拉克 巴格达",
        "Israel":"以色列 耶路撒冷",
        "Jordan":"约旦 安曼",
        "Kuwait":"科威特 科威特城",
        "Lebanon":"黎巴嫩 贝鲁特",
        "Maldives":"马尔代夫 马累",
        "Nepal":"尼泊尔 加德满都",
        "Oman":"阿曼 马斯喀特",
        "Pakistan":"巴基斯坦 卡拉奇、伊斯兰堡",
        "Palestine":"巴勒斯坦 耶路撒冷",
        "Qatar":"卡塔尔 多哈",
        "Saudi Arabia":"沙特阿拉伯 利雅得",
        "Sri Lanka":"斯里兰卡 科伦坡",
        "Syria":"叙利亚 大马士革",
        "Tajikistan":"塔吉克斯坦 杜尚别",
        "Turkey":"土耳其 伊斯坦堡",
        "Turkmenistan":"土库曼斯坦 阿什哈巴德",
        "Uzbekistan":"乌兹别克斯坦 塔什干",
        "Yemen":"也门 萨那",

        "North Europe":"北欧",

        "Denmark":"丹麦 哥本哈根",
        "Faroe Is_(DK)":"法罗群岛(丹麦) 托尔斯港",
        "Finland":"芬兰 赫尔辛基",
        "Iceland":"冰岛 雷克雅未克",
        "Jan Mayen(Norway)":"扬马延岛(挪威) 扬马延岛",
        "Norwegian":"挪威 奥斯陆",
        "Svalbard(NORWAY)":"斯瓦尔巴群岛(挪威) 朗伊尔城",
        "Sweden":"瑞典 斯德哥尔摩",

        "Eastern Europe":"中欧、东欧",

        "Armenia":"亚美尼亚 埃里温",
        "Austria":"奥地利 维也纳",
        "Azerbaijan":"阿塞拜疆 巴库",
        "Belarus":"白俄罗斯 明斯克",
        "Czech":"捷克 布拉格",
        "Estonia":"爱沙尼亚 塔林",
        "Georgia":"乔治亚 第比利斯",
        "Germany":"德国 柏林、波恩",
        "Hungarian":"匈牙利 布达佩斯",
        "Latvia":"拉脱维亚 里加",
        "Liechtenstein":"列支敦士登 瓦都兹",
        "Lithuania":"立陶宛 维尔纽斯",
        "Moldova":"摩尔多瓦 基希纳乌",
        "Poland":"波兰 华沙",
        "Rumania":"罗马尼亚 布加勒斯特",
        "Russia(Moscow)":"俄罗斯 莫斯科、伏尔加格勒",
        "Slovakia":"斯洛伐克 布拉迪斯拉发",
        "Switzerland":"瑞士 苏黎世",
        "Ukraine":"乌克兰 基辅",
        "Ukraine(Simferopol)":"乌克兰 辛菲罗波尔",

        "Western Europe":"西欧",

        "Andorra":"安道尔",
        "Belgium":"比利时 布鲁塞尔",
        "Channel Is_(UK)":"海峡群岛(英) 根西岛、泽西岛",
        "France":"法国 巴黎",
        "Gibraltar(UK)":"直布罗陀(英) 直布罗陀",
        "Ireland":"爱尔兰 都柏林",
        "Isle of Man(UK)":"马恩岛(曼岛、人岛)(英) 道格拉斯",
        "Luxembourg":"卢森堡 卢森堡市",
        "Monaco":"摩纳哥 摩纳哥市",
        "Netherlands":"荷兰 阿姆斯特丹",
        "United Kingdom":"英国 伦敦、爱丁堡",

        "South Europe":"南欧",

        "Albania":"阿尔巴尼亚 地拉那",
        "Bosnia":"波士尼亚 塞拉耶佛",
        "Bulgaria":"保加利亚 索菲亚",
        "Croatia":"克罗地亚 萨格勒布",
        "Greece":"希腊 雅典",
        "Holy See":"罗马教廷 梵蒂冈",
        "Italy":"意大利 罗马",
        "Macedonia":"马其顿 斯科普里",
        "Malta":"马耳他 瓦莱塔",
        "Montenegro":"蒙特内哥罗 Podgorica",
        "Portugal":"葡萄牙 里斯本",
        "San Marino":"圣马利诺 圣马利诺",
        "Serbia":"塞爾維亞 貝爾格萊德",
        "Slovenia":"斯洛文尼亚 卢布尔雅那",
        "Span":"西班牙 马德里",

        "North America":"北美洲",

        "Canada(AST)":"加拿大 冰河湾、Pangnirtung",
        "Canada(CST)":"加拿大 雷迦納、雨河鎮、激流(SwiftCurrent)市",
        "Canada(EST)":"加拿大 蒙特罗",
        "Canada(MST)":"加拿大 印奴维特港湾、埃德蒙顿、道森河",
        "Canada(NST)":"加拿大 纽芬兰、圣约翰、古斯湾",
        "Canada(PST)":"加拿大 温哥华",
        "Greenland(DK)":"格陵兰(丹麦) 努克",
        "US(Central)":"美国(中部) 芝加哥",
        "US(Eastern)":"美国(东岸) 华盛顿、纽约",
        "US(Mountain)":"美国(山区) 丹佛",
        "US(Pacific)":"美国(西岸) 旧金山、洛杉矶",
        "US(Alaska)":"美国 阿拉斯加、朱诺",
        "US(Arizona)":"美国 亚历桑那",

        "South America":"中南美洲",

        "Anguilla(UK)":"安圭拉(英) 瓦利",
        "Antigua&amp;Barbuda":"安提瓜岛及巴布达岛 圣约翰",
        "Antilles(NL)":"安的列斯(荷) 威廉斯塔德",
        "Argentina":"阿根廷 布宜诺斯艾利斯",
        "Aruba(NL)":"阿鲁巴(荷兰) 奥拉涅斯塔德",
        "Bahamas":"巴哈马 拿骚",
        "Barbados":"巴巴多斯岛 布里奇顿(桥镇)",
        "Belize":"贝里斯",
        "Bolivia":"玻利维亚 拉巴斯",
        "Brazil(AST)":"巴西 PortoAcre",
        "Brazil(EST)":"巴西 巴西利亚、里约热内卢",
        "Brazil(FST)":"巴西 诺罗纳",
        "Brazil(WST)":"巴西 库亚巴",
        "British Virgin Is_(UK)":"维尔京群岛(英) 罗德城",
        "Cayman Is_(UK)":"开曼群岛(英) 乔治敦",
        "Chilean":"智利 圣地亚哥",
        "Chilean(Hanga Roa)":"智利 汉加罗亚",
        "Colombia":"哥伦比亚 波哥大",
        "Costa Rica":"哥斯达黎加 圣何塞",
        "Cuba":"古巴 哈瓦那",
        "Dominican":"多米尼加 圣多明各、罗梭",
        "Ecuador":"厄瓜多尔 基多",
        "El Salvador":"萨尔瓦多 圣萨尔瓦多",
        "Falklands":"福克兰群岛 史丹利",
        "Grenada":"格林纳达 圣乔治",
        "Guadeloupe(FR)":"瓜德罗普(法) 巴斯特尔",
        "Guatemala":"危地马拉 危地马拉城",
        "Guiana(FR)":"圭亚那(法) 卡宴",
        "Guyana":"圭亚那 佐治敦",
        "Haiti":"海地 太子港",
        "Honduras":"洪都拉斯 特古西加尔巴",
        "Jamaica":"牙买加 金斯敦",
        "Martinique(FR)":"马提尼克(法) 法兰西堡",
        "Mexico(Mazatlan)":"墨西哥 马萨特兰",
        "Mexico(Tijuana)":"(蒂华纳)墨西哥 蒂华纳",
        "Mexico(Mexico)":"(首都)墨西哥 墨西哥城",
        "Montserrat(UK)":"蒙特塞拉特(英) 普利茅斯",
        "Nicaragua":"尼加拉瓜 马那瓜",
        "Panama":"巴拿马 巴拿马市",
        "Paraguay":"巴拉圭 亚松森",
        "Peru":"秘鲁 利马",
        "Puerto Rico(US)":"波多黎各(美) 圣胡安",
        "So_ Georgia&amp;So_ Sandwich Is_(UK)":"南乔治和南三明治群岛(英) 葛利特维根",
        "St_ Kitts&amp;Nevis":"圣克里斯多福及尼维斯 巴士地",
        "St_ Lucia":"圣卢西亚 卡斯特里",
        "St_ Vincent&amp;Grenadines":"圣文森特和格林纳丁斯 金斯敦",
        "Suriname":"苏里南 帕拉马里博(Paramaribo)",
        "Trinidad&amp;Tobago":"特立尼达和多巴哥 西班牙港",
        "Turks&amp;Caicos Is_(UK)":"特克斯和凯科斯群岛(英) 科伯恩城",
        "Uruguay":"乌拉圭 蒙得维的亚",
        "Venezuela":"委内瑞拉 加拉加斯",
        "Virgin Is_(US)":"维尔京群岛(美) 夏洛特.阿马里",

        "Africa(North)":"北非",

        "Algeria":"阿尔及利亚 阿尔及尔",
        "Egypt":"埃及 开罗",
        "Libyan":"利比亚 的黎波里、锡尔特市(新首都)",
        "Morocco":"摩洛哥 拉巴特、卡萨布兰卡",
        "Sudan":"苏丹 喀土穆",
        "Tunisia":"突尼斯 突尼斯",

        "Africa(Western)":"西非",

        "Benin":"贝宁 波多诺伏、科托努、新港",
        "Burkina Faso":"布吉纳法索 瓦加杜古",
        "Canary Is_(SP)":"加那利群岛(西班牙) 乔治城",
        "Cape Verde":"佛得角群岛 普拉亚",
        "Chad":"乍得 恩贾梅纳",
        "Gambia":"冈比亚 班珠尔",
        "Ghana":"加纳 阿克拉",
        "Guinea":"几内亚 科纳克里",
        "Guinea-Bissau":"几内亚比绍 比绍",
        "Ivory Coast":"象牙海岸 亚穆苏克罗、阿比让",
        "Liberia":"利比里亚 蒙罗维亚",
        "Mali":"马里 巴马科",
        "Mauritania":"毛里塔尼亚 努瓦克肖特",
        "Niger":"尼日尔 尼亚美",
        "Nigeria":"尼日利亚 阿布贾",
        "Senegal":"塞内加尔 达喀尔",
        "Sierra Leone":"塞拉利昂 弗里敦(自由城)",
        "Togo":"多哥 洛美",
        "Western Sahara":"西撒哈拉 阿尤恩",

        "Africa(Central)":"中非",

        "Cameroon":"喀麦隆 雅温得",
        "Cen_African Rep_":"中非共和国 班吉",
        "Congo,Democratic":"刚果民主共和国[刚果(金)] 金沙萨",
        "Congo,Republic":"刚果共和国[刚果(布)] 布拉柴维尔",
        "Equatorial Guinea":"赤道几内亚 马拉博",
        "Gabon":"加蓬 利伯维尔(自由市)",
        "Sao Tome&amp;Principe":"圣多美普林西比 圣多美",

        "Africa(East)":"东非",

        "Burundi":"布隆迪 布琼布拉",
        "Comoros":"科摩罗 莫罗尼",
        "Djibouti":"吉布提 吉布提",
        "Eritrea":"厄利垂亚 阿斯马拉",
        "Ethiopia":"埃塞俄比亚 亚的斯亚贝巴",
        "Kenya":"肯尼亚 内罗毕",
        "Madagascar":"马达加斯加 塔那那利佛",
        "Malawi":"马拉维 利隆圭",
        "Mauritius":"毛里求斯 路易港",
        "Mayotte(FR)":"马约特岛(法) Mamoutzou",
        "Mozambique":"莫桑比克 马普托",
        "Reunion(FR)":"留尼旺岛(法) 圣丹尼",
        "Rwanda":"卢旺达 基加利",
        "Seychelles":"塞舌尔 维多利亚",
        "Somalia":"索马里 摩加迪沙",
        "Tanzania":"坦桑尼亚 达累斯萨拉姆",
        "Uganda":"乌干达 坎帕拉",

        "Africa(South)":"南非",

        "Angola":"安哥拉 罗安达",
        "Botswana":"博茨瓦纳 哈博罗内",
        "Lesotho":"莱索托 马塞卢",
        "Namibia":"纳米比亚 温得和克",
        "Saint Helena(UK)":"圣赫勒拿(英) 詹姆斯敦",
        "South Africa":"南非 开普敦、普利托里亚",
        "Swaziland":"斯威士兰 姆巴巴内",
        "Zambia":"赞比亚 卢萨卡",
        "Zimbabwe":"津巴布韦 哈拉雷",

        "Oceania":"大洋洲",

        "American Samoa(US)":"美属萨摩亚(美) 帕果帕果港",
        "Australia(Adelaide)":"澳大利亚 阿德莱德",
        "Australia(Brisbane)":"澳大利亚 布里斯班",
        "Australia(Darwin)":"澳大利亚 达尔文",
        "Australia(Hobart)":"澳大利亚 霍巴特",
        "Australia(Perth)":"澳大利亚 珀斯",
        "Australia(Sydney)":"澳大利亚 堪培拉、墨尔本、悉尼",
        "Cook Islands(NZ)":"库克群岛(新西兰) 阿瓦鲁阿",
        "Eniwetok":"埃尼威托克岛 埃尼威托克岛",
        "Fiji":"斐济 苏瓦",
        "Guam":"关岛 阿加尼亚",
        "Hawaii(US)":"夏威夷(美) 檀香山",
        "Kiribati":"基里巴斯 塔拉瓦",
        "Marshall Is_":"马绍尔群岛 马朱罗",
        "Micronesia":"密克罗尼西亚联邦 帕利基尔(Palikir)",
        "Midway Is_(US)":"中途岛(美)",
        "Nauru Rep_":"瑙鲁共和国 亚伦",
        "New Calednia(FR)":"新克里多尼亚(法) 努美阿",
        "New Zealand":"新西兰 奥克兰",
        "New Zealand(CHADT)":"新西兰 惠灵顿",
        "Niue(NZ)":"纽埃(新) 阿洛菲(Alofi)",
        "Nor_ Mariana Is_":"北马里亚纳群岛(美) 塞班岛",
        "Palau":"帕劳群岛(帛琉群岛) 科罗尔",
        "Papua New Guinea":"巴布亚新几内亚 莫尔斯比港",
        "Pitcairn Is_(UK)":"皮特克恩群岛(英) 亚当斯敦",
        "Polynesia(FR)":"玻利尼西亚(法) 巴比蒂、塔希提",
        "Solomon Is_":"所罗门群岛 霍尼亚拉",
        "Tahiti":"塔希提 帕佩特",
        "Tokelau(NZ)":"托克劳群岛(新) 努库诺努、法考福、阿塔富",
        "Tonga":"汤加 努库阿洛法",
        "Tuvalu":"图瓦卢 富纳富提",
        "Vanuatu":"瓦努阿图(新赫布里底群岛) 维拉港",
        "Western Samoa":"西萨摩亚 阿皮亚",
        "Data Line":"国际换日线"
    }
};
