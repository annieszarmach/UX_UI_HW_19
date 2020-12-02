console.log("index file loaded");


$(".button").hover(function(){
    $(this).css("background-color","#B56B22");
    }, function(){
    $(this).css("background-color","#9F4D20");

});

$(".mywork")
.on( "mouseenter", function() {
$( this ).css({
"border-bottom": "#ADB7B9",
"font-weight": "bold",
});
})
.on( "mouseleave", function() {
var styles = {
borderBottom : "none",
fontWeight: ""
};
$( this ).css( styles );
});

$(".about")
.on( "mouseenter", function() {
$( this ).css({
"font-weight": "bold",
});
})
.on( "mouseleave", function() {
var styles = {
fontWeight: ""
};
$( this ).css( styles );
});