//stores curent amount of loaded articles
var loadedArticles = 0;

//hotfix for div width issue
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
	out = "<a href='" + obj.hyperLink + "'><div class='articleBox' style='background-image: url("+"\""+ obj.imageLink +"\""+"); background-size: cover;'><div class='articleBoxContent'><h4>" + obj.head + "</h4>" + obj.content + "<footer>" + obj.date + "</footer></div></a\n";
	
	document.getElementById("articleContainer").innerHTML += out;
}
//clears articles by clearing innerh html of container
function clearArticles() {
	document.getElementById("articleContainer").innerHTML = "";
	loadedArticles = 0;
}
//runs when sites laod.
function initiateSite() {
	initializeArticleArray();
	loadHome();
}

//loads articles that matches the category
function loadNews(category) {
	clearArticles();
	for(i = 0; i < articles.length; i++) {
		if(articles[i].category == category){
			addArticleToDom(articles[i]);
			loadedArticles++;
		}
	}
	if(loadedArticles == 0){
		document.getElementById("articleContainer").innerHTML += "\n<h3>No articles found...</h3>"
	} else {
		resizeArticleContent();
	}
}

function loadSearch() {
	alert(document.getElementById("searchInput").value);
	/*var input = document.getElementById("searchInput").value;
	clearArticles();
	document.getElementById("articleContainer").innerHTML = "<h2>Search results for: " + input + "</h2>"
	input = input.toLowerCase();
	for (i = 0; i < articles.length; i++) {
		if(articles[i].category.toLowerCase().includes(input) || articles[i].head.toLowerCase().includes(input)  || articles[i].content.toLowerCase().includes(input)) {
			addArticleToDom(articles[i]);
			loadedArticles++;
		}
	}
	if(loadedArticles == 0;) {
		document.getElementById("articleContainer").innerHTML += "\n<h3>No articles found...</h3>";
	}*/
}

function loadHome() {
	clearArticles();
	addArticleToDom(articles[1]);
	addArticleToDom(articles[3]);
	addArticleToDom(articles[6]);
	addArticleToDom(articles[9]);
	addArticleToDom(articles[11]);
	addArticleToDom(articles[12]);
	addArticleToDom(articles[15]);
	addArticleToDom(articles[18]);
	addArticleToDom(articles[20]);
	addArticleToDom(articles[24]);
	addArticleToDom(articles[27]);
	addArticleToDom(articles[30]);
	resizeArticleContent();
}