import { useEffect, useState } from "react";
import ApiConfig from "../../api/config.json";
import Movies from "../../api/get-movies";
import SimilarMoviesItem from "../SimilarMoviesItem/SimilarMoviesItem";
import s from "./style.module.scss";

export default function Recommendations({ movies, changeMovie }) {
	// limit data to 10 recommended movies
	const data = movies.slice(0, 10);
	// prepare array of components with recommended movies
	const elements = data.map((item) => {
		return (
			<SimilarMoviesItem
				key={item.id}
				title={item.title}
				backdrop={`${ApiConfig.images.secure_base_url}w300${item.backdrop_path}`}
				movieObject={item}
				handleClick={changeMovie}
			/>
		);
	});

	return (
		<>
			<section className={s.recommendations}>
				<div className={s.heading}>You may also like:</div>
				<div className={s.similar_movies}>{elements}</div>
			</section>
		</>
	);
}
