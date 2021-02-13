export function getMembersFromStorage() {
  		const members = localStorage.getItem('members');
			const parsedMembers = JSON.parse(members);
      return parsedMembers
}