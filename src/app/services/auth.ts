export const isAuthenticated = (): boolean => {
	const un = sessionStorage.getItem("userName");
	const pw = sessionStorage.getItem("password");
	const userName = "admin@admin.com";
	const password = "admin01";
	if (un === userName && pw === password) {
		return true;
	}
	return false;
};
