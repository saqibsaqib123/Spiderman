window.addEventListener('scroll', function () {
    const card = document.getElementById('card-1');
    let width = screen.width;

    let speed = 2;
    let margin_left = 0;
    margin_left = window.scrollY * speed;
    if ((margin_left <= (1020)) & (width > 500)) {
        card.style.marginLeft = margin_left + 'px';
    }

    // //now the second one
    // const card2 = document.getElementById('card-2');
    // let left2nd = 0;
    // left2nd = -window.scrollY * 1.17 + 1500;
    // if ((left2nd >= 22)&(left2nd<1000)) {
    //     card2.style.left = left2nd + 'px';
    // }
});