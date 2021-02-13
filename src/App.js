import './App.css';
import Shuffler from './Shuffler';
import { useState, useEffect } from 'react';
import MembersForm from './MembersForm';
import { getMembersFromStorage } from './utils';

function App() {
	const [shuffleMembers, setShuffleMembers] = useState([]);
	const [screen, setScreen] = useState('shuffler');

	useEffect(() => {
		const storedMembers = getMembersFromStorage();
		const hasMembers = shuffleMembers.length >= 1;
		hasMembers ? setScreen('shuffler') : setScreen('members-form');
		setShuffleMembers(storedMembers);
	}, [shuffleMembers.length]);

	return (
		<div className="container">
			<div className="shuffler">
				<hr className="thick-line" />
				{screen === 'shuffler' ? (
					<Shuffler
						names={shuffleMembers}
						changeRoute={() => setScreen('members-form')}
					/>
				) : (
					<MembersForm changeRoute={() => setScreen('shuffler')} />
				)}
				<hr className="thick-line" />
			</div>
		</div>
	);
}

export default App;
