import searchShopsAsync from "@/HERE Developer API/searchPlaces";
import getGeocodeAsync from "@/HERE Developer API/geocoding";

async function requestShops({
	location = "",
	distance,
	shopTypes,
	geolocation = null,
}) {
	if (geolocation == null) {
		geolocation = await getGeocodeAsync(location);
	}

	return await searchShopsAsync({
		lat: geolocation.lat,
		lng: geolocation.lng,
		distance: `${distance}`,
		shopTypes: shopTypes,
	});
}

export default requestShops;
