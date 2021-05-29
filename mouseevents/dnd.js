const el = document.getElementById('draggable');

el.addEventListener('mousedown',onMouseDown);

let prevX;
let prevY;

function onMouseDown(e) {
    window.addEventListener('mousemove',onMouseMove);
    window.addEventListener('mouseup',onMouseUp);
    prevX = e.clientX;
    prevY = e.clientY;
    console.log(innerHeight, innerWidth)
}

function onMouseMove(e) {
    let newX = prevX - e.clientX;
    let newY = prevY - e.clientY;
    const coords = el.getBoundingClientRect();

    // пограничные случаи по оси X
    if(coords.x < 0) {
        el.style.left =  0 + 'px';
    } else if(coords.x + coords.width > window.innerWidth) {
        el.style.left = window.innerWidth - coords.width + 'px';
    } else {
        el.style.left =  coords.left - newX + 'px';
    }

    // пограничные случаи по оси Y
    if(coords.y < 0) {
        el.style.top = 0 + 'px';
    } else if(coords.y + coords.height > window.innerHeight) {
        el.style.top = window.innerHeight - coords.height + 'px'
    } else {
        el.style.top = coords.top - newY + 'px';
    }
    // обновляем предыдущие координаты курсора   
    prevX = e.clientX;
    prevY = e.clientY;
}

function onMouseUp(e) {
    window.removeEventListener('mousemove',onMouseMove);
    window.removeEventListener('mouseup',onMouseUp);
}