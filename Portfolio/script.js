$('#experience-button').on('click', function() {
    if ($('#experienceSection').css('opacity') == 0) {
        $('#experienceSection').css('opacity', 1);
    }
    else {
        $('#experienceSection').css('opacity', 0);
    }
    var count = 1;
    if(count == 2){
    	$('#fourfront').css('opacity', 0);
    }
});