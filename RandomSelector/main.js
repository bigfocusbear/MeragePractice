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
    "http://www.motogp.com/en/api/rider/photo/grid/old/7444",
    "http://www.motogp.com/en/api/rider/photo/grid/old/5885",
    "http://www.motogp.com/en/api/rider/photo/grid/old/8150",
    "http://www.motogp.com/en/api/rider/photo/grid/old/8148",
    "http://www.motogp.com/en/api/rider/photo/grid/old/158"
    
]
