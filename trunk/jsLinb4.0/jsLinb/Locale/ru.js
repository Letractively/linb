(linb.Locale.ru||(linb.Locale.ru={})).inline={
    ok:'Принять',
    cancel:'Отменить',
    set:'установить',
    today:'сегодня',
    now:'сейчас',
    yes:'да',
    no:'нет',
    noFlash:'не Flash!'
};
linb.Locale.ru.date={
    WEEKS:{
        '0':'Вc',
        '1':'Пн',
        '2':'Вт',
        '3':'Ср',
        '4':'Чт',
        '5':'Пт',
        '6':'Сб',
        '7':'Нд'
    },
    VIEWS:{
        '10 ms':'10 миллисекунд',
        '100 ms':'100 миллисекунд',
        '1 s':'1 секунда',
        '10 s':'10 секунд',
        '1 n':'1 минута',
        '5 n':'5 минут',
        '10 n':'10 минут',
        '30 n':'30 минут',
        '1 h':'1 час',
        '2 h':'2 часа',
        '6 h':'6 часов',
        '1 d':'1 день',
        '1 w':'1 неделя',
        '15 d':'15 дней',
        '1 m':'1 месяц',
        '1 q':'1 квартал',
        '1 y':'1 год',
        '1 de':'10 лет',
        '1 c':'1 век'
    },
    MONTHS:{
        '1':'Янв.',
        '2':'Фев.',
        '3':'Март',
        '4':'Апр.',
        '5':'Май',
        '6':'Июнь',
        '7':'Июль',
        '8':'Авг.',
        '9':'Сент.',
        '10':'Окт.',
        '11':'Нояб.',
        '12':'Дек.'
    },
    MS:'мс',
    S:'с',
    N:'м',
    H:'ч',
    D:'д',
    W:'нед',
    M:'мес',
    Q:'кв',
    Y:'г',
    DE:'л',
    C:'в',
    HN:function(n,a,b){return (a.length==1?'0':'')+a+":"+(b.length==1?'0':'')+b},
    DHN:function(n,a,b,c){return a +'день '+ (b.length==1?'0':'')+b + ":" +(c.length==1?'0':'')+c },
    MDHN:function(n,a,b,c,d){return b+ 'день ' + linb.getRes('date.MONTHS.'+a) + " " + (c.length==1?'0':'')+c + ":" + (d.length==1?'0':'')+d},
    HNS:function(n,a,b,c){return (a.length==1?'0':'')+a+":"+(b.length==1?'0':'')+b+":"+(c.length==1?'0':'')+c},
    HNSMS:function(n,a,b,c,d){return (a.length==1?'0':'')+a+":"+(b.length==1?'0':'')+b+":"+(c.length==1?'0':'')+c+ ' ' +(d.length==1?'00':d.length==2?'0':'')+d},
    YM:function(n,a,b){return linb.getRes('date.MONTHS.'+b)+' '+a},
    YQ:function(n,a,b){return b+'кв ' + a},
    YMD:function(n,a,b,c){return a+'-'+(b.length==1?'0':'')+b+'-'+(c.length==1?'0':'')+c},
    YMD2:function(n,a,b,c){return linb.getRes('date.MONTHS.'+b)+' '+c+', '+a},
    MD:function(n,a,b){return linb.getRes('date.MONTHS.'+a) + " "+ b},
    YMDH:function(n,a,b,c,d){return a+'-'+(b.length==1?'0':'')+b+'-'+(c.length==1?'0':'')+c + ' ' +(d.length==1?'0':'')+d+':00'},
    YMDHN:function(n,a,b,c,d,e){return a+'-'+(b.length==1?'0':'')+b+'-'+(c.length==1?'0':'')+c + ' ' +(d.length==1?'0':'')+d+":"+(e.length==1?'0':'')+e},
    YMDHNS:function(n,a,b,c,d,e,f){return a+'-'+(b.length==1?'0':'')+b+'-'+(c.length==1?'0':'')+c + ' ' +(d.length==1?'0':'')+d+":"+(e.length==1?'0':'')+e+":"+(f.length==1?'0':'')+f},
    ALL:function(n,a,b,c,d,e,f,g){return a+'-'+(b.length==1?'0':'')+b+'-'+(c.length==1?'0':'')+c + ' ' +(d.length==1?'0':'')+d+":"+(e.length==1?'0':'')+e+":"+(f.length==1?'0':'')+f +" " +(g.length==1?'00':g.length==2?'0':'')+g},

     TIMEZONE:{
        "Asia(East,North)":"в Восточной Азии, Северной Азии",

        "Brunei":"(GMT+08:00) Бруней Бандар-Сери-Бегаван",
        "Burma":"(GMT+06:30) Рангун, Бирма",
        "Cambodia":"(GMT+07:00) Пномпень, Камбоджа",
        "China":"(GMT+08:00) Пекин, Китай",
        "China(HK,Macau)":"(GMT+08:00) Гонконг, Китай",
        "China(TaiWan)":"(GMT+08:00) Китайский Тайбэй, Гаосюн",
        "China(Urumchi)":"(GMT+07:00) Урумчи, Китай",
        "East Timor":"(GMT+08:00) Дили, Восточный Тимор",
        "Indonesia":"(GMT+07:00) Джакарта, Индонезия",
        "Japan":"(GMT+09:00) Токио, Япония, Осака, Саппоро",
        "Kazakhstan(Aqtau)":"(GMT+04:00) Казахстан (Аккарте)",
        "Kazakhstan(Aqtobe)":"(GMT+05:00) Казахстан (Актюбинск)",
        "Kazakhstan(Astana)":"(GMT+06:00) Казахстан (Астана)",
        "Kirghizia":"(GMT+05:00) Гилл Гизе Бишкеке",
        "Korea":"(GMT+09:00) Сеул, Южная Корея",
        "Laos":"(GMT+07:00) Вьентьян, Лаос",
        "Malaysia":"(GMT+08:00) Куала-Лумпур, Малайзия",
        "Mongolia":"(GMT+08:00) Улан-Батор, Монголия",
        "Philippines":"(GMT+08:00) Манила, Филиппины",
        "Russia(Anadyr)":"(GMT+13:00) Россия (Анадырь)",
        "Russia(Kamchatka)":"(GMT+12:00) России (Камчатка)",
        "Russia(Magadan)":"(GMT+11:00) Россия (Магадан)",
        "Russia(Vladivostok)":"(GMT+10:00) Россия (Владивосток)",
        "Russia(Yakutsk)":"(GMT+09:00) Россия (Якутск)",
        "Singapore":"(GMT+08:00) Куала-Лумпур, Сингапур",
        "Thailand":"(GMT+07:00) Бангкок, Таиланд",
        "Vietnam":"(GMT+07:00) Ханой, Вьетнам",

        "Asia(South,West)":"в Южной Азии, Центральной Азии, Западной Азии",

        "Afghanistan":"(GMT+04:30) Кабул, Афганистан",
        "Arab Emirates":"(GMT+04:00) Абу-Даби, Объединенные Арабские Эмираты",
        "Bahrain":"(GMT+03:00) Бахрейна Манама",
        "Bangladesh":"(GMT+06:00) Дакка, Бангладеш",
        "Bhutan":"(GMT+06:00) Бутан, Тхимпху",
        "Cyprus":"(GMT+02:00) Никосия, Кипр",
        "Georgia":"(GMT+05:00) Тбилиси, Грузия",
        "India":"(GMT+05:30) Бомбей, Калькутта, Мадрас, Нью-Дели, Мумбаи, Индия",
        "Iran":"(GMT+03:30) Тегеран, Иран",
        "Iraq":"(GMT+03:00) Багдад, Ирак",
        "Israel":"(GMT+02:00)  Иерусалим, Израиль",
        "Jordan":"(GMT+02:00) Амман, Иордания",
        "Kuwait":"(GMT+03:00) Кувейт",
        "Lebanon":"(GMT+02:00) Бейрут, Ливан",
        "Maldives":"(GMT+05:00) Мале, Мальдивы",
        "Nepal":"(GMT+05:45) Катманду, Непал",
        "Oman":"(GMT+04:00) Маскат, Оман",
        "Pakistan":"(GMT+05:00) Карачи, Пакистан, Исламабад",
        "Palestine":"(GMT+02:00) палестинскиe жители Иерусалима",
        "Qatar":"(GMT+03:00) Доха, Катар",
        "Saudi Arabia":"(GMT+03:00) Саудовская Аравия, Эр-Рияд",
        "Sri Lanka":"(GMT+06:00) Шри-Ланки в Коломбо",
        "Syria":"(GMT+02:00) Дамаск, Сирия",
        "Tajikistan":"(GMT+05:00) Душанбе, Таджикистан",
        "Turkey":"(GMT+02:00) Стамбул, Турция",
        "Turkmenistan":"(GMT+05:00) Ашхабад, Туркменистан",
        "Uzbekistan":"(GMT+05:00) Ташкент, Узбекистан",
        "Yemen":"(GMT+03:00) Сана, Йемен",

        "North Europe":"в Северной Европе",

        "Denmark":"(GMT+01:00) Копенгаген, Дания",
        "Faroe Is.(DK)":"(GMT+01:00) Торсхавн, Фарерские острова (Дания)",
        "Finland":"(GMT+02:00) Хельсинки, Финляндия",
        "Iceland":"(GMT+00:00) Рейкьявик, Исландия",
        "Jan Mayen(Norway)":"(GMT-01:00) Ян-Майен (Норвегия), Ян-Майен Остров",
        "Norwegian":"(GMT+01:00) Осло, Норвегия",
        "Svalbard(NORWAY)":"(GMT+01:00) Шпицберген (Норвегия) Longyearbyen",
        "Sweden":"(GMT+01:00) Стокгольм, Швеция",

        "Eastern Europe":"в Центральной и Восточной Европе",

        "Armenia":"(GMT+04:00) Ереван, Армения",
        "Austria":"(GMT+01:00) Вена, Австрия",
        "Azerbaijan":"(GMT+04:00) Баку, Азербайджан",
        "Belarus":"(GMT+02:00) Минск, Беларусь",
        "Czech":"(GMT+01:00) Прага, Чешская Республика",
        "Estonia":"(GMT+02:00) Таллинн, Эстония",
        "Georgia":"(GMT+05:00) Грузия Тбилиси",
        "Germany":"(GMT+01:00) Берлин, Германия, Бонн",
        "Hungarian":"(GMT+01:00) Будапешт, Венгрия",
        "Latvia":"(GMT+02:00) Рига, Латвия",
        "Liechtenstein":"(GMT+01:00) Лихтенштейн ватт настоящим",
        "Lithuania":"(GMT+02:00) Вильнюс, Литва",
        "Moldova":"(GMT+02:00) Молдова в Кишиневе",
        "Poland":"(GMT+01:00) Варшава, Польша",
        "Rumania":"(GMT+02:00) Бухарест, Румыния",
        "Russia(Moscow)":"(GMT+03:00) Россия, Москва, Волгоград",
        "Slovakia":"(GMT+01:00) Братислава, Словакия",
        "Switzerland":"(GMT+01:00) Цюрих, Швейцария",
        "Ukraine":"(GMT+02:00) Киев, Украина",
        "Ukraine(Simferopol)":"(GMT+03:00) Украина Симферополь",

        "Western Europe":"в Западной Европе",

        "Andorra":"(GMT+01:00) Андорра",
        "Belgium":"(GMT+01:00) Брюссель, Бельгия",
        "Channel Is.(UK)":"(GMT+00:00) Нормандские острова (английский) Гернси, Джерси",
        "France":"(GMT+01:00) Париж, Франция",
        "Gibraltar(UK)":"(GMT+01:00) Гибралтар (Великобритания) Гибралтар",
        "Ireland":"(GMT+00:00) Дублин, Ирландия",
        "Isle of Man(UK)":"(GMT+00:00) Мэн (остров Мэн)",
        "Luxembourg":"(GMT+01:00) Люксембург",
        "Monaco":"(GMT+01:00) Монако",
        "Netherlands":"(GMT+01:00) Амстердам, Нидерланды",
        "United Kingdom":"(GMT+00:00) Лондон, Великобритания, Эдинбург",

        "South Europe":"в Южной Европе",

        "Albania":"(GMT+01:00) Тирана, Албания",
        "Bosnia":"(GMT+01:00) Сараево, Босния",
        "Bulgaria":"(GMT+02:00) София, Болгария",
        "Croatia":"(GMT+01:00) Загреб, Хорватия",
        "Greece":"(GMT+02:00) Афины, Греция",
        "Holy See":"(GMT+01:00) Святой Престол Ватикан",
        "Italy":"(GMT+01:00) Рим, Италия",
        "Macedonia":"(GMT+01:00) Скопье, Македония",
        "Malta":"(GMT+01:00) Валлетта, Мальта",
        "Montenegro":"(GMT+01:00) Черногории Подгорице",
        "Portugal":"(GMT+00:00) Лиссабон, Португалия",
        "San Marino":"(GMT+01:00) Сан-Марино Сан-Марино",
        "Serbia":"(GMT+01:00) Белград, Сербия",
        "Slovenia":"(GMT+01:00) Любляна, Словения",
        "Span":"(GMT+01:00) Мадрид, Испания,",

        "North America":"в Северной Америке",

        "Canada(AST)":"(GMT-04:00) Глейшер-Бей, Канада",
        "Canada(CST)":"(GMT-06:00) Свифт Cуррент, Канада",
        "Canada(EST)":"(GMT-05:00) Монтеро, Канада",
        "Canada(MST)":"(GMT-07:00) Харбор, Канада",
        "Canada(NST)":"(GMT-03:30) Ньюфаундленд, Сент-Джон, Гус-Бей, Канада",
        "Canada(PST)":"(GMT-08:00) Ванкувер, Канада",
        "Greenland(DK)":"(GMT-03:00) Нуук Гренландия (Дания)",
        "US(Central)":"(GMT-06:00) Соединенные Штаты Америки (Центральной) Чикаго",
        "US(Eastern)":"(GMT-05:00) США (восточное побережье) в Вашингтоне, Нью-Йорк",
        "US(Mountain)":"(GMT-07:00) США (гора) Денвер",
        "US(Pacific)":"(GMT-08:00) США (Западный берег), Сан-Франциско, Лос-Анджелес",
        "US(Alaska)":"(GMT-09:00) Америки и Аляски, Джуно",
        "US(Arizona)":"(GMT-07:00) США Аризона",

        "South America":"в Центральной и Южной Америке",

        "Anguilla(UK)":"(GMT-04:00) Ангилья (Великобритания) долина",
        "Antigua&amp;Barbuda":"(GMT-04:00) Антигуа и Барбуда Сент-Джонсе",
        "Antilles(NL)":"(GMT-04:00) Виллемстад, Антильские острова",
        "Argentina":"(GMT-03:00) Буэнос-Айрес, Аргентина",
        "Aruba(NL)":"(GMT-04:00) Оранжестад, Аруба (Нидерланды)",
        "Bahamas":"(GMT-05:00) Нассау, Багамские острова",
        "Barbados":"(GMT-04:00) Остров Барбадос, Брайтон (город)",
        "Belize":"(GMT-06:00) Белиза",
        "Bolivia":"(GMT-04:00) Ла-Пас, Боливия",
        "Brazil(AST)":"(GMT-05:00) Бразилия PortoAcre",
        "Brazil(EST)":"(GMT-03:00) Рио-де-Жанейро, Бразилия",
        "Brazil(FST)":"(GMT-02:00) Норонья, Бразилия",
        "Brazil(WST)":"(GMT-04:00) Бразилия Куяба",
        "British Virgin Is.(UK)":"(GMT-04:00) Род-Таун, Виргинские острова (английский)",
        "Cayman Is.(UK)":"(GMT-05:00) Каймановы острова (Великобритания) Джорджтауне",
        "Chilean":"(GMT-03:00) Сантьяго, Чили",
        "Chilean(Hanga Roa)":"(GMT-05:00) Ханга-Роа, Чили",
        "Colombia":"(GMT-05:00) Богота, Колумбия",
        "Costa Rica":"(GMT-06:00) Сан-Хосе, Коста-Рика",
        "Cuba":"(GMT-05:00) Гавана, Куба",
        "Dominican":"(GMT-04:00) Доминиканцы в Санто-Доминго, Розо",
        "Ecuador":"(GMT-05:00) Кито, Эквадор",
        "El Salvador":"(GMT-06:00) Сан-Сальвадор, Сальвадор",
        "Falklands":"(GMT-03:00) Фолклендские острова, порт Стенли",
        "Grenada":"(GMT-04:00) Гренада, Сент-Джордж,",
        "Guadeloupe(FR)":"(GMT-04:00) Гваделупа (Франция) Бастер",
        "Guatemala":"(GMT-06:00) Гватемала Сити, Гватемала",
        "Guiana(FR)":"(GMT-03:00) Кайенна, Гвиана (Франция)",
        "Guyana":"(GMT-04:00) Дехра Дан, Гайана",
        "Haiti":"(GMT-05:00) Порт-о-Пренс, Гаити",
        "Honduras":"(GMT-06:00) Тегусигальпа, Гондурас",
        "Jamaica":"(GMT-05:00) Кингстон, Ямайка",
        "Martinique(FR)":"(GMT-04:00) Мартиника (Франция), Форт-де-Франс",
        "Mexico(Mazatlan)":"(GMT-07:00) Масатлан, Мексика",
        "Mexico(Tijuana)":"(GMT-08:00) (Тихуана) в Тихуане, Мексика",
        "Mexico(Mexico)":"(GMT-06:00) (капитал) в Мехико, Мексика",
        "Montserrat(UK)":"(GMT-04:00) Монтсеррат (Великобритания) Плимут",
        "Nicaragua":"(GMT-05:00) Манагуа, Никарагуа",
        "Panama":"(GMT-05:00) Панама, Панама и город",
        "Paraguay":"(GMT-04:00) Асунсьон, Парагвай",
        "Peru":"(GMT-05:00) Лима Перу",
        "Puerto Rico(US)":"(GMT-04:00) Пуэрто-Рико (США) Сан-Хуан",
        "So. Georgia&amp;So. Sandwich Is.(UK)":"(GMT-02:00) Южная Георгия, Южные Сандвичевы острова (английский)",
        "St. Kitts&amp;Nevis":"(GMT-04:00) Федерация Сент-Китс и Неви",
        "St. Lucia":"(GMT-04:00) Сент-Люсии Кастри",
        "St. Vincent&amp;Grenadines":"(GMT-04:00) Сент-Винсент и Гренадины Кингстаун",
        "Suriname":"(GMT-03:00) Faribault Салливан Парамарибо (Парамарибо)",
        "Trinidad&amp;Tobago":"(GMT-04:00) Тринидад и Тобаго Порт Испании",
        "Turks&amp;Caicos Is.(UK)":"(GMT-05:00) Острова Теркс и Кайкос (Великобритания), Коберн-Таун",
        "Uruguay":"(GMT-03:00) Монтевидео, Уругвай",
        "Venezuela":"(GMT-04:30) Каракас, Венесуэла",
        "Virgin Is.(US)":"(GMT-04:00) Виргинские острова (США), Шарлотта-Амалия",

        "Africa(North)":"в Северной Африке",

        "Algeria":"(GMT+01:00) Алжир, Алжир",
        "Egypt":"(GMT+02:00) Каир, Египет",
        "Libyan":"(GMT+02:00) Триполи, Ливия, Сирт город (столица)",
        "Morocco":"(GMT+00:00) Рабат, Марокко, Касабланка",
        "Sudan":"(GMT+02:00) Хартум, Судан",
        "Tunisia":"(GMT+01:00) Тунис, Тунис",

        "Africa(Western)":"в Западной Африке",

        "Benin":"(GMT+01:00) Котону, Ньюпорт",
        "Burkina Faso":"(GMT+00:00) Буркина-Фасо, Уагадугу",
        "Canary Is.(SP)":"(GMT-01:00) Канарские острова (Испания), Джорджтаун",
        "Cape Verde":"(GMT-01:00) Острова Зеленого Мыса Прая",
        "Chad":"(GMT+01:00) Нджамене, Чад",
        "Gambia":"(GMT+00:00) Банжул, Гамбия",
        "Ghana":"(GMT+00:00) Аккра, Гана",
        "Guinea":"(GMT+00:00) Гвинея Конакри",
        "Guinea-Bissau":"(GMT+00:00) Гвинея-Бисау Бисау",
        "Ivory Coast":"(GMT+00:00) Кот-д'Ивуар Ямусукро, Абиджан",
        "Liberia":"(GMT+00:00) Монровия, Либерия",
        "Mali":"(GMT+00:00) Бамако, Мали",
        "Mauritania":"(GMT+00:00) Мавритании Нуакшот",
        "Niger":"(GMT+01:00) Ниамей, Нигер",
        "Nigeria":"(GMT+01:00) Абуджа, Нигерия",
        "Senegal":"(GMT+00:00) Дакар, Сенегал",
        "Sierra Leone":"(GMT+00:00) Фритаун, Сьерра-Леоне",
        "Togo":"(GMT+00:00) Того, Ломе",
        "Western Sahara":"(GMT+00:00) Западная Сахара, Эль-Аюна",

        "Africa(Central)":"в Центральной Африке",

        "Cameroon":"(GMT+01:00) Яунде, Камерун",
        "Cen.African Rep.":"(GMT+01:00) Центральноафриканская Республика Банги",
        "Congo,Democratic":"(GMT+01:00) Конго, Демократической Республике Конго (ДРК) Киншасы",
        "Congo,Republic":"(GMT+01:00) Республика Конго Браззавиль",
        "Equatorial Guinea":"(GMT+01:00) Малабо, Экваториальная Гвинея",
        "Gabon":"(GMT+01:00) Габона Либревиль (вольный город)",
        "Sao Tome&amp;Principe":"(GMT+00:00) Сан-Томе",

        "Africa(East)":"в Восточной Африке",

        "Burundi":"(GMT+02:00) Бужумбура, Бурунди",
        "Comoros":"(GMT+03:00) Коморские острова, Морони",
        "Djibouti":"(GMT+03:00) Джибути Джибути",
        "Eritrea":"(GMT+03:00) Асмэра, Эритрея",
        "Ethiopia":"(GMT+03:00) Аддис-Абеба, Эфиопия",
        "Kenya":"(GMT+03:00) Найроби, Кения",
        "Madagascar":"(GMT+03:00) Антананариву, Мадагаскар",
        "Malawi":"(GMT+02:00) Лилонгве, Малави",
        "Mauritius":"(GMT+04:00) Порт-Луи, Маврикий",
        "Mayotte(FR)":"(GMT+03:00) Майотта (Франция) Mamoutzou",
        "Mozambique":"(GMT+02:00) Мапуту, Мозамбик",
        "Reunion(FR)":"(GMT+04:00) Реюньон (Франция) Сен-Дени",
        "Rwanda":"(GMT+02:00) Кигали, Руанда",
        "Seychelles":"(GMT+03:00) Сейшельские острова, Виктория",
        "Somalia":"(GMT+03:00) Могадишо, Сомали",
        "Tanzania":"(GMT+03:00) Дар-эс-Саламе, Танзания",
        "Uganda":"(GMT+03:00) Кампала, Уганда",

        "Africa(South)":"в Южной Африке",

        "Angola":"(GMT+01:00) Луанда, Ангола",
        "Botswana":"(GMT+02:00) Габороне, Ботсвана",
        "Lesotho":"(GMT+02:00) Лесото, Масеру",
        "Namibia":"(GMT+02:00) Виндхук, Намибия",
        "Saint Helena(UK)":"(GMT-01:00) Святой Елены (Великобритания) Джеймстаун",
        "South Africa":"(GMT+02:00) Хараре, Кейптаун, Претория, Южная Африка",
        "Swaziland":"(GMT+02:00) Мбабане, Свазиленд",
        "Zambia":"(GMT+02:00) Лусака, Замбия",
        "Zimbabwe":"(GMT+02:00) Хараре, Зимбабве",

        "Oceania":"в Океании",

        "American Samoa(US)":"(GMT-11:00) Соединенные Штаты Малой Самоа (США), Паго-Паго-Харбор",
        "Australia(Adelaide)":"(GMT+09:30) Аделаида, Австралия",
        "Australia(Brisbane)":"(GMT+10:00) Брисбен, Австралия",
        "Australia(Darwin)":"(GMT+09:30) Дарвин, Австралия",
        "Australia(Hobart)":"(GMT+10:00) Хобарт, Австралия",
        "Australia(Perth)":"(GMT+08:00) Перт, Австралия",
        "Australia(Sydney)":"(GMT+10:00) Канберра, Мельбурн, Сидней, Австралия",
        "Cook Islands(NZ)":"(GMT-10:00) Аваруа, Острова Кука (Новая Зеландия)",
        "Eniwetok":"(GMT-12:00) Эниветок Остров",
        "Fiji":"(GMT+12:00) Сува, Фиджи",
        "Guam":"(GMT+10:00) Гуам Агана",
        "Hawaii(US)":"(GMT-10:00) Гавайи (США) в Гонолулу",
        "Kiribati":"(GMT+11:00) Кирибати, Тарава",
        "Marshall Is.":"(GMT+12:00) Маджуро, Маршалловы Острова",
        "Micronesia":"(GMT+10:00) Микронезии (Паликир)",
        "Midway Is.(US)":"(GMT-11:00) Мидуэй (США)",
        "Nauru Rep.":"(GMT+12:00) Республика Науру, Аарон",
        "New Calednia(FR)":"(GMT+11:00) Новая Каледония (Франция) Нумеа",
        "New Zealand":"(GMT+12:00) Окленд, Новая Зеландия",
        "New Zealand(CHADT)":"(GMT+12:45) Веллингтон, Новая Зеландия",
        "Niue(NZ)":"(GMT-11:00) Алофи, Ниуэ",
        "Nor. Mariana Is.":"(GMT+10:00) Северные Марианские острова (США) Сайпан",
        "Palau":"(GMT+09:00) Корор, Палау",
        "Papua New Guinea":"(GMT+10:00) Папуа-Новая Гвинея",
        "Pitcairn Is.(UK)":"(GMT-08:30) Адамстаун, Острова Питкэрн (Великобритания)",
        "Polynesia(FR)":"(GMT-10:00) Папеэте, Таити, Полинезия (французская)",
        "Solomon Is.":"(GMT+11:00) Хониара, Соломоновы острова",
        "Tahiti":"(GMT-10:00) Таити",
        "Tokelau(NZ)":"(GMT-11:00) атоллы Атафу, Нукунону и Факаофо, Токелау",
        "Tonga":"(GMT+13:00) Нукуалофа, Тонга",
        "Tuvalu":"(GMT+12:00) Тувалу",
        "Vanuatu":"(GMT+11:00) Вануату (Новые Гебриды), Порт-Вила",
        "Western Samoa":"(GMT-11:00) Западное Самоа Апиа",
        "Data Line":"(GMT-12:00) Международная линия перемены дат"
    }
};
linb.Locale.ru.color={
  LIST:{
"5D8AA8":"Военновоздушный синий",
"F0F8F":"Синяя Элис",
"E3263":"Ализариновый красный",
"EFDEC":"Миндаль Крайола",
"E52B5":"Амарантовый",
"FFBF0":"Янтарный",
"FF033":"Американский розовый",
"9966C":"Аметистовый",
"F2F3F":"Матовый белый",
"8DB60":"Яблочно зеленый",
"7BA05":"Спаржа",
"00FFF":"Цвет морской волны",
"7FFFD":"Аквамариновый",
"4B532":"Армейский зеленый",
"3B444":"Мышьяковый",
"007FF":"Лазурный, Азур",
"84848":"Голубовато-серый цвет",
"F5F5D":"Беж, бежевый",
"3D2B1":"Бистр",
"FE6F5":"Горькая радость",
"00000":"Чёрный",
"FAF0B":"Белокурый",
"0000F":"Синий",
"0095B":"Вода пляжа Бонди",
"CC000":"Красный Университета Бостона",
"B5A64":"Латунный",
"66FF0":"Ярко-зелёный",
"08E8D":"Ярко-бирюзовый",
"CD00C":"Ярко-фиолетовый",
"CD7F3":"Бронзовый",
"964B0":"Коричневый",
"F0DC8":"Кожа буйвола",
"90002":"Бургундский",
"CC550":"Выгоревший оранжевый",
"E9745":"Сиена жжёная",
"8A332":"Коричневый",
"78866":"Хаки",
"C41E3":"Тёмно-красный",
"96001":"Карминово-красный",
"ED912":"Морковный",
"ACE1A":"Селадоновый",
"DE316":"Светлая вишня",
"007BA":"Лазурный",
"2A52B":"Лазурно-синий",
"7FFF0":"Салатовый цвет",
"CD5C5":"Каштановый",
"D2691":"Шоколадный",
"7B3F0":"Коричный",
"0047A":"Кобальт синий",
"B8733":"Медный",
"FF7F5":"Коралловый",
"FBEC5":"Кукурузный",
"6495E":"Васильковый",
"FFFDD":"Кремовый",
"DC143":"Тёмно-красный",
"00FFF":"Васильковый",
"65432":"Тёмно-коричневый",
"08457":"Тёмно-лазурный",
"98696":"Тёмно-каштановый",
"CD5B4":"Тёмно-коралловый",
"B8860":"Тёмно-золотой",
"01322":"Тёмно-зелёный",
"31006":"Тёмный индиго",
"BDB76":"Тёмный хаки",
"55683":"Тёмно-оливковый",
"03C03":"Тёмный пастельно-зелёный",
"FFDAB":"Тёмно-персиковый",
"E7548":"Тёмно-розовый",
"E9967":"Тёмная лососина",
"56031":"Тёмно-алый",
"2F4F4":"Тёмно-аспидный серый",
"17724":"Тёмный весенне-зелёный",
"91815":"Тёмный жёлто-коричневый",
"FFA81":"Тёмно-мандариновый",
"BADBA":"Тёмный зелёный чай",
"11606":"Тёмно-бирюзовый",
"42318":"Глубокий фиолетовый цвет",
"00BFF":"Голубой цвет",
"1560B":"Джинсовый синий",
"1E90F":"Защитно-синий",
"50C87":"Изумрудный",
"99006":"Баклажановый",
"4F794":"Зелёный папоротник",
"EEDC8":"Льняной",
"FF00F":"Фуксия",
"E49B0":"Гуммигут",
"FFD70":"Золотой",
"DAA52":"Золотисто-берёзовый",
"80808":"Серый",
"46594":"Серая спаржа",
"CADAB":"Зелёный серый чай",
"00FF0":"Зелёный",
"ADFF2":"Жёлто-зелёный",
"007DF":"Синий Градуса",
"DF73F":"Гелиотроп",
"FC0FC":"Ярко-розовый цвет",
"4B008":"Индиго",
"FF4F0":"Международный (сигнальный)оранжевый",
"CD5C5":"Каштановый",
"C3B09":"Хаки",
"3A75C":"Синий Клейна",
"E6E6F":"Лаванда",
"FFF0F":"Розово-лавандовый",
"FDE91":"Лимонный",
"FFFAC":"Лимонно-кремовый",
"CD853":"Светло-коричневый",
"C8A2C":"Сиреневый",
"CCFF0":"Лайм",
"FAF0E":"Льняной",
"7CFC0":"Зелёная лужайка",
"FF00F":"Малиновый, фуксия",
"0BDA5":"Малахитовая зелень (малахитовый)",
"80000":"Коричнево-малиновый",
"99336":"Розовато-лиловый",
"00336":"Полуночно-синий",
"98FF9":"Зелёная мята (мятный)",
"ADDFA":"Зелёный мох",
"997A8":"Розовый Маунтбэттена",
"FFDB5":"Горчичный",
"FFDEA":"Белый навахо",
"00008":"Тёмно-синий",
"CC772":"Охра",
"CFB53":"Старое золото",
"80800":"Оливковый",
"6B8E2":"Нежно-оливковый",
"FFA50":"Оранжевый",
"DA70D":"Орхидея",
"FDF5E":"Старое кружево",
"AFEEE":"Бледно-синий",
"98765":"Бледно-коричневый",
"AF403":"Бледно-карминный",
"DDADA":"Бледно-каштановый",
"ABCDE":"Бледно-васильковый",
"F984E":"Бледно-пурпурный",
"99666":"Бледный розовато-лиловый",
"FADAD":"Бледно-розовый",
"DB709":"Лиловый",
"DABDA":"Бледно-песочный цвет",
"F0DC8":"Палевый",
"C7FCE":"Панг",
"FFEFD":"Побег папайи",
"77DD7":"Пастельно-зелёный",
"FFD1D":"Пастельно-розовый",
"FFE5B":"Персиковый",
"FFCC9":"Оранжево-персиковый",
"FADFA":"Жёлто-персиковый",
"D1E23":"Грушевый",
"CCCCF":"Барвинок",
"6600F":"Персидский синий",
"01796":"Зелёная сосна",
"FFC0C":"Розовый",
"FF996":"Оранжево-розовый",
"66006":"Сливовый",
"00339":"Пороховая синь",
"CC889":"Красновато-коричневый",
"00315":"Берлинская лазурь",
"FF751":"Тыква",
"66009":"Пурпурный",
"734A1":"Умбра",
"FF000":"Красный",
"C7158":"Фиолетово-красный",
"00CCC":"Цвет яйца дрозда",
"4169E":"Ярко-синий («королевский синий»)",
"755A5":"Красновато-коричневый",
"B7410":"Ржаво-коричневый",
"BC8F8":"Розово-коричневый",
"FF990":"Сигнальный оранжевый",
"F4C43":"Шафрановый",
"08256":"Сапфировый",
"FF8C6":"Лососёвый",
"F4A46":"Песочный цвет",
"92000":"Сангрия",
"FF240":"Ярко-красный",
"FFD80":"Цвет жёлтого школьного автобуса",
"2E8B5":"Зелёное море",
"FFF5E":"Цвет морской пены",
"FFBA0":"Отборный жёлтый",
"70421":"Сепия",
"C0C0C":"Серебряный",
"70809":"Серый шифер",
"00FF7":"Зелёная весна",
"4682B":"Синяя сталь",
"ACB78":"Болотный",
"D2B48":"Цвет загара",
"CD570":"Краснобуро-оранжевый",
"FFCC0":"Мандариновый",
"D0F0C":"Зелёный чай",
"00808":"Сине-зелёный",
"D8BFD":"Чертополох",
"30D5C":"Бирюзовый",
"d53e0":"Тициановый",
"CC060":"Транспортный красный",
"FF634":"Томатный",
"120A8":"Ультрамариновый",
"5B92E":"Цвет флага ООН",
"F3E5A":"Ванильный",
"E3423":"Киноварь",
"8B00F":"Фиолетовый",
"99119":"Фиолетово-баклажанный",
"40826":"Ядовито-зелёный",
"F5DEB":"Пшеничный",
"FFFFF":"Белый",
"C9A0D":"Глициния",
"722F3":"Вино",
"FFFF0":"Жёлтый",
"EBC2A":"Циннвальдит",
"0014A":"Кобальтовая синь"
  }
};
linb.Locale.ru.editor={
    bold:'Полужирный',
    italic:'Курсив',
    underline:'Подчеркнутый',
    strikethrough:'Зачеркнутый',
    subscript:'Нижний индекс',
    superscript:'Верхний индекс',
    forecolor:'Цвет шрифта',
    bgcolor:'Цвет фона',
    left:'По левому краю',
    center:'По центру',
    right:'По правому краю',
    justify:'По ширине',
    indent:'Отступ',
    outdent:'Выступ',
    ol:'Упорядоченный список',
    ul:'Неупорядоченный список',
    hr:'Вставить Горизонтальную линию',
    unlink:'Удалить ссылку',
    removeformat:'Удалить форматирование',
    html:"Редактор HTML",

    insertimage:'Вставить изображение',
    insertimage2:'URL изображения:',
    createlink:'Вставить гиперссылку',
    createlink2:'URL ссылки:',
    fontsize:'Размер шрифта',
    fontname:'Имя шрифта',
    formatblock:'Блок шрифта',
    fontsizeList:'1,1(8pt);2,2(10pt);3,3(12pt);4,4(14pt);5,5(18pt);6,6(24pt);...,...',
    fontnameList:'Arial;Arial Black;Comic Sans MS;Courier New;Impact;Tahoma;Times New Roman;Trebuchet MS;Verdana;...',
    formatblockList:'p,Normal;h1,Heading1;h2,Heading2;h3,Heading3;h4,Heading4;h5,Heading5;h6,Heading6;...,...'
}