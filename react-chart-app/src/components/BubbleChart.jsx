//<script> draft to start bubblechart
new Chart(document.getElementById('barChart'), {
    type: 'bar', // Bar chart type
    data: {
        labels: ['Red', 'Blue', 'Yellow'], // X-axis labels
        datasets: [{
            label: 'Votes',
            data: [12, 19, 3], // Y-axis data
            backgroundColor: ['red', 'blue', 'yellow']
        }]
    }
});
//</script>