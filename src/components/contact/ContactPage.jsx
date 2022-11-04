import './contact.css'
import { useState } from "react";

const ContactPage = () => {

  const [eventFormStates, setEventFormStates] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const changeEventHandler = (e, name) => {
    setEventFormStates({ ...eventFormStates, [name]: e.target.value });
    console.log(eventFormStates);
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    // if(text.trim().length > 10){
    //     const newFeedback = {
    //         text,
    //         rating,
    //         // or
    //         // text: text,
    //         // rating: rating,
    //     }
    //     handleAdd(newFeedback)
    //     setText('')
    // }
  }

  return (
    <div className='contact-container'>
      <div className="top">
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="full-name">
          <label>First name</label>
          <input
            type="text"
            name="first_name"
            value={eventFormStates.firstName}
            id="first_name"
            placeholder="Enter your first name"
            onChange={(e) => changeEventHandler(e, "firstName")}
          />
          <label>Last name</label>
          <input
            type="text"
            name="last_name"
            value={eventFormStates.lastName}
            id="last_name"
            placeholder="Enter your last name"
            onChange={(e) => changeEventHandler(e, "lastName")}
          />              
        </div>
      </form>
    </div>
  )
}

export default ContactPage