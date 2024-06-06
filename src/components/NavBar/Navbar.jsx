import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = (props) => {
	return (
		<div className="Navbar">
			<div className="box">
				<div className="Home">
					<Link to="/" className="links">
						<h1 className="site-name">Ms. Naive's Palace</h1>
					</Link>
				</div>
				<div className="Signin" style={{color:"white"}}>
					<Link to="/book" style={{color:"white"}}>Book a Table</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
