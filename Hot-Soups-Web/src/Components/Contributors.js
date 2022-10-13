import React from "react";
import "../Styles/Contributors.css";
import DiscordIcon from "../Assests/Icons/discord-fill.svg";
import GithubIcon from "../Assests/Icons/github-fill.svg";
import LinkedInIcon from "../Assests/Icons/linkedin-box-fill.svg";

const Contributors = () => {
	return (
		<>
			<div className="con-body">
				<div className="contactus-section"></div>
				<div className="contributors">
					<h3>Contributors</h3>
				</div>
				<div className="contributors-frontend">
					<h2>Front End</h2>
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
					<div className="contributor">
						<div className="con-image">
							<img className="con-headshot" alt="headshot"></img>
						</div>
						<div className="con-content">
							<h1 className="con-name">Jasmine Love</h1>
							<h2 className="con-title">CEO</h2>
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
		</>
	);
};
export default Contributors;
