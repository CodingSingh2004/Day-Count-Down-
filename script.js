const endDate = "2024-08-03T22:15:00"; // ISO 8601 format
// document.getElementById("end-date").innerHTML = endDate;

function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const difference = (end - now) / 1000;
    //   Convert Into Days:
    const days =Math.floor(difference / 3600 /24) ;
    $("#day").val(days);
    const hours = Math.floor((difference / 3600)%24);
    $("#hour").val(hours);
    const minute = Math.floor((difference/60)%60);
    $("#minute").val(minute);
    const second = Math.floor(difference%60);
    $("#Second").val(second);
}
setInterval(function(){
    clock()
},1000)