export default Feedback;
const throttle = require("lodash.throttle");

const refs = {
  formEl: document.querySelector(".feedback-form"),
  emailEl: document.querySelector("input[type='email']"),
  textareaEl: document.querySelector("textarea"),
};
const { formEl, emailEl, textareaEl } = refs;
const STORAGE_KEY = "feedback-form-state";
const formData = {};

populateFormElements(STORAGE_KEY);
formEl.addEventListener("submit", handleSubmit);
formEl.addEventListener("input", throttle(onInputElements, 500));

function onInputElements(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateFormElements(key) {
  const parsedData = JSON.parse(localStorage.getItem(key));
  if (parsedData) {
    parsedData.email ? (emailEl.value = parsedData.email) : "";
    parsedData.message ? (textareaEl.value = parsedData.message) : "";
  }
}

function handleSubmit(e) {
  e.preventDefault();
  if (!emailEl.value || !textareaEl.value) {
    return alert("Please fill in all the fields!");
  }
  console.log({ email: emailEl.value, message: textareaEl.value });
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
