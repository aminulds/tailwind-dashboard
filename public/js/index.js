const sidebar = document.getElementById('sidebar')
const menuToogler = document.getElementById('menuToogler')


const menuToogle = () => {
    sidebar.classList.toggle('block')
    sidebar.classList.toggle('hidden')
}

menuToogler.addEventListener('click', menuToogle)