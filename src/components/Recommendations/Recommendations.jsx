import { useEffect, useState } from "react";
import ApiConfig from "../../api/config.json";
import Movies from "../../api/get-movies";
import SimilarMoviesItem from "../SimilarMoviesItem/SimilarMoviesItem";
import s from "./style.module.scss";

export default function Recommendations({ movieId }) {
	async function getRecommendedMovies(id) {
		const data = await Movies.fetchRecommended(id);
		renderRecommendedMovies(data, 10);
	}

	function renderRecommendedMovies(array) {
		const data = array.slice(0, 10);
		const elements = data.map((item) => {
			return (
				<SimilarMoviesItem
					key={item.id}
					title={item.title}
					backdrop={`${ApiConfig.images.secure_base_url}w300${item.backdrop_path}`}
				/>
			);
		});
		setRecommended(elements);
	}

	const [recommended, setRecommended] = useState("");

	useEffect(() => {
		getRecommendedMovies(movieId);
	}, [movieId]);

	return (
		<>
			<section className={s.recommendations}>
				<div className={s.heading}>You may also like:</div>
				<div className={s.similar_movies}>{recommended}</div>
			</section>
		</>
	);
}
