export function buildContactPage() {
    const content = document.querySelector('#content')
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('tab', 'tab3');
    const innerHTML = `
    <h2>Contact Us</h2>
  <form class="contact">
    <fieldset>
      <input placeholder="Your name" type="text" tabindex="1" required autofocus>
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" type="email" tabindex="2" required>
    </fieldset>
    <fieldset>
      <input placeholder="Your Phone Number" type="tel" tabindex="3" required>
    </fieldset>
    <fieldset>
      <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
  </form>`
    containerDiv.innerHTML = innerHTML;
    content.appendChild(containerDiv)
}