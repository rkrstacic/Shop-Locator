import JQuery from "jquery";
window.$ = JQuery;

let keyID = "la4fnVQ94m2GHHRQ-dDGjA";
let keySecret =
	"DZCczkYNdO-6Q7P5vVAjkR3OlVHYesGNe8K5VLpZrrpkaWhocSTGpOUP0abW67VOiRdELoC1l-QAmvAqwEE6dA";

const epoch = Date.now();

const parameters = {
	grant_type: "client_credentials",
	oauth_consumer_key: keyID,
	oauth_nonce: epoch,
	oauth_signature_method: "HMAC-SHA256",
	oauth_timestamp: epoch,
	oauth_version: "1.0",
};

const parameters2 = {
	grant_type: "client_credentials",
	oauth_consumer_key: keyID,
	oauth_nonce: epoch,
	oauth_timestamp: epoch,
	oauth_version: "1.0",
};

function encodeURLObj(obj) {
	var str = [];
	for (var p in obj)
		if (obj.hasOwnProperty(p)) {
			str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
		}
	return str.join("&");
}

function generateSignature() {
	const httpMethod = "POST";
	const url = "https%3A%2F%2Faccount.api.here.com%2Foauth2%2Ftoken";

	let parameterString = encodeURIComponent(encodeURLObj(parameters));

	let signatureBaseString = [httpMethod, url, parameterString].join("&");
	let signingKey = encodeURIComponent(keySecret) + "&";

	let hash = CryptoJS.HmacSHA256(signatureBaseString, signingKey);
	let hashInBase64 = CryptoJS.enc.Base64.stringify(hash);

	return hashInBase64;
}

function callAjax() {
	// In progress

	return;
	$.ajax({
		url: "https://account.api.here.com/oauth2/token",
		type: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			Authorization: "OAuth",
			...parameters,
			oauth_signature: generateSignature(),
		},
		data: {
			grant_type: "client_credentials",
		},
		success: function (res) {
			console.log(res);
			alert(res);
		},
	});
}

export default callAjax;
