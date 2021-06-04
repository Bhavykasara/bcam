function c() {
    console.log("popoopop");
    var canvas=document.getElementById("camImg");
    var video=document.getElementById("cam");
    var ctx=canvas.getContext("2d");
    ctx.drawImage(video,0,0,650,475);
}

function start() {
    var video=document.getElementById("cam");
    document.getElementById("info").innerText="wait for a moment.....";
    navigator.mediaDevices.getUserMedia({video:true})
    .then(stream=>{
        document.getElementById("info").innerText="Click on the click button to click picture";
        video.srcObject=stream;
        document.getElementById("click").style.visibility="visible";
    }).catch(function(){
       console.log("Something Went Wrong");
       document.getElementById("info").innerText="Error";
    });
}
