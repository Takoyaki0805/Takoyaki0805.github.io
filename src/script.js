let skill = document.getElementById("skill");
let work = document.getElementById("work");

$(".Apps").mouseover(Spotlight);
$(".Apps").mouseout(downlight);

function Moveskill(){
    scrollTo(0,skill.offsetTop-100);
}

function Movework(){
    scrollTo(0,work.offsetTop-100);
}

function Spotlight(event){
    // $(this).find("img").css("width","50%");
    // $(this).find("img").css("height","50%");
}

function downlight(event){
    // $(this).find("img").css("width","40%");
    // $(this).find("img").css("height","40%");
}