// Function to convert month number to month name
function getMonthName(monthNumber) {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return months[monthNumber - 1];
}

// Load JSON data and create chart
fetch('revenue_per_month.json')
    .then(response => response.json())
    .then(data => {
        // Create an object to store total revenue per month
        const revenuePerMonth = {};

        // Sum up revenue for each month
        data.forEach(item => {
            const month = parseInt(item.TransMonth);
            const revenue = parseFloat(item.Pendapatan);
            if (revenuePerMonth[month]) {
                revenuePerMonth[month] += revenue;
            } else {
                revenuePerMonth[month] = revenue;
            }
        });

        // Sort months and prepare data for the chart
        const sortedMonths = Object.keys(revenuePerMonth).sort((a, b) => a - b);
        const labels = sortedMonths.map(month => getMonthName(month));
        const revenue = sortedMonths.map(month => revenuePerMonth[month]);

        // Create the chart
        const ctx = document.getElementById('lineChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Revenue',
                    data: revenue,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderWidth: 1,
                    fill: true
                }]
            },
            options: {
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Month'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Revenue'
                        },
                        beginAtZero: true
                    }
                }
            }
        });
    })
    .catch(error => console.error('Error loading the JSON data:', error));
