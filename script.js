// Financial models data from CSV
// Using a constant data structure to avoid loading delays
const financialModels = [
    {
        "Model Name": "$15k ESA",
        "Tuition": 15000,
        "Target Enrollment": 400,
        "Revenue": 6000000,
        "Guide Ratio": 25,
        "Guides": 16,
        "Guide Salary": 75000,
        "Lead Guides": 0,
        "Lead Guide Salary": 150000,
        "Room Assistants": 2,
        "Room Assistant Salary": 40000,
        "Head of School": 1,
        "Head of School Salary": 150000,
        "Admin": 1,
        "Admin Salary": 60000,
        "HC Loading": 1.15,
        "Total Guides Expense": 1380000,
        "Total Other HC": 333500,
        "Facility Per Student": 3000,
        "Facility Total": 1200000,
        "Motivation": 500,
        "Workshop": 750,
        "Motivation + Workshop Expense": 500000,
        "Misc Expense Per Student": 1500,
        "Misc Expense Total": 600000,
        "Profit (Loss)": 1986500,
        "Margin": 0.33,
        "Timeback / Software Per Student": 2000,
        "Timeback / Software Total": 800000,
        "External Profit (Loss)": 1186500,
        "External Margin": 0.20
    },
    {
        "Model Name": "$25k GT",
        "Tuition": 25000,
        "Target Enrollment": 250,
        "Revenue": 6250000,
        "Guide Ratio": 25,
        "Guides": 10,
        "Guide Salary": 100000,
        "Lead Guides": 2,
        "Lead Guide Salary": 150000,
        "Room Assistants": 2,
        "Room Assistant Salary": 60000,
        "Head of School": 1,
        "Head of School Salary": 200000,
        "Admin": 1,
        "Admin Salary": 60000,
        "HC Loading": 1.15,
        "Total Guides Expense": 1495000,
        "Total Other HC": 437000,
        "Facility Per Student": 4250,
        "Facility Total": 1062500,
        "Motivation": 1000,
        "Workshop": 1500,
        "Motivation + Workshop Expense": 625000,
        "Misc Expense Per Student": 1500,
        "Misc Expense Total": 375000,
        "Profit (Loss)": 2255500,
        "Margin": 0.36,
        "Timeback / Software Per Student": 5000,
        "Timeback / Software Total": 1250000,
        "External Profit (Loss)": 1005500,
        "External Margin": 0.16
    },
    {
        "Model Name": "$40k Alpha",
        "Tuition": 40000,
        "Target Enrollment": 150,
        "Revenue": 6000000,
        "Guide Ratio": 11,
        "Guides": 14,
        "Guide Salary": 100000,
        "Lead Guides": 4,
        "Lead Guide Salary": 150000,
        "Room Assistants": 1,
        "Room Assistant Salary": 60000,
        "Head of School": 1,
        "Head of School Salary": 200000,
        "Admin": 1,
        "Admin Salary": 60000,
        "HC Loading": 1.15,
        "Total Guides Expense": 2300000,
        "Total Other HC": 368000,
        "Facility Per Student": 6000,
        "Facility Total": 900000,
        "Motivation": 3750,
        "Workshop": 4750,
        "Motivation + Workshop Expense": 1275000,
        "Misc Expense Per Student": 1500,
        "Misc Expense Total": 225000,
        "Profit (Loss)": 932000,
        "Margin": 0.16,
        "Timeback / Software Per Student": 5000,
        "Timeback / Software Total": 750000,
        "External Profit (Loss)": 182000,
        "External Margin": 0.03
    },
    {
        "Model Name": "$50k Alpha",
        "Tuition": 50000,
        "Target Enrollment": 150,
        "Revenue": 7500000,
        "Guide Ratio": 11,
        "Guides": 14,
        "Guide Salary": 120000,
        "Lead Guides": 4,
        "Lead Guide Salary": 200000,
        "Room Assistants": 0,
        "Room Assistant Salary": 60000,
        "Head of School": 1,
        "Head of School Salary": 300000,
        "Admin": 1,
        "Admin Salary": 75000,
        "HC Loading": 1.15,
        "Total Guides Expense": 2852000,
        "Total Other HC": 431250,
        "Facility Per Student": 12000,
        "Facility Total": 1800000,
        "Motivation": 3750,
        "Workshop": 4750,
        "Motivation + Workshop Expense": 1275000,
        "Misc Expense Per Student": 1500,
        "Misc Expense Total": 225000,
        "Profit (Loss)": 916750,
        "Margin": 0.12,
        "Timeback / Software Per Student": 5000,
        "Timeback / Software Total": 750000,
        "External Profit (Loss)": 166750,
        "External Margin": 0.02
    },
    {
        "Model Name": "$65k Alpha",
        "Tuition": 65000,
        "Target Enrollment": 150,
        "Revenue": 9750000,
        "Guide Ratio": 11,
        "Guides": 14,
        "Guide Salary": 120000,
        "Lead Guides": 4,
        "Lead Guide Salary": 200000,
        "Room Assistants": 0,
        "Room Assistant Salary": 60000,
        "Head of School": 1,
        "Head of School Salary": 300000,
        "Admin": 1,
        "Admin Salary": 75000,
        "HC Loading": 1.15,
        "Total Guides Expense": 2852000,
        "Total Other HC": 431250,
        "Facility Per Student": 12000,
        "Facility Total": 1800000,
        "Motivation": 3750,
        "Workshop": 4750,
        "Motivation + Workshop Expense": 1275000,
        "Misc Expense Per Student": 1500,
        "Misc Expense Total": 225000,
        "Profit (Loss)": 3166750,
        "Margin": 0.32,
        "Timeback / Software Per Student": 5000,
        "Timeback / Software Total": 750000,
        "External Profit (Loss)": 2416750,
        "External Margin": 0.25
    },
    {
        "Model Name": "$40k Alpha Microschool",
        "Tuition": 40000,
        "Target Enrollment": 22,
        "Revenue": 880000,
        "Guide Ratio": 7,
        "Guides": 4,
        "Guide Salary": 100000,
        "Lead Guides": 1,
        "Lead Guide Salary": 150000,
        "Room Assistants": 0,
        "Room Assistant Salary": 60000,
        "Head of School": 0,
        "Head of School Salary": 200000,
        "Admin": 0,
        "Admin Salary": 60000,
        "HC Loading": 1.15,
        "Total Guides Expense": 632500,
        "Total Other HC": 0,
        "Facility Per Student": 5682,
        "Facility Total": 125000,
        "Motivation": 5000,
        "Workshop": 7000,
        "Motivation + Workshop Expense": 264000,
        "Misc Expense Per Student": 3500,
        "Misc Expense Total": 77000,
        "Profit (Loss)": -218500,
        "Margin": -0.25,
        "Timeback / Software Per Student": 5000,
        "Timeback / Software Total": 110000,
        "External Profit (Loss)": -328500,
        "External Margin": -0.37
    }
];

// Wait for DOM to be fully loaded before accessing elements
let modelSelector, 
    // Sliders
    tuitionSlider, enrollmentSlider, guideRatioSlider, guideSalarySlider,
    leadGuidesSlider, leadGuideSalarySlider, facilityPerStudentSlider,
    // Input boxes
    tuitionInput, enrollmentInput, guideRatioInput, guideSalaryInput,
    leadGuidesInput, leadGuideSalaryInput, facilityPerStudentInput,
    // Result elements
    revenueValue, guidesExpenseValue, facilityTotalValue, profitValue, marginValue;

// Initialize DOM elements safely
function initializeElements() {
    // Model selector
    modelSelector = document.getElementById('model-selector');
    
    // Basic parameter sliders
    tuitionSlider = document.getElementById('tuition');
    enrollmentSlider = document.getElementById('enrollment');
    guideRatioSlider = document.getElementById('guide-ratio');
    facilityPerStudentSlider = document.getElementById('facility-per-student');
    
    // Basic parameter inputs
    tuitionInput = document.getElementById('tuition-input');
    enrollmentInput = document.getElementById('enrollment-input');
    guideRatioInput = document.getElementById('guide-ratio-input');
    facilityPerStudentInput = document.getElementById('facility-per-student-input');
    
    // Headcount sliders
    // Lead Guides
    leadGuidesSlider = document.getElementById('lead-guides');
    leadGuideSalarySlider = document.getElementById('lead-guide-salary');
    
    // Guides
    guidesDisplay = document.getElementById('guides');
    guideSalarySlider = document.getElementById('guide-salary');
    
    // Room Assistants
    roomAssistantsSlider = document.getElementById('room-assistants');
    roomAssistantSalarySlider = document.getElementById('room-assistant-salary');
    
    // Head of School
    headOfSchoolSlider = document.getElementById('head-of-school');
    headOfSchoolSalarySlider = document.getElementById('head-of-school-salary');
    
    // Admin
    adminSlider = document.getElementById('admin');
    adminSalarySlider = document.getElementById('admin-salary');
    
    // Headcount inputs
    // Lead Guides
    leadGuidesInput = document.getElementById('lead-guides-input');
    leadGuideSalaryInput = document.getElementById('lead-guide-salary-input');
    
    // Guides
    guidesInput = document.getElementById('guides-input');
    guideSalaryInput = document.getElementById('guide-salary-input');
    
    // Room Assistants
    roomAssistantsInput = document.getElementById('room-assistants-input');
    roomAssistantSalaryInput = document.getElementById('room-assistant-salary-input');
    
    // Head of School
    headOfSchoolInput = document.getElementById('head-of-school-input');
    headOfSchoolSalaryInput = document.getElementById('head-of-school-salary-input');
    
    // Admin
    adminInput = document.getElementById('admin-input');
    adminSalaryInput = document.getElementById('admin-salary-input');

    // Result elements are accessed directly in the calculateResults function
}

// Chart
let financialChart;

// Format currency
function formatCurrency(value) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
}

// Format percentage
function formatPercentage(value) {
    return new Intl.NumberFormat('en-US', { style: 'percent', maximumFractionDigits: 0 }).format(value);
}

// Parse numeric input and ensure it's within range
function parseAndValidateInput(input, min, max, defaultValue) {
    let value = parseInt(input.value.replace(/[^0-9]/g, ''));
    
    if (isNaN(value)) {
        value = defaultValue;
    } else {
        // Ensure value is within range
        value = Math.max(min, Math.min(max, value));
    }
    
    return value;
}

// Update input boxes from sliders
function updateInputsFromSliders() {
    // Basic parameters
    tuitionInput.value = tuitionSlider.value;
    enrollmentInput.value = enrollmentSlider.value;
    guideRatioInput.value = guideRatioSlider.value;
    facilityPerStudentInput.value = facilityPerStudentSlider.value;
    
    // Calculate guides count based on enrollment and ratio
    const enrollment = parseInt(enrollmentSlider.value);
    const guideRatio = parseInt(guideRatioSlider.value);
    const guidesCount = Math.ceil(enrollment / guideRatio);
    guidesInput.value = guidesCount;
    guidesDisplay.value = guidesCount;
    
    // Headcount parameters
    // Lead Guides
    leadGuidesInput.value = leadGuidesSlider.value;
    leadGuideSalaryInput.value = leadGuideSalarySlider.value;
    
    // Guides
    guideSalaryInput.value = guideSalarySlider.value;
    
    // Room Assistants
    roomAssistantsInput.value = roomAssistantsSlider.value;
    roomAssistantSalaryInput.value = roomAssistantSalarySlider.value;
    
    // Head of School
    headOfSchoolInput.value = headOfSchoolSlider.value;
    headOfSchoolSalaryInput.value = headOfSchoolSalarySlider.value;
    
    // Admin
    adminInput.value = adminSlider.value;
    adminSalaryInput.value = adminSalarySlider.value;
}

// Update sliders from input boxes
function updateSlidersFromInputs() {
    // Basic parameters
    tuitionSlider.value = parseAndValidateInput(tuitionInput, tuitionSlider.min, tuitionSlider.max, tuitionSlider.value);
    enrollmentSlider.value = parseAndValidateInput(enrollmentInput, enrollmentSlider.min, enrollmentSlider.max, enrollmentSlider.value);
    guideRatioSlider.value = parseAndValidateInput(guideRatioInput, guideRatioSlider.min, guideRatioSlider.max, guideRatioSlider.value);
    facilityPerStudentSlider.value = parseAndValidateInput(facilityPerStudentInput, facilityPerStudentSlider.min, facilityPerStudentSlider.max, facilityPerStudentSlider.value);
    
    // Headcount parameters
    // Lead Guides
    leadGuidesSlider.value = parseAndValidateInput(leadGuidesInput, leadGuidesSlider.min, leadGuidesSlider.max, leadGuidesSlider.value);
    leadGuideSalarySlider.value = parseAndValidateInput(leadGuideSalaryInput, leadGuideSalarySlider.min, leadGuideSalarySlider.max, leadGuideSalarySlider.value);
    
    // Guides - only salary is editable
    guideSalarySlider.value = parseAndValidateInput(guideSalaryInput, guideSalarySlider.min, guideSalarySlider.max, guideSalarySlider.value);
    
    // Room Assistants
    roomAssistantsSlider.value = parseAndValidateInput(roomAssistantsInput, roomAssistantsSlider.min, roomAssistantsSlider.max, roomAssistantsSlider.value);
    roomAssistantSalarySlider.value = parseAndValidateInput(roomAssistantSalaryInput, roomAssistantSalarySlider.min, roomAssistantSalarySlider.max, roomAssistantSalarySlider.value);
    
    // Head of School
    headOfSchoolSlider.value = parseAndValidateInput(headOfSchoolInput, headOfSchoolSlider.min, headOfSchoolSlider.max, headOfSchoolSlider.value);
    headOfSchoolSalarySlider.value = parseAndValidateInput(headOfSchoolSalaryInput, headOfSchoolSalarySlider.min, headOfSchoolSalarySlider.max, headOfSchoolSalarySlider.value);
    
    // Admin
    adminSlider.value = parseAndValidateInput(adminInput, adminSlider.min, adminSlider.max, adminSlider.value);
    adminSalarySlider.value = parseAndValidateInput(adminSalaryInput, adminSalarySlider.min, adminSalarySlider.max, adminSalarySlider.value);
    
    // Update inputs with validated values
    updateInputsFromSliders();
}

// Calculate financial results
function calculateResults() {
    // Get basic parameters
    const tuition = parseInt(tuitionSlider.value);
    const enrollment = parseInt(enrollmentSlider.value);
    const guideRatio = parseInt(guideRatioSlider.value);
    const facilityPerStudent = parseInt(facilityPerStudentSlider.value);
    
    // Get headcount parameters
    // Lead Guides
    const leadGuides = parseInt(leadGuidesSlider.value);
    const leadGuideSalary = parseInt(leadGuideSalarySlider.value);
    
    // Guides
    const guides = Math.ceil(enrollment / guideRatio);
    const guideSalary = parseInt(guideSalarySlider.value);
    
    // Room Assistants
    const roomAssistants = parseInt(roomAssistantsSlider.value);
    const roomAssistantSalary = parseInt(roomAssistantSalarySlider.value);
    
    // Head of School
    const headOfSchool = parseInt(headOfSchoolSlider.value);
    const headOfSchoolSalary = parseInt(headOfSchoolSalarySlider.value);
    
    // Admin
    const admin = parseInt(adminSlider.value);
    const adminSalary = parseInt(adminSalarySlider.value);
    
    // HC Loading factor
    const hcLoading = 1.15; // 15% overhead for benefits, taxes, etc.
    
    // Calculate derived values
    const revenue = tuition * enrollment;
    
    // Calculate staff expenses
    const guidesExpense = guides * guideSalary * hcLoading;
    const leadGuidesExpense = leadGuides * leadGuideSalary * hcLoading;
    const roomAssistantsExpense = roomAssistants * roomAssistantSalary * hcLoading;
    const headOfSchoolExpense = headOfSchool * headOfSchoolSalary * hcLoading;
    const adminExpense = admin * adminSalary * hcLoading;
    
    // Total guide expense (guides + lead guides)
    const totalGuidesExpense = guidesExpense + leadGuidesExpense;
    
    // Total other HC (room assistants, head of school, admin)
    const totalOtherHC = roomAssistantsExpense + headOfSchoolExpense + adminExpense;
    
    // Facility costs
    const facilityTotal = facilityPerStudent * enrollment;
    
    // Get values from the selected model for non-staff expenses
    const selectedModel = financialModels.find(model => model["Model Name"] === modelSelector.value);
    
    // Motivation & Workshop expenses
    const motivationPerStudent = selectedModel["Motivation"];
    const workshopPerStudent = selectedModel["Workshop"];
    const motivationWorkshopPerStudent = motivationPerStudent + workshopPerStudent;
    const motivationWorkshopExpense = motivationWorkshopPerStudent * enrollment;
    
    // Misc expenses
    const miscExpensePerStudent = selectedModel["Misc Expense Per Student"];
    const miscExpenseTotal = miscExpensePerStudent * enrollment;
    
    // Timeback/Software expenses
    const timebackSoftwarePerStudent = selectedModel["Timeback / Software Per Student"];
    const timebackSoftwareTotal = timebackSoftwarePerStudent * enrollment;
    
    // Calculate total expenses and profit
    const totalExpenses = totalGuidesExpense + totalOtherHC + facilityTotal + motivationWorkshopExpense + miscExpenseTotal;
    const profit = revenue - totalExpenses;
    const margin = profit / revenue;
    
    // Calculate per-student values
    const guidesExpensePerStudent = totalGuidesExpense / enrollment;
    const otherHCPerStudent = totalOtherHC / enrollment;
    const profitPerStudent = profit / enrollment;
    
    // External profit (including software costs)
    const externalProfit = profit - timebackSoftwareTotal;
    const externalMargin = externalProfit / revenue;
    const externalProfitPerStudent = externalProfit / enrollment;
    
    // Update result elements - Revenue
    document.getElementById('revenue-per-student-value').textContent = formatCurrency(tuition);
    document.getElementById('revenue-value').textContent = formatCurrency(revenue);
    
    // Update expenses
    document.getElementById('guides-expense-per-student-value').textContent = formatCurrency(guidesExpensePerStudent);
    document.getElementById('guides-expense-value').textContent = formatCurrency(guidesExpense);
    
    document.getElementById('other-hc-per-student-value').textContent = formatCurrency(otherHCPerStudent);
    document.getElementById('other-hc-value').textContent = formatCurrency(totalOtherHC);
    
    document.getElementById('facility-per-student-result-value').textContent = formatCurrency(facilityPerStudent);
    document.getElementById('facility-total-value').textContent = formatCurrency(facilityTotal);
    
    document.getElementById('motivation-workshop-per-student-value').textContent = formatCurrency(motivationWorkshopPerStudent);
    document.getElementById('motivation-workshop-value').textContent = formatCurrency(motivationWorkshopExpense);
    
    document.getElementById('misc-expense-per-student-value').textContent = formatCurrency(miscExpensePerStudent);
    document.getElementById('misc-expense-value').textContent = formatCurrency(miscExpenseTotal);
    
    // Update profit section
    document.getElementById('profit-per-student-value').textContent = formatCurrency(profitPerStudent);
    document.getElementById('profit-value').textContent = formatCurrency(profit);
    document.getElementById('margin-value').textContent = formatPercentage(margin);
    
    // Update external profit section
    document.getElementById('timeback-per-student-value').textContent = formatCurrency(timebackSoftwarePerStudent);
    document.getElementById('timeback-value').textContent = formatCurrency(timebackSoftwareTotal);
    
    document.getElementById('external-profit-per-student-value').textContent = formatCurrency(externalProfitPerStudent);
    document.getElementById('external-profit-value').textContent = formatCurrency(externalProfit);
    document.getElementById('external-margin-value').textContent = formatPercentage(externalMargin);
    
    // Update chart
    updateChart(revenue, guidesExpense, totalOtherHC, facilityTotal, motivationWorkshopExpense, miscExpenseTotal, timebackSoftwareTotal);
}

// Initialize chart
let chartInitialized = false;

function initializeChart() {
    // Check if chart already exists to prevent re-initialization
    if (chartInitialized) return;
    
    const ctx = document.getElementById('financial-chart').getContext('2d');
    
    // Set default configuration
    Chart.defaults.font.family = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    Chart.defaults.font.size = 12;
    
    // Create chart with animation disabled initially to prevent flashing
    financialChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [
                'Guides Expense', 
                'Other Human Capital', 
                'Facility', 
                'Motivation & Workshop', 
                'Misc Expenses',
                'Timeback/Software',
                'Profit'
            ],
            datasets: [{
                data: [0, 0, 0, 0, 0, 0, 0],
                backgroundColor: [
                    '#3498db',
                    '#2980b9',
                    '#e74c3c',
                    '#c0392b',
                    '#f39c12',
                    '#d35400',
                    '#2ecc71'
                ],
                borderWidth: 1,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 0 // Disable animation initially
            },
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        boxWidth: 15,
                        padding: 15
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += formatCurrency(context.raw);
                            return label;
                        }
                    }
                }
            }
        }
    });
    
    chartInitialized = true;
    
    // Enable animations after initial render
    setTimeout(() => {
        financialChart.options.animation = {
            duration: 300 // Short animation duration to prevent long flashes
        };
    }, 500);
}

// Update chart data with debouncing to prevent too many updates
let updateChartTimeout;
function updateChart(revenue, guidesExpense, totalOtherHC, facilityTotal, motivationWorkshopExpense, miscExpenseTotal, timebackSoftwareTotal) {
    // Clear any pending updates
    clearTimeout(updateChartTimeout);
    
    // Set a small timeout to debounce updates
    updateChartTimeout = setTimeout(() => {
        if (!chartInitialized) {
            initializeChart();
        }
        
        const profit = revenue - guidesExpense - totalOtherHC - facilityTotal - motivationWorkshopExpense - miscExpenseTotal - timebackSoftwareTotal;
        
        financialChart.data.datasets[0].data = [
            guidesExpense,
            totalOtherHC,
            facilityTotal,
            motivationWorkshopExpense,
            miscExpenseTotal,
            timebackSoftwareTotal,
            profit > 0 ? profit : 0 // Only show profit if positive
        ];
        
        financialChart.update('none'); // Update without animation for smoother experience
    }, 100);
}

// Load model data
function loadModelData(modelName) {
    const model = financialModels.find(model => model["Model Name"] === modelName);
    
    if (model) {
        // Update basic parameter sliders
        tuitionSlider.value = model["Tuition"];
        enrollmentSlider.value = model["Target Enrollment"];
        guideRatioSlider.value = model["Guide Ratio"];
        facilityPerStudentSlider.value = model["Facility Per Student"];
        
        // Update headcount sliders
        // Lead Guides
        leadGuidesSlider.value = model["Lead Guides"];
        leadGuideSalarySlider.value = model["Lead Guide Salary"];
        
        // Guides - only salary is editable, count is calculated
        guideSalarySlider.value = model["Guide Salary"];
        
        // Room Assistants
        roomAssistantsSlider.value = model["Room Assistants"];
        roomAssistantSalarySlider.value = model["Room Assistant Salary"];
        
        // Head of School
        headOfSchoolSlider.value = model["Head of School"];
        headOfSchoolSalarySlider.value = model["Head of School Salary"];
        
        // Admin
        adminSlider.value = model["Admin"];
        adminSalarySlider.value = model["Admin Salary"];
        
        // Update input boxes
        updateInputsFromSliders();
        
        // Calculate results
        calculateResults();
    }
}

// Setup event listeners
function setupEventListeners() {
    // Model selector change event
    modelSelector.addEventListener('change', function() {
        loadModelData(this.value);
    });

    // Add event listeners to all sliders
    const sliders = [
        // Basic parameters
        tuitionSlider, 
        enrollmentSlider, 
        guideRatioSlider, 
        facilityPerStudentSlider,
        
        // Headcount parameters
        leadGuidesSlider,
        leadGuideSalarySlider,
        guideSalarySlider,
        roomAssistantsSlider,
        roomAssistantSalarySlider,
        headOfSchoolSlider,
        headOfSchoolSalarySlider,
        adminSlider,
        adminSalarySlider
    ];

    sliders.forEach(slider => {
        slider.addEventListener('input', function() {
            updateInputsFromSliders();
            calculateResults();
        });
    });
    
    // Add event listeners to all input boxes
    const inputs = [
        // Basic parameters
        tuitionInput,
        enrollmentInput,
        guideRatioInput,
        facilityPerStudentInput,
        
        // Headcount parameters
        leadGuidesInput,
        leadGuideSalaryInput,
        guideSalaryInput,
        roomAssistantsInput,
        roomAssistantSalaryInput,
        headOfSchoolInput,
        headOfSchoolSalaryInput,
        adminInput,
        adminSalaryInput
    ];
    
    inputs.forEach(input => {
        // Update on blur (when user clicks away)
        input.addEventListener('blur', function() {
            updateSlidersFromInputs();
            calculateResults();
        });
        
        // Update on Enter key press
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                updateSlidersFromInputs();
                calculateResults();
            }
        });
    });
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Initialize DOM elements first
    initializeElements();
    
    // Setup event listeners
    setupEventListeners();
    
    // Load initial model data (this will also initialize the chart)
    loadModelData(modelSelector.value);
    
    // Force a redraw after a short delay to ensure everything is properly rendered
    setTimeout(() => {
        calculateResults();
    }, 300);
});
