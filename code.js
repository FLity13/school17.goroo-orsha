let honorData = [];
let newsData = [];
let honorIndex = 0;
let newsIndex = 0;

// Загрузка JSON данных
async function fetchData() {
    const honorResponse = await fetch('boardOfHonor.json');
    honorData = await honorResponse.json();

    const newsResponse = await fetch('news.json');
    newsData = await newsResponse.json();

    showHonorCard();
    showNewsCard();
}

// Отображение элемента Доски почёта
function showHonorCard() {
    const honorCard = document.getElementById('honor-card');
    const honorItem = honorData[honorIndex];

    honorCard.innerHTML = `
        <img src="${honorItem.img}" alt="Honor">
        <p>${honorItem.description}</p>
    `;
}

// Отображение элемента Новостей
function showNewsCard() {
    const newsCard = document.getElementById('news-card');
    const newsItem = newsData[newsIndex];

    newsCard.innerHTML = `
        <h3>${newsItem.title}</h3>
        <img src="${newsItem.img}" alt="News">
        <p>${newsItem.description}</p>
    `;
}

// Переключение карточек
document.getElementById('prev-honor').addEventListener('click', () => {
    honorIndex = (honorIndex - 1 + honorData.length) % honorData.length;
    showHonorCard();
});

document.getElementById('next-honor').addEventListener('click', () => {
    honorIndex = (honorIndex + 1) % honorData.length;
    showHonorCard();
});

document.getElementById('prev-news').addEventListener('click', () => {
    newsIndex = (newsIndex - 1 + newsData.length) % newsData.length;
    showNewsCard();
});

document.getElementById('next-news').addEventListener('click', () => {
    newsIndex = (newsIndex + 1) % newsData.length;
    showNewsCard();
});

// Анимация для переключения
function animateCard(cardElement) {
    cardElement.style.transform = 'translateX(100%)';
    setTimeout(() => {
        cardElement.style.transform = 'translateX(0)';
    }, 300);
}

// Инициализация данных при загрузке
fetchData();