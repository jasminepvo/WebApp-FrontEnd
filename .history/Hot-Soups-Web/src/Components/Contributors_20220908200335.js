import React from "react";
import "../Styles/Contributors.css";
import DiscordIcon from "../Assests/Icons/discord-fill.svg";
import GithubIcon from "../Assests/Icons/github-fill.svg";
import LinkedInIcon from "../Assests/Icons/linkedin-box-fill.svg";

const Contributors = () => {
<<<<<<< HEAD
  return (
<>
    <header id='Contributors'> Hi how are you </header>
    <div className='con-body'>Contributors</div>
</>
  )
}
export default Contributors;
=======
	return (
		<>
			<header> Start of Contributors Page </header>
			<div className="con-body">
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
							<img src={LinkedInIcon} alt="discord icon"></img>
							<img src={GithubIcon} alt="discord icon"></img>
							<img src={DiscordIcon} alt="discord icon"></img>
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
							<img src={LinkedInIcon} alt="discord icon"></img>
							<img src={GithubIcon} alt="discord icon"></img>
							<img src={DiscordIcon} alt="discord icon"></img>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Contributors;
>>>>>>> 2d5f1828a9b8fa067cd35232cb29585cc24a8461
