
function menu() {
    document.querySelector('.dropdown_menu').classList.toggle('show');
    let span = document.createElement('span');
    let category = document.querySelector('.nav_category');

    
    if (document.querySelector('.dropdown_menu').classList.contains('show')) {
        document.querySelector('.triangle').remove();
        span.classList.add('triangle2');
        category.appendChild(span);
        
    } else {
        document.querySelector('.triangle2').remove();
        span.classList.add('triangle');
        category.appendChild(span);
    }
}

document.querySelector('.nav_category').onclick = menu;



