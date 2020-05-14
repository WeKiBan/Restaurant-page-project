export function buildNavBar(){
        const content = document.querySelector('#content')
        const navContainerDiv = document.createElement('div');
        navContainerDiv.classList.add('header');
        const innerHTML = `
        <div class="logo-container">
        <h1>Wekhuna <br>Burger</h1>
        <p>Since 1932</p>
        </div>
       
        <div class="nav">
           <ul>
           <li class="nav-btn" id="about-btn">About</li>
           <li class="nav-btn" id="menu-btn">Menu</li>
           <li class="nav-btn" id="contact">Contact</li>
           </ul>
        </div>`
        navContainerDiv.innerHTML = innerHTML;
        content.appendChild(navContainerDiv)
}