// Getter function for shopPreferences object
function getEmptySP() {
	return {
		location: "",
		shopTypes: {},
		distance: 0,
	};
}

// Function to determine if the shopPreferences object has any default values
function isAnyDefaultSP(sp) {
	return (
		sp.location === "" ||
		sp.location === null ||
		sp.shopTypes == {} ||
		sp.distance === 0 ||
		sp.distance === null
	);
}

export default {
	currentUser: null,
	shopPreferences: getEmptySP(),
	homeStage: 1,
	shopID: 0,
};

export { getEmptySP, isAnyDefaultSP };
