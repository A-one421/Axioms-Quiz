const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const nextButton = document.getElementById('next');
const timerDisplay = document.getElementById('timer');

const questions = [
  {
    question: " What comes next in the sequence? 2, 4, 8, 16, ___",
    answers: {
      a: "18",
      b: "32",
      c: "24",
      d: "18"
    },
    correctAnswer: "b"
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    answers: {
      a: "Gold",
      b: "Oxygen",
      c: "Osmium",
      d: "Oxide"
    },
    correctAnswer: "b"
  },
  {
    question: " What is the next odd number after 97??",
    answers: {
      a: "98",
      b: "99",
      c: "100",
      d: "101"
    },
    correctAnswer: "b"
  },
  {
    question: "	Jacks Buys 1 ½ kg of potatoes and ½ kg of carrots. How much change does he get from £5 ?",
    image: "https://i.ibb.co/gLwgWB0Y/joy.jpg",
    answers: {
      a: "1.885",
      b: "1.85",
      c: "2.25",
      d: "I don't know ( In samuel's voice)"
    },
    correctAnswer: "b"
  },
  {
    question: " A train leaves every 20 minutes. The first train is at 06:00. What time is the 5th train?",
    answers: {
      a: "07:20",
      b: "07:00",
      c: "07:40",
      d: "08:00"
    },
    correctAnswer: "a"
  },
  {
    question: " A number is multiplied by 3 and then 6 is subtracted. The result is 15. What is the number?",
    answers: {
      a: "8",
      b: "7",
      c: "5",
      d: "6"
    },
    correctAnswer: "b"
  },
  {
    question: " In a code language, STAR is written as TSAR. How is RAIL written in the same code?",
    answers: {
      a: "ARIL",
      b: "IARL",
      c: "ARLI",
      d: "RIAL"
    },
    correctAnswer: "c"
  },
  {
    question: " . If 3 cats catch 3 mice in 3 minutes, how many cats are needed to catch 100 mice in 100 minutes (assuming same rate)?",
    answers: {
      a: "4",
      b: "100",
      c: "3",
      d: "9"
    },
    correctAnswer: "c"
  },
  {
    question: " 3.207 x 100 = ___ x 10",
    answers: {
      a: "32.07",
      b: "320.07",
      c: "312.07",
      d: "None"
    },
    correctAnswer: "a"
  },
  {
    question: " What;s the price of the butter? , if Success pays for the four items with a $10 note. She receives $3.85 change.",
    image: "https://i.ibb.co/TD8ZxkG0/butter.jpg", 
    answers: {
      a: "2.60",
      b: "incomplete question",
      c: "3.00",
      d: "2.50"
    },
    correctAnswer: "d"
  },
  {
    question: " A hall has 1250 seats, At 7pm, 880 seats are filled. At 8pm, there are 40 empty seats, How many seats were filled between 7pm - 8pm?",
    answers: {
      a: "250",
      b: "300",
      c: "330",
      d: "...."
    },
    correctAnswer: "c"
  },
  {
    question: " Each day, a school has  break from 10:15 am to 10:30 am ,  lunchtime from 12:40 pm to 1:30 pm. What is the total time the school has for breaks and lunchtime in a 5 - day week?",
    answers: {
      a: "300 minutes",
      b: "325 minutes",
      c: "200 minutes",
      d: "100 minutes"
    },
    correctAnswer: "b"
  },
  {
    question: "",
    image: "https://i.ibb.co/twZmZDwf/mean.jpg", 
    answers: {
      x: "What is the mean distance they travel everyday?",
      a: "2.77",
      b: "none",
      c: "2.7"
    },
    correctAnswer: "c"
  },
  {
    question: "",
    image: "https://i.ibb.co/nqTdvjMP/circum.jpg",
    answers: {
      x: " What is the distance form a to b if the perimeter is 60cm ?",
      a: "10",
      b: "16",
      c: "25"
    },
    correctAnswer: "a"
  },
  {
    question: " ",
    image: "https://i.ibb.co/Hk3007X/concentruc.jpg", 
    answers: {
      x: "What's the value for y?",
      a: "15",
      b: "90",
      c: "75"
    },
    correctAnswer: "a"
  },
  {
    question: "",
    image: "https://i.ibb.co/Txj8zgS9/cds.jpg",
    answers: {
      x: "How many CDs were sold on friday?",
      b: "48",
      c: "52",
      d: "50"
    },
    correctAnswer: "c"
  },
  {
    question: " If x=3, what;s the value of 3x + 5",
    answers: {
      a: "98",
      b: "99",
      c: "14",
      d: "13"
    },
    correctAnswer: "c"
  },
  {
    question: " WWhich of the following expression is equivalent to 3(a+2) -2a",
    answers: {
      a: "a+4",
      b: "a+6",
      c: "a-4",
      d: "a-6"
    },
    correctAnswer: "b"
  },
  {
    question: " The mean of total number is 12 what;s the total sum of the numbers",
    answers: {
      a: "60",
      b: "30",
      c: "12",
      d: "10"
    },
    correctAnswer: "a"
  },
  {
    question: " 2x + 1= 13, What's the value of x",
    answers: {
      a: "7",
      b: "6",
      c: "10",
      d: "-6"
    },
    correctAnswer: "b"
  },
  {
    question: " Find the simple interest on $5000 for 2 years at a rate of 5% per annum",
    answers: {
      a: "450",
      b: "500",
      c: "5000",
      d: "520"
    },
    correctAnswer: "b"
  },
  {
    question: " The probability of picking a red ball is 3/5 what's the probability of not picking red ball?",
    answers: {
      a: "2/5",
      b: "1/5",
      c: "3/5",
      d: "4/5"
    },
    correctAnswer: "a"
  },
  {
    question: " Convert 0.75 to fraction in its lowest term",
    answers: {
      a: "1/2",
      b: "3/4",
      c: "4/5",
      d: "75/100"
    },
    correctAnswer: "b"
  },
  {
    question: " The differnce between the square of 7 and square of 5 is?",
    answers: {
      a: "77",
      b: "20",
      c: "24",
      d: "5"
    },
    correctAnswer: "c"
  },
  {
    question: " 1.	The following are properties of a square except:",
    answers: {
      a: " All four sides are equal",
      b: " All four sides are equal",
      c: "Each angle is 90 degrees",
      d: "Only one pair of sides equal"
    },
    correctAnswer: "d"
  },
  {
    question: " 2.	Express 1101₂ in base 10:",
    answers: {
      a: "11",
      b: "10",
      c: "13",
      d: "54"
    },
    correctAnswer: "c"
  },
  {
    question: " 	A line drawn from the centre of a circle to any point on the circumference is called a/an:",
    answers: {
      a: " long chord",
      b: "radius",
      c: "Diameter",
      d: "square"
    },
    correctAnswer: "c"
  },
  {
    question: "Which is logically equivalent to If not P then not Q", 
    answers: {
      a: " IF P THEN Q",
      b: "IF Q THEN P",
      c: "IF Q THEN NOT P",
      d: "IF NOT Q THEN NOT P"
    },
    correctAnswer: "a"
  },
  {
    question: " 	In a class of 30 students, 18 play football and 12 play basketball. If 5 students play both, how many play neither?",
    answers: {
      a: " 5",
      b: "3",
      c: "7",
      d: "10"
    },
    correctAnswer: "a"
  },
  {
    question: " If 3 pencils cost ₦30, how much will 7 pencils cost at the same rate?",
    answers: {
      a: " ₦60",
      b: "₦70",
      c: "₦80",
      d: "₦90"
    },
    correctAnswer: "b"
  },
  {
    question: " If 7x = 42, what is the value of 14x – 21?",
    answers: {
      a: " long 63",
      b: "65",
      c: "64",
      d: "67"
    },
    correctAnswer: "a"
  },
  {
    question: " If two statements are contradictory, then:",
    answers: {
      a: " Both are true",
      b: " Both are false",
      c: "One is true and one is false",
      d: "They are irrelevant"
    },
    correctAnswer: "c"
  },
  {
    question: " Which of these is always true for any even number?",
    answers: {
      a: " it ends with 5",
      b: "it is a multiple of 3",
      c: "it is divisible by 2",
      d: "it is less than 10"
    },
    correctAnswer: "c"
  },
  {
    question: " 	A line drawn from the centre of a circle to any point on the circumference is called a/an:",
    answers: {
      a: " long chord",
      b: "radius",
      c: "Diameter",
      d: "square"
    },
    correctAnswer: "b"
  },
  {
    question: " 	A line joining two point on a circle and passes through the center is called?",
    answers: {
      a: " long chord",
      b: "radius",
      c: "Diameter",
      d: "square"
    },
    correctAnswer: "c"
  },
  {
    question: " 	 If 2 + x = 7, what is the value of x? ",
    answers: {
      a: "4",
      b: "5",
      c: "6",
      d: "7"
    },
    correctAnswer: "b"
  },
  {
    question: "  If 5 pens cost ₦100, what is the cost of 1 pen?",
    answers: {
      a: "10",
      b: "15",
      c: "20",
      d: "25"
    },
    correctAnswer: "c"
  },
  {
    question: " 	 Which is the odd one out?",
    answers: {
      a: "3",
      b: "5",
      c: "7",
      d: "9"
    },
    correctAnswer: "d"
  },
  {
    question: " 42	In an examination, 35 out of 125 students failed. What percentage passed?", 
        answers: {
      a: "62",
      b: "72",
      c: "70",
      d: "9"
    },
    correctAnswer: "b"
  },
  
  {
    question: "The distance from point P to point R is 800m, The distance from p to q is 4 times the distance from point q to R. What is the distance from point Q to R?",
    image: "https://i.ibb.co/r29MH6Sg/scale.jpg",
    answers: {
      a: "200",
      b: "600",
      c: "640m",
      d: "540"
    },
    correctAnswer: "c"
  }
];

let currentQuestion = 0;
let score = 0;

function showQuestion(index) {
  const q = questions[index];
  const answers = [];

  for (let letter in q.answers) {
    answers.push(
      `<label>
        <input type="radio" name="question" value="${letter}">
        ${letter}: ${q.answers[letter]}
      </label><br>`
    );
  }

  const imageHtml = q.image ? `<img src="${q.image}" alt="Question Image" style="max-width:100%; margin-top:10px;">` : "";

  quizContainer.innerHTML = `
    <div class="question">
      <p><strong>${index + 1}. ${q.question}</strong></p>
      ${imageHtml}
      <div class="answers">${answers.join('')}</div>
    </div>
  `;

  if (index === questions.length - 1) {
    nextButton.textContent = 'Submit';
  }
}

function showResults() {
  quizContainer.innerHTML = '';
  nextButton.style.display = 'none';
  resultsContainer.innerHTML = `You scored ${score} out of ${questions.length}.`;
}

function startTimer(duration) {
  let timeLeft = duration;
  const timer = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `Time Left: ${minutes}:${seconds.toString().padStart(2, '0')}`;

    if (--timeLeft < 0) {
      clearInterval(timer);
      showResults();
    }
  }, 1000);
}

nextButton.addEventListener('click', () => {
  const selected = document.querySelector('input[name=question]:checked');
  if (!selected) {
    alert("Please select an answer.");
    return;
  }

  if (selected.value === questions[currentQuestion].correctAnswer) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion(currentQuestion);
  } else {
    showResults();
  }
});

startTimer(2700);
showQuestion(currentQuestion);
