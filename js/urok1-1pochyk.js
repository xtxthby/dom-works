// import products from './data/product.js';
import transaction from './data/transaction.js';
import transactionHistory from './data/transaction.js';
// console.log(products);




// назва змінної і підключення до
// тегу, класу, id
// повертае перший елемент який найде

// const navEl = document.querySelector('ul');
// console.log(navEl);

// якщо селектор треба ставити перед ним крапку

// const navItemEl = document.querySelector('.site-nav__item');
// console.log(navItemEl);


// для того щоб знайти усі елементи наприклад li

// const navEl = document.querySelectorAll('li');
// console.log(navEl);

// знайти селектори які знаходяться в середені navEl
// прицьому документ вже непотрібен, поверне масив
// const navEl = document.querySelector('.site-nav');
// console.log(navEl);

// const navLinksEl = navEl.querySelectorAll('.site-nav__link');
// console.log(navLinksEl);

// те саме що вище
// const navLinksEl = document.querySelectorAll('.site-nav .site-nav__link');
// console.log(navLinksEl);


// тепер поставимо на кнопку і він спрацюе при натисканні
const magicBtn = document.querySelector('.js-magic-btn');

// magicBtn.addEventListener('click', () => {
//     const navEl = document.querySelector('.site-nav');
//     console.log(navEl);

//     const navLinksEl = document.querySelectorAll('.site-nav__link');
//     console.log(navLinksEl);
// });


//  const navEl = document.querySelector('.site-nav');
//     console.log(navEl);

//     const navLinksEl = document.querySelectorAll('.site-nav__link');
//     console.log(navLinksEl);


// вибрати картинку і поставити на кнопку , змінити назву
//  в альті
// magicBtn.addEventListener('click', () => {
//     const imageEl = document.querySelector('.hero__image');

//     console.log(imageEl);
//     // можемо вибрати атрибут
//     console.log(imageEl.src);
//     // також можна картинку замінити
//     imageEl.src = "https://placeimg.com/400/200/nature"
//     imageEl.alt = 'Це нова картинка'
// });






// вибор та заміна
// const imageEl = document.querySelector('.hero__image');

// console.log(imageEl);
// можемо вибрати атрибут
// console.log(imageEl.src);
// також можна картинку замінити
// imageEl.src = "https://placeimg.com/400/200/nature"
// imageEl.alt = 'Це нова картинка'
// .заміна назви через = textContent =
// const heroTitleEl = document.querySelector('.hero__title');
// // дивимося запис в тегі в середині <h1>....</h1>
// console.log('heroTitleEl', heroTitleEl);
// console.log(heroTitleEl.textContent);
// // тепер заміна
// heroTitleEl.textContent = 'Я солодкий як цукерка'
// console.log(heroTitleEl.textContent);



// атрибути і методи

// const imageEl = document.querySelector('.hero__image');
// imageEl.src = "https://placeimg.com/400/200/nature"
// imageEl.alt = 'Це нова картинка'


// getAttribute атрибут повертає цого значення
// imageEl.getAttribute('src')
// console.log(imageEl.getAttribute('src'));

// видалити атрибут src
// imageEl.removeAttribute('src');

// атрибут =has= який показує чи є або немає атрибуту
// true або  false
// console.log(imageEl.hasAttribute('src'));



// дата атрибути і їх значкння
// /* <div class="actions js-actions"></div> */ другий селектор вказує
// на те що він для js

// в середені класу знайди любу кнопку
// const actions = document.querySelectorAll('.js-actions button');
// console.log(actions);
// // а тут визвали першу
// console.log(actions[0]);
// // тут знаходимо значення який знаходиться на дата-атрибуті {action: 'add'}
// //       =dataset=
// console.log(actions[0].dataset);
// // якщо хочу ключ 'add' від data-action
// console.log(actions[0].dataset.action);
// // можна так
// console.log(actions[0].getAttribute('data-action'));



// як додати стилі    =classLis=

// const navEl = document.querySelector('.site-nav');
// console.log(navEl.classList);
// додати клас на ul
// navEl.classList.add('super-cool');
// ще один через кому
// navEl.classList.add('super-cool', 'super-star');



// тепер видалемо клас а не селекток
// бо ми його додали
// navEl.classList.remove('super-star');


// тепер якщо такого класу немає то додасть
// якщо є прибере
//  =toggle=
// navEl.classList.toggle('cat');

// можна по кліку
// magicBtn.addEventListener('click', () => {
//     navEl.classList.toggle('cat');
// });


// заміна старого класу на новий
//     =replace=
// navEl.classList.replace('super-cool', 'super-bar');


// перевірка чи є такий клас
//  видає true або false
//    =contains=
// console.log(navEl.classList.contains('qwe'));




// шукаємо селектор href по атрибуту
// const currentPageUrl = '/portfolio';
// const linkEl = document.querySelector(
//     `.site-nav__link[href = '${currentPageUrl}']`,
// );

// console.log(linkEl);
// додати селектор з кольором до класу

// linkEl.classList.add('site-nav__link--current');






// навігація по дому DOM
// const navEl = document.querySelector('.site-nav');

// // const firstNavItemEl = navEl.querySelector(".site-nav__iten");
// // тепер по дом навігаціі
// const firstNavItemEl = navEl.firstElementChild;
// console.log(firstNavItemEl);

// // тепер усі діти ul
// console.log(navEl.children);
// // отримати по індексу
// console.log(navEl.children[1]);
// // останній елемент
// console.log(navEl.lastElementChild);



// створення елементів
//   =createElement=
// по тегу

// const titleEl = document.createElement('h1');
// titleEl.classList.add('page-title');
// titleEl.textContent = 'Це заголовок сторінки';
// він є зараз тільки впам'яті
// console.log(titleEl);

// тепер додамо в розмітку
// ===appendChild===
// через визов батька body
// він вуде в самому кінці після скрипта
// document.body.appendChild(titleEl);



// додамо картинку

// const imageEl = document.createElement('img');
// imageEl.src = 'https://placeimg.com/400/200/nature';
// imageEl.alt = 'Це нова картинка';
// imageEl.width = 600;
// те саме
// imageEl.setAttribute('width', 600);
// console.log(imageEl);
// document.body.appendChild(imageEl);



//  додаємо картинку
// const heroEl = document.querySelector('.hero');
// спочатку заголовок
// heroEl.appendChild(titleEl);
//  потім картинку
// heroEl.appendChild(imageEl);



// додамо новий пункт меню
// const navItemEl = document.createElement('li');
// navItemEl.classList.add('site-nav__iten');
// console.log(navItemEl);
// const nawLinkEl = document.createElement('a');
// nawLinkEl.classList.add('site-nav__link');
// nawLinkEl.textContent = 'Особистий кабінет';
// nawLinkEl.href = '/profile';
// console.log(nawLinkEl);


// тепер вкладемо 'a' в 'li'
// navItemEl.appendChild(nawLinkEl);
// console.log(navItemEl);

// далі впихнути в розмітку
// останнім
// const navEl = document.querySelector('.site-nav');
// navEl.appendChild(navItemEl);


// додати попереду
//   ==insertBefore==
// і вказуємо перед ким
// navEl.insertBefore(navItemEl, navEl.firstElementChild);
//  перед останнім
// navEl.insertBefore(navItemEl, navEl.lastElementChild);
// стане перед третім
// navEl.insertBefore(navItemEl, navEl.children[2]);




// метод в якому ми можемо поставити стільки
// елементів скільки ми хочемо через запяту
// і в тому порядку який нам потрібен
// .елементи повинні бути незалежні
//  те що було вище
// heroEl.append(titleEl, imageEl);



 
// побудова колекції

// const colorPickerOptions = [
//     {label: 'red', color: '#F44336'},
//     {label: 'green', color: '#4CAF50'},
//     {label: 'blue', color: '#2396F3'},
//     {label: 'grey', color: '#587088'},
//     {label: 'pink', color: '#E91E63'},
//     {label: 'indigo', color: '#3F5185'},
// ]
//  будуємо кнопки
// поки одна
// const option = colorPickerOptions[0];

// const buttonEl = document.createElement('button');
// buttonEl.type = 'button';
// buttonEl.textContent = option.label;
// buttonEl.style.backgroundColor = option.color;

// console.log(buttonEl);


// тепер багато старим методом

// const colorPickerContainerEl = document.querySelector('.js-color-picker');

// const elements = [];
// for (let i = 0; i < colorPickerOptions.length; i += 1) {
//     const option = colorPickerOptions[i];

//     const buttonEl = document.createElement('button');
//     buttonEl.type = 'button';
//     buttonEl.classList.add('color-picker__option');
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;

//     elements.push(buttonEl);

// };

// console.log(elements);
// тепер беремо колекцію і розпилюємо

// colorPickerContainerEl.append(...elements);


// тепер новий метод

// const colorPickerContainerEl = document.querySelector('.js-color-picker');
// // мар перебірає в оption
// const elements = colorPickerOptions.map(option => {

//     const buttonEl = document.createElement('button');
//     buttonEl.type = 'button';
//     buttonEl.classList.add('color-picker__option');
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;

//     return buttonEl;

// });
// console.log(elements);
// colorPickerContainerEl.append(...elements);



// тепер через функцію
// const colorPickerContainerEl = document.querySelector('.js-color-picker');
// const makeColorPickerOption = options => {
//     return options.map(option => {
//         const buttonEl = document.createElement('button');
//         buttonEl.type = 'button';
//         buttonEl.classList.add('color-picker__option');
//         buttonEl.textContent = option.label;
//         buttonEl.style.backgroundColor = option.color;


//         return buttonEl;
//     })
// }

// const elements = makeColorPickerOption(colorPickerOptions);
// colorPickerContainerEl.append(...elements);




// будуємо кусок розмітки

// const product = {
//     name: 'Сервоприводи',
//     description:
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//     price: 2000,
//     available: true,
//     onSale: true,
// };

// <arrticle class='product'>
// <h2 class='product__name'>Назва</h2>
// <p class='product__descr'>Опис</p>
// <p product__pridct>Вартість:</p>
// </arrticle>

// const productEl = document.createElement('article');
// productEl.classList.add('product');

// const nameEl = document.createElement('h2');
// nameEl.textContent = product.name;
// nameEl.classList.add('product__name');

// const descrEl = document.createElement('p');
// descrEl.textContent = product.description;
// descrEl.classList.add('product__descr');

// const priceEl = document.createElement('p');
// priceEl.textContent = `Вартість: ${product.price}`;
// priceEl.classList.add('product__price');

// console.log(productEl);
// console.log( nameEl);
// console.log(descrEl);
// console.log(priceEl);

// передамо всі тегі в один
 
// productEl.append(nameEl, descrEl, priceEl);
// console.log(productEl);




// тепер з масивом обєктів
//  <script src="./js/urok1-1pochyk.js" type="module"></script>
// щоб зняти оболонку з type="module" використовуэмо
// =====export default=====
//  тут ми етспортуэмо масив

// щоб імпортувати тобіш я хочу використовувати
// з другої папки в цій дані
// ця запис робиться з самого верху
// import products from './data/product.js';
// console.log(products);

// export default [
//     {
//     name: 'Сервоприводи',
//     description:
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//     price: 2000,
//     available: true,
//     onSale: true,
//     },
//      {
//     name: 'Генератор приводу',
//     description:
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//     price: 2000,
//     available: false,
//     onSale: false,
//     },
//       {
//     name: 'Нульовий елемент',
//     description:
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//     price: 2000,
//     available: true,
//     onSale: false,
//     },
//        {
//     name: 'Титаніум',
//     description:
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//     price: 2500,
//     available: false,
//     onSale: false,
//     },
// ]



// напишемо функцію яка будує один обєкт
// яка будує одну картку продукту
// console.log(products);


// підклбчення
// const productsContainerEl = document.querySelector('.js-products')

// const makeProductCard = ({name, description, price}) => {
//     const productEl = document.createElement('article');
//     productEl.classList.add('product');

//     const nameEl = document.createElement('h2');
//     nameEl.textContent = name;
//     nameEl.classList.add('product__name');

//     const descrEl = document.createElement('p');
//     descrEl.textContent = description;
//     descrEl.classList.add('product__descr');

//     const priceEl = document.createElement('p');
//     priceEl.textContent = `Вартість: ${price}`;
//     priceEl.classList.add('product__price');

//     productEl.append(nameEl, descrEl, priceEl);

//     return productEl;

// }

// console.log(makeProductCard(products[0]));




// тепер через map

// const elements = products.map(({ name, description, price }) => {
//      const productEl = document.createElement('article');
//     productEl.classList.add('product');

//     const nameEl = document.createElement('h2');
//     nameEl.textContent = name;
//     nameEl.classList.add('product__name');

//     const descrEl = document.createElement('p');
//     descrEl.textContent = description;
//     descrEl.classList.add('product__descr');

//     const priceEl = document.createElement('p');
//     priceEl.textContent = `Вартість: ${price}`;
//     priceEl.classList.add('product__price');

//     productEl.append(nameEl, descrEl, priceEl);

//     return productEl;
// });
// console.log(elements);


// тепер запис коротша . підключення з верху

// const elements = products.map(makeProductCard);

// console.log(elements);

// додаэмо в розмітку

// productsContainerEl.append(...elements);



// Свойства ====innerHTML=====


// const titleEl = document.querySelector('.title')

// console.log(titleEl.textContent);
// // Поки однаково   Це заголовок
// console.log(titleEl.innerHTML);

// але якщо до розмітки в середину додати
// наприклад спан
//  то буде інакше   Це <span>заголовок</span>

// тепер перезапишемо назву

// titleEl.innerHTML = 'Публікація';

// тепер хочу передати ссилку
// ми побачимо в розмітці тег (а)

// titleEl.innerHTML = '<a href="">Це ссилка</a>';

// тепер очистимо h1

// titleEl.innerHTML = '';


// /тепер додамо до  спан + а
//  але це погано не використовувати
// titleEl.innerHTML += '<a href="">Це ссилка</a>';


//  додати сусідній html
// ====.insertAdjacentHTML ====
// ставимо пред тегом h1

// titleEl.insertAdjacentHTML('beforebegin', '<a href="">Це ссилка</a>');

// // ставимо після
// titleEl.insertAdjacentHTML('afterend', '<a href="">Це ссилка</a>');


// // ставить в одну лінію попереду
// titleEl.insertAdjacentHTML('afterbegin', '<a href="">Це ссилка</a>');

// // ставить в одну лінію gjpfle
// titleEl.insertAdjacentHTML('beforeend', '<a href="">Це ссилка</a>');





// /* <tr>
// <td>ID трансакції</td>
// <td>Сума</td>
// <td>Дата</td>
// <td>Кто</td>
// <td>Тип трансакції</td>
// <td>Імя рахунку</td>
// <td>Номер рахунку</td>
// </tr> */



// const makeTransactionTableRowMarkup = transaction => {
//     console.log(transaction);
//     return `
//     <tr>
//         <td>${transaction.id}</td>
//         <td>${transaction.amount}</td>
//         <td>${transaction.date}</td>
//         <td>${transaction.business}</td>
//         <td>${transaction.name}</td>
//         <td>${transaction.type}</td>
//         <td>${transaction.acount}</td>
//     </tr >
//     `;
// };
// console.log(transactionHistory);
// console.log(makeTransactionTableRowMarkup(transactionHistory[0]));

// деструктурізація
// const makeTransactionTableRowMarkup = ({ id, amount, date, business, name, type, acount }) => {
//     return `
//     <tr>
//         <td>${id}</td>
//         <td>${amount}</td>
//         <td>${date}</td>
//         <td>${business}</td>
//         <td>${name}</td>
//         <td>${type}</td>
//         <td>${acount}</td>
//     </tr >
//     `;
// };
// console.log(transactionHistory);
// console.log(makeTransactionTableRowMarkup(transactionHistory[0]));


// можна так


const makeTransactionTableRowMarkup = transaction => {
    const { id, amount, date, business, name, type, acount } = transaction
    return `
    <tr>
        <td>${id}</td>
        <td>${amount}</td>
        <td>${date}</td>
        <td>${business}</td>
        <td>${name}</td>
        <td>${type}</td>
        <td>${acount}</td>
    </tr >
    `;    
};
console.log(transactionHistory);
// console.log(makeTransactionTableRowMarkup(transactionHistory[0]));

// підключаємо
const tableEl = document.querySelector('.js-transaction-table');

const makeTransactionTableRows = transactionHistory.map(makeTransactionTableRowMarkup).join('');

// заносимо в розмітку
tableEl.insertAdjacentHTML('beforeend', makeTransactionTableRows);
console.log(makeTransactionTableRows);