document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector('.toggle-button');
    const optionButtons = document.querySelectorAll('.option-button');
    let isVisible = false;
    
    toggleButton.addEventListener('click', function() {
        optionButtons.forEach(function(button) {
            button.style.display = isVisible ? 'none' : 'block';
        });
        isVisible = !isVisible;
    });
});

