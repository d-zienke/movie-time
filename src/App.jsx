import "./App.scss";
import Movies from "./api/get-movies";
import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import Recommendations from "./components/Recommendations/Recommendations";
import CurrentMovie from "./components/CurrentMovie/CurrentMovie";

export default function App() {
	async function getTopRatedMovies() {
		const topRatedMovies = await Movies.fetchTopRated();
		if (topRatedMovies.length > 0) {
			setCurrentMovie(topRatedMovies[0]);
			// getRecommendedMovies(currentMovie.id);
		}
	}

	async function getRecommendedMovies(id) {
		const recommendedMovies = await Movies.fetchRecommended(id);
		if (recommendedMovies.length > 0) {
			setRecommended(recommendedMovies);
		}
	}

	const [currentMovie, setCurrentMovie] = useState("");
	const [recommended, setRecommended] = useState("");

	useEffect(() => {
		getTopRatedMovies();
	}, []);

	useEffect(() => {
		if (currentMovie) getRecommendedMovies(currentMovie.id);
	}, [currentMovie]);

	return (
		<div className="app">
			<Header />
			{currentMovie && <CurrentMovie movie={currentMovie} />}
			{recommended && <Recommendations movies={recommended} />}
		</div>
	);
}
