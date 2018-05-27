var name1 = document.getElementById('name1')
var name2 = document.getElementById('name2')
var score1 = document.getElementById('score1')
var score2 = document.getElementById('score2')
var score = document.getElementById('score')
var limit =  document.getElementById('limit')
var addPlayer1 = document.getElementById('addPlayer1')
var addPlayer2 = document.getElementById('addPlayer2')
var reset = document.getElementById('reset')
var colorDisplay = document.getElementById('colorDisplay')
var scoreP1 = 0
var scoreP2 = 0
var gameOver = false
var winningScore = 1
var tile11 = document.getElementById("l11")
var tile12 = document.getElementById("l12")
var tile13 = document.getElementById("l13")
var tile21 = document.getElementById("l21")
var tile22 = document.getElementById("l22")
var tile23 = document.getElementById("l23")
var tile31 = document.getElementById("l31")
var tile32 = document.getElementById("l32")
var tile33 = document.getElementById("l33")
var winner = document.getElementById("winner")
var text11,text12,text13,text21,text22,text23,text31,text32,text33
var vertWin1 = false;
var vertWin2 = false;
var vertWin3 = false;
var horWin1 = false;
var horWin1 = false;
var horWin1 = false;
var diaWin1 = false
var diaWin2 = false;
var arrVertWin1Tiles = [] 
var arrVertWin2Tiles = [] 
var arrVertWin3Tiles = [] 
var arrHorWin1Tiles = [] 
var arrHorWin2Tiles = [] 
var arrHorWin3Tiles = [] 
var arrDiaWin1Tiles = [] 
var arrDiaWin2Tiles = []

var arrVertWin1Text = []
var arrVertWin2Text = []
var arrVertWin3Text = []
var arrHorWin1Text = []
var arrHorWin2Text = []
var arrHorWin3Text = []
var arrDiaWin1Text = []
var arrDiaWin2Text = []

var winsText = []
var winsTiles = []

var player1 
var stat 
var player_1 = prompt("Enter name of first Player")
var player_2 = prompt("Enter name of second Player")
var limitCounter = 0

$(document).ready(function(){
    $('.footer').css('margin-top', $(document).height() - ( $('.container').height() + $('.footer').height()) - 50 );
});

name()
play()


limit.addEventListener("keyup",function(){
     score.textContent = limit.value
     winningScore = Number(limit.value) 
     Reset() 
     play()
 })


$("#start").on("click",function (){
    clear()  
    play()
})


reset.addEventListener("click",function(){
    Reset()
    play()
 })



 function play(){ 
     player1 = true
    if(!gameOver){  
$(".tiles").one("click",function (){
         $(this).text(checkPlayer()) 
        console.log(player1)
        assign()
       return  check()  
    })
}
}


function checkPlayer(){
    if(player1 === true){
        player1 = !player1
        return("X")
}
else if(player1 === false){
    player1 = !player1 
    return("O")
}
}


function assign(){
text11 = tile11.textContent
text12 = tile12.textContent
text13 = tile13.textContent
text21 = tile21.textContent 
text22 = tile22.textContent  
text23 = tile23.textContent  
text31 = tile31.textContent  
text32 = tile32.textContent 
text33 = tile33.textContent  

arrVertWin1Text = [text11,text21,text31]
arrVertWin2Text = [text12,text22,text32]
arrVertWin3Text = [text13,text23,text33]
arrHorWin1Text = [text11,text12,text13]
arrHorWin2Text = [text21,text22,text23]
arrHorWin3Text = [text31,text32,text33]
arrDiaWin1Text = [text11,text22,text33]
arrDiaWin2Text = [text13,text22,text31] 

arrVertWin1Tiles = [tile11,tile21,tile31]
arrVertWin2Tiles = [tile12,tile22,tile32]
arrVertWin3Tiles = [tile13,tile23,tile33]
arrHorWin1Tiles = [tile11,tile12,tile13]
arrHorWin2Tiles = [tile21,tile22,tile23]
arrHorWin3Tiles = [tile31,tile32,tile33]
arrDiaWin1Tiles = [tile11,tile22,tile33]
arrDiaWin2Tiles = [tile13,tile22,tile31]

winsText = [arrVertWin1Text,arrVertWin2Text,arrVertWin3Text ,arrHorWin1Text ,arrHorWin2Text ,arrHorWin3Text ,arrDiaWin1Text ,arrDiaWin2Text]
winsTiles = [arrVertWin1Tiles,arrVertWin2Tiles,arrVertWin3Tiles ,arrHorWin1Tiles ,arrHorWin2Tiles ,arrHorWin3Tiles ,arrDiaWin1Tiles ,arrDiaWin2Tiles]         
}


function check(){
    for( i = 0; i< winsText.length ; i++){
        var stat  =  !!winsText[i].reduce(function(a, b){ return (a === b) ? a : NaN; });
        if(stat && (!player1) &&(!gameOver)){
            scoreP1 += 1
        if(scoreP1 >= winningScore){
            score1.classList.add("wn")
            gameOver = true
            $("#colorDisplay").text(player_1 + " Won " + scoreP1 + (" Game(s) First") ) 
            $("#colorDisplay").addClass("win1")   
        } 
            score1.textContent = scoreP1
            winsTiles[i].forEach(function(x){
                x.classList.add("win1")
            })
            $("#winner").text(player_1 + " wins")
            $(".tiles").addClass("freeze")
            $(".slate").addClass("win1")  
         }
        else if(stat && (player1) &&(!gameOver)){
            scoreP2 += 1
        if(scoreP2 >= winningScore){
            score2.classList.add("wn")
            gameOver = true
            $("#colorDisplay").text(player_2 + " Won " + scoreP2 + (" Game(s) first") ) 
            $("#colorDisplay").addClass("win2")
            } 
            score2.textContent = scoreP2
            winsTiles[i].forEach(function(x){
                x.classList.add("win2") 
            })
            $(".tiles").addClass("freeze")
            $(".slate").addClass("win2")
            $("#winner").text(player_2 + " wins")
            
        }
        
     }
}


function clear(){
    $(".tiles").text("")
    $(".tiles").removeClass('freeze');
    $(".tiles").removeClass('win1');
    $("#winner").text("")
    $(".slate").removeClass("win1")  
    $(".tiles").removeClass('win2');
   
    $(".slate").removeClass("win2") 
}


function name(){
    name1.textContent = player_1
    name2.textContent = player_2   
}


function Reset(){
    score1.textContent = 0
    scoreP1 = 0
    score2.textContent = 0
    scoreP2 = 0
    score1.classList.remove("wn")
    score2.classList.remove("wn")
    gameOver = false
    clear()
}














