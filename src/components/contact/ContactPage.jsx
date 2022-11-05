import './contact.css'
import { useState } from "react";


const ContactPage = ({ handleAdd }) => {

  const [eventFormStates, setEventFormStates] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    checkbox : false,
  });

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [checkboxError, setCheckboxError] = useState("");

  const changeEventHandler = (e, name) => {
    setEventFormStates({ ...eventFormStates, [name]: name === "checkbox" ? e.target.checked : e.target.value });
  }

  const validate = (input, setInput) => {
    const setError = document.querySelector(`.${input}`)
    if (eventFormStates[input] === "") {
      setInput( `${input} can not be blank` );
      setError.classList.add("error")
    }else {
      setInput("");
      setError.classList.remove("error")
    }
  }

  const validateCheckbox = () => {
    const setError = document.querySelector('.checkbox');
    if (eventFormStates["checkbox"] === false) {
      setCheckboxError( "Please check the box" );
      setError.classList.add("error")
    }else {
      setCheckboxError("")
      setError.classList.remove("error")
    }
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    validate("firstName", setFirstNameError);
    validate("lastName", setLastNameError);
    validate("email", setEmailError);
    validate("message", setMessageError);
    validateCheckbox();

    if (eventFormStates.firstName !== "" && eventFormStates.lastName !== "" && eventFormStates.email !== "" && eventFormStates.message !== "" && eventFormStates.checkbox !== false) {
      handleAdd(eventFormStates);
      setEventFormStates({ 
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        checkbox : false, });
    }
    
  }

  return (
    <div className='contact-container'>
      <div className="top">
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="full-name">
          <div className="label-input">
            <label>First name</label>
            <input
              type="text"
              name="firstName"
              className='firstName'
              id="first_name"
              placeholder="Enter your first name"
              value={eventFormStates.firstName}
              onChange={(e) => changeEventHandler(e, "firstName")}
            />
            {firstNameError && <div className='error-message'>{firstNameError}</div>}
          </div>

          <div className="label-input">
            <label>Last name</label>
            <input
              type="text"
              name="lastName"
              className='lastName'
              id="last_name"
              placeholder="Enter your last name"
              value={eventFormStates.lastName}
              onChange={(e) => changeEventHandler(e, "lastName")}
            />
            {lastNameError && <div className='error-message'>{lastNameError}</div>}  
          </div>    
        </div>

        <div className="label-input">
          <label>Email</label>
          <input
            type="text"
            name="email"
            className='email'
            id="email"
            placeholder="yourname@email.com"
            value={eventFormStates.email}
            onChange={(e) => changeEventHandler(e, "email")}
          />  
          {emailError && <div className='error-message'>{emailError}</div>}
        </div>

        <div className="label-input">
          <label>Message</label>
          <textarea
              name="message"
              className='message'
              id="message"
              rows="7"
              placeholder="Send me a message and I'll reply you as soon as possible..."
              maxLength="500"
              value={eventFormStates.message}
              onChange={(e) => changeEventHandler(e, "message")}
          />   
          {messageError && <div className='error-message'>{messageError}</div>}
        </div>

        <div className="label-input">
          <div className="label-checkbox">
            <input
                name="checkbox"
                className='checkbox'
                id="checkbox"
                type= "checkbox"
                onChange={(e) => changeEventHandler(e, "checkbox")}
                checked = { eventFormStates.checkbox === true}
            />
            <label>You agree to providing your data to Saheed Tajudeen who may contact you.</label>
          </div>
          {checkboxError && <div className='error-message'>{checkboxError}</div>}
        </div>

        <button className={'btn__submit'} id = {'btn__submit'} type={"submit"}>
          Send message
        </button>
      </form>
    </div>
  )
}

export default ContactPage