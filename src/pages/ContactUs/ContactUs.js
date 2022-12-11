import React, { useState } from 'react'
import { init } from 'emailjs-com';
import emailjs from 'emailjs-com'
import './contactUs.css'
init('user_id');

const Contact = () => {

    const submit = () => {
        if (name && email && message) {
            const serviceId = 'service_id';
            const templateId = 'template_id';
            const userId = 'user_id';
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));


            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }

    const isValidEmail = email => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    };

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    return (
        <body className='contact-us'>
            <div className="contact-us-description">
                <h1 >Contact Us</h1>
                <h2 >Alta Team have young, cool, and passionate students from Macalester College, USA. We care about sustainable fashion and want to build a sustainable world! </h2>
            </div>
            <form className='contact-us-form'>
                <input className='contact-us-input' type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
                <input className='contact-us-input' type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} />
                <textarea className='your-message' placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                <button className='send-message' onClick={submit}>Send Message</button>
                <div className={emailSent ? 'thank-you-message' : null} >
                    <span  >Thank you for your message, we will be in touch in no time!</span>
                </div>

            </form>
        </body>


    );
};
export default Contact;