$(document).ready(function() {
/** начнёт работу тогда, когда будет готов DOM, за исключением картинок **/
// ваш код
$(".catalog__filter-button").click(function(){
let min = $(".min-price").val();
let max = $(".max-price").val();
	
let select_01 = $("#myselect_1 option:selected").text();
let select_02 = $("#myselect_2 option:selected").text();
let select_03 = $("#myselect_3 option:selected").text();

min = min.replace("₽", "");
min = min.replace(/\s+/g, '');
$(".min-hidden").val(min);
//alert(min);

max = max.replace("₽", "");
max = max.replace(/\s+/g, '');
$(".max-hidden").val(max);
//alert(max);
//alert (trim_virgule(select_01));

$(".select-hidden-1").val(trim_virgule(select_01));
$(".select-hidden-2").val(trim_virgule(select_02));
$(".select-hidden-3").val(trim_virgule(select_03));


    });
});


function trim_virgule(trim_str) {
trim_str = trim_str.replace(/[^a-zа-яё]/gi, '');

switch (trim_str) {
  case 'Красный':
    trim_str='4088798008';
    break;
  case 'Желтый':
    trim_str='1842515611';
    break;
  case 'Черный':
trim_str='2226203566';
    break;
  default:
    break;
}


return trim_str;
}