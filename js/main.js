$(window).resize(function() {
	resizeArticleContent();
});

function resizeArticleContent() {
	//change with of articleBoxContent to fitt within articleBox, not possible in css due to use of "position: absolute;" to eliminate bugg.
	$(".articleBoxContent").width($(".articleBox").width()-10);
}

function addArticleToDom(h, c, h, d, i) {
	
}

function loadNews(category) {
	alert(category);
}