function get_gage(list){
    $('.progress').show();
    $('#gages').hide();

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
            $('.progress').hide();
            $('#gages').show();
            document.getElementById('gage1').innerHTML = list.random();
            document.getElementById('gage2').innerHTML = list.random();
            $('.btn').attr('disabled', false);
            $('.progress-bar').css('width', '0px');
        }
    }, 80);
}

Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
}

