var topic = [
    "加泰隆尼亞",
    "荷蘭",
    "德國",
    "捷克",
    "奧地利",
    "英國",
    "聖馬利諾",
    "亞拉岡",
    "泰國",
    "日本",
    "澳洲",
    "馬來西亞",
    "瓦倫西亞"
];

var startDate = new Date();
function setMonthAndDay(startMonth,startDay)
{
    startDate.setMonth(startMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(6,16);
