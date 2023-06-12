import ApiConfig from "../../api/config.json";
import s from "./style.module.scss";
import MovieRating from "../MovieRating/MovieRating";

export default function CurrentMovie({ movie }) {
	function getYear() {
		const fullDate = movie.release_date;
		const year = fullDate.split("-")[0];
		return year;
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
					background: `no-repeat center/cover url(${getBackdrop()})`,
				}}>
				<div className={s.movie__header}>
					<div className={s.movie__title}>
						{movie.title}
						{` (2023)`}
					</div>
					<MovieRating
						ratingData={{
							rating: movie.vote_average,
							votesCount: movie.vote_count,
						}}
					/>
				</div>
				<div className={s.movie__footer}>
					<div className={s.movie__description}>{movie.overview}</div>
					<a className={s.movie__button_outline}>show more</a>
				</div>
			</main>
		</>
	);
}
