<div class="footer_wrapper">
    <div class="container">    
        <footer class="footer">

            <div class="footer_top">
                <ul>
                    <li class="footer-home_text"><a href="#"><img src="../../icons/home-8-orange.svg" alt="">&nbsp;Главная</a></li>
                    <li>Контакты</li>
                    <li><a href="tel:+79514946767">8 951 494 67 67</a>&nbsp;&nbsp;&nbsp;<a href="https://t.me/+79514946767"><img src="../telegram-icon.png" style="position: relative;top: 10px;" /></a></li>
                    <li>olegkandasov@gmail.com</li>
                </ul>
                <ul>
                    <li>Доставка</li>
                    <li>Доставка по городу</li>
                    <li>Самовывоз</li>
                    <li>г. Ростов-на-Дону Лесополоса №1</li>
                </ul>
                <ul>
                    <li>Клиентам</li>
                    <li>Акции и скидки</li>
                    <li>Политика конфиденциальности</li>
                </ul>
            </div>
            
            <div class="footer_border"></div>
            <div class="footer_bottom">© 1998–2024 ИП Кандашов</div>
        </footer>
    </div>
    <div class="bottom-nav__div"></div>
</div>    

    <script src="js/jquery-3.7.0.min.js"></script>
    <script src="js/menu.js"></script>
    <!-- <script src="js/watch.js"></script>
    <script src="js/cart.js"></script>
    <script src="js/app.js"></script> -->
    
    <?php
        switch ($route) {
            case '';
                echo '<script src="js/app.js"></script>';
                break;
            case 'cart';
                echo '<script src="js/cart.js"></script>';
                break;
            case 'fum';
                echo '<script src="js/category.js"></script>';
                break;    
            case 'roliki';
                echo '<script src="js/category.js"></script>';
                break;
            case 'rezina';
                echo '<script src="js/category.js"></script>';
                break;
            case 'bidon';
                echo '<script src="js/category.js"></script>';
                break;   
            case 'smazka';
                echo '<script src="js/category.js"></script>';
                break;  
            case 'homuty';
                echo '<script src="js/category.js"></script>';
                break; 
            case 'krepezh';
                echo '<script src="js/category.js"></script>';
                break; 
            case 'paronit';
                echo '<script src="js/category.js"></script>';
                break; 
            case 'procladki_rezina';
                echo '<script src="js/category.js"></script>';
                break;
            case 'silikon';
                echo '<script src="js/category.js"></script>';
                break;    
            case 'amerikanka';
                echo '<script src="js/category.js"></script>';
                break;  
            case 'procladki_smesitel';
                echo '<script src="js/category.js"></script>';
                break;
        }
    ?>
</body>
</html>