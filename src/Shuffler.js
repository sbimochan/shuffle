import React, { useEffect, useState } from 'react';
import TextLoop from 'react-text-loop';

import { DEFAULT_NAMES, LOOP_CONFIG } from './constants';
import { getMembersFromStorage } from './utils';

export default function Shuffler({
	names = [...DEFAULT_NAMES],
	animationSpeed = 400,
	changeRoute,
}) {
  const [members, setMembers] = useState(names);

	useEffect(() => {
		const storedMembers = getMembersFromStorage();
    setMembers(storedMembers);
	},[]);

	return (
		<div className="d-Flex flex-column">
			<TextLoop interval={animationSpeed} springConfig={LOOP_CONFIG} children={members} />
			<button type="button" onClick={changeRoute} name="save" className="save-button">
				Change names
			</button>
		</div>
	);
}
