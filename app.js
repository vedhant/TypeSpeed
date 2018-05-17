var time = 0;
text = document.querySelector('#text').textContent;
var stop = false;
text_area = document.querySelector('.type_space');
var back = 0;
var seconds = 0;

function startTimer(){
    window.setInterval(function(){time++;},100);
}

text_area.addEventListener('keydown',function(e){
    if(e.key != "Shift"){
    var text_typed = e.target.value;
    len = text_typed.length;
    back = 0;
    if(!time){
        startTimer();
        text_area.style.background = "rgba(0,255,0,0.7)";}
    if(e.key=="Backspace"){
        stop = false;
        back =1;
        text_area.style.background = "rgba(0,255,0,0.7)";
    }
    if(stop==true){

        e.preventDefault();
    }

    if(e.key != text[len] && back==0){
        stop = true;
        text_area.style.background = "rgba(255,0,0,0.7)";
    }
    if(e.key == text[text.length-1] && len == text.length-1)
        {
            seconds = time/10;
            document.querySelector(' div div').innerHTML = "<input>";
            document.querySelector('div div input').setAttribute('type','text');
            document.querySelector('div div input').setAttribute('value',text);
            document.querySelector('div div input').setAttribute('class','type_space');
            document.querySelector('div div input').setAttribute('disabled','disabled');
            document.querySelector('div div').innerHTML += "<p>Your typing speed is " + text.length/seconds + " characters per second</p>";
            document.querySelector('div div input').style.background = "rgba(0,255,0,0.7)";
        }
    }
});

document.querySelector('.try_again').addEventListener('click',function(){
   location.reload();
});
