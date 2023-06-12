import s from "./style.module.scss";

export default function SimilarMoviesItem({ title }) {
	return (
		<>
			<div className={s.similar_movie}>
				<img src={title} />
			</div>
		</>
	);
}
