document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.follow-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (button.classList.contains('following')) {
                button.classList.remove('following');
                button.textContent = 'Seguir';
            } else {
                button.classList.add('following');
                button.textContent = 'Seguindo';
            }
        });
    });
});
