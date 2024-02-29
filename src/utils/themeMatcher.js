

export const themeMatcher = (darkVal, lightVal) => {
	const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
	if (prefersDarkScheme.matches) {
		return darkVal;
	}
	else {
		return lightVal;
	}
}