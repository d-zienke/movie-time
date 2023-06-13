import s from "./style.module.scss";

export default function SimilarMoviesItem({
	title,
	backdrop,
	movieObject,
	handleClick,
}) {
	return (
		<>
			<div className={s.similar_movie} title={title}>
				<img
					className={s.similar_movie__image}
					src={backdrop}
					alt={`${title} - backdrop`}
					onClick={() => {
						handleClick(movieObject);
					}}
				/>
				<span className={s.similar_movie__title}>{title}</span>
			</div>
		</>
	);
}
