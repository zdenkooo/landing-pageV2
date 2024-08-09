document.addEventListener('DOMContentLoaded', () => {
    const modalContainer = document.querySelector('.modal-container'); // Usamos querySelector para seleccionar por clase
    const closeButton = document.getElementById('close');
    const form = document.querySelector('form');

    function openModal() {
        modalContainer.classList.add('show');
    }; 

    function closeModal() {
        modalContainer.classList.remove('show');
    }; 

    closeButton.addEventListener('click', closeModal);

    form.addEventListener('submit', e => {
        e.preventDefault(); 
        const data = Object.fromEntries(new FormData(e.target));
        console.log(data); 
        openModal(); 
    });
});

