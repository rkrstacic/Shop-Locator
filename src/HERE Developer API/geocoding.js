import apiKey from "@/HERE Developer API/apiKey";

async function getDataAsync(location) {
	let url = `https://discover.search.hereapi.com/v1/geocode?q=${location}&apiKey=${apiKey}`;
	const response = await fetch(url);
	return response.json();
}

async function getGeocodeAsync(location) {
	let data = await getDataAsync(location);
	return data.items[0].position;
}

export default getGeocodeAsync;
