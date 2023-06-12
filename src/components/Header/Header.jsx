import logo from "../../assets/logo.svg";
import menuClosedIcon from "../../assets/menu-open-icon.svg";
import Searchbar from "../Searchbar/Searchbar";

import s from "./style.module.scss";

export function Header() {
	return (
		<>
			<header className={s.header}>
				<img
					className={s.header__logo}
					src={logo}
					alt="Logo of Movie Time app"
				/>
				<Searchbar />
				<img className={s.header__menu_icon} src={menuClosedIcon} alt="" />
			</header>
		</>
	);
}
