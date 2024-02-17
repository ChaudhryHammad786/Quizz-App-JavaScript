// creating functions 
// creating object for questions 
const questions = [
    {
        // taking questions 
        // created particular object in which we have one question  
        'que':"Which of the following is a markup language?",
        'a':"HTML",
        'b':"CSS",
        'c':"JavaScript",
        'd':"PHP",
        'correct' :"a"
        
    },
    {
        // taking questions 
        // created particular object in which we have one question  
        'que':'What year was JavaScript Launched?',
        'a':"1996",
        'b':"1995",
        'c':"1994",
        'd':"none of the above",
        'correct' :"b"
        
    },
    {
        // taking questions 
        // created particular object in which we have one question  
        'que':"What does CSS Stand for?",
        'a':"Hypertext Markup Language",
        'b':"Cascading Style Sheet",
        'c':"Jason Object Notation",
        'd':"All of the above",
        'correct' :"b"
        
    },
    {
        // taking questions 
        // created particular object in which we have one question  
        'que':"Inside which HTML element do we put the JavaScript?",
        'a':"js",
        'b':"scripting",
        'c':"script",
        'd':"javascript",
        'correct' :"c"
        
    },
    {
        // taking questions 
        // created particular object in which we have one question  
        'que':"How to write an IF statement in JavaScript?",
        'a':"if i = 5 then",
        'b':" if i == 5 then",
        'c':"if i = 5",
        'd':"if (i == 5) ",
        'correct' :"d"
        
    }
]



// function loadQuestion 
// it is arrow function that loads
// and which question load ?
let index=0; // 1st question load then next all
let total = questions.length;
let right =0;
let wrong=0;

// creating variable and selector quesBox ko pass kar diya
const quesBox = document.getElementById('quesBox');
const optionInputs = document.querySelectorAll('.options');
const loadQuestion = () =>{
    if(index === total)
    {
        return endQuiz();
    }
    reset();
    // index Value ?
    // data nikalain ga questions k index ma sa 
    const data = questions[index];
     console.log(data);
    quesBox.innerText=  data.que;
    optionInputs[0].nextElementSibling.innerText=data.a;
    optionInputs[1].nextElementSibling.innerText=data.b;
    optionInputs[2].nextElementSibling.innerText=data.c;
    optionInputs[3].nextElementSibling.innerText=data.d;
}

// it checks ans 
const submitQuiz =() =>{
    const data = questions[index];
    const ans= getAnswer();
    if(ans === data.correct)
    {
        right++;

    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
    
}

const getAnswer =() =>{
    let answer ;
    optionInputs.forEach(
        (input)=>{
            if(input.checked)
            {
                answer= input.value ;
                
            }

        }
    )
    return answer;

}

const reset=() =>{
    optionInputs.forEach(
        (input)=>{
            input.checked = false ;
            

        }
    )

}
// ... (your existing code)

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
        <h2>Thank You For the Quiz</h2>
        <h3>${right} / ${total} are correct</h3>
    `;
}

// ... (your existing code)

// initial call page load hoty ee function call ho gya
loadQuestion();