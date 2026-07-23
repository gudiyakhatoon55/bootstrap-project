import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import 'bootstrap';

import '../scss/styles.scss';

const buttons = document.querySelectorAll(".trending-btn button");
const products = document.querySelectorAll(".product-card");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const category = button.dataset.filter;

        products.forEach(product => {

            if(product.classList.contains(category)){
                product.style.display = "block";
            }else{
                product.style.display = "none";
            }

        });

    });

});
