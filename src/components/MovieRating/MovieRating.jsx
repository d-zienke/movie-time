import starFull from "../../assets/star-full-icon.svg";
import starHalf from "../../assets/star-half-icon.svg";
import starEmpty from "../../assets/star-empty-icon.svg";

import s from "./style.module.scss";

export default function MovieRating() {
	return (
		<>
			<div className={s.movie_rating}>
				<div className={s.movie_rating__stars}>
					<img className={s.movie_rating__star} src={starFull} />
					<img className={s.movie_rating__star} src={starFull} />
					<img className={s.movie_rating__star} src={starFull} />
					<img className={s.movie_rating__star} src={starFull} />
					<img className={s.movie_rating__star} src={starEmpty} />
				</div>
				<span>(1.9M votes)</span>
			</div>
		</>
	);
}
