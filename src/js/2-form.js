const formData={

  email: "",
  message:"",
}



// refs 
const formEl=document.querySelector(".feedback-form");
const emailEl = formEl.elements.email;
const messageEl = formEl.elements.message;

const dataLocalStorage=JSON.parse(localStorage.getItem("feedback-form-state"));
if (dataLocalStorage) {
  emailEl.value = dataLocalStorage.email || "";
  messageEl.value = dataLocalStorage.message || "";
  formData.email = dataLocalStorage.email || "";
  formData.message = dataLocalStorage.message || "";
}


// callback
const onFormInput=(event)=>{
  formData[event.target.name] = event.target.value;

  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};
  
  
  const onFormSubmit = (event) => {
  event.preventDefault();
  if (emailEl.value.trim() === "" || messageEl.value.trim() === "") {
    return alert("Fill please all fields");
  }

  console.log("Submitted:", formData);
  formEl.reset();
  localStorage.removeItem("feedback-form-state");
};
// listener
formEl.addEventListener("input", onFormInput);
formEl.addEventListener("submit", onFormSubmit)
