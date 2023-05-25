import React, { useState } from "react";
import "./contact.css";

function Contact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handleMessageChange = (event) => {
		setMessage(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// TODO: handle form submission
	};

	return (
		<div className="contact-card">
			<h1>Connect With Us</h1>
			<form onSubmit={handleSubmit} className="contact-form">
				<div className="contact-form-top">
					<label className="contact-form-label">
						<h3>Name</h3>
						<input
							type="text"
							value={name}
							onChange={handleNameChange}
							required
							className="contact-inputbox"
						/>
					</label>
					<label className="contact-form-label">
						<h3>Email</h3>
						<input
							type="email"
							value={email}
							onChange={handleEmailChange}
							required
							className="contact-inputbox"
						/>
					</label>
				</div>
				<div className="contact-form-bottom">
					<label className="contact-form-label">
						<h3>Message</h3>
						<textarea
							value={message}
							onChange={handleMessageChange}
							required
							className="contact-form-textarea"
						/>
					</label>
				</div>
				<div className="contact-button">
					<button type="submit">Submit</button>
				</div>
			</form>
		</div>
	);
}

export default Contact;
