import { useState } from "react";

const Contact = () => {
    const [validSubmission, setValidSubmission] = useState(false);
    const [validName, setValidName] = useState('');
    const [validEmail, setValidEmail] = useState('');
    const [validMessage, setValidMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === 'email') {
            const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            const message = document.getElementById('invalid');
            if (value.match(regex)) {
                message.style.display = 'none';
            } else {
                message.style.display = 'block';
            }
        }
    };

    const buttonClick = (e) => {
        e.preventDefault();
        const name = document.getElementById('display1');
        const email = document.getElementById('display2');
        const message = document.getElementById('display3');

        if (validName === '') {
            name.style.display = 'block';
        } else {
            name.style.display = 'none';
        }
        if (validEmail === '') {
            email.style.display = 'block';
        } else {
            email.style.display = 'none';
        }
        if (validMessage === '') {
            message.style.display = 'block';
        } else {
            message.style.display = 'none';
        }

        if (validName !== '' && validEmail !== '' && validMessage !== '') {
            setValidSubmission(true);
            setTimeout(() => {
                setValidSubmission(false);
            }, 5000);
        }
    };

    return (
        <div style={{ padding: '20px', backgroundColor: '#314d6d', color: '#ffffff', borderRadius: '10px', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)' }}>
            <h1>Contact</h1>
            <form>
                <label style={{ fontSize: '16px' }}>Name:</label>
                <input
                    className="field"
                    type="text"
                    id="name"
                    name='name'
                    value={validName}
                    onChange={(e) => setValidName(e.target.value)}
                    placeholder='Your Full Name'
                    required
                    style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ffffff', borderRadius: '5px', backgroundColor: 'transparent', color: '#ffffff' }}
                />
                <label style={{ fontSize: '16px' }}>Email:</label>
                <input
                    className="field"
                    type="email"
                    id="email"
                    name='email'
                    value={validEmail}
                    onChange={(e) => setValidEmail(e.target.value)}
                    onBlur={handleInputChange}
                    placeholder='Your Email'
                    required
                    style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ffffff', borderRadius: '5px', backgroundColor: 'transparent', color: '#ffffff' }}
                />
                <p></p>
                <label style={{ fontSize: '16px' }}>Message:</label>
                <textarea
                    className="field"
                    id="message"
                    name="message"
                    rows="7"
                    value={validMessage}
                    onChange={(e) => setValidMessage(e.target.value)}
                    placeholder='Your Message'
                    required
                    style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ffffff', borderRadius: '5px', backgroundColor: 'transparent', color: '#ffffff' }}
                ></textarea>
                <p id="invalid" className="display" style={{ display: 'none', color: '#ff0000', fontSize: '14px', marginTop: '-10px' }}>Your Email is Invalid</p>
                <p id="display1" className="display" style={{ display: 'none', color: '#ff0000', fontSize: '14px', marginTop: '-10px' }}>Name is required</p>
                <p id="display2" className="display" style={{ display: 'none', color: '#ff0000', fontSize: '14px', marginTop: '-10px' }}>Email is required</p>
                <p id="display3" className="display" style={{ display: 'none', color: '#ff0000', fontSize: '14px', marginTop: '-10px' }}>Message is required</p>

                {validSubmission ? (<p>Message Sent</p>) : (<p></p>)}
                <button onClick={buttonClick} type='submit' style={{ backgroundColor: '#ffffff', color: '#314d6d', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px' }}>Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
