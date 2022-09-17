const firstName = document.getElementById("first-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

const submitButton = document.getElementById("submit-button");

const errorPasswordsParagraph = document.getElementById(
  "error-password-not-equal"
);

firstName.addEventListener("blur", addErrorStyle);
firstName.addEventListener("focus", removeMessageStyle);

email.addEventListener("blur", addErrorStyle);
email.addEventListener("focus", removeMessageStyle);

password.addEventListener("blur", addErrorStyle);
password.addEventListener("focus", removeMessageStyle);

confirmPassword.addEventListener("blur", addErrorStyle);
confirmPassword.addEventListener("focus", removeMessageStyle);

submitButton.addEventListener("click", sendForm);

password.addEventListener("keyup", function () {
  checkPassword();
});

confirmPassword.addEventListener("keyup", function () {
  checkPassword();
});

function sendForm(e) {
  e.preventDefault();
  if (
    firstName.value &&
    email.valuie &&
    password.value &&
    confirmPassword.value
  ) {
    submitButton.classList.remove("button-disbled");
  }
}

function checkPassword() {
  const passwordValue = password.value;
  const confirmPasswordValue = confirmPassword.value;

  if (
    passwordValue.toLowerCase() === confirmPasswordValue.toLowerCase() &&
    passwordValue &&
    confirmPasswordValue
  ) {
    errorPasswordsParagraph.style.display = "none";
    password.classList.remove("input-error");
    confirmPassword.classList.remove("input-error");
    submitButton.classList.remove("button-disbled");
    submitButton.removeAttribute("disabled");

    return;
  } else {
    errorPasswordsParagraph.style.display = "block";
    password.classList.add("input-error");
    confirmPassword.classList.add("input-error");
    return;
  }
}

function addErrorStyle(e) {
  const element = e.target;
  const elementId = e.target.getAttribute("id");

  if (!element.value) {
    const errorParagraph = document.createElement("p");
    errorParagraph.innerText = "This field is required";
    errorParagraph.setAttribute("id", `error-${elementId}`);
    errorParagraph.classList.add("message-error");
    element.insertAdjacentElement("afterend", errorParagraph);
    element.classList.add("input-error");
  }
}

function removeMessageStyle(e) {
  const element = e.target;
  const elementId = e.target.getAttribute("id");

  if (document.getElementById(`error-${elementId}`)) {
    const errorParagraph = document.getElementById(`error-${elementId}`);
    errorParagraph.classList.remove("message-error");
    errorParagraph.classList.add("message-error-hidden");
    errorParagraph.remove();
  }
  element.classList.remove("input-error");
}
