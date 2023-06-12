import s from "./style.module.scss";
import MovieRating from "../MovieRating/MovieRating";

export default function CurrentMovie() {
	return (
		<>
			<main className={s.movie}>
				<div className={s.movie__header}>
					<div className={s.movie__title}>
						Lord of the Rings: The Fellowship of the Ring
					</div>
					<div className={s.movie__details}>
						<div className={s.movie__details_top}>
							<span>2001</span>
							<span>2h 58m</span>
							<span>12+</span>
						</div>
						<MovieRating />
					</div>
				</div>
				<div className={s.movie__footer}>
					<div className={s.movie__description}>
						A meek Hobbit from the Shire and eight companions set out on a
						journey to destroy the powerful One Ring and save Middle-earth from
						the Dark Lord Sauron.
					</div>
					<a className={s.movie__button_outline}>show more</a>
				</div>
			</main>
		</>
	);
}
