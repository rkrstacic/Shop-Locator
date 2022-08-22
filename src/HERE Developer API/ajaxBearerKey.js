const OAuth = require("oauth-1.0a");

const req_data = {
	url: "https://account.api.here.com/oauth2/token",
	method: "POST",
};

const oauth = OAuth({
	consumer: {
		key: "la4fnVQ94m2GHHRQ-dDGjA",
		secret: "DZCczkYNdO-6Q7P5vVAjkR3OlVHYesGNe8K5VLpZrrpkaWhocSTGpOUP0abW67VOiRdELoC1l-QAmvAqwEE6dA",
	},
	signature_method: "HMAC-SHA1",
	parameter_seperator: ",",
	hash_function(base_string, key) {
		return CryptoJS.HmacSHA1(base_string, key).toString(
			CryptoJS.enc.Base64
		);
	},
});

async function postData(request_data) {
	const response = await fetch(request_data.url, {
		method: request_data.method,
		headers: {
			Authorization: oauth.toHeader(oauth.authorize(request_data))[
				"Authorization"
			],
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: {
			grant_type: "client_credentials",
		},
	});

	return response.json();
}

function callAjax() {
	postData(req_data).then((data) => {
		console.log(data);
	});

	console.log(oauth.toHeader(oauth.authorize(req_data))["Authorization"]);
	return;
}

export default callAjax;
