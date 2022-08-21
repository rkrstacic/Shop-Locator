import JQuery from "jquery";
window.$ = JQuery;

let accessKey =
	"eyJhbGciOiJSUzUxMiIsImN0eSI6IkpXVCIsImlzcyI6IkhFUkUiLCJhaWQiOiJ2QzcxMkI3Q0l1c2JGemdvdHY4UiIsImlhdCI6MTY2MDkzMjQyOCwiZXhwIjoxNjYxMDE4ODI4LCJraWQiOiJqMSJ9.ZXlKaGJHY2lPaUprYVhJaUxDSmxibU1pT2lKQk1qVTJRMEpETFVoVE5URXlJbjAuLmNhY01PcDlvY25PM0liYnNnMWZ4dHcuNEM0d3J5Zk1EU3NHRFI5cUxQOUdmMlRXSVZYRFRGQXllNnAweXBlbGtpWXNUVEx5bUJJTnhwWGxpUjFpNzFNVHhzZncxVGYwUXZDWkI2ZkFubjNmOGYtcW1fQTJTS00yVG5ENktBQlU1SmM0VWRqRmlDUVVoUUNhUW5EbEE1d1pjNjdMSVJrYlFyRU9yOU4xTTlxbUhRLjQ3aEc3WndtNjczUkNJUHlRM2VSUTUyZ3VIUUg3aTlYanEwUEExUUg2X2c.hEe7JrMOrBK6_nVePCrBdi39YxnLtm-rREh2iS-s9KZiO0cPbuhOypEc8LerhjqG5SU9dGlXUCf7fe-43cPpV982gjJz5pJD3uyU8d-c0zT7D3ii_daRnyfvtkUl5SlgE5VvGFNyTmudCDdtMmxglsSVFhYjFyXxnF2hGSFPIe0Joe30ldD6Bh6nGKQYa9vKN2UCDuAGZX7Ku-1HdiFrFdh_O_5ZJIDG0FNJr4NSlJrrZ2SswaOA0fkKQ52dyZWGdh__DGsnH5t_FuUvR6WizVzs4XKgVEOjicLJggMKiUQp0qtVI1NYZWKW1SmHcv0xH9wEie2cQxQsFy89v-3OxA";

function encodeURLObj(obj) {
	var str = [];
	for (var p in obj)
		if (obj.hasOwnProperty(p)) {
			str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
		}
	return str.join("&");
}

function callAjax() {
	postData("https://discover.search.hereapi.com/v1/discover").then((data) => {
		console.log(data); // JSON data parsed by `data.json()` call
	});
}

// Example POST method implementation:
async function postData(url = "") {
	const response = await fetch(
		url +
			new URLSearchParams({
				in: "circle:42.36309,-71.05495;r=150",
				q: "hotels",
			}),
		{
			method: "GET",
			headers: {
				Authorization: `Bearer ${accessKey}`,
			},
		}
	);

	return response.json(); // parses JSON response into native JavaScript objects
}

export default callAjax;
