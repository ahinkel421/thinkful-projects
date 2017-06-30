const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm, callback) {
	const query = {
		part: 'snippet',
		key: 'AIzaSyDlMRtouWnVEyyaDchNC0D_ClkhiJslt_8',
		q: `${searchTerm} in:name`,
		per_page: 5
	}
	$.getJSON(YOUTUBE_SEARCH_URL, query, callback);
}

function renderResult(result) {
	return `
		<div>
			<iframe class='vids' src="http://www.youtube.com/embed/${result.id.videoId}" width="560" height="315" frameborder="1" allowfullscreen></iframe>
		</div>
	`;
}

function displayYoutubeSearchData(data) {
	const results = data.items.map((item, index) => renderResult(item));
	$('.js-search-results').html(results);
}

function watchSubmit() {
	$('.js-search-form').submit(event => {
		event.preventDefault();
		const queryTarget = $(event.currentTarget).find('.js-query');
		const query = queryTarget.val();
		queryTarget.val('');
		getDataFromApi(query, displayYoutubeSearchData);
	});
}

$(watchSubmit);
