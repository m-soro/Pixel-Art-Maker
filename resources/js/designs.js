const form = document.querySelector('#sizePicker');
const canvas = document.querySelector('#pixelCanvas');

// to color a grid
function toColor(e) {
    const pickedColor = document.querySelector('#colorPicker').value;
    e.target.style.background = pickedColor;
};
// to re-set a grid color
function resetCellColor(evt) {
    evt.target.style.cssText = 'color: white';
};
// builds the grid and assigns an event listener to each cell.
// click to color and dbl click to re-set a grid color.
// empty string from canvas.innerHtML re-sets the whole grid.
function makeGrid(event) {

    const width = document.querySelector('#width').value;
    const height = document.querySelector('#height').value;
    canvas.innerHTML = "";

        for (var i = 1; i <= width; i++) {
        const newRow = document.createElement('tr');
        canvas.appendChild(newRow);

            for (var x = 1; x <= height; x++) {
            const newCell = document.createElement('td');
            newRow.appendChild(newCell);
            newCell.addEventListener('click', toColor);
            newCell.addEventListener('dblclick', resetCellColor);

            }
         event.preventDefault();
        }
};

form.addEventListener('submit', makeGrid);









