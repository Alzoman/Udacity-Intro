// Select color input
const table = document.querySelector('table');
const form = document.querySelector('form');
const color = document.querySelector('#colorPicker');
// Select size input
const row = document.getElementById('inputHeight');
const col = document.getElementById('inputWidth');

// When size is submitted by the user, call makeGrid()

form.addEventListener('submit', function makeGrid(event) {
    event.preventDefault();

    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }
    for (let i = 0; i < row.value; i++) {
        const cell = table.insertRow(0);

        for (let t = 0; t < col.value; t++) {
            cell.insertCell(0);

            table.addEventListener('click', function(event) {
                if (event.target.nodeName === 'TD') {
                    event.target.style.backgroundColor = color.value;
                }

            });

        }

    }

});
