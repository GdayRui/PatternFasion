// JavaScript Document

$(document).ready(function(){

	for(var i=1; i<=3; i++){
		$('#series a.series'+i).hover(function(){
			$('#series a.series'+i+' img').prop('src', 'img/series'+i+'_color.jpg')
		}, function(){
			$('#series a.series'+i+' img').prop('src', 'img/series'+i+'.jpg')
		});		
	}
});