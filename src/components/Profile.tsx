import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){
  const { level } = useContext(ChallengesContext);
	
	return (
		<div className={styles.profileContainer}>
			<img src="https://www.github.com/AntonioMendanha.png" alt="Antonio Mendanha"/>
			<div>
				<strong>Antonio Mendanha</strong>
				<p>
					<img src="icons/level.svg" alt="Level"/>
					Level {level}
				</p>
			</div>
		</div>
	);
}