(function () {
    let count = 50;
    let section = document.querySelector('.section');
    let i = 0;
    while (i < count) {
        let buble = document.createElement('i');
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);
        let size = Math.random() * 10;

        buble.style.left = x + 'px';
        buble.style.top = y + 'px';
        buble.style.width = 1 + size + 'px';
        buble.style.height = 1 + size + 'px';
        buble.style.animationDuration = 5 + size + 's';
        buble.style.animationDelay = -size + 's';

        section.appendChild(buble);

        i++;
    }
}) ()