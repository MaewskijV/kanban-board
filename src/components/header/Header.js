import Login from "../login/Login";
import "./Header.css";

function Header() {
	return (
		<header className= "header">
			<h1 className= "title-header">Awesome Kanban Board</h1>
			<div className= "sprint"><Login /></div>
			
		</header>
	);
}

export default Header;