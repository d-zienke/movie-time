import { useState } from "react";
import searchIcon from "../../assets/search-icon.svg";

import s from "./style.module.scss";

export default function Searchbar({ searchTitle }) {
	const [input, setInput] = useState("");

	function handleKeyUp(e) {
		if (e.code === "Enter") {
			searchMovieTitle(input);
		}
	}

	function handleChange(e) {
		setInput(e.target.value);
	}

	function searchMovieTitle() {
		if (input) searchTitle(input);
		setInput("");
	}

	return (
		<>
			<div className={s.searchbar}>
				<input
					className={s.searchbar__input}
					type="text"
					placeholder="Search by title"
					onChange={handleChange}
					onKeyUp={handleKeyUp}
					name="input"
					value={input}
				/>
				<img
					className={s.searchbar__icon}
					src={searchIcon}
					alt="search icon"
					onClick={() => {
						searchMovieTitle();
					}}
				/>
			</div>
		</>
	);
}
