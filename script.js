const submitButton1 = document.getElementById('button1');
const commentContainer1 = document.getElementById('comment-container1');
var message1;

submitButton1.onclick = () => {
  let numberInput1 = document.getElementById('number-input1').value;

  // Challenge 1: Use if else condition to store the respective comments in the variable "message1" based on the score input.
  // when the user gives a number input and clicks on the submit button, the respective comments should be displayed.
  // Here are the values and their respective comments
  // Score of less than 0 or more than 100 — “This is not possible. An error has occurred.”
  // Score of 0 to 19 — “That was a terrible score!”
  // Score of 20 to 39 — “You know some things. Needs improvement.”
  // Score of 40 to 69 — “You did a passable job, not bad!”
  // Score of 70 to 89 — “That’s a great score. You really know your stuff.”
  // Score of 90 to 100 — “What an amazing score!”

  // if (score<0, score>100) {
  //   console.log("This is not possible. An error has occurred.");
  // } else if (score>0, score<19) {
  //   console.log("That was a terrible score!");
  // } else if (score>20, score<39) {
  //   console.log("You know some things. Needs improvement.");
  // } else if (score>40, score<69) {
  //   console.log("You did a passable job, not bad!")
  // } else if (score>70, score<89) {
  //   console.log("That’s a great score. You really know your stuff.")
  // } else if (score>90, score<100) {
  //   console.log("What an amazing score!")
  // }
  let score = numberInput1;

  // if (isNaN(score)) {
  //   message1 = "Please enter a valid number for your score.";
  if (score < 0 || score > 100) {
    message1 = "This is not possible. An error has occurred.";
  } else if (score >= 0 && score <= 19) {
    message1 = "That was a terrible score!";
  } else if (score >= 20 && score <= 39) {
    message1 = "You know some things. Needs improvement.";
  } else if (score >= 40 && score <= 69) {
    message1 = "You did a passable job, not bad!";
  } else if (score >= 70 && score <= 89) {
    message1 = "That’s a great score. You really know your stuff.";
  } else if (score >= 90 && score <= 100) {
    message1 = "What an amazing score!";
  } else {
    message1 = "Invalid score";
  }
  
  console.log(message1);
  

  commentContainer1.innerHTML = message1;
};

const submitButton2 = document.getElementById('button2');
const commentContainer2 = document.getElementById('comment-container2');
var message2;

submitButton2.onclick = () => {
  let numberInput2 = document.getElementById('number-input2').value;

  // Challenge 2: Use Switch statements to store the respective comments in the variable "message2" based on the input.
  // when the user gives a number input and clicks on the submit button, the respective comments should be displayed.
  // Here are the values and their respective comments
  // Score of less than 0 or more than 100 — “This is not possible. An error has occurred.”
  // Score of 0 to 19 — “That was a terrible score!”
  // Score of 20 to 39 — “You know some things. Needs improvement.”
  // Score of 40 to 69 — “You did a passable job, not bad!”
  // Score of 70 to 89 — “That’s a great score. You really know your stuff.”
  // Score of 90 to 100 — “What an amazing score!”

  let scores = parseInt(numberInput2);
  let scoreRanges = [
    [-Infinity, 0], // This range handles invalid scores (isNaN)
    [0, 19],
    [20, 39],
    [40, 69],
    [70, 89],
    [90, 100],
  ];
  
  for (let i = 0; i < scoreRanges.length; i++) {
    if (scores >= scoreRanges[i][0] && scores <= scoreRanges[i][1]) {
      switch (i) {
        case 0:
          message2 = "This is not possible. An error has occurred.";
          break;
        case 1:
          message2 = "That was a terrible score!";
          break;
        case 2:
          message2 = "You know some things. Needs improvement.";
          break;
        case 3:
          message2 = "You did a passable job, not bad!";
          break;
        case 4:
          message2 = "That's a great score. You really know your stuff.";
          break;
        case 5:
          message2 = "What an amazing score!";
          break;
      }
      break;
    }
  }  

  commentContainer2.innerHTML = message2;
};
