const adviceId = document.querySelector('.advice-id .id span');
const advice = document.querySelector('.advice-text blockquote');

const URL = 'https://api.adviceslip.com/advice';

const clickEvent = document.querySelector('.button');

clickEvent.addEventListener('click', (e) => {
    getRandomAdvice().then((res) => {
        adviceId.innerHTML = res.slip.id;
        advice.innerHTML = res.slip.advice;
        console.log(res.slip);
    });
});

getRandomAdvice = async () => {
    try {
        const response = await fetch(URL);
        if (response.ok) {
            const advice = response.json();
            return advice;
        } else {
            console.error('Something went wrong');
        }
    } catch (error) {
        console.log(error);
    }
};

getRandomAdvice().then((res) => {
    adviceId.innerHTML = res.slip.id;
    advice.innerHTML = res.slip.advice;
    console.log(res.slip);
});
