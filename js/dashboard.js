// H.R. 1 Impact Analysis Dashboard JavaScript
// Chart configuration and initialization

// Chart configuration
const chartConfig = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'bottom',
            labels: {
                usePointStyle: true,
                padding: 15,
                font: {
                    size: window.innerWidth < 768 ? 10 : 12
                }
            }
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                color: 'rgba(0,0,0,0.1)'
            },
            ticks: {
                font: {
                    size: window.innerWidth < 768 ? 9 : 11
                }
            }
        },
        x: {
            grid: {
                display: false
            },
            ticks: {
                font: {
                    size: window.innerWidth < 768 ? 9 : 11
                },
                maxRotation: window.innerWidth < 768 ? 45 : 0
            }
        }
    }
};

// Initialize all charts
function initializeCharts() {
    // Income Impact Chart
    new Chart(document.getElementById('incomeChart'), {
        type: 'bar',
        data: {
            labels: ['Bottom 20%', 'Second 20%', 'Middle 20%', 'Fourth 20%', 'Top 20%'],
            datasets: [{
                label: 'Net Resource Change (%)',
                data: [-8.5, -3.2, 2.1, 4.8, 7.3],
                backgroundColor: [
                    '#e74c3c', '#ff6b6b', '#f39c12', '#27ae60', '#2ecc71'
                ],
                borderColor: [
                    '#c0392b', '#e55656', '#e67e22', '#229954', '#27ae60'
                ],
                borderWidth: 2
            }]
        },
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Higher income groups benefit more from tax cuts',
                    font: {
                        size: window.innerWidth < 768 ? 11 : 14
                    }
                }
            }
        }
    });

    // Ethnicity Impact Chart
    new Chart(document.getElementById('ethnicityChart'), {
        type: 'bar',
        data: {
            labels: ['White', 'Black/African American', 'Hispanic/Latino', 'Asian American', 'Native American'],
            datasets: [{
                label: 'Estimated Impact Score',
                data: [3.2, -4.1, -3.8, 2.1, -5.2],
                backgroundColor: ['#3498db', '#e74c3c', '#e74c3c', '#f39c12', '#e74c3c'],
                borderColor: ['#2980b9', '#c0392b', '#c0392b', '#e67e22', '#c0392b'],
                borderWidth: 2
            }]
        },
        options: {
            ...chartConfig,
            indexAxis: 'y',
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: 'Communities of color disproportionately affected by benefit cuts',
                    font: {
                        size: window.innerWidth < 768 ? 11 : 14
                    }
                }
            }
        }
    });

    // Age Impact Chart
    new Chart(document.getElementById('ageChart'), {
        type: 'line',
        data: {
            labels: ['18-25', '26-35', '36-45', '46-55', '56-65', '65+'],
            datasets: [{
                label: 'Net Impact Score',
                data: [-2.8, -1.5, 2.3, 3.7, 4.2, 1.8],
                borderColor: '#9b59b6',
                backgroundColor: 'rgba(155, 89, 182, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: 'Middle-aged and older adults benefit most from tax provisions',
                    font: {
                        size: window.innerWidth < 768 ? 11 : 14
                    }
                }
            }
        }
    });

    // Political Affiliation Chart
    new Chart(document.getElementById('politicalChart'), {
        type: 'doughnut',
        data: {
            labels: ['Strong Republican', 'Lean Republican', 'Independent', 'Lean Democratic', 'Strong Democratic'],
            datasets: [{
                data: [6.2, 4.1, 0.8, -2.3, -3.7],
                backgroundColor: ['#c0392b', '#e74c3c', '#95a5a6', '#3498db', '#2980b9'],
                borderColor: '#ffffff',
                borderWidth: 3
            }]
        },
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: 'Republicans benefit more from overall provisions',
                    font: {
                        size: window.innerWidth < 768 ? 11 : 14
                    }
                }
            }
        }
    });

    // Geographic Impact Chart
    new Chart(document.getElementById('geographicChart'), {
        type: 'bar',
        data: {
            labels: ['Northeast', 'Southeast', 'Midwest', 'Southwest', 'West Coast', 'Mountain West'],
            datasets: [{
                label: 'Regional Impact Score',
                data: [1.8, 3.2, 2.1, 2.8, 0.9, 3.5],
                backgroundColor: [
                    '#3498db', '#27ae60', '#f39c12', '#e67e22', '#9b59b6', '#2ecc71'
                ],
                borderColor: [
                    '#2980b9', '#229954', '#e67e22', '#d35400', '#8e44ad', '#27ae60'
                ],
                borderWidth: 2
            }]
        },
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: 'Red states generally benefit more from combined provisions',
                    font: {
                        size: window.innerWidth < 768 ? 11 : 14
                    }
                }
            }
        }
    });

    // Education Impact Chart
    new Chart(document.getElementById('educationChart'), {
        type: 'radar',
        data: {
            labels: ['Less than HS', 'HS Graduate', 'Some College', 'Bachelor\'s', 'Postgraduate'],
            datasets: [{
                label: 'Impact Score',
                data: [-4.2, -2.1, 0.8, 3.5, 5.2],
                borderColor: '#e74c3c',
                backgroundColor: 'rgba(231, 76, 60, 0.1)',
                borderWidth: 2,
                pointBackgroundColor: '#e74c3c'
            }]
        },
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: 'Higher education levels correlate with greater benefits',
                    font: {
                        size: window.innerWidth < 768 ? 11 : 14
                    }
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    min: -5,
                    max: 6,
                    ticks: {
                        font: {
                            size: window.innerWidth < 768 ? 9 : 11
                        }
                    }
                }
            }
        }
    });

    // Employment Sector Chart
    new Chart(document.getElementById('employmentChart'), {
        type: 'polarArea',
        data: {
            labels: ['Government', 'Private Sector', 'Self-Employed', 'Gig Workers', 'Unemployed'],
            datasets: [{
                data: [1.2, 3.8, 4.5, -1.8, -6.2],
                backgroundColor: [
                    'rgba(52, 152, 219, 0.8)',
                    'rgba(46, 204, 113, 0.8)',
                    'rgba(241, 196, 15, 0.8)',
                    'rgba(230, 126, 34, 0.8)',
                    'rgba(231, 76, 60, 0.8)'
                ],
                borderColor: [
                    '#3498db', '#2ecc71', '#f1c40f', '#e67e22', '#e74c3c'
                ],
                borderWidth: 2
            }]
        },
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: 'Self-employed and private sector workers benefit most',
                    font: {
                        size: window.innerWidth < 768 ? 11 : 14
                    }
                }
            }
        }
    });

    // Family Structure Chart
    new Chart(document.getElementById('familyChart'), {
        type: 'bar',
        data: {
            labels: ['Single Adults', 'Single Parents', 'Married w/ Kids', 'Married w/o Kids', 'Elderly Living Alone'],
            datasets: [{
                label: 'Impact Score',
                data: [-1.8, -5.2, 3.1, 4.2, -2.1],
                backgroundColor: [
                    '#95a5a6', '#e74c3c', '#27ae60', '#2ecc71', '#f39c12'
                ],
                borderColor: [
                    '#7f8c8d', '#c0392b', '#229954', '#27ae60', '#e67e22'
                ],
                borderWidth: 2
            }]
        },
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: 'Single parents face the greatest negative impact',
                    font: {
                        size: window.innerWidth < 768 ? 11 : 14
                    }
                }
            }
        }
    });

    // Immigration Status Chart
    new Chart(document.getElementById('immigrationChart'), {
        type: 'bar',
        data: {
            labels: ['U.S. Citizens', 'Permanent Residents', 'Undocumented', 'Temporary Visa Holders'],
            datasets: [{
                label: 'Impact Score',
                data: [2.1, -1.2, -8.5, -3.7],
                backgroundColor: [
                    '#27ae60', '#f39c12', '#e74c3c', '#e67e22'
                ],
                borderColor: [
                    '#229954', '#e67e22', '#c0392b', '#d35400'
                ],
                borderWidth: 2
            }]
        },
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: 'Undocumented immigrants face severe negative impacts',
                    font: {
                        size: window.innerWidth < 768 ? 11 : 14
                    }
                }
            }
        }
    });

    // Disability Status Chart
    new Chart(document.getElementById('disabilityChart'), {
        type: 'doughnut',
        data: {
            labels: ['With Disability', 'Without Disability'],
            datasets: [{
                data: [-3.8, 2.3],
                backgroundColor: ['#e74c3c', '#27ae60'],
                borderColor: ['#c0392b', '#229954'],
                borderWidth: 3
            }]
        },
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: 'People with disabilities face disproportionate negative impacts',
                    font: {
                        size: window.innerWidth < 768 ? 11 : 14
                    }
                }
            }
        }
    });

    // Health Insurance Chart
    new Chart(document.getElementById('healthInsuranceChart'), {
        type: 'bar',
        data: {
            labels: ['Medicaid Recipients', 'ACA Marketplace', 'Employer Insurance', 'Medicare', 'Uninsured'],
            datasets: [{
                label: 'Impact Score',
                data: [-6.2, -4.1, 2.8, 0.5, -2.3],
                backgroundColor: [
                    '#e74c3c', '#e67e22', '#27ae60', '#3498db', '#95a5a6'
                ],
                borderColor: [
                    '#c0392b', '#d35400', '#229954', '#2980b9', '#7f8c8d'
                ],
                borderWidth: 2
            }]
        },
        options: {
            ...chartConfig,
            indexAxis: 'y',
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: 'Medicaid recipients face the largest negative impact',
                    font: {
                        size: window.innerWidth < 768 ? 11 : 14
                    }
                }
            }
        }
    });

    // Housing Status Chart
    new Chart(document.getElementById('housingChart'), {
        type: 'bar',
        data: {
            labels: ['Homeowners', 'Renters', 'Public Housing', 'Homeless/Unstable'],
            datasets: [{
                label: 'Impact Score',
                data: [4.2, -1.8, -4.5, -3.1],
                backgroundColor: [
                    '#27ae60', '#f39c12', '#e74c3c', '#c0392b'
                ],
                borderColor: [
                    '#229954', '#e67e22', '#c0392b', '#a93226'
                ],
                borderWidth: 2
            }]
        },
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: 'Homeowners benefit significantly from tax provisions',
                    font: {
                        size: window.innerWidth < 768 ? 11 : 14
                    }
                }
            }
        }
    });

    // Economic Sector Impact Chart
    const sectorImpactData = [
        { sector: 'Healthcare', impact: -789.8, jobs: -285000, color: '#ef4444' },
        { sector: 'Education', impact: -349.1, jobs: -125000, color: '#f97316' },
        { sector: 'Energy', impact: 198.0, jobs: 89000, color: '#22c55e' },
        { sector: 'Defense', impact: -144.0, jobs: 320000, color: '#3b82f6' },
        { sector: 'Agriculture', impact: 238.2, jobs: -67000, color: '#eab308' },
        { sector: 'Transport', impact: 36.6, jobs: 15000, color: '#8b5cf6' },
        { sector: 'Finance', impact: 5.2, jobs: -8000, color: '#06b6d4' }
    ];

    new Chart(document.getElementById('sectorImpactChart'), {
        type: 'bar',
        data: {
            labels: sectorImpactData.map(d => d.sector),
            datasets: [
                {
                    label: 'Financial Impact (Billions $)',
                    data: sectorImpactData.map(d => d.impact),
                    backgroundColor: sectorImpactData.map(d => d.color),
                    borderColor: sectorImpactData.map(d => d.color),
                    borderWidth: 2,
                    yAxisID: 'y'
                },
                {
                    label: 'Job Changes (Thousands)',
                    data: sectorImpactData.map(d => d.jobs / 1000),
                    backgroundColor: sectorImpactData.map(d => d.color + '80'),
                    borderColor: sectorImpactData.map(d => d.color),
                    borderWidth: 2,
                    type: 'line',
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            ...chartConfig,
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            size: window.innerWidth < 768 ? 9 : 11
                        },
                        maxRotation: 45,
                        minRotation: 0,
                        callback: function(value, index, values) {
                            return this.getLabelForValue(value);
                        }
                    }
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Financial Impact (Billions $)'
                    },
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    },
                    ticks: {
                        font: {
                            size: window.innerWidth < 768 ? 9 : 11
                        }
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    title: {
                        display: true,
                        text: 'Job Changes (Thousands)'
                    },
                    grid: {
                        drawOnChartArea: false,
                    },
                    ticks: {
                        font: {
                            size: window.innerWidth < 768 ? 9 : 11
                        }
                    }
                }
            },
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: 'Healthcare and Education face largest cuts, Defense gets job boost',
                    font: {
                        size: window.innerWidth < 768 ? 11 : 14
                    }
                }
            }
        }
    });

    // Industry Employment Changes Chart
    const employmentImpactData = [
        { industry: 'Healthcare', current: 22000000, projected: 21715000, change: -285000 },
        { industry: 'Education', current: 13500000, projected: 13375000, change: -125000 },
        { industry: 'Defense/Security', current: 3200000, projected: 3520000, change: 320000 },
        { industry: 'Energy', current: 6500000, projected: 6589000, change: 89000 },
        { industry: 'Agriculture', current: 2600000, projected: 2533000, change: -67000 },
        { industry: 'Transportation', current: 5800000, projected: 5815000, change: 15000 }
    ];

    new Chart(document.getElementById('employmentChangeChart'), {
        type: 'bar',
        data: {
            labels: employmentImpactData.map(d => d.industry),
            datasets: [
                {
                    label: 'Current Employment (Millions)',
                    data: employmentImpactData.map(d => d.current / 1000000),
                    backgroundColor: 'rgba(52, 152, 219, 0.7)',
                    borderColor: '#3498db',
                    borderWidth: 2
                },
                {
                    label: 'Projected Employment (Millions)',
                    data: employmentImpactData.map(d => d.projected / 1000000),
                    backgroundColor: 'rgba(46, 204, 113, 0.7)',
                    borderColor: '#2ecc71',
                    borderWidth: 2
                }
            ]
        },
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: 'Defense sector shows largest employment growth despite budget cuts',
                    font: {
                        size: window.innerWidth < 768 ? 11 : 14
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Employment (Millions)'
                    },
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    },
                    ticks: {
                        font: {
                            size: window.innerWidth < 768 ? 9 : 11
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            size: window.innerWidth < 768 ? 9 : 11
                        },
                        maxRotation: window.innerWidth < 768 ? 45 : 0
                    }
                }
            }
        }
    });

    // Budget Impact Timeline Chart
    const budgetTimelineData = [
        { year: '2025', deficit: -2500, debt: -3100, gdp: 28000 },
        { year: '2026', deficit: -2800, debt: -6200, gdp: 29200 },
        { year: '2027', deficit: -2950, debt: -9400, gdp: 30500 },
        { year: '2028', deficit: -3100, debt: -12800, gdp: 31900 },
        { year: '2029', deficit: -3250, debt: -16400, gdp: 33400 },
        { year: '2030', deficit: -3400, debt: -20200, gdp: 35000 }
    ];

    new Chart(document.getElementById('budgetTimelineChart'), {
        type: 'line',
        data: {
            labels: budgetTimelineData.map(d => d.year),
            datasets: [
                {
                    label: 'Annual Deficit (Billions $)',
                    data: budgetTimelineData.map(d => d.deficit),
                    borderColor: '#e74c3c',
                    backgroundColor: 'rgba(231, 76, 60, 0.1)',
                    borderWidth: 3,
                    fill: false,
                    tension: 0.4,
                    yAxisID: 'y'
                },
                {
                    label: 'Cumulative Debt Impact (Billions $)',
                    data: budgetTimelineData.map(d => d.debt),
                    borderColor: '#8e44ad',
                    backgroundColor: 'rgba(142, 68, 173, 0.1)',
                    borderWidth: 3,
                    fill: false,
                    tension: 0.4,
                    yAxisID: 'y'
                },
                {
                    label: 'GDP (Trillions $)',
                    data: budgetTimelineData.map(d => d.gdp / 1000),
                    borderColor: '#27ae60',
                    backgroundColor: 'rgba(39, 174, 96, 0.1)',
                    borderWidth: 3,
                    fill: false,
                    tension: 0.4,
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            ...chartConfig,
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            size: window.innerWidth < 768 ? 9 : 11
                        }
                    }
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Deficit/Debt (Billions $)'
                    },
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    },
                    ticks: {
                        font: {
                            size: window.innerWidth < 768 ? 9 : 11
                        }
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    title: {
                        display: true,
                        text: 'GDP (Trillions $)'
                    },
                    grid: {
                        drawOnChartArea: false,
                    },
                    ticks: {
                        font: {
                            size: window.innerWidth < 768 ? 9 : 11
                        }
                    }
                }
            },
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: 'Deficit and debt accumulation accelerate over time',
                    font: {
                        size: window.innerWidth < 768 ? 11 : 14
                    }
                }
            }
        }
    });
}

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeCharts();
});
