function update() {
	//Get memorable information
	var memorableinfo = $("#memorableinfo").val();

	//Split into character array
	var chars = memorableinfo.split('');

	//Loop trough character array and generate HTML
	var html = "";

	$.each(chars, function(index, value) {
		html = html + "<br/>";
		html = html + "<strong> " + (index + 1) + "</strong>: " + value;
	});

	//Show outcome
	$("#outcome").html(html);
	$("#selection").fadeIn(500);

}