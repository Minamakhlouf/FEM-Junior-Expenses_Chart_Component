const myChart = document.querySelector("#myChart"); 

Chart.defaults.global.legend.display = false; 
let barChart = new Chart(myChart, {
    type: "bar", 
    data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], 
        datasets: [{
            backgroundColor: backgroundColors(), 
            data: [16.01, 32.07, 52.36, 31.07, 25.21, 45.32, 25.25], 
            
        }]
    }, 
    options: {
        plugins: {
            legend: {
                display: false
            }, 
        }, 
        tooltips: {
            callbacks: {
                title: function() {
                    return ""; 
                }, 
                label: function(tooltipItem) {
                    return "$" + tooltipItem.yLabel; 
                }
            }, 
            displayColors: false, 
            bodyFontSize: 18
        }, 
        scales: {
            yAxes: [{
                ticks: {
                    display: false, 
                    beginAtZero: true
                }, 
                gridLines: {
                    display: false 
                }
            }], 
            xAxes: [{
                gridLines: {
                    display: false
                }
            }]
        }
    }
})


function backgroundColors() {
    let colors = []; 
    let date = new Date(); 
    let currentDay = date.getDay(); 
    for (let i = 0; i < 7; i++) {
        colors.push("hsl(10, 79%, 65%)"); 
    }

    if (currentDay === 0) {
        colors[6] = "hsl(186, 34%, 60%)"
    }
    else {
        colors[currentDay - 1] = "hsl(186, 34%, 60%)"
    }

    return colors; 
}




