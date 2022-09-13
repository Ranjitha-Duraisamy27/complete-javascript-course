document.querySelector('#name').addEventListener('input', () => {
    document.querySelector('.display').textContent = document.querySelector('#name').value;
})