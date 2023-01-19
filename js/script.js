// let alreadyhave = false;
// window.addEventListener('scroll', function () {
//     const card = document.getElementById('card-1');
//     let width = screen.width;

//     let speed = 2;
//     let margin_left = 0;
//     margin_left = window.scrollY * speed;
//     if (width > 500) {
//         if (alreadyhave) {
//             card.classList.remove("original-pos-1");
//             alreadyhave = false;
//         }
//         if (margin_left <= 1020) {
//             card.style.marginLeft = margin_left + 'px';
//         }
//     } else {
//         if (!alreadyhave) {
//             alreadyhave = true;
//             card.className += " original-pos-1";
//         }
//     }

//     // //now the second one
//     // const card2 = document.getElementById('card-2');
//     // let left2nd = 0;
//     // left2nd = -window.scrollY * 1.17 + 1500;
//     // if ((left2nd >= 22)&(left2nd<1000)) {
//     //     card2.style.left = left2nd + 'px';
//     // }
// });