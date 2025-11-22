document.getElementById("signUpForm").addEventListener("submit", (event) => {
  //   event.preventDefault();

  // first name
  const fName = document.getElementById("firstName");
  const fNameValue = fName.value.trim();

  //   last name
  const lName = document.getElementById("lastName");
  const lNameValue = lName.value.trim();

  //   email
  const email = document.getElementById("email");
  const emailValue = email.value.trim();

  //   error message
  const errorMessage = document.getElementById("error-message");

  // capital letters
  const capitalLetter = /^[A-Z]/;

  // email pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //   flash animation for error message
  function flashInput(input) {
    input.classList.remove("input-error");
    // force reflow to restart animation
    void input.offsetWidth;
    input.classList.add("input-error");
  }

  function fadeErrorMessage() {
    setTimeout(() => {
      errorMessage.classList.remove("hidden");
    }, 50);

    setTimeout(() => {
      errorMessage.classList.add("hidden");
    }, 3000);
  }

  //RULE 1: empty field for fName

  if (fNameValue === "") {
    event.preventDefault();
    errorMessage.classList.add("red");
    errorMessage.textContent = "Field must not be empty!";
    flashInput(fName);
    fName.focus();
    fadeErrorMessage();
    return;
  }

  // Rule 2: capital letter validation for firstname

  if (!capitalLetter.test(fNameValue)) {
    event.preventDefault();
    errorMessage.classList.add("red");
    errorMessage.textContent = "First Name must begin with a capital letter.";
    flashInput(fName);
    fName.focus();
    fadeErrorMessage();
    return;
  }

  //RULE 1: empty field for lName

  if (lNameValue === "") {
    event.preventDefault();
    errorMessage.classList.add("red");
    errorMessage.textContent = "Field must not be empty!";
    flashInput(lName);
    lName.focus();
    fadeErrorMessage();
    return;
  }

  // Rule 2: capital letter validation for lastname

  if (!capitalLetter.test(lNameValue)) {
    event.preventDefault();
    errorMessage.classList.add("red");
    errorMessage.textContent = "Last Name must begin with a capital letter.";
    flashInput(lName);
    lName.focus();
    fadeErrorMessage();
    return;
  }

  //RULE 1: empty field for email

  if (emailValue === "") {
    event.preventDefault();
    errorMessage.classList.add("red");
    errorMessage.textContent = "Field must not be empty!";
    flashInput(email);
    email.focus();
    fadeErrorMessage();
    return;
  }

  //   RULE 3: email validation

  if (!emailPattern.test(emailValue)) {
    event.preventDefault;
    errorMessage.classList.add("red");
    errorMessage.textContent = "Invalid Email";
    flashInput(email);
    email.focus();
    fadeErrorMessage();
    return;
  }
});

/* Form Validation Requirements
1. if any form is empty it'll send a message saying "it must be filled out" to the empty paragraph and add a class of red from styles and wont send the form 
2. if fName and lName does not start with capital letter it says " must begin with capital a letter" to the empty paragraph and add a class of red from styles and doesn't send the form
3. if the email is invalid it also performs the same error features*/

/* When requirements are met the form should highlight green to indicate the user has done the right thing*/
