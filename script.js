
const newsletterForm = document.querySelector("#newsletter-form");
const formMessage = document.querySelector("#form-message");

if (newsletterForm && formMessage) {
  newsletterForm.addEventListener("submit", function (event) {
    event.preventDefault();

    formMessage.textContent =
      "Thank you, lovely! ♡ You're all set for a little inspiration.";

    formMessage.style.color = "#8b6f57";
    formMessage.style.marginTop = "15px";

    newsletterForm.reset();
  });
}
