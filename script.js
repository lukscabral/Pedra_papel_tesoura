let human_score = 0;
let pc_score = 0;

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

function get_choice_human(){
    let h_choice = prompt("Escolha pedra, papel ou tesoura");
    h_choice = h_choice.toLowerCase()
    
    if(h_choice === "pedra"){
        return h_choice
        } else if(h_choice === "papel") {
         return h_choice
        } else if(h_choice === "tesoura") {
            return h_choice
        } else {
            console.log("Digitou errado");
        }
}
function play_game(){
    let h_selection = get_choice_human();
    let pc_selection = get_choice_pc();
    
    function play_round(h_choice,pc_choice){        
        if(h_choice === pc_choice){
            console.log("EMPATE!Jogue novamente");
            
        } else if(h_choice === "pedra"){
            console.log("Voce jogou pedra")
            if(pc_choice === "papel"){
                console.log("Voce perdeu!Pedra perde pra papel");
                return human_score += 1;
            }else{
                console.log("Voce venceu!Pedra vence tesoura")
                return pc_score +=1;
            }
            
        }else if(h_choice === "papel"){
            console.log("Voce jogou papel")
            if(pc_choice === "pedra"){
                console.log("Voce ganhou!Papel vence pedra")
                return human_score += 1;
            }else{
                console.log("Voce perdeu!Papel perde pra tesoura")
                return pc_score +=1;
            }
    
        }else if(h_choice === "tesoura"){
            console.log("Voce jogou tesoura")
            if(pc_choice === "pedra"){
                console.log("Voce perdeu!Tesoura perde pra pedra")
                return pc_score +=1;
            } else {
                console.log("Voce ganhou!Tesoura vence papel")
                return human_score += 1;
            }
        }   
    }
    function new_round() {
        let a = get_choice_human();
        let b = get_choice_pc();
        play_round(a,b);  
    }  

    play_round(h_selection,pc_selection);
    console.log("Voce: "+human_score+" Pc: "+pc_score+" round: 1")
    for(let i = 2; i <=5; i++){
        new_round();
        console.log("Voce: "+human_score+" Pc: "+pc_score+" round: "+i)  
    }
}

play_game();