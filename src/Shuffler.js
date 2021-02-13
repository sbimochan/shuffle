import React, { useEffect, useState } from 'react';
import Confetti from 'react-dom-confetti';
import TextLoop from 'react-text-loop';

import { DEFAULT_NAMES, LOOP_CONFIG } from './constants';
import { getMembersFromStorage } from './utils';

export default function Shuffler({
	names = [...DEFAULT_NAMES],
	animationSpeed = 400,
	changeRoute,
}) {
	const [members, setMembers] = useState(names);
	const [isSpinning, setIsSpinning] = useState(false);
	const [result, setResult] = useState(null);
	const [showResult, setShowResult] = useState(false);
	const [disableSpinButton, setDisableDrawButton] = useState(false);
	const [pastDrawnMembers, setPastDrawnMembers] = useState([]);
	useEffect(() => {
		const storedMembers = getMembersFromStorage();
		setMembers(storedMembers);
	}, []);

	const sleep = (time) => {
		return new Promise((resolve) => setTimeout(resolve, time));
	};

	const spin = () => {
		setIsSpinning(true);
		setShowResult(false);
		setDisableDrawButton(true);

		let maxItemIndex = members.length;
		const randomIndex = Math.floor(Math.random() * maxItemIndex);
		sleep(3000).then(() => {
			setShowResult(true);
			setIsSpinning(false);
			setResult(members[randomIndex]);
			setPastDrawnMembers([...pastDrawnMembers, members[randomIndex]]);
			setDisableDrawButton(false);
		});
	};

	return (
		<div className="d-Flex flex-column">
			<div>
			{!showResult && isSpinning &&
				<TextLoop
					interval={animationSpeed}
					springConfig={LOOP_CONFIG}
					children={members}
				/>
      }
				<Confetti active={showResult} />
				{showResult && result}
			</div>
			<div className="flex-row">
				<button
					type="button"
					onClick={spin}
					name="spin"
					className="save-button"
					disabled={disableSpinButton}
				>
					Spin
				</button>
				<button type="button" onClick={changeRoute} name="save" className="save-button">
					Change names
				</button>
			</div>
		</div>
	);
}
