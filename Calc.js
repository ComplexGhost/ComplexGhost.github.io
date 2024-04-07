document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.getElementById('buttons');

    buttons.addEventListener('click', function(event) {
        if (event.target.matches('button')) {
            const buttonValue = event.target.textContent;
            handleButtonInput(buttonValue);
        }
    });

    function handleButtonInput(input) {
        if (input === '=') {
            try {
                const result = eval(display.value);
                display.value = result;
            } catch (error) {
                display.value = 'Error';
            }
        } else if (input === 'C') {
            // Clear display
            display.value = '';
        } else {
            // Append input to display
            display.value += input;
        }
    }
});
