var VALID_HANDS = ["rock", "scissors", "paper"]

function randomHand(){
	var num = Math.floor(Math.random() * 3)
	return num
	
	
}


function startGame(hand){
	console.log("game started")
	
	var computer = randomHand()
	var player = VALID_HANDS.indexOf(hand)
	
	console.log("computer: ", computer , "player ", player)
	if(computer === player){alert("It's a draw!")}
	
	// 0 , 1, 2
	
	if(computer == 0 && player == 1){
		alert("rock beats scissors")
	}else if(computer == 0 && player == 2){
		alert("paper beats rock")
	}else if(computer == 1 && player == 0 ){
		alert("rock beats scissors")
	}else if(computer == 1 && player == 2){
		alert("scissors beats paper")
	}else if(computer == 2 && player == 0){
		alert("papper beats rock")
	}else if(computer == 2 && player == 1){
		alert("scissors beats paper")
	}
	
}


function playGame(){
    var resp = prompt("papper. rock or scissors?")
 
    if(VALID_HANDS.indexOf(resp) >= 0){
    	startGame(resp)
    }else{
    	alert("please type paper , rock or scissors")
    }

}

playGame()