import "./App.scss";
import Movies from "./api/get-movies";
import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import Recommendations from "./components/Recommendations/Recommendations";
import CurrentMovie from "./components/CurrentMovie/CurrentMovie";
import SearchResults from "./components/SearchResults/SearchResults";

export default function App() {
	async function getTopRatedMovies() {
		const topRatedMovies = await Movies.fetchTopRated();
		if (topRatedMovies.length > 0) {
			setCurrentMovie(topRatedMovies[0]);
			setSearchMode(false);
		}
	}

	async function getRecommendedMovies(id) {
		const recommendedMovies = await Movies.fetchRecommended(id);
		if (recommendedMovies.length > 0) {
			setRecommended(recommendedMovies);
			setSearchMode(false);
		}
	}

	async function searchMoviesByTitle(title) {
		const moviesFound = await Movies.searchByTitle(title);
		if (moviesFound.length > 0) {
			setSearchMode(true);
			setSearchResult(moviesFound);
		}
	}

	const [currentMovie, setCurrentMovie] = useState("");
	const [recommended, setRecommended] = useState("");
	const [searchMode, setSearchMode] = useState("");
	const [titleSearch, setTitleSearch] = useState("");
	const [searchResult, setSearchResult] = useState("");

	useEffect(() => {
		getTopRatedMovies();
	}, []);

	useEffect(() => {
		if (currentMovie) {
			getRecommendedMovies(currentMovie.id);
			setTitleSearch("");
		}
	}, [currentMovie]);

	useEffect(() => {
		if (titleSearch !== "") searchMoviesByTitle(titleSearch);
	}, [titleSearch]);

	return (
		<div className="app">
			<Header
				searchTitle={setTitleSearch}
				query={titleSearch}
				changeSearchMode={setSearchMode}
			/>
			{searchMode && searchResult && (
				<SearchResults movies={searchResult} changeMovie={setCurrentMovie} />
			)}
			{currentMovie && !searchMode && <CurrentMovie movie={currentMovie} />}
			{recommended && !searchMode && (
				<Recommendations movies={recommended} changeMovie={setCurrentMovie} />
			)}
		</div>
	);
}
