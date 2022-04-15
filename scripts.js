// 8 задание

// const numProducts = function(num = 0) {
//     let words = ['товар', 'товара', 'товаров'],
//         result,
//         count = num % 100;

//     if (count > 4 && count < 21) {
//         result = words[2];
//     } else {
//         count = count % 10;
//         if (count == 1) {
//             result = words[0];
//         } else {
//             if (count > 1 && count < 5) {
//                 result = words[1];
//             } else {
//                 result = words[2];
//             }
//         }
//     }

//     console.log(num + ' ' + result);
// }

// numProducts();

// 9 задание

// function calc(expression) {
//     if (expression == '' || expression == null) {
//         expression = prompt('Введите выражение');
//     }

//     let re = /\D/;
//     let splitString = expression.split(re);

//     if (/[+]/.test(expression)) {
//         let result = +splitString[0] + +splitString[1];
//         alert(result);
//     } else if (/[-]/.test(expression)) {
//         let result = +splitString[0] - +splitString[1];
//         alert(result);
//     } else if (/[*]/.test(expression)) {
//         let result = +splitString[0] * +splitString[1];
//         alert(result);
//     } else if (/[/]/.test(expression)) {
//         let result = +splitString[0] / +splitString[1];
//         alert(result);
//     } else console.log('Что-то пошло не так...')
// }

// calc();

// 10 задание

const cens = function(text, rood) {
    let censored = '###'

    for (let i = 0; i < rood.length; i++) {
        text = text.replace(rood[i], censored);
    }
    console.log(text);
}

cens('хрен редьки не слаще.', ['хрен', 'lalala']);