let poundInput = document.querySelector('.pound> input');
let euroInput = document.querySelector('.euro> input');
let randInput = document.querySelector('.rand> input');
let dollarInput = document.querySelector('.dollar> input');
let btn = document.querySelector('#btn> button')



poundInput.addEventListener('input', function(){
let pound = parseFloat(poundInput.value);
let euro = ((pound)*1.16);
let rand = ((pound)*24.09);
let dollar =((pound)/1.25);


euroInput.value = euro.toFixed(2);
randInput.value = rand.toFixed(2);
dollarInput.value = dollar.toFixed(2);


});



euroInput.addEventListener('input', function(){
 let euro = parseFloat(euroInput.value);
 let pound = ((euro)*0.86);
let rand = ((euro)*20.78);
let dollar =((euro)*1.07);


poundInput.value = pound.toFixed(2);
randInput.value = rand.toFixed(2);
dollarInput.value = dollar.toFixed(2);
});



randInput.addEventListener('input', function(){
let rand = parseFloat(randInput.value);
let pound = ((rand)*0.041);
let euro = ((rand)*0.048);
let dollar =((rand)*0.051);

poundInput.value = pound.toFixed(2);
euroInput.value = euro.toFixed(2);
dollarInput.value = dollar.toFixed(2);


});


dollarInput.addEventListener('input', function(){
let dollar = parseFloat(dollarInput.value);
let euro =( (dollar)*0.94);
let pound = ((dollar)*0.81);
let rand  = ((dollar)*19.44);


poundInput.value = pound.toFixed(2);
euroInput.value = euro.toFixed(2);
randInput.value = rand.toFixed(2);


});



btn.addEventListener('click', function(){
poundInput.value = "";
 euroInput.value = "" ;
randInput.value = "";
dollarInput.value = "" ;

});