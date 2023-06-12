import starFull from "../../assets/star-full-icon.svg";
import starHalf from "../../assets/star-half-icon.svg";
import starEmpty from "../../assets/star-empty-icon.svg";

import s from "./style.module.scss";

export default function MovieRating({ ratingData }) {
	function renderStars() {
		// rating in scale 1 to 5
		const rating = ratingData.rating / 2;
		const fullStars = Math.floor(rating);
		const halfStar = rating - fullStars >= 0.5;
		const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

		const starsArray = [];

		// add full stars to array
		for (let i = 0; i < fullStars; i++) {
			starsArray.push(
				<img
					key={`full-${i}`}
					className={s.movie_rating__star}
					src={starFull}
				/>
			);
		}
		// if exists, add half star to array
		if (halfStar)
			starsArray.push(
				<img
					key={`half-${i}`}
					className={s.movie_rating__star}
					src={starHalf}
				/>
			);
		// add empty stars to array
		for (let i = 0; i < emptyStars; i++) {
			starsArray.push(
				<img
					key={`empty-${i}`}
					className={s.movie_rating__star}
					src={starEmpty}
				/>
			);
		}

		return starsArray;
	}

	const starsElement = renderStars();

	return (
		<>
			<div className={s.movie_rating}>
				<div className={s.movie_rating__stars}>{starsElement}</div>
				<span>{`(${ratingData.votesCount} votes)`}</span>
			</div>
		</>
	);
}
