document.addEventListener('DOMContentLoaded', function() {
    fetch('Chart Vending Machine - Salinan/data json/categoryproduct.json')
        .then(response => response.json())
        .then(data => {
            // Calculate total for each location
            const locationTotals = {};
            data.forEach(item => {
                const location = item.Lokasi;
                const total = parseInt(item.total);
                if (locationTotals[location]) {
                    locationTotals[location] += total;
                } else {
                    locationTotals[location] = total;
                }
            });

            // Sort locations by total in descending order
            const sortedLocations = Object.keys(locationTotals).sort((a, b) => locationTotals[b] - locationTotals[a]);

            // Get unique categories
            const categories = [...new Set(data.map(item => item.Kategori))];

            // Define the colors for each category
            const categoryColors = {
                'Food': '#116A7B',
                'Non Carbonated': '#CDC2AE',
                'Carbonated': '#ECE5C7',
                'Water': '#C2DEDC'
            };

            // Prepare datasets
            const datasets = categories.map(category => {
                return {
                    label: category,
                    data: sortedLocations.map(location => {
                        const item = data.find(d => d.Lokasi === location && d.Kategori === category);
                        return item ? parseInt(item.total) : 0;
                    }),
                    backgroundColor: categoryColors[category] || '#000000'  // Default to black if category is not found
                };
            });

            // Create the chart
            const ctx = document.getElementById('stackedBar').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: sortedLocations,
                    datasets: datasets
                },
                options: {
                    responsive: true,
                    indexAxis: 'y',  // This is the key option for horizontal bars
                    plugins: {
                        tooltip: {
                            mode: 'index',
                            intersect: false
                        },
                        legend: {
                            position: 'top'
                        }
                    },
                    scales: {
                        x: {
                            stacked: true,
                            beginAtZero: true,
                            ticks: {
                                callback: function(value) {
                                    return value + '%';
                                }
                            },
                            title: {
                                display: true,
                                text: 'Total'
                            }
                        },
                        y: {
                            stacked: true
                        }
                    }
                }
            });
        });
});


document.addEventListener('DOMContentLoaded', function() {
    // Fetch data for the Pie Chart
    fetch('Chart Vending Machine - Salinan/data json/categorytransaction.json')
        .then(response => response.json())
        .then(data => {
            const categories = [...new Set(data.map(item => item.Kategori))];
            const transactionData = categories.map(category => {
                return data
                    .filter(item => item.Kategori === category)
                    .reduce((total, item) => total + parseInt(item.Total_Transactions), 0);
            });

            // Define the colors for each category
            const categoryColors = {
                'Food': '#116A7B',
                'Non Carbonated': '#CDC2AE',
                'Carbonated': '#ECE5C7',
                'Water': '#C2DEDC'
            };

            const ctxPie = document.getElementById('pieChart').getContext('2d');
            new Chart(ctxPie, {
                type: 'pie',
                data: {
                    labels: categories,
                    datasets: [{
                        data: transactionData,
                        backgroundColor: categories.map(category => categoryColors[category] || '#000000')  // Default to black if category is not found
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top'
                        }
                    }
                }
            });
        });
});


document.addEventListener('DOMContentLoaded', function () {
    fetch('Chart Vending Machine - Salinan/data json/productseason.json')
        .then(response => response.json())
        .then(data => {
            const groupedData = data.reduce((acc, item) => {
                const { Season, Category, Revenue } = item;
                if (!acc[Season]) acc[Season] = {};
                if (!acc[Season][Category]) acc[Season][Category] = 0;
                acc[Season][Category] += parseFloat(Revenue);
                return acc;
            }, {});

            // Calculate total revenue for each season
            const seasonTotals = {};
            Object.keys(groupedData).forEach(season => {
                seasonTotals[season] = Object.values(groupedData[season]).reduce((acc, revenue) => acc + revenue, 0);
            });

            // Sort seasons by total revenue in descending order
            const sortedSeasons = Object.keys(seasonTotals).sort((a, b) => seasonTotals[b] - seasonTotals[a]);

            const categories = Array.from(new Set(data.map(item => item.Category)));

            // Define the colors for each category
            const categoryColors = {
                'Food': '#116A7B',
                'Non Carbonated': '#CDC2AE',
                'Carbonated': '#ECE5C7',
                'Water': '#C2DEDC'
            };

            const datasets = categories.map(category => {
                return {
                    label: category,
                    data: sortedSeasons.map(season => groupedData[season][category] || 0),
                    backgroundColor: categoryColors[category] || '#000000',  // Default to black if category is not found
                };
            });

            const ctx = document.getElementById('100stackedChart').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: sortedSeasons,
                    datasets: datasets,
                },
                options: {
                    responsive: true,
                    scales: {
                        x: {
                            stacked: true,
                        },
                        y: {
                            stacked: true,
                            ticks: {
                                callback: function (value) {
                                    return value + '%';
                                },
                            },
                        },
                    },
                    plugins: {
                        tooltip: {
                            callbacks: {
                                label: function (context) {
                                    const total = context.dataset.data.reduce((sum, value) => sum + value, 0);
                                    const percentage = (context.raw / total * 100).toFixed(2) + '%';
                                    return context.dataset.label + ': ' + context.raw.toFixed(2) + ' (' + percentage + ')';
                                },
                            },
                        },
                    },
                },
            });
        });
});

fetch('Chart Vending Machine - Salinan/data json/revenue_per_location.json')
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

    // Function to convert month number to month name
function getMonthName(monthNumber) {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return months[monthNumber - 1];
}

let chart;

// Function to create or update chart
function createOrUpdateChart(labels, revenue) {
    const revenueColor = '#116A7B';
    const ctx = document.getElementById('lineChart').getContext('2d');

    if (chart) {
        chart.data.labels = labels;
        chart.data.datasets[0].data = revenue;
        chart.update();
    } else {
        chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Revenue',
                    data: revenue,
                    borderColor: revenueColor,
                    backgroundColor: 'rgba(255, 255, 255, 0)', // Set background color to transparent
                    borderWidth: 2,
                    fill: false // Set fill to false to remove area fill
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
                },
                plugins: {
                    legend: {
                        labels: {
                            color: revenueColor // Set legend label color to revenue color
                        }
                    },
                    datalabels: {
                        anchor: 'end',
                        align: 'top',
                        color: revenueColor,
                        font: {
                            weight: 'bold'
                        },
                        formatter: function(value) {
                            return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
                        }
                    }
                }
            },
            plugins: [ChartDataLabels]
        });
    }
}

// Function to calculate revenue per month
function calculateRevenuePerMonth(data) {
    const revenuePerMonth = {};

    data.forEach(item => {
        const month = parseInt(item.TransMonth);
        const revenue = parseFloat(item.Pendapatan);
        if (revenuePerMonth[month]) {
            revenuePerMonth[month] += revenue;
        } else {
            revenuePerMonth[month] = revenue;
        }
    });

    const sortedMonths = Object.keys(revenuePerMonth).sort((a, b) => a - b);
    const labels = sortedMonths.map(month => getMonthName(month));
    const revenue = sortedMonths.map(month => revenuePerMonth[month]);

    return { labels, revenue };
}

// Load JSON data and initialize event listener
fetch('Chart Vending Machine - Salinan/data json/revenue_per_month.json')
    .then(response => response.json())
    .then(data => {
        // Calculate total revenue per month for all locations
        const { labels, revenue } = calculateRevenuePerMonth(data);
        createOrUpdateChart(labels, revenue);

        // Event listener for location filter
        document.getElementById('location-filter').addEventListener('change', function() {
            const selectedLocation = this.value;
            if (selectedLocation) {
                const filteredData = data.filter(item => item.Lokasi === selectedLocation);
                const { labels, revenue } = calculateRevenuePerMonth(filteredData);
                createOrUpdateChart(labels, revenue);
            } else {
                // If no location is selected, show total revenue for all locations
                const { labels, revenue } = calculateRevenuePerMonth(data);
                createOrUpdateChart(labels, revenue);
            }
        });

        // Trigger initial load with total revenue for all locations
        document.getElementById('location-filter').dispatchEvent(new Event('change'));
    })
    .catch(error => console.error('Error loading the JSON data:', error));
