import SimilarMoviesItem from "../SimilarMoviesItem/SimilarMoviesItem";
import s from "./style.module.scss";

export default function Recommendations() {
	return (
		<>
			<section className={s.recommendations}>
				<div className={s.heading}>You may also like:</div>
				<div className={s.similar_movies}>
					<SimilarMoviesItem title="https://c4.wallpaperflare.com/wallpaper/467/165/234/the-lord-of-the-rings-the-lord-of-the-rings-the-two-towers-wallpaper-preview.jpg" />
					<SimilarMoviesItem title="https://c4.wallpaperflare.com/wallpaper/982/520/975/the-lord-of-the-rings-the-return-of-the-king-wallpaper-preview.jpg" />
					<SimilarMoviesItem title="https://images4.alphacoders.com/289/289924.jpg" />
					<SimilarMoviesItem title="https://image.tmdb.org/t/p/original/jOh79POQu4hyVIseUxdQxTW7vOf.jpg" />
					<SimilarMoviesItem title="https://image.tmdb.org/t/p/original/ouusulxHOOXHexgDeQyDbMWZzJd.jpg" />
					<SimilarMoviesItem title="https://wrong-url.jpg" />
				</div>
			</section>
		</>
	);
}
