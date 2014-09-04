$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/json_calendario1.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $data = item.data;
						var $casa = item.casa;
						var $fuori = item.fuori;
						var $golcasa = item.golcasa;
						var $golfuori = item.golfuori;
		  $("#output1").append('<li><div class="risultati-data">' + $data + '</div><div class="risultati-squadra">' + $casa + ' - ' + $fuori + '</div><div class="risultati-gol">' + $golcasa + ' - ' + $golfuori + '</div></li>')
						});
				},
      	});
});


$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/json_calendario2.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $data = item.data;
						var $casa = item.casa;
						var $fuori = item.fuori;
						var $golcasa = item.golcasa;
						var $golfuori = item.golfuori;
		  $("#output2").append('<li><div class="risultati-data">' + $data + '</div><div class="risultati-squadra">' + $casa + ' - ' + $fuori + '</div><div class="risultati-gol">' + $golcasa + ' - ' + $golfuori + '</div></li>')
						});
				},
      	});
});


$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/json_calendario3.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $data = item.data;
						var $casa = item.casa;
						var $fuori = item.fuori;
						var $golcasa = item.golcasa;
						var $golfuori = item.golfuori;
		  $("#output3").append('<li><div class="risultati-data">' + $data + '</div><div class="risultati-squadra">' + $casa + ' - ' + $fuori + '</div><div class="risultati-gol">' + $golcasa + ' - ' + $golfuori + '</div></li>')
						});
				},
      	});
});



$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/json_calendario4.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $data = item.data;
						var $casa = item.casa;
						var $fuori = item.fuori;
						var $golcasa = item.golcasa;
						var $golfuori = item.golfuori;
		  $("#output4").append('<li><div class="risultati-data">' + $data + '</div><div class="risultati-squadra">' + $casa + ' - ' + $fuori + '</div><div class="risultati-gol">' + $golcasa + ' - ' + $golfuori + '</div></li>')
						});
				},
      	});
});




$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/json_calendario5.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $data = item.data;
						var $casa = item.casa;
						var $fuori = item.fuori;
						var $golcasa = item.golcasa;
						var $golfuori = item.golfuori;
		  $("#output5").append('<li><div class="risultati-data">' + $data + '</div><div class="risultati-squadra">' + $casa + ' - ' + $fuori + '</div><div class="risultati-gol">' + $golcasa + ' - ' + $golfuori + '</div></li>')
						});
				},
      	});
});




$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/json_calendario6.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $data = item.data;
						var $casa = item.casa;
						var $fuori = item.fuori;
						var $golcasa = item.golcasa;
						var $golfuori = item.golfuori;
		  $("#output6").append('<li><div class="risultati-data">' + $data + '</div><div class="risultati-squadra">' + $casa + ' - ' + $fuori + '</div><div class="risultati-gol">' + $golcasa + ' - ' + $golfuori + '</div></li>')
						});
				},
      	});
});




$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/json_calendario7.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $data = item.data;
						var $casa = item.casa;
						var $fuori = item.fuori;
						var $golcasa = item.golcasa;
						var $golfuori = item.golfuori;
		  $("#output7").append('<li><div class="risultati-data">' + $data + '</div><div class="risultati-squadra">' + $casa + ' - ' + $fuori + '</div><div class="risultati-gol">' + $golcasa + ' - ' + $golfuori + '</div></li>')
						});
				},
      	});
});




$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/json_calendario8.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $data = item.data;
						var $casa = item.casa;
						var $fuori = item.fuori;
						var $golcasa = item.golcasa;
						var $golfuori = item.golfuori;
		  $("#output8").append('<li><div class="risultati-data">' + $data + '</div><div class="risultati-squadra">' + $casa + ' - ' + $fuori + '</div><div class="risultati-gol">' + $golcasa + ' - ' + $golfuori + '</div></li>')
						});
				},
      	});
});




$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/json_calendario9.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $data = item.data;
						var $casa = item.casa;
						var $fuori = item.fuori;
						var $golcasa = item.golcasa;
						var $golfuori = item.golfuori;
		  $("#output9").append('<li><div class="risultati-data">' + $data + '</div><div class="risultati-squadra">' + $casa + ' - ' + $fuori + '</div><div class="risultati-gol">' + $golcasa + ' - ' + $golfuori + '</div></li>')
						});
				},
      	});
});




$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/json_calendario10.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $data = item.data;
						var $casa = item.casa;
						var $fuori = item.fuori;
						var $golcasa = item.golcasa;
						var $golfuori = item.golfuori;
		  $("#output10").append('<li><div class="risultati-data">' + $data + '</div><div class="risultati-squadra">' + $casa + ' - ' + $fuori + '</div><div class="risultati-gol">' + $golcasa + ' - ' + $golfuori + '</div></li>')
						});
				},
      	});
});




$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/json_calendario11.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $data = item.data;
						var $casa = item.casa;
						var $fuori = item.fuori;
						var $golcasa = item.golcasa;
						var $golfuori = item.golfuori;
		  $("#output11").append('<li><div class="risultati-data">' + $data + '</div><div class="risultati-squadra">' + $casa + ' - ' + $fuori + '</div><div class="risultati-gol">' + $golcasa + ' - ' + $golfuori + '</div></li>')
						});
				},
      	});
});



$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/json_calendario12.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $data = item.data;
						var $casa = item.casa;
						var $fuori = item.fuori;
						var $golcasa = item.golcasa;
						var $golfuori = item.golfuori;
		  $("#output12").append('<li><div class="risultati-data">' + $data + '</div><div class="risultati-squadra">' + $casa + ' - ' + $fuori + '</div><div class="risultati-gol">' + $golcasa + ' - ' + $golfuori + '</div></li>')
						});
				},
      	});
});



$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/json_calendario13.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $data = item.data;
						var $casa = item.casa;
						var $fuori = item.fuori;
						var $golcasa = item.golcasa;
						var $golfuori = item.golfuori;
		  $("#output13").append('<li><div class="risultati-data">' + $data + '</div><div class="risultati-squadra">' + $casa + ' - ' + $fuori + '</div><div class="risultati-gol">' + $golcasa + ' - ' + $golfuori + '</div></li>')
						});
				},
      	});
});



$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/json_calendario14.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $data = item.data;
						var $casa = item.casa;
						var $fuori = item.fuori;
						var $golcasa = item.golcasa;
						var $golfuori = item.golfuori;
		  $("#output14").append('<li><div class="risultati-data">' + $data + '</div><div class="risultati-squadra">' + $casa + ' - ' + $fuori + '</div><div class="risultati-gol">' + $golcasa + ' - ' + $golfuori + '</div></li>')
						});
				},
      	});
});



$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/json_calendario15.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $data = item.data;
						var $casa = item.casa;
						var $fuori = item.fuori;
						var $golcasa = item.golcasa;
						var $golfuori = item.golfuori;
		  $("#output15").append('<li><div class="risultati-data">' + $data + '</div><div class="risultati-squadra">' + $casa + ' - ' + $fuori + '</div><div class="risultati-gol">' + $golcasa + ' - ' + $golfuori + '</div></li>')
						});
				},
      	});
});



$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/json_calendario16.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $data = item.data;
						var $casa = item.casa;
						var $fuori = item.fuori;
						var $golcasa = item.golcasa;
						var $golfuori = item.golfuori;
		  $("#output16").append('<li><div class="risultati-data">' + $data + '</div><div class="risultati-squadra">' + $casa + ' - ' + $fuori + '</div><div class="risultati-gol">' + $golcasa + ' - ' + $golfuori + '</div></li>')
						});
				},
      	});
});



$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/json_calendario17.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $data = item.data;
						var $casa = item.casa;
						var $fuori = item.fuori;
						var $golcasa = item.golcasa;
						var $golfuori = item.golfuori;
		  $("#output17").append('<li><div class="risultati-data">' + $data + '</div><div class="risultati-squadra">' + $casa + ' - ' + $fuori + '</div><div class="risultati-gol">' + $golcasa + ' - ' + $golfuori + '</div></li>')
						});
				},
      	});
});



$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/json_calendario18.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $data = item.data;
						var $casa = item.casa;
						var $fuori = item.fuori;
						var $golcasa = item.golcasa;
						var $golfuori = item.golfuori;
		  $("#output18").append('<li><div class="risultati-data">' + $data + '</div><div class="risultati-squadra">' + $casa + ' - ' + $fuori + '</div><div class="risultati-gol">' + $golcasa + ' - ' + $golfuori + '</div></li>')
						});
				},
      	});
});



$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/json_calendario19.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $data = item.data;
						var $casa = item.casa;
						var $fuori = item.fuori;
						var $golcasa = item.golcasa;
						var $golfuori = item.golfuori;
		  $("#output19").append('<li><div class="risultati-data">' + $data + '</div><div class="risultati-squadra">' + $casa + ' - ' + $fuori + '</div><div class="risultati-gol">' + $golcasa + ' - ' + $golfuori + '</div></li>')
						});
				},
      	});
});



$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/json_calendario20.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $data = item.data;
						var $casa = item.casa;
						var $fuori = item.fuori;
						var $golcasa = item.golcasa;
						var $golfuori = item.golfuori;
		  $("#output20").append('<li><div class="risultati-data">' + $data + '</div><div class="risultati-squadra">' + $casa + ' - ' + $fuori + '</div><div class="risultati-gol">' + $golcasa + ' - ' + $golfuori + '</div></li>')
						});
				},
      	});
});



$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/json_calendario21.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $data = item.data;
						var $casa = item.casa;
						var $fuori = item.fuori;
						var $golcasa = item.golcasa;
						var $golfuori = item.golfuori;
		  $("#output21").append('<li><div class="risultati-data">' + $data + '</div><div class="risultati-squadra">' + $casa + ' - ' + $fuori + '</div><div class="risultati-gol">' + $golcasa + ' - ' + $golfuori + '</div></li>')
						});
				},
      	});
});





$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/json_calendario22.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $data = item.data;
						var $casa = item.casa;
						var $fuori = item.fuori;
						var $golcasa = item.golcasa;
						var $golfuori = item.golfuori;
		  $("#output22").append('<li><div class="risultati-data">' + $data + '</div><div class="risultati-squadra">' + $casa + ' - ' + $fuori + '</div><div class="risultati-gol">' + $golcasa + ' - ' + $golfuori + '</div></li>')
						});
				},
      	});
});





$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/json_calendario23.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $data = item.data;
						var $casa = item.casa;
						var $fuori = item.fuori;
						var $golcasa = item.golcasa;
						var $golfuori = item.golfuori;
		  $("#output23").append('<li><div class="risultati-data">' + $data + '</div><div class="risultati-squadra">' + $casa + ' - ' + $fuori + '</div><div class="risultati-gol">' + $golcasa + ' - ' + $golfuori + '</div></li>')
						});
				},
      	});
});





$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/json_calendario24.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $data = item.data;
						var $casa = item.casa;
						var $fuori = item.fuori;
						var $golcasa = item.golcasa;
						var $golfuori = item.golfuori;
		  $("#output24").append('<li><div class="risultati-data">' + $data + '</div><div class="risultati-squadra">' + $casa + ' - ' + $fuori + '</div><div class="risultati-gol">' + $golcasa + ' - ' + $golfuori + '</div></li>')
						});
				},
      	});
});





$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/json_calendario25.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $data = item.data;
						var $casa = item.casa;
						var $fuori = item.fuori;
						var $golcasa = item.golcasa;
						var $golfuori = item.golfuori;
		  $("#output25").append('<li><div class="risultati-data">' + $data + '</div><div class="risultati-squadra">' + $casa + ' - ' + $fuori + '</div><div class="risultati-gol">' + $golcasa + ' - ' + $golfuori + '</div></li>')
						});
				},
      	});
});





$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/json_calendario26.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $data = item.data;
						var $casa = item.casa;
						var $fuori = item.fuori;
						var $golcasa = item.golcasa;
						var $golfuori = item.golfuori;
		  $("#output26").append('<li><div class="risultati-data">' + $data + '</div><div class="risultati-squadra">' + $casa + ' - ' + $fuori + '</div><div class="risultati-gol">' + $golcasa + ' - ' + $golfuori + '</div></li>')
						});
				},
      	});
});





$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/json_calendario27.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $data = item.data;
						var $casa = item.casa;
						var $fuori = item.fuori;
						var $golcasa = item.golcasa;
						var $golfuori = item.golfuori;
		  $("#output27").append('<li><div class="risultati-data">' + $data + '</div><div class="risultati-squadra">' + $casa + ' - ' + $fuori + '</div><div class="risultati-gol">' + $golcasa + ' - ' + $golfuori + '</div></li>')
						});
				},
      	});
});





$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/json_calendario28.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $data = item.data;
						var $casa = item.casa;
						var $fuori = item.fuori;
						var $golcasa = item.golcasa;
						var $golfuori = item.golfuori;
		  $("#output28").append('<li><div class="risultati-data">' + $data + '</div><div class="risultati-squadra">' + $casa + ' - ' + $fuori + '</div><div class="risultati-gol">' + $golcasa + ' - ' + $golfuori + '</div></li>')
						});
				},
      	});
});





$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/json_calendario29.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $data = item.data;
						var $casa = item.casa;
						var $fuori = item.fuori;
						var $golcasa = item.golcasa;
						var $golfuori = item.golfuori;
		  $("#output29").append('<li><div class="risultati-data">' + $data + '</div><div class="risultati-squadra">' + $casa + ' - ' + $fuori + '</div><div class="risultati-gol">' + $golcasa + ' - ' + $golfuori + '</div></li>')
						});
				},
      	});
});




$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/json_calendario30.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $data = item.data;
						var $casa = item.casa;
						var $fuori = item.fuori;
						var $golcasa = item.golcasa;
						var $golfuori = item.golfuori;
		  $("#output30").append('<li><div class="risultati-data">' + $data + '</div><div class="risultati-squadra">' + $casa + ' - ' + $fuori + '</div><div class="risultati-gol">' + $golcasa + ' - ' + $golfuori + '</div></li>')
						});
				},
      	});
});



$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/json_calendario31.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $data = item.data;
						var $casa = item.casa;
						var $fuori = item.fuori;
						var $golcasa = item.golcasa;
						var $golfuori = item.golfuori;
		  $("#output31").append('<li><div class="risultati-data">' + $data + '</div><div class="risultati-squadra">' + $casa + ' - ' + $fuori + '</div><div class="risultati-gol">' + $golcasa + ' - ' + $golfuori + '</div></li>')
						});
				},
      	});
});



$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/json_calendario32.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $data = item.data;
						var $casa = item.casa;
						var $fuori = item.fuori;
						var $golcasa = item.golcasa;
						var $golfuori = item.golfuori;
		  $("#output32").append('<li><div class="risultati-data">' + $data + '</div><div class="risultati-squadra">' + $casa + ' - ' + $fuori + '</div><div class="risultati-gol">' + $golcasa + ' - ' + $golfuori + '</div></li>')
						});
				},
      	});
});



$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/json_calendario33.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $data = item.data;
						var $casa = item.casa;
						var $fuori = item.fuori;
						var $golcasa = item.golcasa;
						var $golfuori = item.golfuori;
		  $("#output33").append('<li><div class="risultati-data">' + $data + '</div><div class="risultati-squadra">' + $casa + ' - ' + $fuori + '</div><div class="risultati-gol">' + $golcasa + ' - ' + $golfuori + '</div></li>')
						});
				},
      	});
});



$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/json_calendario34.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $data = item.data;
						var $casa = item.casa;
						var $fuori = item.fuori;
						var $golcasa = item.golcasa;
						var $golfuori = item.golfuori;
		  $("#output34").append('<li><div class="risultati-data">' + $data + '</div><div class="risultati-squadra">' + $casa + ' - ' + $fuori + '</div><div class="risultati-gol">' + $golcasa + ' - ' + $golfuori + '</div></li>')
						});
				},
      	});
});



$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/json_calendario35.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $data = item.data;
						var $casa = item.casa;
						var $fuori = item.fuori;
						var $golcasa = item.golcasa;
						var $golfuori = item.golfuori;
		  $("#output35").append('<li><div class="risultati-data">' + $data + '</div><div class="risultati-squadra">' + $casa + ' - ' + $fuori + '</div><div class="risultati-gol">' + $golcasa + ' - ' + $golfuori + '</div></li>')
						});
				},
      	});
});



$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/json_calendario36.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $data = item.data;
						var $casa = item.casa;
						var $fuori = item.fuori;
						var $golcasa = item.golcasa;
						var $golfuori = item.golfuori;
		  $("#output36").append('<li><div class="risultati-data">' + $data + '</div><div class="risultati-squadra">' + $casa + ' - ' + $fuori + '</div><div class="risultati-gol">' + $golcasa + ' - ' + $golfuori + '</div></li>')
						});
				},
      	});
});



$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/json_calendario37.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $data = item.data;
						var $casa = item.casa;
						var $fuori = item.fuori;
						var $golcasa = item.golcasa;
						var $golfuori = item.golfuori;
		  $("#output37").append('<li><div class="risultati-data">' + $data + '</div><div class="risultati-squadra">' + $casa + ' - ' + $fuori + '</div><div class="risultati-gol">' + $golcasa + ' - ' + $golfuori + '</div></li>')
						});
				},
      	});
});


$(function() {
	$.ajax({
	type: "GET",
    jsonp:'jsonp',
	url : "http://www.napoligol.it/json_calendario38.php?callback=?",
	success: function (data) {
$.each(data["title"], function(index, item) {
						var $data = item.data;
						var $casa = item.casa;
						var $fuori = item.fuori;
						var $golcasa = item.golcasa;
						var $golfuori = item.golfuori;
		  $("#output38").append('<li><div class="risultati-data">' + $data + '</div><div class="risultati-squadra">' + $casa + ' - ' + $fuori + '</div><div class="risultati-gol">' + $golcasa + ' - ' + $golfuori + '</div></li>')
						});
				},
      	});
});



