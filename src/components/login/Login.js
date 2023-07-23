import { useState } from "react";
import Avatar from "../../asset/user-avatar.jpg";
import Arrow from "../../asset/arrow.svg";
import "./Login.css";

function Login (){

	const [isProfileOpen, setIsProfileOpen] = useState(false);

	return (
		<div className="login">
			<div className="login-button" onClick={() => setIsProfileOpen(!isProfileOpen)} >

			    <img src={Avatar} className="user-avatar" alt="avatar" />
				<img src={Arrow} className={`chevron ${isProfileOpen ? " open" : ""}`} alt="Arrow" />
                
			</div>

			{isProfileOpen && (
				<ul className="login-menu">
					<li>Profile</li>
					<li>Log out</li>
				</ul>
			)}
		</div>
	);
}

export default Login;