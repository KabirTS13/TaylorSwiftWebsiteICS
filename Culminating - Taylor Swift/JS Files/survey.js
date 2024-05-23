var form = document.getElementById("form-container");
function handleForm(event){
    event.preventDefault();
    form.reset();
}
form.addEventListener('submit', handleForm);

function getResults(){
    var q2value = document.getElementById("q2").value;
    var q4value = document.getElementById("q4").value;
    var q5value = document.getElementById("q5").value;
    var q6value = document.getElementById("q6").value;
    var albumArr = document.querySelectorAll('.albums-input');
    var a1score = 0;
    var a2score = 0;
    var a3score = 0;
    var a4score = 0;
    var a5score = 0;
    var a6score = 0;
    var a7score = 0;
    var a8score = 0;
    var a9score = 0;
    var a10score = 0;
    var a11score = 0;

    var tourArr = document.querySelectorAll(".era-input");
    var yesScore = 0;
    var noScore = 0;
    
    for(var i=0; i<tourArr.length; i++){
        if(tourArr[i].checked){
            if(tourArr[i].value == "yes"){
                yesScore += 1;
            }
            if(tourArr[i].value == "no"){
                noScore += 1;
            } 
        }
    }
    var q3 = Math.max(yesScore, noScore);
    if(q3===yesScore){
        document.getElementById("q3-result").innerHTML = "I'm so glad you're going to the tour! But also jealous...";
    }
    else if(q3===noScore){
        document.getElementById("q3-result").innerHTML = "Not going to the tour? Don't worry, we can both hunt Ticketmaster!";
    }
    else{
        document.getElementById("q3-result").innerHTML = "You didn't tell me if you're going to the tour. ";
    }
    

    for(var i = 0; i < albumArr.length; i++){
        if(albumArr[i].checked){
            if(albumArr[i].value == "a1"){
                a1score += 1;
            }
            if(albumArr[i].value == "a2"){
                a2score += 1;
            }
            if(albumArr[i].value == "a3"){
                a3score += 1;
            }
            if(albumArr[i].value == "a4"){
                a4score += 1;
            }
            if(albumArr[i].value == "a5"){
                a5score += 1;
            }
            if(albumArr[i].value == "a6"){
                a6score += 1;
            }
            if(albumArr[i].value == "a7"){
                a7score += 1;
            }
            if(albumArr[i].value == "a8"){
                a8score += 1;
            }
            if(albumArr[i].value == "a9"){
                a9score += 1;
            }
            if(albumArr[i].value == "a10"){
                a10score += 1;
            }
            if(albumArr[i].value == "a11"){
                a11score += 1;
            }
        }
    }
    var q1 = Math.max(a1score, a2score, a3score,a4score,a5score,a6score,a7score,a8score,a9score,a10score,a11score);
    if(q1 === a1score){
        document.getElementById("album-result").innerHTML = "Your favourite album is Debut";
    }
    else if(q1 === a2score){
        document.getElementById("album-result").innerHTML = "Your favourite album is Fearless";
    }
    else if(q1 === a3score){
        document.getElementById("album-result").innerHTML = "Your favourite album is Speak Now";
    }
    else if(q1 === a4score){
        document.getElementById("album-result").innerHTML = "Your favourite album is Red";
    }
    else if(q1 === a5score){
        document.getElementById("album-result").innerHTML = "Your favourite album is 1989";
    }
    else if(q1 === a6score){
        document.getElementById("album-result").innerHTML = "Your favourite album is Reputation";
    }
    else if(q1 === a7score){
        document.getElementById("album-result").innerHTML = "Your favourite album is Lover";
    }
    else if(q1 === a8score){
        document.getElementById("album-result").innerHTML = "Your favourite album is Folklore";
    }
    else if(q1 === a9score){
        document.getElementById("album-result").innerHTML = "Your favourite album is Evermore";
    }
    else if(q1 === a10score){
        document.getElementById("album-result").innerHTML = "Your favourite album is Midnights";
    }
    else if(q1 === a11score){
        document.getElementById("album-result").innerHTML = "No favourite track? I get it! It can be hard to choose when they're all awesome.";
    }
    else{
        document.getElementById("album-result").innerHTML = "You didn't choose an option.";
    }
    
    document.getElementById("q2-result").innerHTML = "You've been listenting to Taylor Swift for: "+q2value+" years";
    document.getElementById("q4-result").innerHTML = "You became a Taylor Swift fan by: "+q4value;
    document.getElementById("q5-result").innerHTML = "Your favourite era is: "+q5value;
    document.getElementById("q6-result").innerHTML = "Your favourite vault track is: "+q6value;
    const resultContainer = document.querySelector("#section-4");
    resultContainer.style.display = "block";

}

