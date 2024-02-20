fetch("noindex/games.html")
	.then(response => {
		return response.text()
	})
	.then(data => {
		document.querySelector(".games-list-wrapper").innerHTML = data;
	});