var SpeechRecognition= window.webkitSpeechRecognition

var recognition=new SpeechRecognition()

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function run(event){
    console.log(event);

    var output=event.results[0][0].transcript;
    console.log(output);
    document.getElementById("textbox").innerHTML=output;
    speak()
    Webcam.attach("#camera")
}

function speak(){
    var speech=window.speechSynthesis;
    speak_data=document.getElementById("textbox").value;

    var utterThis=new SpeechSynthesisUtterance(speak_data);
    speech.speak(utterThis);
}

Webcam.set({
    width:360,
    height:250,
    image_format:"jpeg",
    jpeg_quality: 90
    
});
function snapshot(){
    Webcam.snap(
        function (picture) {
           document.getElementById("results").innerHTML=`<img id="selfie" src=${picture}> ` 
        }
    )
}

    

