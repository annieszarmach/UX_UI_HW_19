console.log("index file loaded");


$(".button").hover(function(){
    $(this).css("background-color","#B56B22");
    }, function(){
    $(this).css("background-color","#9F4D20");

});

$(".button").hover(function(){
    $(this).css("border","#B56B22");
    }, function(){
    $(this).css("border","#9F4D20");

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

$(".about")
.on( "mouseenter", function() {
$( this ).css({
"text-decoration": "underline",
});
})
.on( "mouseleave", function() {
var styles = {
textDecoration: ""
};
$( this ).css( styles );
});

$(".mywork")
.on( "mouseenter", function() {
$( this ).css({
"text-decoration": "underline",
});
})
.on( "mouseleave", function() {
var styles = {
textDecoration: ""
};
$( this ).css( styles );
});
