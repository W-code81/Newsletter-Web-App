const express = require("express");
const https = require("https");
require('dotenv').config(); // load environment variables
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;

  console.log(firstName, lastName, email);

  const data = {
    email_address: email,
    status: "subscribed",
    merge_fields: {
      FNAME: firstName,
      LNAME: lastName
    }
  };

  const jsonData = JSON.stringify(data);

  const apiKey = process.env.MC_API_KEY;
  const listId = process.env.MC_LIST_ID;
  const dc = process.env.MC_DC;

  const url = `https://${dc}.api.mailchimp.com/3.0/lists/${listId}/members`;

  const options = {
    method: "POST",
    auth: `anystring:${apiKey}`
  };

  const request = https.request(url, options, (response) => {
    console.log("Mailchimp Status:", response.statusCode);

    response.on("data", (data) => {
      console.log(JSON.parse(data));
    });

    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }
  });

  request.write(jsonData);
  request.end();
});

app.post("/failure", (req, res) => {
  res.redirect("/");
});

app.listen(process.env.PORT || port, () => {
  console.log(`Newsletter app running on port ${port}`);
});
