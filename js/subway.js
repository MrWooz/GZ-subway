/**
 * Created by Mr.Woo on 2017/4/7.
 */

var subwayData = {
    "1号线": ["西朗", "坑口", "花地湾", "芳村", "黄沙", "长寿路", "陈家祠", "西门口", "公园前", "农讲所", "烈士陵园", "东山口", "杨箕", "体育西路", "体育中心", "广州东站"],
    "2号线": ["广州南站", "石壁", "会江", "南浦", "洛溪", "南洲", "东晓南", "江泰路", "昌岗", "江南西", "市二宫", "海珠广场", "公园前", "纪念堂", "越秀公园", "广州火车站", "三元里", "飞翔公园", "白云公园", "白云文化广场", "萧岗", "江夏", "黄边", "嘉禾望岗"],
    "3号线": ["番禺广场", "市桥", "汉溪长隆", "大石", "厦滘", "沥滘", "大塘", "客村", "广州塔", "珠江新城", "体育西路", "石牌桥", "岗顶", "华师", "五山", "天河客运站"],
    "3号线(北)": ["体育西路", "林和西", "广州东站", "燕塘", "梅花园", "京溪南方医院", "同和", "永泰", "白云大道北", "嘉禾望岗", "龙归", "人和", "机场南"],
    "4号线": ["金州", "蕉门", "黄阁", "黄阁汽车城", "东涌", "低涌", "庆盛", "海傍", "石碁", "新造", "大学城南", "大学城北", "官洲", "万胜围", "车陂南", "车陂", "黄村"],
    "5号线": ["滘口", "坦尾", "中山八", "西场", "西村", "广州火车站", "小北", "淘金", "区庄", "动物园", "杨箕", "五羊邨", "珠江新城", "猎德", "潭村", "员村", "科韵路", "车陂南", "东圃", "三溪", "鱼珠", "大沙地", "大沙东", "文冲"],
    "6号线": ["浔峰岗", "横沙", "沙贝", "河沙", "坦尾", "如意坊", "黄沙", "文化公园", "一德路", "海珠广场", "北京路", "团一大广场", "东湖", "东山口", "区庄", "黄花岗", "沙河顶", "沙河", "天平架", "燕塘", "天河客运站", "长湴", "龙洞", "高塘石", "黄陂", "金峰", "暹岗", "苏元", "萝岗", "香雪"],
    "7号线": ["广州南站", "石壁", "谢村", "钟村", "汉溪长隆", "南村万博", "员岗", "板桥", "大学城南"],
    "8号线": ["凤凰新村", "沙园", "宝岗大道", "昌岗", "晓岗", "中大", "鹭江", "客村", "赤岗", "磨碟沙", "新港东", "琶洲", "万胜围"],
    "广佛线": ["新城东", "东平", "世纪莲", "澜石", "魁奇路", "季华园", "同济路", "祖庙", "普君北路", "朝安", "桂城", "南桂路", "虫雷岗", "千灯湖", "金融高新区", "龙溪", "菊树", "西朗", "鹤洞", "沙涌", "沙园", "燕岗"],
    "APM线": ["广州塔", "海心沙", "大剧院", "花城大道", "妇儿中心", "黄埔大道", "天河南", "体育中心南", "林和西"],
};
var edgesData = [
    ["西朗", "坑口", 1.55], ["坑口", "花地湾", 0.92], ["花地湾", "芳村", 1.33], ["芳村", "黄沙", 1.35], ["黄沙", "长寿路", 0.94], ["长寿路", "陈家祠", 1.13], ["陈家祠", "西门口", 0.93], ["西门口", "公园前", 0.86], ["公园前", "农讲所", 1.21], ["农讲所", "烈士陵园", 0.94], ["烈士陵园", "东山口", 1.09], ["东山口", "杨箕", 1.44], ["杨箕", "体育西路", 1.29], ["体育西路", "体育中心", 1.05], ["体育中心", "广州东站", 1.92],
    ["广州南站", "石壁", 1.26], ["石壁", "会江", 2.4], ["会江", "南浦", 2.5], ["南浦", "洛溪", 1.1], ["洛溪", "南洲", 2.4], ["南洲", "东晓南", 0.91], ["东晓南", "江泰路", 1.92], ["江泰路", "昌岗", 1.01], ["昌岗", "江南西", 0.76], ["江南西", "市二宫", 1.08], ["市二宫", "海珠广场", 1.04], ["海珠广场", "公园前", 1.3], ["公园前", "纪念堂", 0.79], ["纪念堂", "越秀公园", 0.91], ["越秀公园", "广州火车站", 0.95], ["广州火车站", "三元里", 1.41], ["三元里", "飞翔公园", 1.25], ["飞翔公园", "白云公园", 1.61], ["白云公园", "白云文化广场", 1.02], ["白云文化广场", "萧岗", 1.12], ["萧岗", "江夏", 1.51], ["江夏", "黄边", 1.23], ["黄边", "嘉禾望岗", 1.91],
    ["番禺广场", "市桥", 3.9], ["市桥", "汉溪长隆", 6.08], ["汉溪长隆", "大石", 3.13], ["大石", "厦滘", 2.22], ["厦滘", "沥滘", 1.9], ["沥滘", "大塘", 2.54], ["大塘", "客村", 2.04], ["客村", "广州塔", 1.15], ["广州塔", "珠江新城", 1.54], ["珠江新城", "体育西路", 1.29], ["体育西路", "石牌桥", 1.31], ["石牌桥", "岗顶", 0.9], ["岗顶", "华师", 0.85], ["华师", "五山", 1.61], ["五山", "天河客运站", 2.19],
    ["体育西路", "林和西", 1.2], ["林和西", "广州东站", 1.2], ["广州东站", "燕塘", 1.2], ["燕塘", "梅花园", 1.8], ["梅花园", "京溪南方医院", 1.4], ["京溪南方医院", "同和", 1.3], ["同和", "永泰", 2], ["永泰", "白云大道北", 0.8], ["白云大道北", "嘉禾望岗", 1.7], ["嘉禾望岗", "龙归", 6.5], ["龙归", "人和", 5.2], ["人和", "机场南", 5.6],
    ["金州", "蕉门", 1.94], ["蕉门", "黄阁", 3.01], ["黄阁", "黄阁汽车城", 1.53], ["黄阁汽车城", "庆盛", 2.69], ["庆盛", "东涌", 2.69], ["东涌", "低涌", 3.93], ["低涌", "海傍", 2.47], ["海傍", "石碁", 2.23], ["石碁", "新造", 2.3], ["新造", "大学城南", 2.29], ["大学城南", "大学城北", 2.23], ["大学城北", "官洲", 1.32], ["官洲", "万胜围", 3.76], ["万胜围", "车陂南", 2.1], ["车陂南", "车陂", 1.29], ["车陂", "黄村", 1.92],
    ["滘口", "坦尾", 1.2], ["坦尾", "中山八", 1.2], ["中山八", "西场", 1.2], ["西场", "西村", 1.2], ["西村", "广州火车站", 1.2], ["广州火车站", "小北", 1.2], ["小北", "淘金", 1.2], ["淘金", "区庄", 1.2], ["区庄", "动物园", 1.2], ["动物园", "杨箕", 1.2], ["杨箕", "五羊邨", 1.2], ["五羊邨", "珠江新城", 1.2], ["珠江新城", "猎德", 1.2], ["猎德", "潭村", 1.2], ["潭村", "员村", 1.2], ["员村", "科韵路", 1.2], ["科韵路", "车陂南", 1.2], ["车陂南", "东圃", 1.2], ["东圃", "三溪", 1.2], ["三溪", "鱼珠", 1.2], ["鱼珠", "大沙地", 1.2], ["大沙地", "大沙东", 1.2], ["大沙东", "文冲", 1.2],
    ["浔峰岗", "横沙", 1.2], ["横沙", "沙贝", 1.2], ["沙贝", "河沙", 1.2], ["河沙", "坦尾", 1.2], ["坦尾", "如意坊", 1.2], ["如意坊", "黄沙", 1.2], ["黄沙", "文化公园", 1.2], ["文化公园", "一德路", 1.2], ["一德路", "海珠广场", 1.2], ["海珠广场", "北京路", 1.2], ["北京路", "团一大广场", 1.2], ["团一大广场", "东湖", 1.2], ["东湖", "东山口", 1.2], ["东山口", "区庄", 1.2], ["区庄", "黄花岗", 1.2], ["黄花岗", "沙河顶", 1.2], ["沙河顶", "沙河", 1.2], ["沙河", "天平架", 1.2], ["天平架", "燕塘", 1.2], ["燕塘", "天河客运站", 1.2], ["天河客运站", "长湴", 1.2], ["长湴", "龙洞", 1.2], ["龙洞", "高塘石", 1.2], ["高塘石", "黄陂", 1.2], ["黄陂", "金峰", 1.2], ["金峰", "暹岗", 1.2], ["暹岗", "苏元", 1.2], ["苏元", "萝岗", 1.2], ["萝岗", "香雪", 1.2],
    ["广州南站", "石壁", 1.2], ["石壁", "谢村", 1.2], ["谢村", "钟村", 1.2], ["钟村", "汉溪长隆", 1.2], ["汉溪长隆", "南村万博", 1.2], ["南村万博", "员岗", 1.2], ["员岗", "板桥", 1.2], ["板桥", "大学城南", 1.2],
    ["凤凰新村", "沙园", 0.81], ["沙园", "宝岗大道", 1.08], ["宝岗大道", "昌岗", 0.95], ["昌岗", "晓岗", 0.57], ["晓岗", "中大", 1.2], ["中大", "鹭江", 1.76], ["鹭江", "客村", 1.22], ["客村", "赤岗", 1.51], ["赤岗", "磨碟沙", 0.8], ["磨碟沙", "新港东", 1.58], ["新港东", "琶洲", 1], ["琶洲", "万胜围", 1.85],
    ["新城东", "东平", 1.2], ["东平", "世纪莲", 1.2], ["世纪莲", "澜石", 1.2], ["澜石", "魁奇路", 1.2], ["魁奇路", "季华园", 1.44], ["季华园", "同济路", 1.35], ["同济路", "祖庙", 1.12], ["祖庙", "普君北路", 1.09], ["普君北路", "朝安", 1.13], ["朝安", "桂城", 1.02], ["桂城", "南桂路", 1.33], ["南桂路", "虫雷岗", 1.04], ["虫雷岗", "千灯湖", 1.34], ["千灯湖", "金融高新区", 1.37], ["金融高新区", "龙溪", 3.72], ["龙溪", "菊树", 2.07], ["菊树", "西朗", 1.98], ["西朗", "鹤洞", 1.2], ["鹤洞", "沙涌", 1.2], ["沙涌", "沙园", 1.2], ["沙园", "燕岗", 1.2],
    ["广州塔", "海心沙", 0.63], ["海心沙", "大剧院", 0.43], ["大剧院", "花城大道", 0.41], ["花城大道", "妇儿中心", 0.39], ["妇儿中心", "黄埔大道", 0.47], ["黄埔大道", "天河南", 0.47], ["天河南", "体育中心南", 0.35], ["体育中心南", "林和西", 0.82]
];


var $j = jQuery.noConflict();

function init() {
    initSubwayBox();
    initSubwayClick()
    initCalcFare();
    initDijkstra();
}

function genSubwayLineHtml() {
    var htmls = [],
        i = -1,
        classname = ["op-subway-one", "op-subway-two", "op-subway-three", "op-subway-threenorth", "op-subway-four", "op-subway-five", "op-subway-six", "op-subway-seven", "op-subway-eight", "op-subway-gf", "op-subway-apm"];
    for (var lineName in subwayData)
        i++,
            htmls.push("<li><span class=" + classname[i] + "></span>" + lineName + "</li>");
    return htmls.join("")
}

function genSubwayStationHtml(lineName) {
    for (var stations = subwayData[lineName], htmls = [], i = 0; i < stations.length; ++i) htmls.push("<li>" + stations[i] + "</li>");
    return htmls.join("")
}

function tryActiveButton() {
    var start = $j(".op-subway-box-start .op-subway-station em").text();
    end = $j(".op-subway-box-end .op-subway-station em").text();
    if ("选择这站" != start && "选择车站" != end) $j(".op-subway-calc-false").addClass("op-subway-calc-fare").removeClass("op-subway-calc-false")
}

function initSubwayBox() {
    var lineHtml = genSubwayLineHtml();
    $j(".op-subway-line .op-subway-ul").html(lineHtml),
        $j(".op-subway-line .op-subway-ul").on("click", "li",
            function () {
                var lineName = $j(this).text();
                $j(this).parent().parent().parent().find(".op-subway-line em").css({
                    padding: "0px 5px 0px 20px"
                }),
                    $j(this).parent().parent().parent().find(".op-subway-station").css({
                        background: "#fff"
                    }),
                    $j(this).parent().parent().parent().find(".op-subway-station em").css({
                        color: "#333"
                    });
                var stationHtml = genSubwayStationHtml(lineName),
                    $box = $j(this).parent().parent().parent();
                $box.find(".op-subway-ulk").html(stationHtml);
                var firstStation = subwayData[lineName][0];
                $box.find(".op-subway-station em").text(firstStation),
                    tryActiveButton()
            })
}

function initSubwayClick() {
    $j(".op-subway-line,.op-subway-station").on("click",
        function (event) {
            if (event.stopPropagation(), $j(".op-subway-ts").hide, $j(".op-subway-box ul").hide(), $j(this).find("ul").children().length) $j(this).find("ul").show();

            $j(document).on("click",
                function () {
                    $j(".op-subway-box ul").hide()
                })
        })
    $j(".op-subway-ul, .op-subway-ulk").on("click", "li",
        function (event) {
            event.stopPropagation(),
                $j(this).parent().parent().find("em").html($j(this).html()),
                $j(this).parent().parent().find("ul").hide();

        })
}

function initCalcFare() {
    $j(".op-subway-main").on("click", ".op-subway-calc-fare",
        function () {
            var start = $j(".op-subway-box-start .op-subway-station em").html();
            end = $j(".op-subway-box-end .op-subway-station em").html();
            if (start == end)
                return $j(".op-subway-ts").html("亲，您真的需要坐地铁么？").show();
            false;
            $j(".op-subway-tab,.op-subway-footer").show(),
                $j($j(".op-subway-tab li")).show();
            var distance = Dijkstra.shortestPath(start, end),
                fare = caleFare(distance);
            $j(".op-subway-content2 .op-subway-text .op-subway-fareinfo").html(getText(distance, fare));

        })
}

//收费标准
function caleFare(distance) {
    if (distance <= 4)  return 2;
    if (distance <= 12) return 2 + Math.ceil((distance - 4) / 4);
    if (distance <= 24) return 4 + Math.ceil((distance - 12) / 6);
    else return 6 + Math.ceil((distance - 24) / 8)
}

function format(distance) {
    console.log();
    var s = distance + "",
        index = s.indexOf(".");
    if (index >= 0) if (s.length > index + 2) s = s.substr(0, index + 2);
    return s;
}

function getText(distance, fare) {
    // var increase =caleMonthFare(fare);
    if (distance = format(distance))
        return '<p class="op-subway-span">单程<em class="op-subway-increase">' + distance + '</em>公里，票价<em class="op-subway-increase ">' + fare + '</em>元！';
}

// function caleMonthFare(fare){
//     var addtext = 2*(fare-2) *22 *12;
//     return addtext;
// }

function initDijkstra() {
    Dijkstra.addEdges(edgesData);
}


init();
