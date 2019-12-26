function get_gage(list){
    $('.progress').show();
    $('#gage').hide();

    var timerId, percent;

    // reset progress bar
    percent = 0;
    $('.btn').attr('disabled', true);

    timerId = setInterval(function() {

        // increment progress bar
        percent += 1;
        $('.progress-bar').css('width', percent + '%');
        $('.progress-bar').html("Calcul de l'humliation en cours... " + percent + '%');

        if (percent >= 100) {
            clearInterval(timerId);
            $('#btn').attr('disabled', false);
            $('.progress-bar').removeClass('progress-bar-animated progress-bar-striped active');
            $('.progress').hide();
            var gage = list.random();
            $('#gage').show();
            document.getElementById('gage').innerHTML = gage;
            $('.btn').attr('disabled', false);
            $('.progress-bar').css('width', '0px').addClass('progress-bar-animated active');
        }
    }, 80);
}

Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
}

