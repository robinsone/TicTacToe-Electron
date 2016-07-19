var row1col1;
var row1col2;
var row1col3;
var row2col1;
var row2col2;
var row2col3;
var row3col1;
var row3col2;
var row3col3;

var Player1;

$(document).ready(function (){
  row1col1 = $('.toprow div:nth-child(1)');
  row1col2 = $('.toprow div:nth-child(2)');
  row1col3 = $('.toprow div:nth-child(3)');

  row2col1 = $('.centerrow div:nth-child(1)');
  row2col2 = $('.centerrow div:nth-child(2)');
  row2col3 = $('.centerrow div:nth-child(3)');

  row3col1 = $('.bottomrow div:nth-child(1)');
  row3col2 = $('.bottomrow div:nth-child(2)');
  row3col3 = $('.bottomrow div:nth-child(3)');

  Player1 = true;
});

$('.toprow div:nth-child(1)').click(function() {
  row1col1.text(getPlayerString());
  clicked();
});

$('.toprow div:nth-child(2)').click(function() {
  row1col2.text(getPlayerString());
  clicked();
});

$('.toprow div:nth-child(3)').click(function() {
  row1col3.text(getPlayerString());
  clicked();
});



$('.centerrow div:nth-child(1)').click(function() {
  row2col1.text(getPlayerString());
  clicked();
});

$('.centerrow div:nth-child(2)').click(function() {
  row2col2.text(getPlayerString());
  clicked();
});

$('.centerrow div:nth-child(3)').click(function() {
  row2col3.text(getPlayerString());
  checkForWinner()
  clicked();
});



$('.bottomrow div:nth-child(1)').click(function() {
  row3col1.text(getPlayerString());
  clicked();
});

$('.bottomrow div:nth-child(2)').click(function() {
  row3col2.text(getPlayerString());
  clicked();
});

$('.bottomrow div:nth-child(3)').click(function() {
  row3col3.text(getPlayerString());
  clicked();
});

function clicked() {
  checkForWinner();
  Player1 = !Player1;
}

function checkForWinner() {
  if(checkTopRow()){
    Winner();
  }
  else if(checkCenterRow()){
    Winner();
  }
  else if(checkBottomRow()){
    Winner();
  }
  else if(checkDiagonal()){
    Winner();
  }
  else if(checkInverseDiagonal()){
    Winner();
  }
  else if(checkFirstColumn()){
    Winner();
  }
  else if(checkSecondColumn()){
    Winner();
  }
  else if(checkThirdColumn()){
    Winner();
  }
  else if(checkTied()){
    Tied();
  }
}

function Winner() {
  alert('Winner');
  $('.col-xs-4').each(function (index, object){
    $(object).html('&nbsp;');
  });
  if(getPlayerString() == 'X'){
  var number = parseInt($('.results div:nth-child(1) span').text());
  number = number + 1;
  $('.results div:nth-child(1) span').text(number);
  }
  else {
  var number = parseInt($('.results div:nth-child(3) span').text());
  number = number + 1;
  $('.results div:nth-child(3) span').text(number);
  }
}

function Tied() {
  alert('Tied');
  $('.col-xs-4').each(function (index, object){
    $(object).html('&nbsp;');
  });
  var number = parseInt($('.results div:nth-child(2) span').text());
  number = number + 1;
  $('.results div:nth-child(2) span').text(number);
}

function checkTopRow() {
  if((row1col1.text() == 'X' && row1col2.text() == 'X' && row1col3.text() == 'X') || (row1col1.text() == 'O' && row1col2.text() == 'O' && row1col3.text() == 'O')) {
    return true;
  } else {
    return false;
  }
}

function checkCenterRow() {
  if((row2col1.text() == 'X' && row2col2.text() == 'X' && row2col3.text() == 'X') || (row2col1.text() == 'O' && row2col2.text() == 'O' && row2col3.text() == 'O')) {
    return true;
  } else {
    return false;
  }
}

function checkBottomRow() {
  if((row3col1.text() == 'X' && row3col2.text() == 'X' && row3col3.text() == 'X') || (row3col1.text() == 'O' && row3col2.text() == 'O' && row3col3.text() == 'O')) {
    return true;
  } else {
    return false;
  }
}

function checkDiagonal() {
  if((row1col1.text() == 'X' && row2col2.text() == 'X' && row3col3.text() == 'X') || (row1col1.text() == 'O' && row2col2.text() == 'O' && row3col3.text() == 'O')) {
    return true;
  } else {
    return false;
  }
}

function checkInverseDiagonal() {
  if((row1col3.text() == 'X' && row2col2.text() == 'X' && row3col1.text() == 'X') || (row1col3.text() == 'O' && row2col2.text() == 'O' && row3col1.text() == 'O')) {
    return true;
  } else {
    return false;
  }
}

function checkFirstColumn() {
  if((row1col1.text() == 'X' && row2col1.text() == 'X' && row3col1.text() == 'X') || (row1col1.text() == 'O' && row2col1.text() == 'O' && row3col1.text() == 'O')) {
    return true;
  } else {
    return false;
  }
}

function checkSecondColumn() {
  if((row1col2.text() == 'X' && row2col2.text() == 'X' && row3col2.text() == 'X') || (row1col2.text() == 'O' && row2col2.text() == 'O' && row3col2.text() == 'O')) {
    return true;
  } else {
    return false;
  }
}

function checkThirdColumn() {
  if((row1col3.text() == 'X' && row2col3.text() == 'X' && row3col3.text() == 'X') || (row1col3.text() == 'O' && row2col3.text() == 'O' && row3col3.text() == 'O')) {
    return true;
  } else {
    return false;
  }
}

function checkTied() {
  if(row1col1.html() != '&nbsp;' &&
     row1col2.html() != '&nbsp;' &&
   row1col3.html() != '&nbsp;' &&
 row2col1.html() != '&nbsp;' &&
row2col2.html() != '&nbsp;' &&
row2col3.html() != '&nbsp;' &&
row3col1.html() != '&nbsp;' &&
row3col2.html() != '&nbsp;' &&
row3col3.html() != '&nbsp;') {
    return true;
  } else {
    return false;
  }
}


function getPlayerString() {
  if(Player1){
    return 'X';
  }else {
    return 'O';
  }
}
