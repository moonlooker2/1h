$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/news/Json_mrss1primopiano.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $title = item.locale;
						var $image = item.image;
						var $guid = item.guid;
						var $description = item.offerta;
		  $("#mrss1tutto").append('<div class="flashapp1"><img class="lazy" src=' + $image + '></>' + '<div class="titoloapp1"><a href=' + $guid + '>' + $title + '</a></div></div>')
						});
				},
      	});
});

$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/news/Json_mrss2tutto.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $title = item.locale;
						var $image = item.image;
						var $category = item.categoria;
						var $pubDate = item.pubDate;
						var $guid = item.guid;
						var $description = item.description;
        $("#mrss2tutto").append('<div class="flashapp"><img class="lazy" src=' + $image + '></>' + '<div class="titoloapp"><span class="data">' + $pubDate + '</span><br /><a href=' + $guid + '>' + $title + '</a></div><div class="category">' + $category + '</div></div>')
						});
				},
      	});
});


$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/news/Json_mrss3tutto.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $title = item.locale;
						var $image = item.image;
						var $category = item.categoria;
						var $pubDate = item.pubDate;
						var $guid = item.guid;
						var $description = item.description;
		  $("#mrss3tutto").append('<div class="flashapp"><img class="lazy" src=' + $image + '></>' + '<div class="titoloapp"><span class="data">' + $pubDate + '</span><br /><a href=' + $guid + '>' + $title + '</a></div><div class="category">' + $category + '</div></div>')
						});
				},
      	});
});

$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/news/Json_mrss1sondaggio.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $title = item.locale;
						var $image = item.image;
						var $guid = item.guid;
						var $description = item.offerta;
		  $("#mrss1sondaggio").append('<div class="flashappspecial"><img style="width:25%; margin-left:-3%; margin-top:2%" src="immagini/sondaggio.png"></><img class="lazy" src=' + $image + '></>' + '<div class="titoloappspecial"><a href=' + $guid + '>' + $title + '</a></div></div>')
						});
				},
      	});
});

