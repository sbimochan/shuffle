export function getMembersFromStorage() {
	const members = localStorage.getItem('members');
	const parsedMembers = JSON.parse(members);
	return parsedMembers;
}

export const removeItem = (itemToRemove, fromArray) => {
	return fromArray?.filter((item) => item !== itemToRemove);
};
