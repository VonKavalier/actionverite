function get_gage(list){
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    $('.progress').show();
    $('#gages').hide();
    $('#gage2').hide();
    $('#button-gage2').show();

    var timerId, percent;
    var loadingMessage = loading_list.random();

    // reset progress bar
    percent = 0;
    $('.btn-perso').attr('disabled', true);

    timerId = setInterval(function() {

        // increment progress bar
        percent += 4;
        $('.progress-bar').css('width', percent + '%');
        $('.progress-bar').html(loadingMessage + " " + percent + '%');

        if (percent >= 100) {
            clearInterval(timerId); 
            $('.progress').hide();
            $('#gages').show();
            document.getElementById('gage1').innerHTML = list.random();
            document.getElementById('gage2').innerHTML = list.random();
            $('.btn-perso').attr('disabled', false);
            $('.progress-bar').css('width', '0px');
            $("html, body").animate({ scrollTop: $(document).height() }, 1000);
        }
    }, 200);
}

Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
}

function show_gage2(){
    $('#gage2').show();
    $('#button-gage2').hide();
}
