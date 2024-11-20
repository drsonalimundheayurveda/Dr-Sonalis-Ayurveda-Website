const modal = document.getElementById('consultModal');
const consultButton = document.getElementById('consultButton');

consultButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
