export function buildMenuPage(){
    const content = document.querySelector('#content')
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('tab', 'tab2');
    const innerHTML = `
    <h1>Menu</h1>
    <div class="menu-item-container">
    <h3>Classic Burger</h3>
    <p>Our all american burger with pickles onions ketchup and cheese</p>
    <p>$10.99</p>
    </div>
    <div class="menu-item-container">
    <h3>Bacon Cheese Burger</h3>
    <p>Another classic burger with crispy bacon and cheddar cheese. with pickles onions ketchup and cheese</p>
    <p>$11.99</p>
    </div>
    <div class="menu-item-container">
    <h3>Cowboy Burger</h3>
    <p>8oz beef patty with pickles onions ketchup and ranch dressing</p>
    <p>$12.99</p>
    </div>
    <div class="menu-item-container">
    <h3>Veggie Burger</h3>
    <p>Classic burger with a vegetarian take</p>
    <p>$11.99</p>
    </div>
    <div class="menu-item-container">
    <h3>Tofu Burger</h3>
    <p>Tofu burger with japanese style teryaki sauce</p>
    <p>$7.99</p>
    </div>`

    containerDiv.innerHTML = innerHTML;
    content.appendChild(containerDiv)
}