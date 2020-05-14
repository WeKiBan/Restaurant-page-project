export function buildLandingPage(){
    const content = document.querySelector('#content')
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('tab', 'tab1');
    const innerHTML = `
    <h2>Best Burgers In Town</h2>
    <p>Since 1932</p>
    <div class="grid">
       <div class="image-1"></div>
       <div class="image-2"></div>
       <div class="image-3"></div>
    </div>`
    containerDiv.innerHTML = innerHTML;
    content.appendChild(containerDiv)
}