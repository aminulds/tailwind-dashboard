const sidebar = document.getElementById('sidebar')
const menuToogler = document.getElementById('menuToogler')
const closeButton = document.getElementById('closeButton')
const topMenu = document.getElementById('topMenu')


const menuToogle = () => {
    sidebar.classList.toggle('block')
    sidebar.classList.toggle('hidden')
    sidebar.classList.toggle('fixed')
}


menuToogler.addEventListener('click', menuToogle)
closeButton.addEventListener('click', menuToogle)


// Chart.js
const salesChart = document.getElementById('salesChart');
const purchaseChart = document.getElementById('purchaseChart');
const pieChart = document.getElementById('pieChart');
const polarArea = document.getElementById('polarArea');

new Chart(salesChart, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
        datasets: [{
            label: 'Number of Sales',
            data: [5, 19, 15, 10, 18, 12],
            backgroundColor: [
                'rgba(255,99,132,1)',
                'rgba(54,162,235,1)',
                'rgba(255,206,86,1)',
                'rgba(75,192,192,1)',
                'rgba(153,102,255,1)',
                'rgba(255,159,64,1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

new Chart(purchaseChart, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
        datasets: [{
            label: 'Number of Sales Return',
            data: [10, 41, 19, 75, 18, 28],
            backgroundColor: [
                'rgba(255,99,132,1)',
                'rgba(54,162,235,1)',
                'rgba(255,206,86,1)',
                'rgba(75,192,192,1)',
                'rgba(153,102,255,1)',
                'rgba(255,159,64,1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

new Chart(pieChart, {
    type: 'doughnut',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
        datasets: [{
            label: 'Number of Sales Return',
            data: [10, 41, 19, 75, 18, 28],
            backgroundColor: [
                'rgba(255,99,132,1)',
                'rgba(54,162,235,1)',
                'rgba(255,206,86,1)',
                'rgba(75,192,192,1)',
                'rgba(153,102,255,1)',
                'rgba(255,159,64,1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

new Chart(polarArea, {
    type: 'polarArea',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
        datasets: [{
            label: 'Number of Sales Return',
            data: [10, 41, 19, 75, 18, 28],
            backgroundColor: [
                'rgba(255,99,132,1)',
                'rgba(54,162,235,1)',
                'rgba(255,206,86,1)',
                'rgba(75,192,192,1)',
                'rgba(153,102,255,1)',
                'rgba(255,159,64,1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});