import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
	createUserWithEmailAndPassword,
	updateProfile,
	signInWithPopup,
} from "firebase/auth";

import InputControl from "../InputControl/InputControl";
import { auth, provider } from "../../firebase";

function Signup() {
	const navigate = useNavigate();
	const [values, setValues] = useState({
		name: "",
		email: "",
		pass: "",
	});
	const [errorMsg, setErrorMsg] = useState("");
	const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
	const [value, setValue] = useState("");
	const handleClick = () => {
		signInWithPopup(auth, provider).then((data) => {
			setValue(data.user.email);
			localStorage.setItem("email", data.user.email);
		});
	};
	useEffect(() => {
		setValue(localStorage.getItem("email"));
	});

	const handleSubmission = () => {
		if (!values.name || !values.email || !values.pass) {
			setErrorMsg("Fill all fields");
			return;
		}
		setErrorMsg("");

		setSubmitButtonDisabled(true);
		createUserWithEmailAndPassword(auth, values.email, values.pass)
			.then(async (res) => {
				setSubmitButtonDisabled(false);
				const user = res.user;
				await updateProfile(user, {
					displayName: values.name,
				});
				navigate("/");
			})
			.catch((err) => {
				setSubmitButtonDisabled(false);
				setErrorMsg(err.message);
			});
	};

	return (
		<div>
			<div>
				<h1>Signup</h1>

				<InputControl
					label="Name"
					placeholder="Enter your name"
					onChange={(event) =>
						setValues((prev) => ({ ...prev, name: event.target.value }))
					}
				/>
				<InputControl
					label="Email"
					placeholder="Enter email address"
					onChange={(event) =>
						setValues((prev) => ({ ...prev, email: event.target.value }))
					}
				/>
				<InputControl
					label="Password"
					placeholder="Enter password"
					onChange={(event) =>
						setValues((prev) => ({ ...prev, pass: event.target.value }))
					}
				/>

				<div>
					<b>{errorMsg}</b>
					<button onClick={handleSubmission} disabled={submitButtonDisabled}>
						Signup
					</button>
					<p>
						Already have an account?{" "}
						<span>
							<Link to="/login">Login</Link>
						</span>
					</p>
					{value ? (
						<button onClick={handleClick}>Sign In with Google</button>
					) : (
						<Link to="/">Home</Link>
					)}
				</div>
			</div>
		</div>
	);
}

export default Signup;
