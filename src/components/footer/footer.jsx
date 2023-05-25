import "./footer.css";

const Footer = () => {
	return (
		<div className="footer-body">
			<div className="footer-body-top">
				<div className="footer-logo">
					<img
						src="https://uploads-ssl.webflow.com/63b7fcbf95bdaab3aab1fd40/63baf5caf110991790617f0c_Canisa%20Group%207.svg"
						alt="canisa logo"
					/>
				</div>
				<div className="footer-link">
					<div className="footer-link-left">
						<h2>Company</h2>
						<p>About Us</p>
						<p>Whitepaper</p>
						<p>Join us</p>
					</div>
					<div className="footer-link-right">
						<h2>Help</h2>
						<p>Contact us</p>
						<p>Resources</p>
					</div>
				</div>
				<div className="footer-register">
					<h2>Email us</h2>
                    <div className="footer-input">
                    <input
						type="email"
						className="footer-register-box"
						placeholder="Email Address"
					/>
                    <input type="submit" className="footer-submit-btn" />
                    </div>
				</div>
			</div>
			<div className="footer-body-bottom">
				<p>2023 Canisa Health. All rights reserved</p>
			</div>
		</div>
	);
};

export default Footer;
