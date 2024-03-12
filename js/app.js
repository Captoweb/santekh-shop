let cart = {}; // корзина

function init() {
    // берем файл goods.json
   $.getJSON("goods.json", goodsOut);   
   
}

let cat = [ 
    {
        "catName" : "Ролики для душевых кабин",
        "catImg" : "roliki.jpg",
        "href" : "roliki"
    },
    {
        "catName" : "Фум лента",
        "catImg" : "fum.png",
        "href" : "fum"
    },
    {
        "catName" : "Манжета переходная",
        "catImg" : "adapter.jpg",
        "href" : "rezina"
    },
    {
        "catName" : "Кольца на алюминиевый бидон",
        "catImg" : "bidon.jpg",
        "href" : "bidon"
    },
    {
        "catName" : "Смазки и герметики",
        "catImg" : "germetik.jpg",
        "href" : "smazka"
    },
    {
        "catName" : "Хомуты ремонтные",
        "catImg" : "homuty.png",
        "href" : "homuty"
    },
    {
        "catName" : "Крепления крышки унитаза",
        "catImg" : "krepezh.jpg",
        "href" : "krepezh"
    },
    {
        "catName" : "Прокладки паронитовые",
        "catImg" : "paronit.jpg",
        "href" : "paronit"
    },
    {
        "catName" : "Прокладки резиновые",
        "catImg" : "procladki_rezina.jpg",
        "href" : "procladki_rezina"
    },
    {
        "catName" : "Прокладки силиконовые",
        "catImg" : "silikon.jpg",
        "href" : "silikon"
    },
    {
        "catName" : "Прокладки на Американку",
        "catImg" : "amerikanka.png",
        "href" : "amerikanka"
    },
    {
        "catName" : "Прокладки на смеситель",
        "catImg" : "procladki_smesitel.jpg",
        "href" : "procladki_smesitel"
    }
];


function goodsOut() {
    // вывод товаров на главную страницу
    //let goods = JSON.parse(data);
    //goods = JSON.stringify(data);
    //console.log(data);
	
    let out = '';
    for (let key in cat) {
       // console.log(cat);
        out += `<a href="${cat[key].href}">`;
        out +='<div class="category-card">';
        out +=`<h3 class="category-name">${cat[key].catName}</h3>`;
        out +=`<img class="category-img" src="images/category/${cat[key].catImg}" alt="category">`;
        out +='</div>';
        out += `</a>`;
    }
    $('.setka').html(out);
    $('.add-to-cart').on('click', addToCart);
}

function addToCart(){
    // добавляем товар в корзину
    let id = $(this).attr('data-id');
   // console.log(id);
    if (cart[id] == undefined) {
        cart[id] = 1;
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
    $('.mini-cart').html(`<h5>${count}</h5>&nbsp` + 'товаров в корзине');
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