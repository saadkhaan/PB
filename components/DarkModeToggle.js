import { useState, useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const DarkModeToggle = () => {
	const [darkMode, setDarkMode] = useState(false);

	// On component mount, check local storage for darkMode preference
	useEffect(() => {
		const isDarkMode = localStorage.getItem("darkMode") === "true";
		setDarkMode(isDarkMode);
	}, []);

	// When darkMode state changes, update local storage and document class
	useEffect(() => {
		localStorage.setItem("darkMode", darkMode);
		if (darkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [darkMode]);

	return (
		<button
			className="focus:outline-none"
			aria-label="Toggle Day and Night Mode"
			onClick={() => setDarkMode(!darkMode)}
		>
			{darkMode ? (
				<FiSun size={24} className="text-yellow-500" />
			) : (
				<FiMoon size={24} className="text-gray-500" />
			)}
		</button>
	);
};

export default DarkModeToggle;
