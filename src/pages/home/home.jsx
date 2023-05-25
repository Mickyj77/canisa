import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="body">
			<div className="home-body">
				<div className="home-info">
					<h1>Your Personal Doctor On The Go!</h1>
					<p>
						Canisa Health makes healthcare services accessible, affordable, and
						accurate. You can access our services from the convenience of your
						mobile phone, any time, any where!
					</p>
					<button className="home-button">
						<Link to="#">GET STARTED</Link>
					</button>
				</div>
				<div className="home-image">
					<img
						src="https://uploads-ssl.webflow.com/63b7fcbf95bdaab3aab1fd40/63b81f5535544c3161c70d13_medium-shot-smiley-doctor-with-coat-removebg-preview.png"
						alt="doctor image"
					/>
				</div>
			</div>
			<div className="services">
				<h1 className="services-header">Our Services</h1>
				<div className="services-body">
					<div className="services-info">
						<h1>Book a doctor with USSD</h1>
						<p>
							Canisa Health is the easiest way to access healthcare. You can
							book appointments with qualified doctors, simply by dialing a USSD
							code. No internet connection required.
						</p>
					</div>
					<div className="services-img">
						<img
							src="https://uploads-ssl.webflow.com/63b7fcbf95bdaab3aab1fd40/63bc507232803f08cc316b2f_Tuonge_Mockup%20(1).jpeg"
							alt=""
							className="service-image"
						/>
					</div>
				</div>
				<div className="services-body-left">
					<div className="services-img-left">
						<img
							src="https://uploads-ssl.webflow.com/63b7fcbf95bdaab3aab1fd40/63bc89518f22c313a24789c8_PALS_2021_TopStories_Featured.jpg"
							alt=""
							className="service-image"
						/>
					</div>
					<div className="services-info-left">
						<h1>Use Canisa App</h1>
						<p>
							Download Canisa App on Playstore or App Store to access
							high-quality health services from the convenience of your home.
							You can also book your doctor from the app
						</p>
					</div>
				</div>
				<div className="services-body">
					<div className="services-info">
						<h1>Order medicine</h1>
						<p>
							Shop for all your drugs conveniently! Refill and order quality
							medications from trusted pharmacies quickly at unbeatable prices
							and get them delivered to you. Order through USSD or in-app
							purchase and get them delivered to your doorstep.
						</p>
					</div>
					<div className="services-img">
						<img
							src="https://uploads-ssl.webflow.com/63b7fcbf95bdaab3aab1fd40/63bc37b1e525a250efb90c2e_freestocks-nss2eRzQwgw-unsplash-p-1600.jpg"
							alt=""
							className="service-image"
						/>
					</div>
				</div>
				<div className="services-body-left">
					<div className="services-img-left">
						<img
							src="	https://uploads-ssl.webflow.com/63b7fcbf95bdaab3aab1fd40/63bc314b061a3b9d0bcc3053_cdc-rHCNMH9Vlmw-unsplash-p-1600.jpg"
							alt=""
							className="service-image"
						/>
					</div>
					<div className="services-info-left">
						<h1>Order Laboratory Test</h1>
						<p>
							Canisa Health is the easiest way to access healthcare. You can
							book appointments with qualified doctors, simply by dialing a USSD
							code. No internet connection required.
						</p>
					</div>
				</div>
				<div className="services-body">
					<div className="services-info">
						<h1>Insurance Package For Corporates</h1>
						<p>
							Order lab tests from the comfort of your own home, have a
							certified professional collect your sample from your preferred
							location and get the result delivered to you privately and
							securely. Order your PCR-Tests, STI test, COVID-19 and much more!
						</p>
					</div>
					<div className="services-img">
						<img
							src="	https://uploads-ssl.webflow.com/63b7fcbf95bdaab3aab1fd40/63bc876d4e6c9c7201a9ff7a_part-2-how-to-create-and-deliver-career-programs-and-resources-for-marginalized-students.png"
							alt=""
							className="service-image"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
