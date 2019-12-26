function get_gage(list){
    var gage = list.random();
    document.getElementById('gage').innerHTML = gage;
}

Array.prototype.random = function () {
       return this[Math.floor((Math.random()*this.length))];
}
