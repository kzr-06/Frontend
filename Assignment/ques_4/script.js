const form = document.querySelector("form");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#pass");

function setError(element, message) {
  const parent = element.parentElement;
  const small = parent.querySelector("small");

  element.classList.add("invalid");
  element.classList.remove("valid");

  small.innerText = message;
}


function setSuccess(element) {
  const parent = element.parentElement;
  const small = parent.querySelector("small");

  element.classList.add("valid");
  element.classList.remove("invalid");

  small.innerText = "";
}

//  email
function isValidEmail(value) {
  const regex = /^[\w.-]+@[\w.-]+\.\w{2,7}$/;
  return regex.test(value);
}

// Password
function isStrongPassword(value) {
  const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W_]).{8,}$/;
  return regex.test(value);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  // Validate Name
  if (nameValue === "") {
    setError(nameInput, "Name is required");
  } else if (nameValue.length < 4) {
    setError(nameInput, "Name must be at least 4 characters");
  } else {
    setSuccess(nameInput);
  }

  // Validate Email
  if (emailValue === "") {
    setError(emailInput, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(emailInput, "Enter a valid email");
  } else {
    setSuccess(emailInput);
  }

  // Validate Password
  if (passwordValue === "") {
    setError(passwordInput, "Password is required");
  } else if (!isStrongPassword(passwordValue)) {
    setError(
      passwordInput,
      "Password must include uppercase, lowercase, number, symbol, 8 chars"
    );
  } else {
    setSuccess(passwordInput);
  }


  if (
    nameInput.classList.contains("valid") &&
    emailInput.classList.contains("valid") &&
    passwordInput.classList.contains("valid")
  ) {

    alert("Form submitted successfully!");

    form.reset();

    [nameInput, emailInput, passwordInput].forEach((input) => {
      input.classList.remove("valid", "invalid");
      input.parentElement.querySelector("small").innerText = "";
    });
  }
});
