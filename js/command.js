Skip to content
let number = document.getElementById('number');
let p = document.getElementById('text');

number.addEventListener('change', (q) => {
    const result = document.querySelector('#text');
    result.textContent = `Պատասխանը ։ ${convertor(q.target.value, arr2)}`;
});
/* при вызове надо передать сначала число, потом массив со словами
 */
function convertor(n, a, b) {
    n = parseInt(n);
    if (n < 20) {
        return ((b && !n) ? '' : a[0][n]);
    }

    if (n >= 20 && n <= 99) {
        let result = (('' + n).substr(1) == 9)?"ինը":arguments.callee(('' + n).substr(1), a, true);
        return (a[1][('' + n).substr(0, 1)] + '' +result);
    }
    if (n >= 100 && n < 1000) {
        return (a[2][('' + n).substr(0, 1)] + ' ' + arguments.callee(('' + n).substr(1), a, true));
    }
    if (n >= 1000 && n < 10000) {
        return (a[3][('' + n).substr(0, 1)] + ' ' + arguments.callee(('' + n).substr(1), a, true));
    }
    if (n >= 10000 && n < 100000) {
        if (n >= 10000 && n < 20000)
        {
            return (a[0][('' + n).substr(0, 2)]+ ' ' +a[3][1]+ ' ' +arguments.callee(('' + n).substr(2), a, true));
        }
        return (a[1][('' + n).substr(0, 1)]+ '' +a[0][('' + n).substr(1, 1)]+ ' ' +a[3][1]+ ' ' +arguments.callee(('' + n).substr(2), a, true));
    }
    if (n >= 100000 && n < 1000000) {
        if (n < 200000)
        {
            if (('' + n).substr(1, 2) >=10 && ('' + n).substr(1, 2)<20){
                return (a[2][('' + n).substr(0, 1)]+ ' ' +a[0][('' + n).substr(1, 2)]
                    + ' ' +a[3][1]+ ' ' +arguments.callee(('' + n).substr(3), a, true));
            }
        }
        let result = (('' + n).substr(2, 1) == 9)?"ինը":a[0][('' + n).substr(2, 1)];
        return (a[2][('' + n).substr(0, 1)]+ ' ' +a[1][('' + n).substr(1, 1)]+ '' +
            result+ ' ' +a[3][1]+ ' ' +
            arguments.callee(('' + n).substr(3), a, true));

    }
    if (n >= 1000000 && n < 10000000){
        return (a[0][('' + n).substr(0, 1)]+ ' ' +a[5][1]+ ' ' + arguments.callee(('' + n).substr(1), a, true));
    }
    if (n >= 10000000 && n < 20000000){
        return (a[0][('' + n).substr(0, 2)]+ ' ' +a[5][1]+ ' ' + arguments.callee(('' + n).substr(2), a, true));
    }
    if (n >= 20000000 && n < 100000000){
        let result = (('' + n).substr(1, 1) == 9)?"ինը":a[0][('' + n).substr(1, 1)];
        return (a[1][('' + n).substr(0, 1)]+ '' +result+ ' ' +a[5][1]+ ' ' + arguments.callee(('' + n).substr(2), a, true));
    }
    if (n >= 100000000 && n < 200000000){
        if (('' + n).substr(1, 2) >=10 && ('' + n).substr(1, 2)<20){
            return (a[2][('' + n).substr(0, 1)]+ ' ' +a[0][('' + n).substr(1, 2)]+ ' ' +
                a[5][1]+ ' ' + arguments.callee(('' + n).substr(3), a, true));
        }
        return (a[2][('' + n).substr(0, 1)]+ ' ' +a[1][('' + n).substr(1, 1)]
            + ' ' +a[0][('' + n).substr(2, 1)]+ ' ' +
            a[5][1]+ ' ' + arguments.callee(('' + n).substr(3), a, true));
    }
    if (n >= 200000000 && n < 1000000000){
        if (('' + n).substr(1, 2) >=10 && ('' + n).substr(1, 2)<20){
            return (a[2][('' + n).substr(0, 1)]+ ' ' +a[0][('' + n).substr(1, 2)]+ ' ' +
                a[5][1]+ ' ' + arguments.callee(('' + n).substr(3), a, true));
        }
        let result = (('' + n).substr(2, 1) == 9)?"ինը":a[0][('' + n).substr(2, 1)];
        return (a[2][('' + n).substr(0, 1)]+ ' ' +a[1][('' + n).substr(1, 1)]
            + '' +result+ ' ' +
            a[5][1]+ ' ' + arguments.callee(('' + n).substr(3), a, true));

    }
    if ( n >= 1000000000){
        return 1000000000;
    }
// return (a[1][parseInt(n / 10)] + ' ' + ((n % 10)? a[0][n % 10]: ''));
    return 1;
}
let arr2 = [
    [
        "", "մեկ", "երկու", "երեք", "չորս", "հինգ", "վեց",
        "յոթ", "ութ", "իննը", "տաս", "տասնմեկ", "տասներկու",
        "տասներեք", "տասնչորս", "տասնհինգ", "տասնվեց", "տասնյոթ",
        "տասնութ", "տասնինը"
    ],

    [
        '','',"քսան", "երեսուն", "քառասուն", "հիսուն", "վաթսուն",
        "յոթանասուն", "ութսուն", "իննսուն"
    ],

    [
        ,"հարյուր", "երկու հարյուր", "երեք հարյուր", "չորս հարյուր", "հինգ հարյուր", "վեց հարյուր",
        "յոթ հարյուր", "ութ հարյուր", "ինը հարյուր"
    ],

    [
        ,"հազար", "երկու հազար", "երեք հազար", "չորս հազար", "ջինգ հազար", "վեց հազար",
        "յոթ հազար", "ութ հազար", "ինը հազար"
    ],
    [
        ,"տաս հազար", "քսան հազար", "երեսուն հազար", "քառասուն հազար", "հիսուն հազար", "վաթսուն հազար",
        "յոթանասուն հազար", "ութսուն հազար", "իննսուն հազար"
    ],
    [
        '','միլիոն'
    ]

];
