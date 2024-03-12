let cart = {}; // корзина

function init() {
    // берем файл goods.json
   $.getJSON("goods.json", goodsOut);   
   
}

const currentUrl = window.location.href;
const currentUrl2 = window.location.pathname;

function goodsOut(data) {
    // вывод товаров на главную страницу
    //let goods = JSON.parse(data);
    //goods = JSON.stringify(data);
    //console.log(data[1].category);
   // console.log(currentUrl); // http://mini-shop-2/watch
    //console.log(currentUrl2); //  /watch
    let url = currentUrl2.replace(/^./,""); // категория  - это то что надо!
    // console.log(url);
	
    let out = '';
    for (let key in data) {
       // console.log(data[key].category); // категория
        // if (data[key].category == категории в урле) то выести эту категорию
        if (data[key].category == url) { 
            out +='<div class="card">';
            out +=`<img class="img" src="images/${data[key].img}" alt="category">`;
            out +=`<h3 class="name">${data[key].name}</h3>`;
            out += `<div class="description">${data[key].description}</div>`;
            out += `<div class="cost">${data[key].cost} руб</div>`;

            out += `<button class="add-to-cart" data-id=${key}>Купить</button>`;   
           
            out +='</div>';
        }
    }
   
    $('.setka-category').html(out);
    $('.add-to-cart').on('click', addToCart);
    Proverka();
}



function addToCart(){
    // добавляем товар в корзину
    let id = $(this).attr('data-id');
   // console.log(id);
    if (cart[id] == undefined) {
        cart[id] = 1;
        this.disabled = true;
        this.innerHTML = 'В корзине';
    }
    else {
        cart[id]++;
    }
    showMiniCart();
    saveCart();
}

function saveCart() {
    // сохраняет корзину в localStorage
    localStorage.setItem('cart', JSON.stringify(cart)); // корзину в строку
}



function showMiniCart() {
    // показываю мини корзину
    let out = '';
    let count = 0;
    for (let key in cart) {
       // out += 'id: '+key + ' --- '+ cart[key]+ 'шт'+ '<br>';
        count++;
    }
    $('.mini-cart').html(count + ' товаров в корзине');
}

function loadCart() {
    // проверяю есть ли в localStorage запись cart
    if (localStorage.getItem('cart')) {
        // если есть - расшифровываю и записываю в переменную cart
        cart = JSON.parse(localStorage.getItem('cart'));
        showMiniCart();
    }
}


$(document).ready(function(){
	init();
    loadCart();
});


$.getJSON("goods.json", Proverka); 
function Proverka(data) {
    // тут сделать проверку если товар есть в локал сторож то выводить кнопку 'В корзине'
            // или ДОБАВИТЬ КЛАСС КНОПКЕ button.innerHTML = 'В корзине';
            // тут надо сравнить 2 массива одни который в корзине и другой который в goods.json

           let corzinaArr = JSON.parse(localStorage.getItem('cart'));
          //console.log(corzinaArr[1]); // 1 // что в корзине
            
        // console.log(data[1].id); // 1 -id из json
      
           for (let key in data){
            // console.log(data[key].id); // id
             for (let cardId in corzinaArr) {
                //console.log('id:', id); // id
                if (cardId == data[key].id) {
                    console.log(cardId)
                 }
              }
           }

          
           let btnNodelist = document.querySelectorAll('.add-to-cart');
           let btn = Array.from(btnNodelist);
          console.log(btnNodelist); // пустой 
          console.log(btn[0].getAttribute('data-id')); // 1

          for (let i = 0; i < btn.length; i++) {
            console.log(btn[i].getAttribute('data-id')); // получаю data-id у всех кнопок
            for (let cardId in corzinaArr) {
                //console.log('id:', id); // id
                if (cardId == btn[i].getAttribute('data-id')) {
                    btn[i].setAttribute('disabled', '');
                    btn[i].innerHTML = 'В корзине';
                 }
              }
          }

          // если data-id кнопки == id корзины - то добавляю кнопке класс и button.innerHTML = 'В корзине';
           
}


let navDiv = document.querySelector('.bottom-nav__div')

let out = ''

out += `<div class="bottom-navigation">`
out += `<a href="http://web1.fun.test/"><img class="bottom-menu_icon" src="icons/home-8.svg" alt="nav"></a>`
//out += `<a href="#"><img class="bottom-menu_icon" src="icons/menu-1.svg" alt="nav"></a>`
out += `<a href="#"><img class="bottom-menu_icon" src="icons/phone-1.svg" alt="nav"></a>`
out += `<a href="http://web1.fun.test/cart"><img class="bottom-menu_icon" src="icons/shopping-cart-25.svg" alt="nav"></a>`
//out += `<\div>`

if (window.innerWidth <= 768) {
    navDiv.innerHTML = out
}
