 const Questionair = [
    {
      question: "Inside which HTML element do we put the JavaScript??",
      a: "<script>",
      b: "<javascript>",
      c: "<js>",
      d: "<scripting>",
      correct: 'a'
    },
    {
      question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
      a: "<script href='xxx.js'>",
      b: "<script name='xxx.js'>",
      c: "<script src='xxx.js'>",
      d: "<script file='xxx.js'>",
      correct: 'c'
    },
    {
      question: " How do you write 'Hello World' in an alert box?",
      a: "msgBox('Hello World');",
      b: "alertBox('Hello World');",
      c: "msg('Hello World');",
      d: "alert('Hello World');",
      correct: 'd'
    },
    {
        question: "What is 10/2?",
          a: '3',
          b: '5',
          c: '115',
          d: '8',
        correct: 'b'
      },
      {
        question: "What is 30/3?",
        
          a: '3',
          b: '5',
          c: '10',
          d:'7',
        
        correct: 'c'
      }
    ];

    

    const currentQuestionEl = document.getElementById("questions");
    const answerEls = document.querySelectorAll(".answer");
    const quiz = document.getElementById("quiz");
    const a_text = document.getElementById("a");
    const b_text = document.getElementById("b");
    const c_text = document.getElementById("c");
    const d_text = document.getElementById("d");
    const submitBtn = document.getElementById("submit");

    let currentQuestion = 0;
    let score = 0;
    
    loadQuiz();

    function selectEl() {
        let answer = undefined; 

        answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
            }
            });

       return answer;
    }
    
    function deselectAnswer() {
        answerEls.forEach((answerEl) => {
            answerEl.checked = false;
        });
    }

    function loadQuiz() {
        deselectAnswer();
        const currentQuizData = Questionair[currentQuestion];
        currentQuestionEl.innerText = currentQuizData.question;
        a_text.innerText = currentQuizData.a;
        b_text.innerText = currentQuizData.b;
        c_text.innerText = currentQuizData.c;
        d_text.innerText = currentQuizData.d;
    }
    submitBtn.addEventListener("click", () => {
        
        const answer = selectEl(); 
        if (answer) {
            if (answer===Questionair[currentQuestion].correct) {
                score++;
            }


            currentQuestion++;
    
            if (currentQuestion < Questionair.length) {
                loadQuiz();
            }else{
                quiz.innerHTML = `<h2>Thank you for taking the quiz, you score ${score}/${Questionair.length}</h2><button onclick='location.reload()'>Take test again</button>`;
            }
        }
    });
   

