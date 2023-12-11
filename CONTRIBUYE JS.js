document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            removeActiveClass();
            this.classList.add('active');
        });
    });

    function removeActiveClass() {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
    }
});

function abrirModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
}

function cerrarModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}