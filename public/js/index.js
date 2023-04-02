const sidebar = document.getElementById('sidebar')
const menuToogler = document.getElementById('menuToogler')
const closeButton = document.getElementById('closeButton')


const menuToogle = () => {
    sidebar.classList.toggle('block')
    sidebar.classList.toggle('hidden')
}

menuToogler.addEventListener('click', menuToogle)
closeButton.addEventListener('click', menuToogle)