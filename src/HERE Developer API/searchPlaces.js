import apiKey from "@/HERE Developer API/apiKey";

async function getDataAsync({ lat, lng, distance, shopTypes }) {
	let url = `https://discover.search.hereapi.com/v1/discover?in=circle:${lat},${lng};r=${distance}&q=${shopTypes}&limit=20&apiKey=${apiKey}`;
	const response = await fetch(url);
	return response.json();
}

async function searchShopsAsync({ lat, lng, distance, shopTypes }) {
	return await getDataAsync({ lat, lng, distance, shopTypes });
}

export default searchShopsAsync;
