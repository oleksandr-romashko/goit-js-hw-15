const loginForm = document.querySelector("form.login-form");

loginForm.addEventListener("submit", handleLoginSubmit);

/**
 * * Handles form validation and prints form values into console as an object.
 * @param {Event} event - the event that has occurred.
 * Prevent default page refresh behaviour upon form submit.
 * In case any of inputs is empty - informs user using alert, prefent empty form submit.
 * Prints submitted form values in form of an object.
 * Clean all inputs upon formsubmit.
 */
function handleLoginSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    alert("All fields must be completed");
    return;
  }

  const data = {
    email: email.value,
    password: password.value,
  };

  console.log(data);

  event.currentTarget.reset();
}
