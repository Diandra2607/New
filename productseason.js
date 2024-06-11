document.addEventListener('DOMContentLoaded', function () {
    fetch('productseason.json')
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
