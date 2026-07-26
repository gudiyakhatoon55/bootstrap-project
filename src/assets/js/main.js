import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap';
import '../scss/styles.scss';

const buttons = document.querySelectorAll(".btn-filter");
const products = document.querySelectorAll(".products");

// Default me sab hide
products.forEach(product => {
    product.style.display = "none";
});

// Default SHOES show
const defaultProduct = document.getElementById("shoes-products");
if (defaultProduct) {
    defaultProduct.style.display = "block";
}

buttons.forEach(button => {
    button.addEventListener("click", () => {

        // Active button
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        // Sab products hide
        products.forEach(product => {
            product.style.display = "none";
        });

        // Selected product show
        const filter = button.dataset.filter;
        const selected = document.getElementById(filter + "-products");

        if (selected) {
            selected.style.display = "block";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("mobileMenuBtn");
    const menu = document.getElementById("mobileMenu");

    button.addEventListener("click", function () {

        menu.classList.toggle("active");

    });

});