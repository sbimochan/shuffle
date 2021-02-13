import React, { useState, useEffect } from 'react';
import Tags from '@yaireo/tagify/dist/react.tagify'; // React-wrapper file
import '@yaireo/tagify/dist/tagify.css';
import { getMembersFromStorage } from './utils';

export default function MembersForm({ changeRoute }) {
	const [members, setMembers] = useState([]);

	useEffect(() => {
    const storedMembers = getMembersFromStorage()
		setMembers(storedMembers);
	}, []);

	const handleOnChange = (event) => {
		const data = JSON.parse(event.target.value);
		const values = data.map((el) => el.value);
		localStorage.setItem('members', JSON.stringify(values));
	};
	return (
		<div className="d-Flex flex-column">
			<h3>Enter names separated by comma</h3>
			<Tags value={members} autofocus onChange={(e) => handleOnChange(e)} />
			<button type="button" onClick={changeRoute} name="save" className="save-button">
				Finish
			</button>
		</div>
	);
}
