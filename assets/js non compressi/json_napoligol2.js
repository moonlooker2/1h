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
		  $("#mrss1primopiano").append('<div class="flashapp1"><img src=' + $image + '></>' + '<div class="titoloapp1"><a href=' + $guid + '><h2>' + $title + '</h2></a></div></div>')
						});
				},
      	});
});

$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/news/Json_mrss2primopiano.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $title = item.locale;
						var $image = item.image;
						var $category = item.categoria;
						var $pubDate = item.pubDate;
						var $guid = item.guid;
						var $description = item.description;
		  $("#mrss2primopiano").append('<div class="flashapp"><img src=' + $image + '></>' + '<div class="titoloapp"><span class="data">' + $pubDate + '</span><a href=' + $guid + '><h2>' + $title + '</h2></a></div><div class="category">' + $category + '</div></div>')
						});
				},
      	});
});




$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/news/Json_mrss3primopiano.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $title = item.locale;
						var $guid = item.guid;
						var $description = item.description;
		  $("#mrss3primopiano").append('<div class="flashapp3"><div class="titoloapp3"><a href=' + $guid + '><h2>' + $title + '</h2></a></div></div>')
						});
				},
      	});
});










$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/news/Json_mrss1interviste.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $title = item.locale;
						var $image = item.image;
						var $guid = item.guid;
						var $description = item.description;
		  $("#mrss1interviste").append('<div class="flashapp1"><img src=' + $image + '></>' + '<div class="titoloapp1"><a href=' + $guid + '><h2>' + $title + '</h2></a></div></div>')
						});
				},
      	});
});


$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/news/Json_mrss2interviste.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $title = item.locale;
						var $image = item.image;
						var $category = item.categoria;
						var $pubDate = item.pubDate;
						var $guid = item.guid;
						var $description = item.description;
		  $("#mrss2interviste").append('<div class="flashapp"><img src=' + $image + '></>' + '<div class="titoloapp"><span class="data">' + $pubDate + '</span><a href=' + $guid + '><h2>' + $title + '</h2></a></div><div class="category">' + $category + '</div></div>')
						});
				},
      	});
});



$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/news/Json_mrss3interviste.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $title = item.locale;
						var $image = item.image;
						var $guid = item.guid;
						var $description = item.offerta;
		  $("#mrss3interviste").append('<div class="flashapp3"><div class="titoloapp3"><a href=' + $guid + '><h2>' + $title + '</h2></a></div></div>')
						});
				},
      	});
});










$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/news/Json_mrss1mercato.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $title = item.locale;
						var $image = item.image;
						var $guid = item.guid;
						var $description = item.offerta;
		  $("#mrss1mercato").append('<div class="flashapp1"><img src=' + $image + '></>' + '<div class="titoloapp1"><a href=' + $guid + '><h2>' + $title + '</h2></a></div></div>')
						});
				},
      	});
});


$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/news/Json_mrss2mercato.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $title = item.locale;
						var $image = item.image;
						var $category = item.categoria;
						var $pubDate = item.pubDate;
						var $guid = item.guid;
						var $description = item.description;
		  $("#mrss2mercato").append('<div class="flashapp"><img src=' + $image + '></>' + '<div class="titoloapp"><span class="data">' + $pubDate + '</span><a href=' + $guid + '><h2>' + $title + '</h2></a></div><div class="category">' + $category + '</div></div>')
						});
				},
      	});
});




$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/news/Json_mrss3mercato.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $title = item.locale;
						var $image = item.image;
						var $guid = item.guid;
						var $description = item.offerta;
		  $("#mrss3mercato").append('<div class="flashapp3"><div class="titoloapp3"><a href=' + $guid + '><h2>' + $title + '</h2></a></div></div>')
						});
				},
      	});
});






















$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/news/Json_mrss1editoriale.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $title = item.locale;
						var $image = item.image;
						var $guid = item.guid;
						var $description = item.offerta;
		  $("#mrss1editoriale").append('<div class="flashapp1"><img src=' + $image + '></>' + '<div class="titoloapp1"><a href=' + $guid + '><h2>' + $title + '</h2></a></div></div>')
						});
				},
      	});
});


$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/news/Json_mrss2editoriale.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $title = item.locale;
						var $image = item.image;
						var $category = item.categoria;
						var $pubDate = item.pubDate;
						var $guid = item.guid;
						var $description = item.description;
		  $("#mrss2editoriale").append('<div class="flashapp"><img src=' + $image + '></>' + '<div class="titoloapp"><span class="data">' + $pubDate + '</span><a href=' + $guid + '><h2>' + $title + '</h2></a></div><div class="category">' + $category + '</div></div>')
						});
				},
      	});
});




$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/news/Json_mrss3editoriale.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $title = item.locale;
						var $image = item.image;
						var $guid = item.guid;
						var $description = item.offerta;
		  $("#mrss3editoriale").append('<div class="flashapp3"><div class="titoloapp3"><a href=' + $guid + '><h2>' + $title + '</h2></a></div></div>')
						});
				},
      	});
});

