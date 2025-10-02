let form = document.querySelector('.contact__form');

form.addEventListener('submit', e => {
  e.preventDefault();

  let username = e.target.username.value;
  let email = e.target.email.value;
  let message = e.target.message.value;

  const serviceID = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const toEmail = import.meta.env.VITE_EMAIL_TO;
  const toName = import.meta.env.VITE_EMAIL_TO_NAME;

  let params = {
    name: username,
    email: email,
    message: message,
    to_email: toEmail,
    to_name: toName
  };

  window.emailjs.send(serviceID, templateID, params)
  .then(res => {
    alert("Your message sent successfully!!")
  })
  .catch(err => console.log(err));
}) 