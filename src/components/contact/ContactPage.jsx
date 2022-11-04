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
          <div className="label-input">
            <label>First name</label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              placeholder="Enter your first name"
              onChange={(e) => changeEventHandler(e, "firstName")}
            />
          </div>
          <div className="label-input">
            <label>Last name</label>
            <input
              type="text"
              name="last_name"
              id="last_name"
              placeholder="Enter your last name"
              onChange={(e) => changeEventHandler(e, "lastName")}
            />  
          </div>    
        </div>
        <div className="label-input">
          <label>Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="yourname@email.com"
            onChange={(e) => changeEventHandler(e, "email")}
          />  
        </div>

        <div className="label-input">
          <label>Message</label>
          <textarea
              name="message"
              id="message"
              rows="7"
              placeholder="Send me a message and I'll reply you as soon as possible..."
              maxLength="500"
              className="textarea"
              onChange={(e) => changeEventHandler(e, "message")}
          />   
        </div>
      </form>
    </div>
  )
}
// value={eventFormStates.message}

export default ContactPage