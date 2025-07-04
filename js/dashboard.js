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

    // NEW ADDITIONAL CHARTS
    
    // Tax Burden Changes Chart
    new Chart(document.getElementById('taxBurdenChart'), {
        type: 'bar',
        data: {
            labels: ['<$25K', '$25-50K', '$50-100K', '$100-200K', '$200-500K', '$500K+'],
            datasets: [
                {
                    label: 'Current Effective Rate (%)',
                    data: [3.1, 8.2, 11.7, 16.8, 24.2, 28.5],
                    backgroundColor: 'rgba(52, 152, 219, 0.7)',
                    borderColor: '#3498db',
                    borderWidth: 2
                },
                {
                    label: 'Projected Rate After H.R.1 (%)',
                    data: [3.8, 7.6, 10.9, 15.2, 21.8, 25.1],
                    backgroundColor: 'rgba(231, 76, 60, 0.7)',
                    borderColor: '#e74c3c',
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
                    text: 'Lower income groups face higher effective tax rates',
                    font: {
                        size: window.innerWidth < 768 ? 11 : 14
                    }
                }
            }
        }
    });

    // State Tax Revenue Impact Chart
    const stateRevenueData = [
        { state: 'California', impact: -12.8, color: '#e74c3c' },
        { state: 'New York', impact: -11.2, color: '#e74c3c' },
        { state: 'Texas', impact: 2.1, color: '#27ae60' },
        { state: 'Florida', impact: 3.8, color: '#27ae60' },
        { state: 'Illinois', impact: -8.9, color: '#e74c3c' },
        { state: 'New Jersey', impact: -9.7, color: '#e74c3c' },
        { state: 'Pennsylvania', impact: -2.1, color: '#f39c12' },
        { state: 'Ohio', impact: 1.2, color: '#27ae60' }
    ];

    new Chart(document.getElementById('stateRevenueChart'), {
        type: 'bar',
        data: {
            labels: stateRevenueData.map(d => d.state),
            datasets: [{
                label: 'Revenue Impact (Billions $)',
                data: stateRevenueData.map(d => d.impact),
                backgroundColor: stateRevenueData.map(d => d.color),
                borderColor: stateRevenueData.map(d => d.color),
                borderWidth: 2
            }]
        },
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: 'High-tax states lose revenue from SALT cap',
                    font: {
                        size: window.innerWidth < 768 ? 11 : 14
                    }
                }
            }
        }
    });

    // Health Insurance Coverage Changes Chart
    new Chart(document.getElementById('coverageChart'), {
        type: 'doughnut',
        data: {
            labels: ['Marketplace Plans', 'Medicaid', 'Employer Plans', 'Uninsured (New)'],
            datasets: [{
                label: 'Coverage Loss (Millions)',
                data: [4.2, 3.8, 0.8, 8.8],
                backgroundColor: ['#e67e22', '#e74c3c', '#f39c12', '#c0392b'],
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
                    text: '8.8 million Americans projected to lose coverage',
                    font: {
                        size: window.innerWidth < 768 ? 11 : 14
                    }
                }
            }
        }
    });

    // Healthcare Cost Burden Chart
    new Chart(document.getElementById('healthCostChart'), {
        type: 'line',
        data: {
            labels: ['Single Adult', 'Couple', 'Family of 3', 'Family of 4', 'Family of 5+'],
            datasets: [
                {
                    label: 'Current Annual Cost ($)',
                    data: [3200, 6800, 9500, 12200, 15800],
                    borderColor: '#3498db',
                    backgroundColor: 'rgba(52, 152, 219, 0.1)',
                    borderWidth: 3,
                    fill: false,
                    tension: 0.4
                },
                {
                    label: 'Projected Cost After H.R.1 ($)',
                    data: [4100, 8900, 12800, 16700, 21500],
                    borderColor: '#e74c3c',
                    backgroundColor: 'rgba(231, 76, 60, 0.1)',
                    borderWidth: 3,
                    fill: false,
                    tension: 0.4
                }
            ]
        },
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: 'Healthcare costs increase significantly for all family sizes',
                    font: {
                        size: window.innerWidth < 768 ? 11 : 14
                    }
                }
            }
        }
    });

    // Border Security Spending Chart
    new Chart(document.getElementById('borderSpendingChart'), {
        type: 'polarArea',
        data: {
            labels: ['Physical Barriers', 'Technology Systems', 'Personnel', 'Detention Centers', 'ICE Operations'],
            datasets: [{
                data: [18.5, 12.3, 8.7, 6.2, 9.8],
                backgroundColor: [
                    'rgba(231, 76, 60, 0.8)',
                    'rgba(52, 152, 219, 0.8)',
                    'rgba(46, 204, 113, 0.8)',
                    'rgba(241, 196, 15, 0.8)',
                    'rgba(155, 89, 182, 0.8)'
                ],
                borderColor: ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f', '#9b59b6'],
                borderWidth: 2
            }]
        },
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: '$55.5B allocated to border security over 5 years',
                    font: {
                        size: window.innerWidth < 768 ? 11 : 14
                    }
                }
            }
        }
    });

    // Urban vs Rural Impact Chart
    new Chart(document.getElementById('urbanRuralChart'), {
        type: 'radar',
        data: {
            labels: ['Tax Benefits', 'Healthcare Access', 'Education Funding', 'Infrastructure', 'Safety Net Programs', 'Job Opportunities'],
            datasets: [
                {
                    label: 'Urban Areas',
                    data: [2.1, -4.2, -3.8, 1.2, -5.1, 2.8],
                    borderColor: '#3498db',
                    backgroundColor: 'rgba(52, 152, 219, 0.2)',
                    borderWidth: 2,
                    pointBackgroundColor: '#3498db'
                },
                {
                    label: 'Rural Areas',
                    data: [4.8, -2.1, -4.9, -1.8, -6.8, -2.3],
                    borderColor: '#e74c3c',
                    backgroundColor: 'rgba(231, 76, 60, 0.2)',
                    borderWidth: 2,
                    pointBackgroundColor: '#e74c3c'
                }
            ]
        },
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: 'Rural communities face greater negative impacts',
                    font: {
                        size: window.innerWidth < 768 ? 11 : 14
                    }
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    min: -8,
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

    // Business Size Impact Chart
    new Chart(document.getElementById('businessSizeChart'), {
        type: 'bar',
        data: {
            labels: ['Small Business\n(<50 employees)', 'Medium Business\n(50-500 employees)', 'Large Corporations\n(500+ employees)', 'Fortune 500\nCompanies'],
            datasets: [
                {
                    label: 'Tax Burden Change (%)',
                    data: [-2.1, -1.8, -4.2, -6.8],
                    backgroundColor: 'rgba(46, 204, 113, 0.7)',
                    borderColor: '#2ecc71',
                    borderWidth: 2,
                    yAxisID: 'y'
                },
                {
                    label: 'Regulatory Compliance Cost Change (%)',
                    data: [1.2, -0.8, -3.1, -5.2],
                    backgroundColor: 'rgba(231, 76, 60, 0.7)',
                    borderColor: '#e74c3c',
                    borderWidth: 2,
                    yAxisID: 'y'
                }
            ]
        },
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: 'Large corporations benefit most from deregulation',
                    font: {
                        size: window.innerWidth < 768 ? 11 : 14
                    }
                }
            }
        }
    });

    // SNAP Benefits Chart
    new Chart(document.getElementById('snapChart'), {
        type: 'bar',
        data: {
            labels: ['Single Adults\n(18-49)', 'Elderly\n(65+)', 'Families with\nChildren', 'Disabled\nIndividuals', 'Working Poor\nFamilies'],
            datasets: [{
                label: 'Benefit Change (Monthly $)',
                data: [-89, -12, -156, -78, -134],
                backgroundColor: [
                    '#e74c3c', '#f39c12', '#e74c3c', '#e67e22', '#e74c3c'
                ],
                borderColor: [
                    '#c0392b', '#e67e22', '#c0392b', '#d35400', '#c0392b'
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
                    text: 'SNAP work requirements reduce benefits across all groups',
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
