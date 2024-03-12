let cart = {};

function loadCart() {
    // проверяю есть ли в localStorage запись cart
    if (localStorage.getItem('cart')) {
        // если есть - расшифровываю и записываю в переменную cart
        cart = JSON.parse(localStorage.getItem('cart'));
            showCart();    
    }
    else {
        $('.main-cart').html("<h4>Корзина пуста</h4>");
        
    }
}

function showCart() {
    // вывод корзины
    if (!isEmpty(cart)) {
        $('.main-cart').html("<h4>Корзина пуста</h4>");
        $('.total-amount').html('Итого: '+ 0 + ' руб');
    } else {
    $.getJSON('goods.json', function(data) {
        let goods = data;
        let out = '';
        let sum = 0;
        for (let id in cart) { 
            out +='<div class="cart-item">';
              out += '<div class="cart-left">';
                out += `<img class="cart-img" src="images\\${goods[id].img}">`;
                    out += '<div class="name-wrapper">';
                    out += `<div class="cart-name">${goods[id].name} </div>`;
                    out += `<div class="cost-one">Цена за 1 шт: <b>${goods[id].cost} руб</b></div>`;
                out += '</div>';
              out += '</div>';
              
              out += '<div class="cart-right">';
                out += `<button class="minus-goods" data-id="${id}">-</button>`;
                out += `<span>${cart[id]} </span>`+ '&nbsp';
                out += `<button class="plus-goods" data-id="${id}">+</button>`;
                out += `<span class="cost">${Math.round(cart[id] * goods[id].cost)} руб</span>`;
                sum = sum + Math.round(cart[id] * goods[id].cost);
        
              out += '</div>';
                 out += `<img src="/images/close.svg" class="del-goods" data-id="${id}">`;
            out +='</div>';      
        }
        $('.main-cart').html(out);
        console.log(sum); // number
        
        $('.total-amount').html('Итого: '+ sum + ' руб');
        

        $('.del-goods').on('click', delGoods);
        $('.plus-goods').on('click', plusGoods);
        $('.minus-goods').on('click', minusGoods);
    });   
  } 
}

function delGoods() {
    // удаление товара из корзины
    let id = $(this).attr('data-id');
    delete cart[id];
    saveCart(); 
    showCart();
}

function plusGoods() {
    // добавление товара в корзину
    let id = $(this).attr('data-id');
    cart[id]++;
    saveCart(); 
    showCart();
}

function minusGoods() {
    // уменьшение товара из корзины
    let id = $(this).attr('data-id');
    if (cart[id] == 1) {
        delete cart[id];    
    }
    else {
        cart[id]--;
    }
    
    saveCart(); 
    showCart();
}


function isEmpty(object) {
    for (let key in object) {
        if (object.hasOwnProperty(key)) return true;
        return false;
    }
}

function saveCart() {
    // сохраняет корзину в localStorage
    localStorage.setItem('cart', JSON.stringify(cart)); // корзину в строку
}

function sendEmail() {
    let ename = $('#ename').val();
    let email = $('#email').val();
    let ephone = $('#ephone').val();

    if (ename != '' && email != '' && ephone != '') {
        if (isEmpty(cart)) {
            $.post(
                "core/mail.php",
                {
                    "ename" : ename,
                    "email" : email,
                    "ephone" : ephone,
                    "cart" : cart
                },
                function(data) {
                    if (data == 1) {
                        // очистка формы
                        document.querySelector('#ename').value = '';
                        document.querySelector('#email').value = '';
                        document.querySelector('#ephone').value = '';
                       // очистить корзину в localStorage
                       setTimeout("alert('Заказ отправлен')", 500);
                       localStorage.removeItem("cart");
                      
                       setTimeout(function(){
                            location.reload();
                       }, 2500);
                      // alert('Заказать');  
                    }
                    else {
                        alert('Повторите заказ');
                    }
                } 
            );
        }
         else {
            alert('Корзина пуста');
        }
    } else {
        alert('Заполните поля');
    }
}


$(document).ready(function() {
    loadCart();
    $('.send-email').on('click', sendEmail); // отправить письмо с заказом
});