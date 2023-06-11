import logo from "./assets/logo.svg";
import menuClosedIcon from "./assets/menu-open-icon.svg";
import searchIcon from "./assets/search-icon.svg";
import starFull from "./assets/star-full-icon.svg";
import starHalf from "./assets/star-half-icon.svg";
import starEmpty from "./assets/star-empty-icon.svg";

import "./App.scss";

export default function App() {
	return (
		<div className="app">
			<header className="header">
				<img className="header__logo" src={logo} alt="Logo of Movie Time app" />
				<div className="header__searchbar">
					<input
						className="header__searchbar-input"
						type="text"
						placeholder="Search by title"
					/>
					<img
						className="header__searchbar-icon"
						src={searchIcon}
						alt="search icon"
					/>
				</div>
				<img className="header__menu-icon" src={menuClosedIcon} alt="" />
			</header>

			<main className="movie">
				<div className="movie__header">
					<div className="movie__title">
						Lord of the Rings: The Fellowship of the Ring
					</div>
					<div className="movie__details">
						<div className="movie__details-top">
							<span>2001</span>
							<span>2h 58m</span>
							<span>12+</span>
						</div>
						<div className="movie__details-btm">
							<div className="movie__stars">
								<img className="movie__star" src={starFull} />
								<img className="movie__star" src={starFull} />
								<img className="movie__star" src={starFull} />
								<img className="movie__star" src={starFull} />
								<img className="movie__star" src={starEmpty} />
							</div>
							<span>(1.9M votes)</span>
						</div>
					</div>
				</div>
				<div className="movie__footer">
					<div className="movie__description">
						A meek Hobbit from the Shire and eight companions set out on a
						journey to destroy the powerful One Ring and save Middle-earth from
						the Dark Lord Sauron.
					</div>
					<a className="movie__button-outline">show more</a>
				</div>
			</main>
			<section className="recommendations">
				<div className="heading">You may also like:</div>
				<div className="similar-movies">
					<div className="similar-movie">
						<img src="https://c4.wallpaperflare.com/wallpaper/467/165/234/the-lord-of-the-rings-the-lord-of-the-rings-the-two-towers-wallpaper-preview.jpg" />
					</div>
					<div className="similar-movie">
						<img src="https://c4.wallpaperflare.com/wallpaper/982/520/975/the-lord-of-the-rings-the-return-of-the-king-wallpaper-preview.jpg" />
					</div>
					<div className="similar-movie">
						<img src="https://images4.alphacoders.com/289/289924.jpg" />
					</div>
					<div className="similar-movie">
						<img src="https://image.tmdb.org/t/p/original/jOh79POQu4hyVIseUxdQxTW7vOf.jpg" />
					</div>
					<div className="similar-movie">
						<img src="https://image.tmdb.org/t/p/original/ouusulxHOOXHexgDeQyDbMWZzJd.jpg" />
					</div>
					<div className="similar-movie">
						<img src="https://wrong-url.jpg" alt="similar movie title" />
					</div>
				</div>
			</section>
		</div>
	);
}
