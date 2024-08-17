const iplocate = require("node-iplocate");

iplocate("this ip").then(function (results) {
  console.log("IP Address: " + results.ip);
  console.log(
    "Country: " + results.country + " (" + results.country_code + ")"
  );
  console.log("Continent: " + results.continent);
  console.log("Organisation: " + results.org + " (" + results.asn + ")");

  console.log(JSON.stringify(results, null, 2));
});

// Or with callbacks
iplocate("this ip", null, function (err, results) {
  // ...
  console.log(JSON.stringify(results, null, 2));
});

// Provide an API key from IPLocate.io
iplocate("this ip", { api_key: "abcdef" }).then(function (results) {
  // ...
});
