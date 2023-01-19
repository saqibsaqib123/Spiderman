window.addEventListener('scroll', function () {
    const card = document.getElementById('card');
    let left = 0;
    left = window.scrollY * 2.7;
    if (left <= 1020) {
        card.style.left = left + 'px';
    }



    //now the second one
    const card2 = document.getElementById('card-2');
    let left2nd = 0;
    left2nd = -window.scrollY * 1.17 + 1500;
    if ((left2nd >= 22)&(left2nd<1000)) {
        card2.style.left = left2nd + 'px';
    }
});