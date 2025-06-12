import { FiUsers } from "react-icons/fi";

const NoResults = ({ text }) => {
	return (
		<div className="flex flex-col items-center justify-center text-center text-gray-500 dark:text-gray-400 space-y-4">
			<FiUsers className="text-7xl" />
			<p className="text-lg font-semibold">{text}</p>
		</div>
	);
};

export default NoResults;
