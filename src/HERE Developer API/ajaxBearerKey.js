const OAuth = require("oauth-1.0a");

const token = {
	key: "la4fnVQ94m2GHHRQ-dDGjA",
	secret: "DZCczkYNdO-6Q7P5vVAjkR3OlVHYesGNe8K5VLpZrrpkaWhocSTGpOUP0abW67VOiRdELoC1l-QAmvAqwEE6dA",
};

const request_data = {
	url: "https://account.api.here.com/oauth2/token",
	method: "POST",
};

function hash_function_sha1(base_string, key) {
	return CryptoJS.HmacSHA1(base_string, key).toString(CryptoJS.enc.Base64);
}

const oauth = OAuth({
	consumer: token,
	signature_method: "HMAC-SHA1",
	hash_function: hash_function_sha1,
});

async function postData(url = "") {
	const response = await fetch(url, {
		method: "POST",
		headers: {
			Authorization: oauth.toHeader(oauth.authorize(request_data, token))[
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
	postData("https://account.api.here.com/oauth2/token").then((data) => {
		console.log(data);
	});

	return;
}

export default callAjax;
