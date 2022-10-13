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
						<div className="blackBox">
							<h3>DONATE STUFF</h3>
							<p>
								Cool Link To Some Crowd Sourcing Site That We Don't Have Yet
							</p>
						</div>
						<div className="yellowBox"></div>
					</div>
					<div className="contactus-right">
						<div className="contact-intro">
							<h2>Contact Us</h2>
							<p>Got A Question? We'd Love To Chat! Send A Message!</p>
						</div>
						<form id="contact-form">
							<label>
								{" "}
								Name*
								<input type="text" name="name"></input>
							</label>
							<label>
								{" "}
								Email*
								<input type="email" name="email"></input>
							</label>
							<label>
								{" "}
								Message*
								<textarea name="message"></textarea>
							</label>
							<button>SEND MESSAGE</button>
						</form>
					</div>
				</div>

				<div className="contributors-section">
					<div className="contributors-intro">
						<div className="intro-box">
							<h2>Meet The Team</h2>
							<p>Making an impact</p>
						</div>
					</div>

					{/* MAIN CONTRIBUTORS */}
					<div className="contributors-main">
						<div className="contributor-main">
							<div className="con-main-image">
								<img
									className="con-main-headshot"
									src="https://source.unsplash.com/mEZ3PoFGs_k"
									alt="headshot"
								></img>
							</div>
							<div className="con-main-content">
								<h3 className="con-main-name">Danny Phantom</h3>
								<h4 className="con-main-title">President & Founder</h4>
							</div>
						</div>
						<div className="contributor-main">
							<div className="con-main-image">
								<img
									className="con-main-headshot"
									src="https://source.unsplash.com/mEZ3PoFGs_k"
									alt="headshot"
								></img>
							</div>
							<div className="con-main-content">
								<h3 className="con-main-name">Jasmine Love</h3>
								<h4 className="con-main-title">Vice Presdient & Founder</h4>
							</div>
						</div>
						<div className="contributor-main">
							<div className="con-main-image">
								<img
									className="con-main-headshot"
									src="https://source.unsplash.com/mEZ3PoFGs_k"
									alt="headshot"
								></img>
							</div>
							<div className="con-main-content">
								<h3 className="con-main-name">Jasmine Love</h3>
								<h4 className="con-main-title">Co Founder</h4>
							</div>
						</div>
					</div>

					{/* ADDITIONAL CONTRIBUTORS SHOULD LOOP THRU DATA FROM JSON */}
					<div className="contributors-additional">
						<div className="contributor">
							<div className="con-image">
								<img
									className="con-headshot"
									src="https://source.unsplash.com/iEEBWgY_6lA"
									alt="headshot"
								></img>
							</div>
							<div className="con-content">
								<h1 className="con-name">Danny Phantom</h1>
								<h2 className="con-title">Frontend</h2>
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

						{/* TEST DATA FOR LAYOUT */}
						<div className="contributor">
							<div className="con-image">
								<img
									className="con-headshot"
									src="https://source.unsplash.com/iEEBWgY_6lA"
									alt="headshot"
								></img>
							</div>
							<div className="con-content">
								<h1 className="con-name">Danny Phantom</h1>
								<h2 className="con-title">Frontend</h2>
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
						<div className="contributor">
							<div className="con-image">
								<img
									className="con-headshot"
									src="https://source.unsplash.com/iEEBWgY_6lA"
									alt="headshot"
								></img>
							</div>
							<div className="con-content">
								<h1 className="con-name">Danny Phantom</h1>
								<h2 className="con-title">Frontend</h2>
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
						<div className="contributor">
							<div className="con-image">
								<img
									className="con-headshot"
									src="https://source.unsplash.com/iEEBWgY_6lA"
									alt="headshot"
								></img>
							</div>
							<div className="con-content">
								<h1 className="con-name">Danny Phantom</h1>
								<h2 className="con-title">Frontend</h2>
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
						<div className="contributor">
							<div className="con-image">
								<img
									className="con-headshot"
									src="https://source.unsplash.com/iEEBWgY_6lA"
									alt="headshot"
								></img>
							</div>
							<div className="con-content">
								<h1 className="con-name">Danny Phantom</h1>
								<h2 className="con-title">Frontend</h2>
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
