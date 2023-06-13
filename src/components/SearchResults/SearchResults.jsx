import ApiConfig from "../../api/config.json";
import SearchResultsItem from "../SearchResultsItem/SearchResultsItem";
import s from "./style.module.scss";

export default function SearchResults({ movies, changeMovie }) {
	const data = movies;
	const elements = data.map((item, index) => {
		return (
			<SearchResultsItem
				key={`${item.title}-${index}`}
				movieObject={item}
				poster={`${ApiConfig.images.secure_base_url}w342${item.poster_path}`}
				title={item.title}
				handleClick={changeMovie}
			/>
		);
	});

	return (
		<>
			<div className={s.search_results}>{elements}</div>
		</>
	);
}
