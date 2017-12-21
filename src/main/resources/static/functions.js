$(document).ready(function() {
	registerSearch();
	registerTemplate();
});

function registerSearch() {
	$("#search").submit(function(event){
		event.preventDefault();
		var params=($("#max").val() != 0 ? {q: $("#q").val(),max: $("#max").val()} : {q: $("#q").val()});
		$.get($(this).attr('action'), params, function(data) {
			$("#resultsBlock").html(Mustache.render(template, data));
		});	
	});
}

function registerTemplate() {
	template = $("#template").html();
	Mustache.parse(template);
}
