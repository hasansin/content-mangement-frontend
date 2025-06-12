import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const ThemeToggle = () => {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		const saved = localStorage.getItem("theme");
		if (saved === "dark") {
			document.documentElement.classList.add("dark");
			setIsDark(true);
		}
	}, []);

	const toggleTheme = () => {
		const html = document.documentElement;
		if (isDark) {
			html.classList.remove("dark");
			localStorage.setItem("theme", "light");
		} else {
			html.classList.add("dark");
			localStorage.setItem("theme", "dark");
		}
		setIsDark(!isDark);
	};

	return (
		<button
			onClick={toggleTheme}
			className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:scale-110 transition"
			title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
		>
			{isDark ? <FiSun /> : <FiMoon />}
		</button>
	);
};

export default ThemeToggle;
