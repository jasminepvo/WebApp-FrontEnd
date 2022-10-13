import React from "react";
import "../Styles/Contributors.css";
import DiscordIcon from "../Assests/Icons/discord-fill.svg";
import GithubIcon from "../Assests/Icons/github-fill.svg";
import LinkedInIcon from "../Assests/Icons/linkedin-box-fill.svg";

const Contributors = () => {
	return (
		<>
			<div className="con-body">
				<div className="contactus-section">
					<div className="contactus-left">
						<div>
							<h3>DONATE STUFF</h3>
							<p>
								Cool Link To Some Crowd Sourcing Site That We Don't Have Yet
							</p>
						</div>
					</div>
					<div className="contactus-right">
						<h2>Contact Us</h2>
						<p>Got A Question? We'd Love To Chat! Send A Message!</p>
						<form>
							<input>Name*</input>
							<input>Email*</input>
							<textarea>Message*</textarea>
							<button>SEND MESSAGE</button>
						</form>
					</div>
				</div>
				<div className="contributors-section">
					<div className="contributors-intro">
						<h2>Meet The Team</h2>
						<p>Making an impact</p>
					</div>

					{/* MAIN CONTRIBUTORS */}
					<div className="contributors-main">
						<div className="contributor">
							<div className="con-image">
								<img className="con-headshot" alt="headshot"></img>
							</div>
							<div className="con-content">
								<h1 className="con-name">Danny Phantom</h1>
								<h2 className="con-title">President & Founder</h2>
							</div>
						</div>
						<div className="contributor">
							<div className="con-image">
								<img className="con-headshot" alt="headshot"></img>
							</div>
							<div className="con-content">
								<h1 className="con-name">Jasmine Love</h1>
								<h2 className="con-title">Vice presdient & Founder</h2>
							</div>
						</div>
						<div className="contributor">
							<div className="con-image">
								<img className="con-headshot" alt="headshot"></img>
							</div>
							<div className="con-content">
								<h1 className="con-name">Jasmine Love</h1>
								<h2 className="con-title">Other thingy</h2>
							</div>
						</div>
					</div>

					{/* ADDITIONAL CONTRIBUTORS SHOULD LOOP THRU DATA FROM JSON */}
					<div className="contributors-additional">
						<div className="contributor">
							<div className="con-image">
								<img className="con-headshot" alt="headshot"></img>
							</div>
							<div className="con-content">
								<h1 className="con-name">Danny Phantom</h1>
								<h2 className="con-title">Co-Founder</h2>
							</div>
							<div className="con-socials">
								<a href="https://linkedin.com/">
									<img src={LinkedInIcon} alt="linkedin icon"></img>
								</a>
								<a href="https://github.com/">
									<img src={GithubIcon} alt="github icon"></img>
								</a>
								<a href="https://discord.com/">
									<img src={DiscordIcon} alt="discord icon"></img>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Contributors;
