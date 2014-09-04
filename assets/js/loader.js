function startLoader() {
    setTimeout(function(){
        $('#startLoader').hide();
        $('body').css({'overflow':'auto'});
        window.location.href = "#panel-responsive-page2";
    }, 7000);

}

$(window).on('load', function() {
    startLoader();
});

