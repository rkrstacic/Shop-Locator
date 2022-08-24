import searchShopsAsync from "@/HERE Developer API/searchPlaces";
import getGeocodeAsync from "@/HERE Developer API/geocoding";

async function requestShops({ location, distance, shopTypes }) {
	let pos = await getGeocodeAsync(location);

	return await searchShopsAsync({
		lat: pos.lat,
		lng: pos.lng,
		distance: `${distance}`,
		shopTypes: shopTypes,
	});
}

export default requestShops;
