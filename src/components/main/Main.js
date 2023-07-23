import {  Routes, Route} from "react-router-dom";
import Board from "../board/Board";
import TaskDescription from "../tasks-description/TaskDescription";
import "./Main.css";

const Main = (props) => {
	 
	return (
		<main className= "main">
			< Routes>
				<Route path= {"/"} element={<Board {...props} />} />
				<Route  path= {"tasks/:taskId"} element={<TaskDescription {...props}  />  }  />
			</ Routes>
		</main>
	);
};

export default Main;
