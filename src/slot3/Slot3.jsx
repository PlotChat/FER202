import pfp from "../assets/image.png";
import styles from "./Slot3.module.css";
import { useState } from "react";

const Slot3 = () => {
	const [isFollowing, setIsFollowing] = useState(false);

	const hobbies = ["Music", "Games", "Food"];
	const { name, age, major } = {name: "Viet Anh", age: 20, major: "SE"};

	const appTitles = ["Welcome to React", "My App", `Hello! ${name}`];
	const randomTitleIndex = Math.floor(Math.random() * appTitles.length);
	const chosenTitle = appTitles[randomTitleIndex];

	const isOnline = true;

	return (
		<div className={styles.Slot3}>
			<div className={styles.slot3Title}>
				<h1>{chosenTitle}</h1>
			</div>

			<form className={styles.form}>
				<h3>This is my JSX</h3>
				<h4>
					Your name: <span>{name}</span>
				</h4>
				<h4>
					Your age: <span>{age}</span>
				</h4>
				<h4>
					Your major: <span>{major}</span>
				</h4>
			</form>

			<div className={styles.online}>
				<h3>
					Status: <span>{isOnline ? "Online" : "Offline"}</span>
				</h3>
			</div>

			<div className={styles.hobby}>
				<div className={styles.title}>
					<p>My hobbies</p>
				</div>
				<div className={styles.content}>
					{hobbies.map((h, index) =>
						(<h3 key={index}>{h}</h3>)
					)}
				</div>
			</div>

			<div className={styles.socials}>
				<img src={pfp}></img>
				<div className={styles.socialsContent}>
					<button data-state={isFollowing && "following"} onClick={() => setIsFollowing(!isFollowing)}>
						{isFollowing ? "Following" : "Follow Me!"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Slot3;
