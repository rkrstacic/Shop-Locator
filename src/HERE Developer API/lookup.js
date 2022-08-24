import apiKey from "@/HERE Developer API/apiKey";

async function getDataAsync(id) {
	let url = `https://discover.search.hereapi.com/v1/lookup?id=${id}&apiKey=${apiKey}`;
	const response = await fetch(url);
	return response.json();
}

async function getShopById(id) {
	return await getDataAsync(id);
}

export default getShopById;
