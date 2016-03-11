// // var Chess = require('./chess').Chess;
// var chess = new Chess();

// while (!chess.game_over()) {
//   var moves = chess.moves();
//   var move = moves[Math.floor(Math.random() * moves.length)];
//   chess.move(move);
// }

// console.log(chess.pgn());

var hold = 'none';
var player = 1;
var color = 'w';

$('.rowCss div').on('click', function(){
	var chosenClass = color + 'Pawn';
	setPlayer();

	function changePlayer(){
		if(player == 1){
			player = 2
		} else if(player == 2){
			player = 1
		}
	}

	function setPlayer(){
		if(player == 1){
		color = 'w';
		} else if(player == 2){
			color = 'b';
		} else {
			console.log('Who the fuck are you?');
		}
	}

	if($(this).hasClass(chosenClass)){
		if(hold == chosenClass) {
			if($(this).hasClass(chosenClass)){
				console.log('You can not place your pawn over another piece.')
			} else{
				console.log('Ops, você não pode selecionar outro peão');
			}
		} else {
			$(this).removeClass(chosenClass);
			hold = chosenClass;
			changePlayer();
			console.log('You have selected the ' + $(this).attr('class').split(' ')[0] + ' pawn.');
		}
	} else if(hold == chosenClass) {
		$(this).addClass(chosenClass);
		console.log('You have placed your pawn on ' + $(this).attr('class').split(' ')[0] + '.');
		hold = 'none';
	} else {
		console.log('Isso não é uma peça válida');
	}
});