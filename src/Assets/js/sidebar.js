const showNavBar = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show')
    })
  }
} 

showNavBar('header-toggle', 'nav-bar')
