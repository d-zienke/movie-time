// NOTE: to have this work, create in your root directory `.env` file and put inside:
// VITE_TMDB_ACCESS_TOKEN=your_access_token

import { TEST_MODE } from "../config";
import staticData from "./static-data.json";

const options = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
	},
};

export default class Movies {
	static async fetchTopRated() {
		if (TEST_MODE) return staticData.results;

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
}
