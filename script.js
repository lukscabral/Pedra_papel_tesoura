let human_score = 0;
let pc_score = 0;
let result = "";
let rounds = 0;
let b;
input = document.querySelector("textarea");

function get_choice_pc() {
    let pc_choice = Math.floor(Math.random()*3)
    if( pc_choice === 0) {
        pc_choice = "pedra";
        return pc_choice

    } else if (pc_choice === 1) {
        pc_choice = "papel";
        return pc_choice

    } else if (pc_choice === 2) {
        pc_choice = "tesoura";
        return pc_choice

    } else {
        console.log("error")
    }
}
    function play_round(h_choice,pc_choice){  
         

             if(h_choice === pc_choice && pc_choice != undefined){               
                result = "empate";
           } else if(h_choice === "pedra"){
                if(pc_choice === "papel"){
                    
                    result = "Perdeu!Pedra perde pra papel!";
                    pc_score += 1;
                }else {
                    
                    result = "Venceu!Pedra ganha de tesoura!";
                    human_score += 1;
                }
           } else if(h_choice === "papel"){
                if(pc_choice === "tesoura"){
                    
                    result = "Perdeu!Papel perde pra tesoura!";
                    pc_score += 1;
                }else {
                    
                    result = "Venceu!Papel ganha de Pedra!";
                    human_score += 1;
                }
           } else if(h_choice === "tesoura") {
                if(pc_choice === "pedra"){
                    
                    result = "Perdeu!Tesoura perde pra Pedra!";
                    pc_score += 1;
                }else {
                    
                    result = "Venceu!Tesoura ganha de Papel!";
                    human_score += 1;
                }
           }rounds +=1; 
    }

let buttons = document.querySelectorAll(".container > button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            
            if(rounds <= 5){
                h_choice = button.id;
                 b = get_choice_pc();
                 console.log("player: "+h_choice+ " pc: "+b+" round: "+rounds)
                 input.value = "player: "+h_choice+ " pc: "+b+" round: "+rounds+"\n\n";
                 play_round(h_choice,b)
                console.log("scores=> player: "+human_score+" pc: "+pc_score)
                input.value += result + "\n\nscores=> player: "+human_score+" pc: "+pc_score;
                
                
            } else {
                console.log("A rodada Acabou!")
                input.value += "\n\nA rodada Acabou!"
                if(human_score == pc_score){
                    console.log("EMPATE!")
                    input.value += "\nA rodada terminou em EMPATE"
                } else if(human_score < pc_score){
                    console.log("Computador Ganhou!")
                    input.value += "\nA rodada terminou e o Computador ganhou!";
                } else {
                    console.log("Voce ganhou!")
                    input.value += "\nVoce ganhou!";
                }
            }
            
        });
    });
const start = document.querySelector("#start");
start.addEventListener("click", () =>{
    rounds = 0;
    human_score = 0;
    pc_score = 0;
    input.value = "O jogo vai começar!"
    play_round();
})