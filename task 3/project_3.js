document.addEventListener('DOMContentLoaded', (event) => {
    let input = document.getElementById('inputBox');
    let buttons = document.querySelectorAll('button');

    let string = "";
    let arr = Array.from(buttons);
    arr.forEach(button => {
        button.addEventListener('click', (e) => {
            if (e.target.innerHTML.trim() == '=') {
                try {
                    string = eval(string);
                    input.value = string;
                } catch (error) {
                    input.value = "Error";
                    string = "";
                }
            } else if (e.target.innerHTML.trim() == 'AC') {
                string = "";
                input.value = string;
            } else if (e.target.innerHTML.trim() == 'DEL') {
                string = string.substring(0, string.length - 1);
                input.value = string;
            } else {
                string += e.target.innerHTML.trim();
                input.value = string;
            }
        });
    });
});