var element = document.getElementById('content');

function dropdownStyles(select) {

	var style = select.id;
	var value = select.value;

	element.style[style] = value;

}

function name(event) {

	var target = event.target;
	if (target.tagName = "select") {
		dropdownStyles(target);
	}
}

document.getElementById("wrapper").addEventListener('change', name);
