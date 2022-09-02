
import styles from "../components/UserInfo.module.scss";

export default function UserInfo({ username, email, address }) {
	
	return (
		<div className={styles.usersInfo}>
			<p>{`Username: ${username}`}</p>
			<p>{`Email: ${email}`}</p>
			<p>{`City: ${address.city}`}</p>
		</div>
	);
}
