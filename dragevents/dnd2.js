const fill = document.querySelector('.fill');
const emptyBoxes = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', (e) => {
    e.target.className += ' from';
    setTimeout(() => {
        e.target.className = 'invisible';
    },0)
});

fill.addEventListener('dragend',(e) => {
    e.target.className = 'fill';
})

for(const emptyBox of emptyBoxes) {
    emptyBox.addEventListener('dragover',(e) => {
        e.preventDefault();
    });
    emptyBox.addEventListener('dragleave',(e) => {
        e.target.className = 'empty'
    });
    emptyBox.addEventListener('dragenter',(e) => {
        e.preventDefault();
        e.target.className += ' hovered'
    });
    emptyBox.addEventListener('drop',(e) => {
        e.target.className = 'empty';
        e.target.append(fill);
    });
}
