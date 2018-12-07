let chart = Highcharts.chart('container', {

    title: {
        text: 'Статистика замовлення страв'
    },

    subtitle: {
        text: 'Горизонтальна'
    },

    xAxis: {
        categories: ['Салат', 'Рис', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'water', 'a', 'b', 'c']
    },

    series: [{
        type: 'column',
        name: 'Кількість',
        colorByPoint: true,
        data: [50,10, 20, 30, 40, 5, 10, 15, 25, 35, 20, 27, 40, 12, 32, 13],
        showInLegend: false
    }]
});

$('#plain').click(function () {
    chart.update({
        chart: {
            inverted: false,
            polar: false
        },
        subtitle: {
            text: 'Горизонтальна'
        }
    });

    let a = document.getElementsByTagName('tspan');
    a[0].innerHTML = 'Кількість замовлень за місяць';

    let b = document.getElementsByTagName('text');
    b[b.length - 1].innerHTML = '';
});

$('#inverted').click(function () {
    chart.update({
        chart: {
            inverted: true,
            polar: false
        },
        subtitle: {
            text: 'Вертикальна'
        }
    });

    let a = document.getElementsByTagName('tspan');
    a[0].innerHTML = 'Кількість замовлень за місяць';

    let b = document.getElementsByTagName('text');
    b[b.length - 1].innerHTML = '';
});

$('#polar').click(function () {
    chart.update({
        chart: {
            inverted: false,
            polar: true
        },
        subtitle: {
            text: 'Кругова'
        }
    });

    let a = document.getElementsByTagName('tspan');
    a[0].innerHTML = 'Кількість замовлень за місяць';

    let b = document.getElementsByTagName('text');
    b[b.length - 1].innerHTML = '';
});

let a = document.getElementsByTagName('tspan');
a[0].innerHTML = 'Кількість замовлень за місяць';

let b = document.getElementsByTagName('text');
b[b.length - 1].innerHTML = '';
