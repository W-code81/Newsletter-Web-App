📬 Newsletter Signup App

A simple Node.js + Express project that collects user details (first name, last name, email) and subscribes them to a Mailchimp mailing list.
The UI is built using Bootstrap and custom CSS, and pages are dynamically served through an Express backend.


🚀 Features

Responsive signup form using Bootstrap

Collects First Name, Last Name, and Email

Submits data to Mailchimp API

Redirects to Success or Failure pages

Serves static assets through Express

Clean project structure using public folder for CSS and images



🛠️ Technologies Used

Node.js

Express.js

Bootstrap 4

Mailchimp Marketing API

HTML / CSS / JavaScript



📁 Project Structure

Newsletter-Signup/
│
├── app.js
├── signup.html
├── success.html
├── failure.html
│
├── public/
│   ├── css/
│   │   └── signin.css
│   └── img/
│       └── logo.png
│
└── package.json



⚙️ How It Works

1. Run the server

Install dependencies:

npm install

Start the server:

node app.js

Visit:

http://localhost:3000



2. User submits signup form

The form collects:

First Name

Last Name

Email


This data is sent via POST request to your Express server.



3. Mailchimp integration

Your backend formats the user data and sends it to Mailchimp’s API.

If Mailchimp returns:

200 OK → Redirect to /success

Error → Redirect to /failure



🧪 Routes

Route	Purpose

/	Signup form
/success	Success page
/failure	Failure page + retry button



🎨 Frontend Styling

Bootstrap 4 CDN for layout & components

Custom CSS from public/css/signin.css

Images loaded from public/img/


> Note: Static files are served via:

app.use(express.static("public"));



**⚠️ Known Issue (Improvement in Progress)**

❗ Bootstrap CSS & JavaScript Conflict

There is a JavaScript conflict occurring between Bootstrap and other frontend scripts when served via Express.
This sometimes affects form styling or responsiveness.

This issue is currently being investigated and will be resolved in an upcoming update.

Permanent error validation  



**🔧 Possible Fix (Work in Progress)**

Ensuring correct Bootstrap JS version

Checking Popper.js dependency for Bootstrap 4

Reordering script tags

Ensuring no duplicate CDN scripts

Verifying that static files are loading correctly



**📌 Next Improvements**

Fix Bootstrap JavaScript conflict

Add form completed validation on the client side

Add fade-in animation for success/failure pages

Add database storage option (MongoDB)

Convert HTML templates to EJS for cleaner routing

Dockerize the app for deployment

