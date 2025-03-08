document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("invite-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents the default form submission

        // Get form values
        const name = document.getElementById("name").value.trim();
        const organization = document.getElementById("organization").value.trim();
        const title = document.getElementById("title").value.trim();
        const email = document.getElementById("email").value.trim();
        const state = document.getElementById("state").value.trim();

        if (!name || !organization || !title || !email || !state) {
            alert("Please fill in all fields before submitting.");
            return;
        }

        // Simulate form submission success
        alert(`Thank you, ${name}! Your invitation request has been submitted.`);
        form.reset(); // Clears the form
    });
});
