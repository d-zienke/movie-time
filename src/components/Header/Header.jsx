import logo from "../../assets/logo.svg";
import menuClosedIcon from "../../assets/menu-open-icon.svg";
import Searchbar from "../Searchbar/Searchbar";

import s from "./style.module.scss";

export function Header({ searchTitle, query, changeSearchMode }) {
	function returnToMainPage() {
		changeSearchMode(false);
		searchTitle("");
	}
	return (
		<>
			<header className={s.header}>
				<img
					className={s.header__logo}
					src={logo}
					alt="Logo of Movie Time app"
					onClick={returnToMainPage}
				/>
				<Searchbar searchTitle={searchTitle} query={query} />
				{/* <img className={s.header__menu_icon} src={menuClosedIcon} alt="" /> */}
			</header>
		</>
	);
}
