import s from "./style.module.scss";

export default function SearchResultsItem({
	title,
	poster,
	movieObject,
	handleClick,
}) {
	return (
		<>
			<div className={s.search_results_item}>
				<img
					className={s.search_results_item__image}
					src={poster}
					alt={title}
					title={title}
					onClick={() => {
						handleClick(movieObject);
					}}
				/>
			</div>
		</>
	);
}
