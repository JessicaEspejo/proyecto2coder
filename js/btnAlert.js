


const btnabrilModal = document.querySelector('#BTN-ABRIR-MODAL');
const btncerrarModal = document.querySelector('#BTN-CERRAR-MODAL');
const MODAL = document.querySelector('#MODAL');


btnabrilModal.addEventListener('click',()=>{
    MODAL.showModal();
});


btncerrarModal.addEventListener('click',()=>{
    MODAL.close();
});