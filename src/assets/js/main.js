import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap';
import '../scss/styles.scss';

const buttons = document.querySelectorAll(".btn-filter");
const products = document.querySelectorAll(".products");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        // Active button
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        // Sab products hide
        products.forEach(product => {
            product.style.display = "none";
        });

        // Sirf selected product show
        const filter = button.dataset.filter;
        document.getElementById(filter + "-products").style.display = "block";
    });
});