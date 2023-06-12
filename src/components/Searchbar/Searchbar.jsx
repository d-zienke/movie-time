import searchIcon from "../../assets/search-icon.svg";

import s from "./style.module.scss";

export default function Searchbar() {
	return (
		<>
			<div className={s.searchbar}>
				<input
					className={s.searchbar__input}
					type="text"
					placeholder="Search by title"
				/>
				<img className={s.searchbar__icon} src={searchIcon} alt="search icon" />
			</div>
		</>
	);
}
