//$('h1').animate({width: 1000},4000);

var h = $('h1');
h.css({
    position: 'relative',
})
h.animate({marginLeft:10}, 2000, function(){
    $(this).html('Zbohom');
  
});
h.animate({marginLeft: 2000},4000);
h.on('mouseenter',function(){
    alert('ahoj')
});
h.hide(10);
const number = [5,5,4,5,6];
let sum = number.reduce()
function myFunkcion(value,total) {
}








