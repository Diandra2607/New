fetch('revenue_per_location.json')
    .then(response => response.json())
    .then(data => {
        // Create an object to store total revenue per location
        const revenuePerLocation = {};

        // Sum up revenue for each location
        data.forEach(item => {
            const location = item.Lokasi;
            const revenue = parseFloat(item.Pendapatan);
            if (revenuePerLocation[location]) {
                revenuePerLocation[location] += revenue;
            } else {
                revenuePerLocation[location] = revenue;
            }
        });

        // Prepare data for the chart
        const labels = Object.keys(revenuePerLocation);
        const revenue = Object.values(revenuePerLocation);

        // Create the chart
        const ctx = document.getElementById('barChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Revenue',
                    data: revenue,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Location'
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
