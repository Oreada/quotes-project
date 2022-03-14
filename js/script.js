console.log("1) Вёрстка +10;\n2) При загрузке страницы приложения отображается рандомная цитата +10;\n3) При перезагрузке страницы цитата обновляется (заменяется на другую) +10\n4) Есть кнопка, при клике по которой цитата обновляется (заменяется на другую) +10\n5) Смена цитаты сопровождается любым другим эффектом +10\n6) Можно выбрать один из двух языков отображения цитат: en/ru +10\n\nОбщий балл: 60");
const buttonEn = document.querySelector(".visual__buttonEn");
const buttonRu = document.querySelector(".visual__buttonRu");

const quoteText = document.querySelector(".content__text");
const quoteAuthor = document.querySelector(".content__author");

const image = document.querySelector(".visual__image");

const url = 'https://type.fit/api/quotes/';
const urlLocal = 'quotes.json';
let counter = Math.ceil(Math.random() * 20);

async function getQuoteEn() {
    changePicture()
    const res = await (fetch(url));
    const quotes = await res.json();

    let quoteRandom = quotes[Math.floor(Math.random() * quotes.length)];

    quoteText.textContent = quoteRandom.text;
    if (quoteRandom.author === null) {
        quoteAuthor.textContent = 'Folk wisdom';
    } else {
        quoteAuthor.textContent = quoteRandom.author;
    };
};
// getQuoteEn();  //! закомментировала, чтобы по умолчанию загружались цитаты на русском из json-файла

//! из json-файла
async function getQuoteRu() {
    changePicture()
    const res = await fetch(urlLocal);
    const quotes = await res.json();

    let quoteRandom = quotes[Math.floor(Math.random() * quotes.length)];

    quoteText.textContent = quoteRandom.text;
    if (quoteRandom.author === null) {
        quoteAuthor.textContent = 'Folk wisdom';
    } else {
        quoteAuthor.textContent = quoteRandom.author;
    };
}
getQuoteRu();

//! навешиваю события на кнопки

buttonEn.addEventListener("click", getQuoteEn);
buttonRu.addEventListener("click", getQuoteRu);

//! смена картинки при смене цитаты

function changePicture() {
    image.style.backgroundImage = `url(img/main/levitan_${counter}.jpg)`;
    if (counter < 20) {
        counter += 1;
    } else {
        counter = 1;
    };
};



