
/* explosão */

var check = true;

function xequeMate() {
    if (check == true) {
        var timer1 = setInterval(function() {start () }, 1000);
        var timer2 = setTimeout(function() {fim () }, 8320); /* altera a img do gif após 13.2 seg */
        var count = 5;
        function start(){
            somBeep();
            document.getElementById("time").innerHTML = count;
            if (count == 0) {
                clearInterval(timer1); /* esta linha para o contador */
                somTrovao();
                document.getElementById("fire").src = "explosion.gif";
                document.getElementById("time").innerHTML = "FIM DO JOGO!";
            }
            count --;
        }
        check = false /* "check = false" faz com q o audio execute apenas uma vez */
    }
}

function somTrovao(){
    let som = new Audio();
    som.src = "Thunder_Crack.mp3";
    som.play();
}

function somBeep(){
    let som = new Audio();
    som.src = "Beep_Short.mp3";
    som.play();
}

function fim(){
    document.getElementById("fire").src = "clean.png";
}