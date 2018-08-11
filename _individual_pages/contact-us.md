---
layout: page
---

<form name="contact-us" method="POST" netlify-honeypot="poneyhot" netlify>
    <label id="poneyhot-label" for="poneyhot">Poneyhot</label>
    <input id="poneyhot-field" name="poneyhot" type="text">
    <p>
        <label>Name: <input type="text" name="name"></label>
    </p>
    <p>
        <label>Email: <input type="email" name="email"></label>
    </p>
    <p>
        <label>Phone: <input type="number" name="phone"></label>
    </p>
    <p>
        <label>Message: <textarea name="message"></textarea></label>
    </p>
    <p>
        <button class="button" type="submit">Send</button>
    </p>
</form>
