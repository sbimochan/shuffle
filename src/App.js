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
		const hasMembers = shuffleMembers?.length >= 1;
		hasMembers ? setScreen('shuffler') : setScreen('members-form');
		setShuffleMembers(storedMembers);
	}, [shuffleMembers?.length]);

	return (
		<div className="container">
			<h1>Shuffle</h1>
			<hr className="thick-line" />
			<div className="d-Flex flex-column shuffler">
				{screen === 'shuffler' ? (
					<Shuffler
						names={shuffleMembers}
						changeRoute={() => setScreen('members-form')}
					/>
				) : (
					<MembersForm changeRoute={() => setScreen('shuffler')} />
				)}
			</div>
			<hr className="thick-line" />
		</div>
	);
}

export default App;
