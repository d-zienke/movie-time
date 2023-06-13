// NOTE: to have this work, create in your root directory `.env` file and put inside:
// VITE_TMDB_ACCESS_TOKEN=your_access_token

// import { MIN_VOTES_COUNT, TEST_MODE } from "../config";
import appSettings from "../config.json";
import staticDataTopRated from "./static-data_top-rated.json";
import staticDataRecommended from "./static-data_recommended.json";

const options = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
	},
};

export default class Movies {
	static async fetchTopRated() {
		if (appSettings.TEST_MODE) return staticDataTopRated.results;

		try {
			const response = await fetch(
				"https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
				options
			);
			const data = await response.json();
			return data.results;
		} catch (error) {
			console.log(`Error: ${error.message}`);
		}
	}
	static async fetchRecommended(movieId) {
		if (appSettings.TEST_MODE) return staticDataRecommended.results;

		try {
			const response = await fetch(
				`https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=en-US&page=1`,
				options
			);
			const data = await response.json();
			const filteredData = filterResults(data.results);
			return filteredData;
		} catch (error) {
			console.log(`Error: ${error.message}`);
		}
	}
	static async searchByTitle(query) {
		try {
			const response = await fetch(
				`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
				options
			);
			const data = await response.json();
			const filteredData = filterResults(data.results);
			return filteredData;
		} catch (error) {
			console.log(`Error: ${error.message}`);
		}
	}
}

function filterResults(array) {
	const filteredData = array.filter((item) => {
		return item.vote_count >= appSettings.MIN_VOTES_COUNT;
	});
	return filteredData;
}
