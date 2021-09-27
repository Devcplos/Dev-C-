$(document).ready(function(){
	var url = $("#curso1").attr('src');
	
	$("#exampleModales").on('hide.bs.modal', function(){
		$("#curso1").attr('src', '');
	});
	
	$("#exampleModales").on('show.bs.modal', function(){
		$("#curso1").attr('src', url);
	});
	});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function(){
	var url = $("#curso2").attr('src');
	
	$("#exampleModale").on('hide.bs.modal', function(){
		$("#curso2").attr('src', '');
	});
	
	$("#exampleModale").on('show.bs.modal', function(){
		$("#curso2").attr('src', url);
	});
	});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function(){
	var url = $("#curso3").attr('src');
	
	$("#exampleModal").on('hide.bs.modal', function(){
		$("#curso3").attr('src', '');
	});
	
	$("#exampleModal").on('show.bs.modal', function(){
		$("#curso3").attr('src', url);
	});
	});