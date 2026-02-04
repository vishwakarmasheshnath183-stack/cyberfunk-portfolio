document.getElementById("contact-form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = e.target;
    const status = document.getElementById("form-status");

    let formData = new FormData(form);

    status.innerHTML = "Sending...";
    status.style.color = "#0ff";

    const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
    });

    if (response.ok) {
        status.innerHTML = "Message Sent Successfully!";
        status.style.color = "#00ff88";
        form.reset();
    } else {
        status.innerHTML = "Something went wrong. Try again!";
        status.style.color = "#ff0066";
    }
});


