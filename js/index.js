const audio = document.getElementById("myAudio");
var answer = 0;
var selectedOperation = "ADD";

window.onload = () => {
  createEquation();

  const addBtn = document.getElementById("add");
  const subtractBtn = document.getElementById("subtract");
  const multiplyBtn = document.getElementById("multiply");
  const divideBtn = document.getElementById("divide");
  addBtn.className = "selected";

  addBtn?.addEventListener("click", () => {
    selectedOperation = "ADD";
    addBtn.className = "selected";
    subtractBtn.className = "";
    multiplyBtn.className = "";
    divideBtn.className = "";
    createEquation();
  });

  subtractBtn?.addEventListener("click", () => {
    selectedOperation = "SUBTRACT";
    subtractBtn.className = "selected";
    addBtn.className = "";
    multiplyBtn.className = "";
    divideBtn.className = "";
    createEquation();
  });

  multiplyBtn?.addEventListener("click", () => {
    selectedOperation = "MULTIPLY";
    multiplyBtn.className = "selected";
    addBtn.className = "";
    subtractBtn.className = "";
    divideBtn.className = "";
    createEquation();
  });

  divideBtn?.addEventListener("click", () => {
    selectedOperation = "DIVIDE";
    divideBtn.className = "selected";
    addBtn.className = "";
    multiplyBtn.className = "";
    subtractBtn.className = "";
    createEquation();
  });
};

const createEquation = () => {
  var option1 = document.getElementById("option1");
  var option2 = document.getElementById("option2");
  var option3 = document.getElementById("option3");
  var operation = document.getElementById("operation");
  var result = document.getElementById("result");

  result.innerHTML = "";

  var num1 = 0;
  var num2 = 0;
  var ans1 = 0;
  var ans2 = 0;
  var allAnswers = [];
  var switchAnswers = [];
  var correctAnswer = 0;

  if (selectedOperation == "ADD") {
    num1 = Math.floor(Math.random() * 16);
    num2 = Math.floor(Math.random() * 16);
    ans1 = Math.floor(Math.random() * 14);
    ans2 = Math.floor(Math.random() * 14);
    correctAnswer = eval(num1 + num2);

    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;

    allAnswers = [correctAnswer, ans1, ans2];
  }

  if (selectedOperation == "SUBTRACT") {
    operation.innerHTML = "-";
    num1 = Math.floor(Math.random() * 16);
    num2 = Math.floor(Math.random() * 16);
    ans1 = Math.floor(Math.random() * 14);
    ans2 = Math.floor(Math.random() * 14);

    if (num1 > num2) {
      correctAnswer = eval(num1 - num2);
      document.getElementById("num1").innerHTML = num1;
      document.getElementById("num2").innerHTML = num2;
    } else {
      correctAnswer = eval(num2 - num1);
      document.getElementById("num1").innerHTML = num2;
      document.getElementById("num2").innerHTML = num1;
    }
    allAnswers = [correctAnswer, ans1, ans2];
  }

  if (selectedOperation == "MULTIPLY") {
    operation.innerHTML = "x";
    num1 = Math.floor(Math.random() * 10);
    num2 = Math.floor(Math.random() * 10);
    ans1 = Math.floor(Math.random() * 100);
    ans2 = Math.floor(Math.random() * 100);

    correctAnswer = eval(num1 * num2);
    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;
    allAnswers = [correctAnswer, ans1, ans2];
  }

  if (selectedOperation == "DIVIDE") {
    operation.innerHTML = "/";
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    ans1 = Math.floor(Math.random() * 10) / 10;
    ans2 = Math.floor(Math.random() * 10);

    if (num1 > num2) {
      correctAnswer = eval(num1 / num2);
      document.getElementById("num1").innerHTML = num1;
      document.getElementById("num2").innerHTML = num2;
    } else {
      correctAnswer = eval(num2 / num1);
      document.getElementById("num1").innerHTML = num2;
      document.getElementById("num2").innerHTML = num1;
    }
    allAnswers = [correctAnswer, ans1, ans2];

    if (Number.isInteger(correctAnswer) == false) {
      correctAnswer = correctAnswer.toFixed(1);
    }

    allAnswers = [correctAnswer, ans1, ans2];
  }
  for (i = allAnswers.length; i--; ) {
    switchAnswers.push(
      allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]
    );
  }
  option1.innerHTML = switchAnswers[0];
  option2.innerHTML = switchAnswers[1];
  option3.innerHTML = switchAnswers[2];

  option1.addEventListener("click", function () {
    if (option1.innerHTML == correctAnswer) {
      result.className = "correctresult";
      result.innerHTML = "Answer is Correct!!";
      setTimeout(() => {
        createEquation();
      }, 2000);
    } else {
      result.className = "wrongresult";
      result.innerHTML = "Answer is Wrong. Please try again!";
      //audio.play();
    }
  });

  option2.addEventListener("click", function () {
    if (option2.innerHTML == correctAnswer) {
      result.className = "correctresult";
      result.innerHTML = "Answer is Correct!!";
      setTimeout(() => {
        createEquation();
      }, 2000);
    } else {
      result.className = "wrongresult";
      result.innerHTML = "Answer is Wrong. Please try again!";
      //audio.play();
    }
  });

  option3.addEventListener("click", function () {
    if (option3.innerHTML == correctAnswer) {
      result.className = "correctresult";
      result.innerHTML = "Answer is Correct!!";
      setTimeout(() => {
        createEquation();
      }, 2000);
    } else {
      result.className = "wrongresult";
      result.innerHTML = "Answer is Wrong. Please try again!";
      //audio.play();
    }
  });
};
