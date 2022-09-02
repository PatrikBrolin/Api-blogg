import UserInfo from "./UserInfo";
import styles from "../components/Post.module.scss";

import { useState, useEffect } from "react";

export default function Post({ userId, id, title, body }) {
	const [showUser, setShowUser] = useState(false);
  const [user, setUser] = useState()

	const showUserHandler = () => {
		setShowUser(!showUser);
	};
  
	useEffect(() => {
		const fetchUser = async () => {
			const res = await fetch(
				`https://jsonplaceholder.typicode.com/users/${userId}`
			);
			const data = await res.json();
			setUser(data);
		};
		fetchUser();
	}, [showUser]);

	return (
		<li className={styles.li}>
			<h2>{`Title: ${title}`}</h2>
			<p> {body}</p>
			<button onClick={showUserHandler}>Show User Info</button>
			{!showUser ? null : <UserInfo {...user}/>}
		</li>
	);
}
