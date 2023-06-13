import ApiConfig from "../../api/config.json";
import s from "./style.module.scss";
import MovieRating from "../MovieRating/MovieRating";

export default function CurrentMovie({ movie }) {
	function getYear() {
		const fullDate = movie.release_date;
		if (fullDate) {
			const year = fullDate.split("-")[0];
			return `(${year})`;
		} else {
			return "";
		}
	}

	function getBackdrop() {
		const baseUrl = ApiConfig.images.secure_base_url;
		return baseUrl + "original" + movie.backdrop_path;
	}

	return (
		<>
			<main
				className={s.movie}
				style={{
					backgroundImage: `url(${getBackdrop()})`,
				}}>
				<div className={s.movie__header}>
					<div className={s.movie__title}>
						<span>{movie.title}</span>
						<span>{` ${getYear()}`}</span>
					</div>
					<MovieRating
						ratingData={{
							rating: movie.vote_average,
							votesCount: movie.vote_count,
						}}
					/>
				</div>
				<div className={s.movie__footer}>
					<div className={s.movie__description}>
						<p>{movie.overview}</p>
					</div>
					{/* <a className={s.movie__button_outline}>show more</a> */}
				</div>
			</main>
		</>
	);
}
