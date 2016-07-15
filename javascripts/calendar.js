/*
 * 360前端星计划 - 万年历
 * JavaScript 文件
 * 作者：闻双云
*/


function initDatas(){
    //农历日期
    this.lunarCalendarDay;   
    //农历年份数据
    this.lunarCalendarTable = [ 0x04AE53,0x0A5748,0x5526BD,0x0D2650,0x0D9544,0x46AAB9,0x056A4D,0x09AD42,0x24AEB6,0x04AE4A,/*1901-1910*/  
                                0x6A4DBE,0x0A4D52,0x0D2546,0x5D52BA,0x0B544E,0x0D6A43,0x296D37,0x095B4B,0x749BC1,0x049754,/*1911-1920*/  
                                0x0A4B48,0x5B25BC,0x06A550,0x06D445,0x4ADAB8,0x02B64D,0x095742,0x2497B7,0x04974A,0x664B3E,/*1921-1930*/  
                                0x0D4A51,0x0EA546,0x56D4BA,0x05AD4E,0x02B644,0x393738,0x092E4B,0x7C96BF,0x0C9553,0x0D4A48,/*1931-1940*/  
                                0x6DA53B,0x0B554F,0x056A45,0x4AADB9,0x025D4D,0x092D42,0x2C95B6,0x0A954A,0x7B4ABD,0x06CA51,/*1941-1950*/  
                                0x0B5546,0x555ABB,0x04DA4E,0x0A5B43,0x352BB8,0x052B4C,0x8A953F,0x0E9552,0x06AA48,0x6AD53C,/*1951-1960*/  
                                0x0AB54F,0x04B645,0x4A5739,0x0A574D,0x052642,0x3E9335,0x0D9549,0x75AABE,0x056A51,0x096D46,/*1961-1970*/  
                                0x54AEBB,0x04AD4F,0x0A4D43,0x4D26B7,0x0D254B,0x8D52BF,0x0B5452,0x0B6A47,0x696D3C,0x095B50,/*1971-1980*/  
                                0x049B45,0x4A4BB9,0x0A4B4D,0xAB25C2,0x06A554,0x06D449,0x6ADA3D,0x0AB651,0x093746,0x5497BB,/*1981-1990*/  
                                0x04974F,0x064B44,0x36A537,0x0EA54A,0x86B2BF,0x05AC53,0x0AB647,0x5936BC,0x092E50,0x0C9645,/*1991-2000*/  
                                0x4D4AB8,0x0D4A4C,0x0DA541,0x25AAB6,0x056A49,0x7AADBD,0x025D52,0x092D47,0x5C95BA,0x0A954E,/*2001-2010*/  
                                0x0B4A43,0x4B5537,0x0AD54A,0x955ABF,0x04BA53,0x0A5B48,0x652BBC,0x052B50,0x0A9345,0x474AB9,/*2011-2020*/  
                                0x06AA4C,0x0AD541,0x24DAB6,0x04B64A,0x69573D,0x0A4E51,0x0D2646,0x5E933A,0x0D534D,0x05AA43,/*2021-2030*/  
                                0x36B537,0x096D4B,0xB4AEBF,0x04AD53,0x0A4D48,0x6D25BC,0x0D254F,0x0D5244,0x5DAA38,0x0B5A4C,/*2031-2040*/  
                                0x056D41,0x24ADB6,0x049B4A,0x7A4BBE,0x0A4B51,0x0AA546,0x5B52BA,0x06D24E,0x0ADA42,0x355B37,/*2041-2050*/  
                                0x09374B,0x8497C1,0x049753,0x064B48,0x66A53C,0x0EA54F,0x06B244,0x4AB638,0x0AAE4C,0x092E42,/*2051-2060*/  
                                0x3C9735,0x0C9649,0x7D4ABD,0x0D4A51,0x0DA545,0x55AABA,0x056A4E,0x0A6D43,0x452EB7,0x052D4B,/*2061-2070*/  
                                0x8A95BF,0x0A9553,0x0B4A47,0x6B553B,0x0AD54F,0x055A45,0x4A5D38,0x0A5B4C,0x052B42,0x3A93B6,/*2071-2080*/  
                                0x069349,0x7729BD,0x06AA51,0x0AD546,0x54DABA,0x04B64E,0x0A5743,0x452738,0x0D264A,0x8E933E,/*2081-2090*/  
                                0x0D5252,0x0DAA47,0x66B53B,0x056D4F,0x04AE45,0x4A4EB9,0x0A4D4C,0x0D1541,0x2D92B5          /*2091-2099*/  ];
}


/*
 * 创建DOM元素的对象
 */
function createDomObj(){
    //当前显示的年份，包含下拉箭头
    var yearObj = document.getElementById('yearObj');
    //当前显示的月份，包含下拉箭头
    var monthObj = document.getElementById('monthObj');
    //当前显示的年份
    var thisYearObj = document.getElementById('thisYearObj');
    //当前显示的月份
    var thisMonthObj = document.getElementById('thisMonthObj');
    //年份下拉框
    var dropDownYearObj = document.getElementById('dropDownYearObj');
    //月份下拉框
    var dropDownMonthObj = document.getElementById('dropDownMonthObj');
    //年份下拉框ul
    var dropDownYearUl = document.getElementById('dropDownYearUl');
    //向前一年
    var preYearObj = document.getElementById('preYearObj');
    //向后一年
    var nextYearObj = document.getElementById('nextYearObj');
    //向前一月
    var preMonthObj = document.getElementById('preMonthObj');
    //向后一月
    var nextMonthObj = document.getElementById('nextMonthObj');
    //返回今天
    var goTodayObj = document.getElementById('goTodayObj');
    //右上角现在的时间
    var nowTimeObj = document.getElementById('nowTimeObj');
    //右侧的日期和星期
    var rightDateObj = document.getElementById('rightDateObj');
    //右侧的大数字
    var rightDayObj = document.getElementById('rightDayObj');
    //右侧的农历
    var rightLunarObj = document.getElementById('rightLunarObj');
    //右侧的节日
    var rightFestivalObj = document.getElementById('rightFestivalObj');
    //右下方的小贴士
    var tipsObj = document.getElementById('tipsObj');
    //背景
    var skyObj = document.getElementById('skyObj');
    //左区域
    var leftObj = document.getElementById('leftObj');
    //右区域
    var rightObj = document.getElementById('rightObj');
    //手机页面左上角的返回
    var returnObj = document.getElementById('returnObj');
}


/*
 * 判断是不是手机
 * 返回值：1-是手机，0-不是手机
 */
function isMobileFuc(){
    var browser={    
        versions: function(){     
            var u = navigator.userAgent, app = navigator.appVersion;     
            return { //移动终端浏览器版本信息     
                trident: u.indexOf('Trident') > -1, //IE内核    
                presto: u.indexOf('Presto') > -1, //opera内核    
                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核    
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核    
                mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端    
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端    
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, 
                //android终端或者uc浏览器
                iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器    
                iPad: u.indexOf('iPad') > -1, //是否iPad      
                webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部    
            };    
        }(),    
        language: (navigator.browserLanguage || navigator.language).toLowerCase()    
    }
    if( browser.versions.mobile || browser.versions.ios || browser.versions.android || 
        browser.versions.iPhone || browser.versions.iPad ) {         
        return 1;        
    }else{
        return 0;
    }
}


/*
 * 获取今天的日期
 * 显示年份和月份
 */
function showNowDate(){
    var todayObj = new Date();
    var nowYear = todayObj.getFullYear();
    var nowMonth = todayObj.getMonth() + 1;
    thisYearObj.innerHTML = nowYear + '年';
    thisMonthObj.innerHTML = nowMonth + '月';
    showRightDate(todayObj.getFullYear()+'/'+(todayObj.getMonth()+1)+'/'+todayObj.getDate());
}


/*
 * 创建年份下拉列表中的内容
 */
function createYearDropCon(){
    for(var i=1902; i<=2098; i++){
        var newNode = document.createElement("li");
        newNode.innerHTML = i + '年';
        dropDownYearUl.appendChild(newNode);
    }
}


/*
 * 判断当前年份是不是闰年
 * 是返回1，不是返回0
 */
function isLeapYearFuc(){
    var thisYear = Number( thisYearObj.innerHTML.slice(0, -1) );
    if( thisYear % 100 == 0 ){
        if( thisYear % 400 == 0 ){
            return 1;
        }else{
            return 0;
        }
    }else{
        if( thisYear % 4 == 0 ){
            return 1;
        }else{
            return 0;
        }
    }
}


/*
 * 计算某年某月的1号是星期几
 */
function weekForDate1(date_str){
    var dayCode = Number(date_str.split('/')[2]);
    var monthCodeArr = [1,4,4,7,2,5,7,3,6,1,4,6];
    var thisMonthIndex = Number(date_str.split('/')[1]) - 1;
    var monthCode = monthCodeArr[thisMonthIndex];  //月的代码

    //计算年的代码
    var thisYear = Number(date_str.split('/')[0]);

    if(thisYear == 2000){
        var yearCode = 4;  //年的代码
    }else if(thisYear > 2000){
        var x = Math.floor( (thisYear - 2000)/4 );
        var r = thisYear - 2000 - 4*x;
        if( r == 0 ){
            var yearCode = 4 - 2*x;  //年的代码
        }else{
            var yearCode = 4 - 2*x + r + 1;  //年的代码
        }
    }else{
        var x = Math.floor( (2000 - thisYear)/4 );
        var r = 2000 - thisYear - 4*x;
        var yearCode = 4 + 2*x - r;  //年的代码
    }

    //计算当月1号对应的星期
    var z = dayCode + monthCode + yearCode;
    if( (isLeapYearFuc() == 1) && (thisMonthIndex >= 2) && (thisMonthIndex <= 11) ){
        z = z + 1;
    }
    var thisWeekNum = z - Math.floor(z/7)*7;
    if(thisWeekNum == 0){
        thisWeekNum = 7;  //周日
    }
    return thisWeekNum;
}

/*
 * 计算某月共有多少天
 */
function daysOfThisMonthFuc(thisMonth){
    if(thisMonth==1 || thisMonth==3 || thisMonth==5 || thisMonth==7 || thisMonth==8 || thisMonth==10 || thisMonth==12){
        var daysOfThisMonth = 31;
    }else if(thisMonth==4 || thisMonth==6 || thisMonth==9 || thisMonth==11 || thisMonth==11){
        var daysOfThisMonth = 30;
    }else{
        if(isLeapYearFuc() == 1){
            var daysOfThisMonth = 29;
        }else{
            var daysOfThisMonth = 28;
        }
    }
    return daysOfThisMonth;
}


/*
 * 创建所有的td元素
 */
function createTDsFuc(){
    var tbodyObj = document.getElementById('tbodyObj');
    var dataTag = tbodyObj.getAttribute('data-tag');
    if(dataTag == '1'){ //之前创建过了，需要先删除之前的
        oldTRs = document.getElementsByClassName('newCreate');
        for(var j=0; j<6; j++){
            tbodyObj.removeChild(oldTRs[0]);
        }
    }
    for(var i=0; i<6; i++){
        var newNode = document.createElement("tr");
        newNode.className = "newCreate";
        var tdNode = '<td><div class="solar"></div><div class="lunar"></div></td>'
        newNode.innerHTML = tdNode + tdNode + tdNode +tdNode + tdNode + tdNode + tdNode;
        tbodyObj.appendChild(newNode);
    }
    tbodyObj.setAttribute('data-tag','1');
}


/*
 * 函数：由阳历日期计算出农历日期
 * 参数：阳历的年、月、日
 * 返回值：闰月返回1，非闰月返回0. （农历日期信息赋给全局变量this.lunarCalendarDay）
 */
function calculateLunarFuc(year, month, day){
    var springToYD;  //春节距离元旦的天数
    var dayToYD;     //参数日期距离元旦的天数
    var monthAdd = [0,31,59,90,120,151,181,212,243,273,304,334];
    var staticDayCount;   //大月为30，小月为29
    var index;  //记录从哪个月开始计算
    var flag;   //用来对闰月进行特殊处理

    if ( ( ( this.lunarCalendarTable[year-1901] & 0x0060 ) >> 5 ) == 1 ){
        springToYD = ( this.lunarCalendarTable[year-1901] & 0x001F ) - 1; 
    }else{
        springToYD = ( this.lunarCalendarTable[year-1901] & 0x001F ) - 1 + 31; 
    }

    dayToYD = Number(monthAdd[month-1]) + Number(day) - 1;

    if ( !(year % 4) && (month > 2) ){
        dayToYD = dayToYD + 1;
    }

    if (dayToYD >= springToYD){   //参数日期在春节后（含春节）
        dayToYD = dayToYD - springToYD;   //变成距离春节的天数
        month = 1;
        index = 1;  //记录从哪个月开始计算
        flag = 0;   //用来对闰月进行特殊处理

        //判断大小月
        if ( ( this.lunarCalendarTable[year - 1901] & (0x80000 >> (index-1)) ) == 0 ){
            staticDayCount = 29;
        }else{
            staticDayCount = 30;
        }

        while(dayToYD >= staticDayCount){
            dayToYD = dayToYD - staticDayCount;
            index = index + 1;
            if(month == ((this.lunarCalendarTable[year - 1901] & 0xF00000) >> 20) ){  
                flag = ~flag;  
                if (flag == 0){
                    month = month + 1;
                }   
            }else{
                month = month + 1;
            }
            if( ( this.lunarCalendarTable[year - 1901] & (0x80000 >> (index-1)) ) == 0 ){
                staticDayCount = 29;
            }else{
                staticDayCount = 30;
            }
        }

        day = dayToYD + 1;
    }else{  //参数日期在春节前
        springToYD = springToYD - dayToYD;
        year = year - 1;
        month = 12;

        if ( ((this.lunarCalendarTable[year - 1901] & 0xF00000) >> 20) == 0 ){
            index = 12;
        }else{
            index = 13;
        }

        flag = 0;

        if ( ( this.lunarCalendarTable[year - 1901] & (0x80000 >> (index-1)) ) == 0 ){
            staticDayCount = 29;
        }else{
            staticDayCount = 30;
        }
        
        while(springToYD > staticDayCount){  
            springToYD = springToYD - staticDayCount;  
            index = index - 1;  
            if(flag == 0){
                month = month - 1; 
            }     
            if(month == ((this.lunarCalendarTable[year - 1901] & 0xF00000) >> 20)){
                flag = ~flag;
            }  
            if( ( this.lunarCalendarTable[year - 1901] & (0x80000 >> (index-1)) ) == 0 ){
                staticDayCount = 29;
            }else{
                staticDayCount = 30;
            } 
        } 

        day = staticDayCount - springToYD + 1;
    }

    this.lunarCalendarDay |= day;  
    this.lunarCalendarDay |= (month << 6);  
    if (month == ((this.lunarCalendarTable[year - 1901] & 0xF00000) >> 20)){
        return 1;
    }else{
        return 0;
    }  
}


/*
 * 获得阳历日期对应的阴历日期，组装成字符串
 * 参数：阳历日期（如：2016/4/11）
 * 返回值：阴历日期（如：三月初五）
 */
function getLunarStr(dateArg){
    this.lunarCalendarDay = '';  //先把全局变量置空
    var dayArr = ["*","初一","初二","初三","初四","初五","初六","初七","初八","初九","初十",
                      "十一","十二","十三","十四","十五","十六","十七","十八","十九","二十",  
                      "廿一","廿二","廿三","廿四","廿五","廿六","廿七","廿八","廿九","三十"];
    var monthArr = ["*","正","二","三","四","五","六","七","八","九","十","十一","腊"];
    var year = dateArg.split('/')[0];   //年
    var month = dateArg.split('/')[1];  //月
    var day = dateArg.split('/')[2];    //日
    var lunarStr = "";
    if( calculateLunarFuc(year,month,day) ){  
        lunarStr = lunarStr + "闰" + monthArr[(this.lunarCalendarDay & 0x3C0) >> 6];
    }else{
        lunarStr = lunarStr + monthArr[(this.lunarCalendarDay & 0x3C0) >> 6];
    }
    lunarStr = lunarStr + '月' + dayArr[this.lunarCalendarDay & 0x3F];

    return lunarStr;
}


/*
 * 求某节气在某年的日期
 * 参数：年，月，21世纪的C值，20世纪的C值，例外年份数组
 * 返回值：节气日期
 */
function getJieQiFuc( year, month, c1, c2, except ){
    var Y = (""+year).slice(-2);
    if( year > 2000 ){
        var C = c1;
    }else{
        var C = c2;
    }
    if( month == 1 || month == 2 ){
        var jieqi = Math.floor( Y*0.2422 + C ) - Math.floor( (Y-1)/4 );
    }else{
        var jieqi = Math.floor( Y*0.2422 + C ) - Math.floor( Y/4 );
    }
    for( var i=0; i<except.length; i++ ){
        if( year == except[i] ){
            jieqi = jieqi + 1;
        }
    }
    return jieqi;
}


/*
 * 判断是不是节日
 * 参数：当前日期，如：2016/4/11
 * 返回值：节日名，不是节日时返回空字符串
 */
function isFestivalFuc(dateArg, lunarArg){
    var year = Number( dateArg.split('/')[0] );
    var month = Number( dateArg.split('/')[1] );
    var day = Number( dateArg.split('/')[2] );
    var month_day = month + '/' + day; //月日，如：4/11
    var tag = "";

    /*
     * 中国传统节日
     */
    switch (lunarArg) {
        case '腊月廿九':
            var date = new Date(dateArg);
            date.setDate(date.getDate()+1);
            if(getLunarStr(date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate()) == '正月初一')
                tag = tag + '除夕 '; break;
        case '腊月三十':   tag = tag + '除夕 '; break;
        case '正月初一':   tag = tag + '春节 '; break;
        case '正月十五':   tag = tag + '元宵节 '; break;
        case '二月初二':   tag = tag + '龙头节 '; break;
        case '五月初五':   tag = tag + '端午节 '; break;
        case '七月初七':   tag = tag + '七夕节 '; break;
        case '七月十五':   tag = tag + '中元节 '; break;
        case '八月十五':   tag = tag + '中秋节 '; break;
        case '九月初九':   tag = tag + '重阳节 '; break;
        case '十月初一':   tag = tag + '寒衣节 '; break;
        case '十月十五':   tag = tag + '下元节 '; break;
        default:      tag = tag + "";
    }

    /*
     * 国际节日
     */
    switch (month_day) {
        case '1/1':   tag = tag + '元旦 '; break;
        case '2/2':   tag = tag + '湿地日 '; break;
        case '2/14':  tag = tag + '情人节 '; break;
        case '3/8':   tag = tag + '妇女节 '; break;
        case '3/12':  tag = tag + '植树节 '; break;
        case '3/15':  tag = tag + '消费者权益日 '; break;
        case '4/1':   tag = tag + '愚人节 '; break;
        case '4/22':  tag = tag + '地球日 '; break;
        case '5/1':   tag = tag + '劳动节 '; break;
        case '5/4':   tag = tag + '青年节 '; break;
        case '5/12':  tag = tag + '护士节 '; break;
        case '5/18':  tag = tag + '博物馆日 '; break;
        case '6/1':   tag = tag + '儿童节 '; break;
        case '6/5':   tag = tag + '环境日 '; break;
        case '6/23':  tag = tag + '奥林匹克日 '; break;
        case '6/24':  tag = tag + '骨质疏松日 '; break;
        case '7/1':   tag = tag + '建党节 '; break;
        case '8/1':   tag = tag + '建军节 '; break;
        case '9/3':   tag = tag + '抗战胜利日 '; break;
        case '9/10':  tag = tag + '教师节 '; break;
        case '10/1':  tag = tag + '国庆节 '; break;
        case '10/31': tag = tag + '万圣节 '; break;
        case '11/17': tag = tag + '学生日 '; break;
        case '12/1':  tag = tag + '艾滋病日 '; break;
        case '12/24': tag = tag + '平安夜 '; break;
        case '12/25': tag = tag + '圣诞节 '; break;
        default:      tag = tag + "";
    }

    //5月的第二个星期日 - 母亲节
    if( month == 5 && weekForDate1(dateArg) == 7 && day >= 8 && day <= 14 ){
        tag = tag + '母亲节 ';
    }

    //6月的第三个星期日 - 父亲节
    if( month == 6 && weekForDate1(dateArg) == 7 && day >= 15 && day <= 21 ){
        tag = tag + '父亲节 ';
    }

    //10月的第二个星期一 - 感恩节（加拿大）
    if( month == 10 && weekForDate1(dateArg) == 1 && day >= 8 && day <= 14 ){
        tag = tag + '感恩节（加拿大） ';
    }

    //11月的最后一个星期四 - 感恩节（美国）
    if( month == 11 && weekForDate1(dateArg) == 4 && day >= 23 && day <= 29 ){
        tag = tag + '感恩节（美国） ';
    }

    /*
     *24节气
     */

    // 立春：2月3-5日
    if( month == 2 && day >= 3 && day <= 5 ){
        if( day == getJieQiFuc(year, month, 3.87, 4.6295, []) )
            tag = tag + '立春 ';
    }

    // 雨水：2月18-20日
    if( month == 2 && day >= 18 && day <= 20 ){
        if( year != 2026 ){
            if( day == getJieQiFuc(year, month, 18.73, 19.4599, []) )
                tag = tag + '雨水 ';
        }else{
            if( day == 18 )  
                tag = tag + '雨水 ';
        }
    }

    // 惊蛰：3月4-7日
    if( month == 3 && day >= 4 && day <= 7 ){
        if( day == getJieQiFuc(year, month, 5.63, 6.3826, []) )
            tag = tag + '惊蛰 ';
    }

    // 春分：3月19-22日
    if( month == 3 && day >= 19 && day <= 22 ){
        if( day == getJieQiFuc(year, month, 20.646, 21.4155, []) )
            tag = tag + '春分 ';
    }

    // 清明：4月4-6日
    if( month == 4 && day >= 4 && day <= 6 ){
        if( day == getJieQiFuc(year, month, 4.81, 5.59, []) )
            tag = tag + '清明 ';
    }

    // 谷雨：4月19-21日
    if( month == 4 && day >= 19 && day <= 21 ){
        if( day == getJieQiFuc(year, month, 20.1, 20.888, []) )
            tag = tag + '谷雨 ';
    }

    // 立夏：5月5-7日
    if( month == 5 && day >= 5 && day <= 7 ){
        if( day == getJieQiFuc(year, month, 5.52, 6.318, [1911]) )
            tag = tag + '立夏 ';
    }

    // 小满：5月20-22日
    if( month == 5 && day >= 20 && day <= 22 ){
        if( day == getJieQiFuc(year, month, 21.04, 21.86, [2008]) )
            tag = tag + '小满 ';
    }

    // 芒种：6月5-7日
    if( month == 6 && day >= 5 && day <= 7 ){
        if( day == getJieQiFuc(year, month, 5.678, 6.5, [1902]) )
            tag = tag + '芒种 ';

    }

    // 夏至：6月21-22日
    if( month == 6 && day >= 21 && day <= 22 ){
        if( day == getJieQiFuc(year, month, 21.37, 22.20, [1928]) )
            tag = tag + '夏至 ';
    }

    // 小暑：7月6-8日
    if( month == 7 && day >= 6 && day <= 8 ){
        if( day == getJieQiFuc(year, month, 7.108, 7.928, [1925,2016]) )
            tag = tag + '小暑 ';
    }

    // 大暑：7月22-24日
    if( month == 7 && day >= 22 && day <= 24 ){
        if( day == getJieQiFuc(year, month, 22.83, 23.65, [1922]) )
            tag = tag + '大暑 ';
    }

    // 立秋：8月7-9日
    if( month == 8 && day >= 7 && day <= 9 ){
        if( day == getJieQiFuc(year, month, 7.5, 8.35, [2002]) )
            tag = tag + '立秋 ';
    }

    // 处暑：8月22-24日
    if( month == 8 && day >= 22 && day <= 24 ){
        if( day == getJieQiFuc(year, month, 23.13, 23.95, []) )
            tag = tag + '处暑 ';
    }

    // 白露：9月7-9日
    if( month == 9 && day >= 7 && day <= 9 ){
        if( day == getJieQiFuc(year, month, 7.646, 8.44, [1927]) )
            tag = tag + '白露 ';
    }

    // 秋分：9月22-24日
    if( month == 9 && day >= 22 && day <= 24 ){
        if( day == getJieQiFuc(year, month, 23.042, 23.822, [1942]) )
            tag = tag + '秋分 ';
    }

    // 寒露：10月8-9日
    if( month == 10 && day >= 8 && day <= 9 ){
        if( day == getJieQiFuc(year, month, 8.318, 9.098, []) )
            tag = tag + '寒露 ';
    }

    // 霜降：10月23-24日
    if( month == 10 && day >= 23 && day <= 24 ){
        if( day == getJieQiFuc(year, month, 23.438, 24.218, [2089]) )
            tag = tag + '霜降 ';
    }

    // 立冬：11月7-8日
    if( month == 11 && day >= 7 && day <= 8 ){
        if( day == getJieQiFuc(year, month, 7.438, 8.218, [2089]) )
            tag = tag + '立冬 ';
    }

    // 小雪：11月22-23日
    if( month == 11 && day >= 22 && day <= 23 ){
        if( day == getJieQiFuc(year, month, 22.36, 23.08, [1978]) )
            tag = tag + '小雪 ';
    }

    // 大雪：12月6-8日
    if( month == 12 && day >= 6 && day <= 8 ){
        if( day == getJieQiFuc(year, month, 7.18, 7.9, []) )
            tag = tag + '大雪 ';
    }

    // 冬至：12月21-23日
    if( month == 12 && day >= 21 && day <= 23 ){
        if( year == 1918 ){
            if( day == 22 )
                tag = tag + '冬至 ';
        }else if( year == 2021 ){
            if( day == 21 )
                tag = tag + '冬至 ';
        }else{
            if( day == getJieQiFuc(year, month, 21.94, 22.6, []) )
                tag = tag + '冬至 ';
        }
    }

    // 小寒：1月5-7日
    if( month == 1 && day >= 5 && day <= 7 ){
        if( year == 2019 ){
            if( day == 5 )
                tag = tag + '小寒 ';
        }else{
            if( day == getJieQiFuc(year, month, 5.4055, 6.11, [1982]) )
                tag = tag + '小寒 ';
        }
    }

    // 大寒：1月20-21日
    if( month == 1 && day >= 20 && day <= 21 ){
        if( day == getJieQiFuc(year, month, 20.12, 20.84, [2082]) )
            tag = tag + '大寒 ';
    }
    
    return tag;
}


/*
 * 判断2016年的某天是不是放假日
 */
function isDayoffFuc(dateArg){
    var tag; //标志变量，是假日为1，不是为0，补班日为2
    if(Number(dateArg.split('/')[0]) == 2016){
        switch (dateArg) {
            case '2016/1/1':   tag = 1; break;
            case '2016/1/2':   tag = 1; break;
            case '2016/1/3':   tag = 1; break;
            case '2016/2/6':   tag = 2; break;
            case '2016/2/7':   tag = 1; break;
            case '2016/2/8':   tag = 1; break;
            case '2016/2/9':   tag = 1; break;
            case '2016/2/10':  tag = 1; break;
            case '2016/2/11':  tag = 1; break;
            case '2016/2/12':  tag = 1; break;
            case '2016/2/13':  tag = 1; break;
            case '2016/2/14':  tag = 2; break;
            case '2016/4/2':   tag = 1; break;
            case '2016/4/3':   tag = 1; break;
            case '2016/4/4':   tag = 1; break;
            case '2016/4/30':  tag = 1; break;
            case '2016/5/1':   tag = 1; break;
            case '2016/5/2':   tag = 1; break;
            case '2016/6/9':   tag = 1; break;
            case '2016/6/10':  tag = 1; break;
            case '2016/6/11':  tag = 1; break;
            case '2016/6/12':  tag = 2; break;
            case '2016/9/15':  tag = 1; break;
            case '2016/9/16':  tag = 1; break;
            case '2016/9/17':  tag = 1; break;
            case '2016/9/18':  tag = 2; break;
            case '2016/10/1':  tag = 1; break;
            case '2016/10/2':  tag = 1; break;
            case '2016/10/3':  tag = 1; break;
            case '2016/10/4':  tag = 1; break;
            case '2016/10/5':  tag = 1; break;
            case '2016/10/6':  tag = 1; break;
            case '2016/10/7':  tag = 1; break;
            case '2016/10/8':  tag = 2; break;
            case '2016/10/9':  tag = 2; break;
            default: tag = 0;
        }
    }else{
        tag = 0;
    }
    return tag;
}


/*
 * 创建当前日历
 */
function createCalendar(){
    var date1str = thisYearObj.innerHTML.slice(0, -1) + '/' + thisMonthObj.innerHTML.slice(0, -1) + '/1';
    var thisWeekNum = weekForDate1(date1str); //某年某月1号的星期

    //本月和上月的天数
    var thisMonth = thisMonthObj.innerHTML.slice(0,-1);
    var daysOfThisMonth = daysOfThisMonthFuc(thisMonth);
    var preMonth = (thisMonth==1) ? 12 : thisMonth-1;
    var daysOfPreMonth = daysOfThisMonthFuc(preMonth);

    //创建日期区
    var todayObj = new Date();
    todayObj = todayObj.getFullYear()+'/'+(todayObj.getMonth()+1)+'/'+todayObj.getDate();
    createTDsFuc();
    var tdObjArr = document.getElementsByTagName('td');
    var N = 0;
    var dateStr;
    //月前部分
    for(var i=0; i<thisWeekNum-1; i++){
        tdObjArr[N].childNodes[0].innerHTML = daysOfPreMonth-thisWeekNum+2+i; //阳历
        tdObjArr[N].className += ' outMonth';
        if( thisMonthObj.innerHTML.slice(0,-1) == 1 ){ //如果当前月份是1月，则月前为上一年的12月
            dateStr = (thisYearObj.innerHTML.slice(0,-1)-1) + '/' + 12 + '/' + (daysOfPreMonth-thisWeekNum+2+i);
        }else{
            dateStr = thisYearObj.innerHTML.slice(0,-1) + '/' + (thisMonthObj.innerHTML.slice(0,-1)-1) + '/' + (daysOfPreMonth-thisWeekNum+2+i);
        }
        tdObjArr[N].setAttribute('data-date',dateStr);
        tdObjArr[N].childNodes[1].innerHTML = getLunarStr(dateStr).slice(-2); //农历
        //节日
        var festivelName = isFestivalFuc(dateStr, getLunarStr(dateStr));
        if(festivelName != ""){
            //去除两边的空格
            festivelName = festivelName.replace(/(^\s*)|(\s*$)/g, "");
            if(festivelName.length > 3){
                tdObjArr[N].childNodes[1].setAttribute('title',festivelName);
                tdObjArr[N].childNodes[1].innerHTML = festivelName.slice(0,2) + '..'; //节日
            }else{
                tdObjArr[N].childNodes[1].innerHTML = festivelName; //节日
            }
            tdObjArr[N].childNodes[1].className += ' festival';
        }
        //假日安排
        if(isDayoffFuc(dateStr) == 1){
            tdObjArr[N].className += ' dayoff';
            var newNode = document.createElement("div");
            newNode.innerHTML = '休';
            newNode.className = 'dayoffLabel';
            tdObjArr[N].appendChild(newNode);
        }else if(isDayoffFuc(dateStr) == 2){
            tdObjArr[N].className += ' dayOn';
            var newNode = document.createElement("div");
            newNode.innerHTML = '班';
            newNode.className = 'dayOnLabel';
            tdObjArr[N].appendChild(newNode);
        }
        //今天
        if(dateStr == todayObj){
            tdObjArr[N].className += ' today';
        }
        N = N + 1;
    }
    //月内部分
    for(var j=1; j<=daysOfThisMonth; j++){
        tdObjArr[N].childNodes[0].innerHTML = j; //阳历
        dateStr = thisYearObj.innerHTML.slice(0,-1) + '/' + thisMonthObj.innerHTML.slice(0,-1) + '/' + j;
        tdObjArr[N].setAttribute('data-date',dateStr);
        tdObjArr[N].childNodes[1].innerHTML = getLunarStr(dateStr).slice(-2); //农历
        //节日
        var festivelName = isFestivalFuc(dateStr, getLunarStr(dateStr));
        if(festivelName != ""){
            //去除两边的空格
            festivelName = festivelName.replace(/(^\s*)|(\s*$)/g, "");
            if(festivelName.length > 3){
                tdObjArr[N].childNodes[1].setAttribute('title',festivelName);
                tdObjArr[N].childNodes[1].innerHTML = festivelName.slice(0,2) + '..'; //节日
            }else{
                tdObjArr[N].childNodes[1].innerHTML = festivelName; //节日
            }
            tdObjArr[N].childNodes[1].className += ' festival';
        }
        //假日安排
        if(isDayoffFuc(dateStr) == 1){
            tdObjArr[N].className += ' dayoff';
            var newNode = document.createElement("div");
            newNode.innerHTML = '休';
            newNode.className = 'dayoffLabel';
            tdObjArr[N].appendChild(newNode);
        }else if(isDayoffFuc(dateStr) == 2){
            tdObjArr[N].className += ' dayOn';
            var newNode = document.createElement("div");
            newNode.innerHTML = '班';
            newNode.className = 'dayOnLabel';
            tdObjArr[N].appendChild(newNode);
        }
        //今天
        if(dateStr == todayObj){
            tdObjArr[N].className += ' today';
        }
        N = N + 1;
    }
    //月后部分
    for(var k=0; k<42-(thisWeekNum-1)-daysOfThisMonth; k++){
        tdObjArr[N].childNodes[0].innerHTML = k + 1; //阳历
        tdObjArr[N].className += ' outMonth';
        var newMonth = Number(thisMonthObj.innerHTML.slice(0,-1)) + 1;
        if(newMonth == 13){ //如果当前为12月，则月后为下一年的1月
            dateStr = (Number(thisYearObj.innerHTML.slice(0,-1))+1) + '/' + 1 + '/' + (k + 1);
        }else{
            dateStr = thisYearObj.innerHTML.slice(0,-1) + '/' + newMonth + '/' + (k + 1);
        }
        tdObjArr[N].setAttribute('data-date',dateStr);
        tdObjArr[N].childNodes[1].innerHTML = getLunarStr(dateStr).slice(-2); //农历
        //节日
        var festivelName = isFestivalFuc(dateStr, getLunarStr(dateStr));
        if(festivelName != ""){
            //去除两边的空格
            festivelName = festivelName.replace(/(^\s*)|(\s*$)/g, "");
            if(festivelName.length > 3){
                tdObjArr[N].childNodes[1].setAttribute('title',festivelName);
                tdObjArr[N].childNodes[1].innerHTML = festivelName.slice(0,2) + '..'; //节日
            }else{
                tdObjArr[N].childNodes[1].innerHTML = festivelName; //节日
            }
            tdObjArr[N].childNodes[1].className += ' festival';
        }
        //假日安排
        if(isDayoffFuc(dateStr) == 1){
            tdObjArr[N].className += ' dayoff';
            var newNode = document.createElement("div");
            newNode.innerHTML = '休';
            newNode.className = 'dayoffLabel';
            tdObjArr[N].appendChild(newNode);
        }else if(isDayoffFuc(dateStr) == 2){
            tdObjArr[N].className += ' dayOn';
            var newNode = document.createElement("div");
            newNode.innerHTML = '班';
            newNode.className = 'dayOnLabel';
            tdObjArr[N].appendChild(newNode);
        }
        //今天
        if(dateStr == todayObj){
            tdObjArr[N].className += ' today';
        }
        N = N + 1;
    }
    //日期区小方格的click事件
    var tdObjClickArr = document.getElementsByTagName('td');
    for( var i=0; i<tdObjClickArr.length; i++){
        tdObjClickArr[i].onclick = function(){
            if(isMobileFuc() == 1){ //判断手机
                leftObj.style.display = 'none';
                rightObj.style.display = 'block';
            }
            var dateStr = this.getAttribute('data-date');
            showRightDate(dateStr);
            //本月外的部分
            if(this.className.indexOf('outMonth') > 0){
                thisYearObj.innerHTML = dateStr.split('/')[0] + '年';
                thisMonthObj.innerHTML = dateStr.split('/')[1] + '月';
                createCalendar();
            }
        }
    }
    //手机页面前一天
    document.getElementById('dayLeftObj').onclick = function(){
        var nowDateStr = rightDateObj.innerHTML.slice(0,-3);
        var preDate = new Date(nowDateStr.split('-')[0]+'/'+nowDateStr.split('-')[1]+'/'+nowDateStr.split('-')[2]);
        preDate.setDate(preDate.getDate()-1);
        showRightDate(preDate.getFullYear()+'/'+(preDate.getMonth()+1)+'/'+preDate.getDate());
    }
    //手机页面后一天
    document.getElementById('dayRightObj').onclick = function(){
        var nowDateStr = rightDateObj.innerHTML.slice(0,-3);
        var nextDate = new Date(nowDateStr.split('-')[0]+'/'+nowDateStr.split('-')[1]+'/'+nowDateStr.split('-')[2]);
        nextDate.setDate(nextDate.getDate()+1);
        showRightDate(nextDate.getFullYear()+'/'+(nextDate.getMonth()+1)+'/'+nextDate.getDate());
    }
}

/*
 * 规范时间格式，如把‘6’变成‘06’
 */
function checkTime(i){
    if(i<10){
        i='0'+i;
    }
    return i;
}


/*
 * 动态显示现在时间
 */
function showNowTime(){
    var nowDate=new Date();  //当前日期
    var h=nowDate.getHours();  //小时
    h=checkTime(h);  //规范化
    var m=nowDate.getMinutes();  //分钟
    m=checkTime(m);
    var s=nowDate.getSeconds();  //秒
    s=checkTime(s);
    nowTimeObj.innerHTML = h+':'+m+':'+s;  //显示格式
    document.getElementById('nowTimeObj2').innerHTML = h+':'+m+':'+s; //手机
    setTimeout(showNowTime,1000);  //1s后再次调用本函数
}


/*
 * 显示后下方的小贴士
 */
function showTipsFuc(month){
    //存储右下方的小贴士数组
    var tipsArr = [
        "",
        "<p class='month'>一月：预防室内过敏</p><p>★冬天门窗紧闭，室内空气不流通常诱发过敏，应增加居室通风，定期清洁床上用品。</p><p>★当季水果:猕猴桃</p>",
        "<p class='month'>二月：护心正当时</p><p>★冬末初春是心脑血管疾病高发期，这时不仅成人，2岁-10岁患心脏病风险高的儿童也须注意。</p><p>★当季水果:甘蔗</p>",
        "<p class='month'>三月：睡个好觉</p><p>★每天睡前，口服一汤匙蜂蜜，可促进睡眠；蜂蜜还可调节肠胃，饮酒后喝杯浓蜂蜜水能解酒护肝。</p><p>★当季水果:菠萝</p>",
        "<p class='month'>四月：让牙齿更健康</p><p>★春季人体新陈代谢旺盛，尤其会增加对骨骼、牙齿生长的良性刺激。这时是保护牙齿的最好时期。</p><p>★当季水果:山竹</p>",
        "<p class='month'>五月：提防蚊虫叮咬</p><p>★这个月份蚊虫大量繁殖，经过蚊虫多的地方，要仔细检查腋窝、头皮等部位，叮咬部位呈现环状丘疹时要及时就医。</p><p>★当季水果:草莓</p>",
        "<p class='month'>六月：做好防晒工作</p><p>★防晒是每个季节的必修课，夏天尤为关键。到这时你的防晒武器都应准备齐全。</p><p>★当季水果:樱桃</p>",
        "<p class='month'>七月：全家齐运动</p><p>★野外郊游、登山等运动好处多多，不仅对孩子的视力有好处，还对中老年人的心肺功能和四肢协调能力有一定的益处。</p><p>★当季水果:桃子</p>",
        "<p class='month'>八月：多吃新鲜蔬果</p><p>★这个季节，大量蔬果上市，每人每天摄取5种以上颜色的蔬果在此时最易实现。</p><p>★当季水果:西瓜</p>",
        "<p class='month'>九月：防燥润肺</p><p>★秋季干燥的气候极易伤肺，口干咽燥，干咳少痰，皮肤干燥，便秘等症状常发，饮食应以滋阴润肺为宜。</p><p>★当季水果:葡萄</p>",
        "<p class='month'>十月：预防流感</p><p>★秋冬季是流感高发期，从此时就做好准备，能减少感冒的发生几率。</p><p>★当季水果:白梨</p>",
        "<p class='month'>十一月：少吃甜食</p><p>★临近年末，节日增多，加之天气寒冷，糖的摄入会不知不觉地增加。以水、低脂牛奶代替含糖饮料是健康的选择。</p><p>★当季水果:苹果</p>",
        "<p class='month'>十二月：控制情绪</p><p>★冬季阳光照射少，易情绪低落。多帮助他人，有利于改善抑郁情绪，报名参加志愿服务吧。</p><p>★当季水果:桔子</p>"
    ];
    tipsObj.innerHTML = tipsArr[Number(month)];
}


/*
 * 显示右侧的内容
 */
function showRightDate(dateArg){
    var year = dateArg.split('/')[0];
    var month = dateArg.split('/')[1];
    var day = dateArg.split('/')[2];
    var lunar = getLunarStr(dateArg);
    var weekIndex = weekForDate1(dateArg) - 1;
    //存储星期字符串的数组
    var weekday = ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"];
    rightDateObj.innerHTML = year + '-' + month + '-' + day + ' ' + weekday[weekIndex];
    //rightDayObj.innerHTML = day;
    rightDayObj.innerHTML = document.documentElement.clientWidth;
    //rightLunarObj.innerHTML = lunar;
    rightLunarObj.innerHTML = window.innerWidth;
    rightFestivalObj.innerHTML = isFestivalFuc(dateArg, lunar);
    showTipsFuc(month);
}


/*
 * 函数：鼠标点击后显示隐藏div
 * 参数：disid 显隐的div的id，thisobj 点击的触发对象
 */
function clickShowDiv(disid,thisobj){
	if(!thisobj) return;

    //获取显隐的回调函数
    var showfun=arguments[2] || "";
    var hidefun=arguments[3] || "";

    //控制点击当前对象的显隐
    this.disobj=document.getElementById(disid);

    this.showdisobj=function(){
        var ishide=o.disobj.style.display;
        if(ishide!="none"){
            o.hidedisobj();
        }else{
            o.disobj.style.display="";
            if(showfun!=""){
                showfun.apply(thisobj,[this.disobj]);
            }
        }
    }
    
    //控制鼠标移出当前对象和显示对象的显隐
    this.checkmousedis=1;

    this.showdisid=function(){
        o.checkmousedis=1;
    }
    this.hidedisid=function(){
        o.checkmousedis=0;
    }

    this.hidedisobj=function(){
        this.disobj.style.display="none";
        if(hidefun!=""){
            hidefun.apply(thisobj,[this.disobj]);
        }
    }

    this.isdisobj=function(){
        if(o.checkmousedis!=1)
        o.hidedisobj();
    }

    //添加当前点击对象和document的时间
    if (window.addEventListener) { 
        thisobj.addEventListener("click",this.showdisobj,false);
        thisobj.addEventListener("mouseover",this.showdisid,false);
        thisobj.addEventListener("mouseout",this.hidedisid,false);
        this.disobj.addEventListener("mouseover",this.showdisid,false);
        this.disobj.addEventListener("mouseout",this.hidedisid,false);
        document.addEventListener("click",this.isdisobj,false);
    }else{
        thisobj.attachEvent("onclick",this.showdisobj);
        thisobj.attachEvent("onmouseover",this.showdisid);
        thisobj.attachEvent("onmouseout",this.hidedisid);
        this.disobj.attachEvent("onmouseover",this.showdisid);
        this.disobj.attachEvent("onmouseout",this.hidedisid);
        document.attachEvent("onclick",this.isdisobj);
    }

    var o=this;
}


/*
 * 显隐函数
 */
function showHide(){
	//年份下拉框的显示和隐藏
	var yearDropDown = new clickShowDiv( 'dropDownYearObj', yearObj, function(){
        //显示回调，设置滚动条高度
        if(isMobileFuc() == 1){
            var a = Number(thisYearObj.innerHTML.slice(0,-1));
            if( a>1908 && a<2093 ){
                var top = 30*(a-1902-6);
                dropDownYearObj.scrollTop = top;
            }else if( a>=2093 ){
                dropDownYearObj.scrollTop = 5550;
            }
        }else{
            var a = Number(thisYearObj.innerHTML.slice(0,-1));
            if( a>1908 && a<2093 ){
                var top = 25*(a-1902-6);
                dropDownYearObj.scrollTop = top;
            }else if( a>=2093 ){
                dropDownYearObj.scrollTop = 4625;5550
            }
        }
    }, function(){} );

	//月份下拉框的显示和隐藏
	var monthDropDown = new clickShowDiv( 'dropDownMonthObj', monthObj, function(){}, function(){} );
}


/*
 * 事件函数
 */
function documentEvent(){
	//年份下拉框中的li的click事件
    var yearLis = dropDownYearObj.getElementsByTagName('li');
    for(var i=0; i<yearLis.length; i++){
        yearLis[i].onclick = function(){
            thisYearObj.innerHTML = this.innerHTML;
            dropDownYearObj.style.display = 'none';
            createCalendar();
        }
    }

    //月份下拉框中的li的click事件
    var monthLis = dropDownMonthObj.getElementsByTagName('li');
    for(var i=0; i<monthLis.length; i++){
        monthLis[i].onclick = function(){
            thisMonthObj.innerHTML = this.innerHTML;
            dropDownMonthObj.style.display = 'none';
            createCalendar();
            showTipsFuc(this.innerHTML.slice(0,-1));
        }
    }

    //向前一年的click事件
    preYearObj.onclick = function(){
        var value = thisYearObj.innerHTML;
        //var newValue = (Number(value.slice(0,-1))-1) + '年';
        var number = Number(value.slice(0,-1));
        if(number == 1902){
            var newValue = '1902年';
        }else{
            var newValue = (number-1) + '年';
        }
        thisYearObj.innerHTML = newValue;
        createCalendar();
    }

    //向后一年的click事件
    nextYearObj.onclick = function(){
        var value = thisYearObj.innerHTML;
        //var newValue = (Number(value.slice(0,-1))+1) + '年';
        var number = Number(value.slice(0,-1));
        if(number == 2098){
            var newValue = '2098年';
        }else{
            var newValue = (number+1) + '年';
        }
        thisYearObj.innerHTML = newValue;
        createCalendar();
    }

    //向前一月的click事件
    preMonthObj.onclick = function(){
        var value = thisMonthObj.innerHTML;
        var number = Number(value.slice(0,-1));
        if(number == 1){
            if( Number(thisYearObj.innerHTML.slice(0,-1)) == 1902 ){
                var newValue = '1月';
            }else{
                var newValue = '12月';
                thisYearObj.innerHTML = (Number(thisYearObj.innerHTML.slice(0,-1))-1) + '年';
            }
        }else{
            var newValue = (number-1) + '月';
        }
        thisMonthObj.innerHTML = newValue;
        createCalendar();
        showTipsFuc(newValue.slice(0,-1));
    }

    //向后一月的click事件
    nextMonthObj.onclick = function(){
        var value = thisMonthObj.innerHTML;
        var number = Number(value.slice(0,-1));
        if(number == 12){
            if( Number(thisYearObj.innerHTML.slice(0,-1)) == 2098 ){
                var newValue = '12月';
            }else{
                var newValue = '1月';
                thisYearObj.innerHTML = (Number(thisYearObj.innerHTML.slice(0,-1))+1) + '年';
            }
        }else{
            var newValue = (number+1) + '月';
        }
        thisMonthObj.innerHTML = newValue;
        createCalendar();
        showTipsFuc(newValue.slice(0,-1));
    }

    //返回今天的click事件
    goTodayObj.onclick = function(){
        var thisDate = new Date();
        var year = thisDate.getFullYear();
        thisYearObj.innerHTML = year + '年';
        var month = thisDate.getMonth() + 1;
        thisMonthObj.innerHTML = month + '月';
        createCalendar();
        showRightDate(thisDate.getFullYear()+'/'+(thisDate.getMonth()+1)+'/'+thisDate.getDate());
    }


    //手机页面左上角的返回按钮
    returnObj.onclick = function(){
        rightObj.style.display = "none";
        leftObj.style.display = "block";
    }
}


/*
 * 花瓣的运动轨迹
 */
function move(obj){
    obj.style.left = Math.random() * (skyObj.clientWidth - 100) + 'px';
    obj.style.top = -1 * Math.random() * 500 + 'px';
    var self = this, startTime = Date.now(), distance = skyObj.clientHeight-obj.offsetTop, T = 5000 + Math.random()*3000;
    requestAnimationFrame(function step(){
        var p = Math.min( 1.0, (Date.now() - startTime) / T );
        if(p >= 1.0){
            startTime = Date.now();
            obj.style.left = 50 + Math.random() * (skyObj.clientWidth - 100) + 'px';
        }
        obj.style.transform = 'translate(' + 100*p + 'px,'  + (distance * p) +'px)';
        requestAnimationFrame(step);
    });
}


/*
 * 飘落花瓣函数
 */
function showPetals(){
    urlArr = ["images/petal1.png","images/petal2.png","images/petal3.png","images/petal4.png","images/petal5.png","images/petal6.png"];
    for(var i = 0; i < 6; i++){
        for(var j = 0; j < 3; j++){
            petalNode = document.createElement("div");
            petalNode.className = "petal";
            petalNode.style.backgroundImage = "url(" + urlArr[i] + ")";
            skyObj.appendChild(petalNode);
            move(petalNode);
        }
    }
}


/*
 * 页面加载函数
 */
window.onload=function(){
    //初始化数据
    initDatas();

    //创建DOM元素的对象
    createDomObj();

    //显示当前的年份和月份
    showNowDate();

    //创建年份下拉框的内容
    createYearDropCon();

    //创建当前日历
    createCalendar();

    //调用显示时间的函数
    showNowTime();

	//调用显隐函数
	showHide();

	//调用事件函数
	documentEvent();

    //飘落花瓣
    showPetals();
};