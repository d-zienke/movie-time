import s from "./style.module.scss";

export default function SimilarMoviesItem({ title, backdrop }) {
	return (
		<>
			<div className={s.similar_movie}>
				<img src={backdrop} title={title} alt={`${title} - backdrop`} />
			</div>
		</>
	);
}
