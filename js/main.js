function update() {
	//Get memorable information
	var memorableinfo = $("#memorableinfo").val();

	//Split into character array
	var chars = memorableinfo.split('');

	var html = "";

	$.each(chars, function(index, value) {
		html = html + "<br/>";
		html = html + "<strong> " + (index + 1) + "</strong>: " + value;
	});

	$("#outcome").html(html);
	$("#selection").fadeIn(500);
}