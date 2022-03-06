const closeMenu = document.querySelector('.close-menu');
const sidebarOpen = document.querySelector('.sidebar-open');
const abrirSidebar = document.querySelector('.abrir-sidebar');

// console.log(abrirSidebar);
//

// sidebar - open;

function clickExpandSidebar() {
  sidebarOpen.classList.add('fechar-sidebar');
  document.getElementById('heading-2').style.display = 'block';
}

abrirSidebar.addEventListener('click', clickExpandSidebar);

function clickOpenButton() {
  sidebarOpen.classList.remove('fechar-sidebar');
  document.getElementById('heading-1').style.display = 'none';
}

closeMenu.addEventListener('click', clickOpenButton);
