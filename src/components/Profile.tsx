import styles from '../styles/components/Profile.module.css';

export function Profile(){
	return (
		<div className={styles.profileContainer}>
			<img src="https://www.github.com/AntonioMendanha.png" alt="Antonio Mendanha"/>
			<div>
				<strong>Antonio Mendanha</strong>
				<p>
					<img src="icons/level.svg" alt="Level"/>
					Level 1</p>
			</div>
		</div>
	);
}