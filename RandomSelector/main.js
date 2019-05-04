$(document).ready(function(){
    $("input").click(function()
    {
        var numberOFListItem = $("#choices li").length; //計算有多少個選項
        var randomChildNumber = Math.floor(Math.random()*numberOFListItem); //在此亂數範圍中產生亂數
        
        $("H1").text($("#choices li").eq(randomChildNumber).text());
        $("img").attr("src",pictures[randomChildNumber]);
    });
});

var pictures = [
    "https://img.tenjo.tw/uploads/20180106214626_49.jpg",
    "https://d3l76hx23vw40a.cloudfront.net/recipe/yqn41-006.jpg",
    "https://tshop.r10s.com/ff1/509/d51e/03a9/70e2/a6f3/687b/11a8e682fd2c600ce3781e.jpg",
    "https://tokyo-kitchen.icook.network/uploads/step/cover/827701/large_9e07de96fb5defb6.jpg",
    "https://i.ytimg.com/vi/CJaAnZz2owo/maxresdefault.jpg"
    
]