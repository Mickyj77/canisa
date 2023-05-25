import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	return (
		<>
			<nav className="navbar">
				<div className="navbar-container">
					<Link to="/" className="navbar-logo">
						<img
							src="https://uploads-ssl.webflow.com/63b7fcbf95bdaab3aab1fd40/63baf5caf110991790617f0c_Canisa%20Group%207.svg"
							alt="img"
						/>
					</Link>
					<div className="menu-icon" onClick={handleClick}>
						<i className={click ? "fas fa-xtimes" : "fas fa-bars"} />
					</div>
					<ul className={click ? "nav-menu active" : "nav-menu"}>
						<li className="nav-item">
							<Link to="/" className="nav-links" onClick={closeMobileMenu}>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/services"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Services
							</Link>
						</li>
						<li className="nav-items">
							<Link
								to="/how-it-work"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								How It Works
							</Link>
						</li>

						<li className="nav-items">
							<Link
								to="/sign-up"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Impact
							</Link>
						</li>
						<li className="nav-items">
							<Link
								to="/about-us"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								About Us
							</Link>
						</li>
						<li className="nav-items">
							<Link
								to="/contact-us"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
