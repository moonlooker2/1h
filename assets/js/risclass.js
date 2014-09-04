$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/Json_risultati.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $data = item.data;
						var $casa = item.casa;
						var $fuori = item.fuori;
						var $golcasa = item.golcasa;
						var $golfuori = item.golfuori;
		  $("#risultati").append('<div class="risultati-data">' + $data + '</div><div class="risultati-squadra">' + $casa + ' - ' + $fuori + '</div><div class="risultati-gol">' + $golcasa + ' - ' + $golfuori + '</div>')
						});
				},
      	});
});



$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/Json_proxturno.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $data = item.data;
						var $casa = item.casa;
						var $fuori = item.fuori;
						var $golcasa = item.golcasa;
						var $golfuori = item.golfuori;
		  $("#proxturno").append('<div class="risultati-data">' + $data + '</div><div class="risultati-squadra">' + $casa + ' - ' + $fuori + '</div><div class="risultati-gol">' + $golcasa + ' - ' + $golfuori + '</div>')
						});
				},
      	});
});



$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/Json_classifica.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $posizione = item.posizione;
						var $squadra = item.squadra;
						var $punti = item.punti;
		  $("#classifica").append('<div class="risultati-data">' + $posizione + '</div><div class="risultati-squadra">' + $squadra + '</div><div class="risultati-gol">' + $punti + '</div>')
						});
				},
      	});
});
