var loadedArticles = 0;

$(window).resize(function() {
	resizeArticleContent();
});

function resizeArticleContent() {
	//change with of articleBoxContent to fitt within articleBox, not possible in css due to use of "position: absolute;" to eliminate bugg.
	$(".articleBoxContent").width($(".articleBox").width()-10);
}

function addArticleToDom(obj) {
	//generate html code and svae in a varible
	//<a href="#"><div class="articleBox" style="background-image: url('imageLink'); background-size: cover;"><div class="articleBoxContent"><h4>header here</h4>content here<footer>date here</footer></div></div></a>
	out = "<a href='" + obj.hyperLink + "'><div class='articleBox' style='background-image: url(" + obj.imageLink
	+ "); background-size: cover;'><div class='articleBoxContent'><h4>" + obj.head + 
	"</h4>" + obj.content + "<footer>" + obj.date + "</footer></div></a>";
	
	document.getElementById("articleContainer").innerHTML += out;
}

function clearArticles() {
	document.getElementById("articleContainer").innerHTML = "";
	loadedArticles = 0;
}

function initiateSite() {
	initializeArticleArray();
	loadHome();
}

function loadNews(category) {
	clearArticles();
	for(i = 0; i < articles.length; i++) {
		if(articles[i].category == category){
			addArticleToDom(articles[i]);
			loadedArticles++;
		}
	}
	
	resizeArticleContent();
}

function loadHome() {
	clearArticles();
	for(i = 0; i < articles.length; i++) {
		addArticleToDom(articles[i]);
		loadedArticles++;
	}
	resizeArticleContent();
}