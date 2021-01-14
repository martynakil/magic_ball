const ball = document.querySelector('img');
const input = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');

const answersArr = ['Yes!', 'No.', 'Maybe.', 'Hard to say...', 'I dont think you want the answer... :/'];


const shakeBall = () => {

    ball.classList.add('shake-animaton');
    setTimeout(checkInput, 1000)
}

const checkInput = () => {
    if (input.value !== '' && input.value.slice(-1) === '?') {
        generateAnswer();
        error.textContent = '';       
    } else if (input.value !== '' && input.value.slice(-1) !== '?') {
        error.textContent = 'The question must end with ? ';
        answer.textContent = ''        
    } else {
        error.textContent = 'Ask a question!';
        answer.textContent = ''  
    }
    
    ball.classList.remove('shake-animaton');      
}


const generateAnswer = () => {
    const number = Math.floor(Math.random() * 5);
    answer.innerHTML = `<span>Answer:</span> ${answersArr[number]}`
}


ball.addEventListener('click', shakeBall)