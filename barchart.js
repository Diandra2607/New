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

        // Sort locations by revenue in descending order
        const sortedLocations = Object.keys(revenuePerLocation).sort((a, b) => revenuePerLocation[b] - revenuePerLocation[a]);

        // Define the colors for each location
        const locationColors = {
            'GuttenPlans': '#116A7B',
            'EB Public Library': '#CDC2AE',
            'Brunswick Sq Mall': '#ECE5C7',
            'Earle Asphalt': '#C2DEDC'
        };

        // Prepare data for the chart using sorted locations
        const labels = sortedLocations;
        const revenue = sortedLocations.map(location => revenuePerLocation[location]);
        const backgroundColors = sortedLocations.map(location => locationColors[location] || '#000000');  // Default to black if location is not found

        // Create the chart
        const ctx = document.getElementById('barChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Revenue',
                    data: revenue,
                    backgroundColor: backgroundColors,
                    borderColor: backgroundColors.map(color => color.replace(/0\.2\)$/, '1)')),  // Make borders the same color as the background
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
                },
                plugins: {
                    legend: {
                        display: true,
                        labels: {
                            generateLabels: function(chart) {
                                const labels = chart.data.labels;
                                return labels.map(label => ({
                                    text: label,
                                    fillStyle: locationColors[label] || '#000000',
                                    strokeStyle: locationColors[label] || '#000000',
                                    lineWidth: 1,
                                    hidden: false,
                                    index: labels.indexOf(label)
                                }));
                            }
                        }
                    }
                }
            }
        });
    })
    .catch(error => console.error('Error loading the JSON data:', error));
