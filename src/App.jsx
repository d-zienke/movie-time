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
		}
	}

	const [currentMovie, setCurrentMovie] = useState("");

	useEffect(() => {
		getTopRatedMovies();
	}, []);

	return (
		<div className="app">
			<Header />
			<CurrentMovie movie={currentMovie} />
			<Recommendations />
		</div>
	);
}
