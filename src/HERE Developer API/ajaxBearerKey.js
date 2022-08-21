import JQuery from "jquery";
window.$ = JQuery;

let keyID = "la4fnVQ94m2GHHRQ-dDGjA";
let keySecret =
	"DZCczkYNdO-6Q7P5vVAjkR3OlVHYesGNe8K5VLpZrrpkaWhocSTGpOUP0abW67VOiRdELoC1l-QAmvAqwEE6dA";

let accessKey =
	"eyJhbGciOiJSUzUxMiIsImN0eSI6IkpXVCIsImlzcyI6IkhFUkUiLCJhaWQiOiJ2QzcxMkI3Q0l1c2JGemdvdHY4UiIsImlhdCI6MTY2MDkzMjQyOCwiZXhwIjoxNjYxMDE4ODI4LCJraWQiOiJqMSJ9.ZXlKaGJHY2lPaUprYVhJaUxDSmxibU1pT2lKQk1qVTJRMEpETFVoVE5URXlJbjAuLmNhY01PcDlvY25PM0liYnNnMWZ4dHcuNEM0d3J5Zk1EU3NHRFI5cUxQOUdmMlRXSVZYRFRGQXllNnAweXBlbGtpWXNUVEx5bUJJTnhwWGxpUjFpNzFNVHhzZncxVGYwUXZDWkI2ZkFubjNmOGYtcW1fQTJTS00yVG5ENktBQlU1SmM0VWRqRmlDUVVoUUNhUW5EbEE1d1pjNjdMSVJrYlFyRU9yOU4xTTlxbUhRLjQ3aEc3WndtNjczUkNJUHlRM2VSUTUyZ3VIUUg3aTlYanEwUEExUUg2X2c.hEe7JrMOrBK6_nVePCrBdi39YxnLtm-rREh2iS-s9KZiO0cPbuhOypEc8LerhjqG5SU9dGlXUCf7fe-43cPpV982gjJz5pJD3uyU8d-c0zT7D3ii_daRnyfvtkUl5SlgE5VvGFNyTmudCDdtMmxglsSVFhYjFyXxnF2hGSFPIe0Joe30ldD6Bh6nGKQYa9vKN2UCDuAGZX7Ku-1HdiFrFdh_O_5ZJIDG0FNJr4NSlJrrZ2SswaOA0fkKQ52dyZWGdh__DGsnH5t_FuUvR6WizVzs4XKgVEOjicLJggMKiUQp0qtVI1NYZWKW1SmHcv0xH9wEie2cQxQsFy89v-3OxA";

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
	postData("https://account.api.here.com/oauth2/token").then((data) => {
		console.log(data); // JSON data parsed by `data.json()` call
	});

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

// Example POST method implementation:
async function postData(url = "") {
	console.log("Hello");
	const response = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
			Authorization: "OAuth",
			...parameters,
			oauth_signature: generateSignature(),
		},
		body: {
			grant_type: "client_credentials",
		},
	});

	console.log("Hello:", response.json());
	return response.json(); // parses JSON response into native JavaScript objects
}

export default callAjax;
