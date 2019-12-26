function get_gage(list){
    var timerId, percent;

    // reset progress bar
    percent = 0;
    $('#btn').attr('disabled', true);
    $('.progress-bar').css('width', '0px').addClass('progress-bar-animated active');

    timerId = setInterval(function() {

        // increment progress bar
        percent += 1;
        $('.progress-bar').css('width', percent + '%');
        $('.progress-bar').html("Calcul de l'humliation en cours... " + percent + '%');

        if (percent >= 100) {
            clearInterval(timerId);
            $('#btn').attr('disabled', false);
            $('.progress-bar').removeClass('progress-bar-animated progress-bar-striped active').html();
            var gage = list.random();
            document.getElementById('gage').innerHTML = gage;
        }
    }, 100);
}

Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
}

