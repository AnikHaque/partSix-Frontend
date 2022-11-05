import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MessengerChat } from "react-messenger-chat-plugin";
import './Contact.css';

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_8j0wnvr', 'template_d8cfx93', form.current, 'FJ3Y1kEbTwZra49pA')
        .then((result) => {
            console.log('message sent');
            console.log(result.text);
            alert("Email Sent Successfully To the Doctor");
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className='mt-32 lg:max-w-lg ml-96'>
        <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email"  name="user_email" />
      <label>message</label>
      <input type="text" className='message' name="message" />
     
      <input type="submit" className='btn btn-primary' value="Send Email" />
    </form>



    <MessengerChat
    pageId="100070097834032"
    language="sv_SE"
    themeColor={"#000000"}
    bottomSpacing={300}
    loggedInGreeting="loggedInGreeting"
    loggedOutGreeting="loggedOutGreeting"
    greetingDialogDisplay={"show"}
    debugMode={true}
    onMessengerShow={() => {
      console.log("onMessengerShow");
    }}
    onMessengerHide={() => {
      console.log("onMessengerHide");
    }}
    onMessengerDialogShow={() => {
      console.log("onMessengerDialogShow");
    }}
    onMessengerDialogHide={() => {
      console.log("onMessengerDialogHide");
    }}
    onMessengerMounted={() => {
      console.log("onMessengerMounted");
    }}
    onMessengerLoad={() => {
      console.log("onMessengerLoad");
    }}
  />,

    </div>
  )
}
