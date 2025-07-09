🚀 API Caller
This project provides a simple, interactive web interface for making HTTP requests to various API endpoints, including support for JSON bodies and multiple file uploads (specifically PDF files). It's a handy tool for testing APIs directly from your browser.

✨ Features
Customizable API URL: Easily specify the target API endpoint.

Multiple HTTP Methods: Supports POST, GET, PUT, and DELETE requests.

JSON Request Body: Include a JSON payload for POST and PUT requests.

File Upload Support: Attach multiple PDF files to your requests.

Configurable File Field Name: Set the name of the form field for file uploads to match your API's expectations.

Dynamic File List: View and remove selected files before sending the request.

Response Display: See the API's response directly in the browser.

PDF Download: If the API responds with a PDF, it will automatically prompt you to download the file.

🛠️ How to Use
Clone the repository:

Bash

git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
Open index.html: Simply open the index.html file in your web browser. There's no need for a local server, as it's a client-side application.

Configure your API Call:

API URL: Enter the complete URL of the API you want to interact with (e.g., https://api.example.com/data).

HTTP Method: Select the appropriate HTTP method from the dropdown (POST, GET, PUT, DELETE).

Request Body (JSON): If your request requires a JSON body, type or paste valid JSON into this textarea. This is optional and typically used for POST and PUT methods.

Nome campo file (File Field Name): If you are uploading files, ensure this field matches the name your backend API expects for file uploads (default is files).

File upload (PDF multipli): Click "Choose Files" to select one or more PDF documents. You can remove individual files from the list by clicking the "✖" next to their names.

Call API: Click the "Call API" button.

View Results:

The API's response will be displayed in the Response Container.

If the API returns a PDF file, your browser will automatically start a download for download.pdf.

💻 Project Structure
.
├── index.html     # The main HTML structure of the API caller interface.
├── script.js      # Contains the JavaScript logic for handling user input, API calls, and response processing.
└── styles.css     # (Optional, but recommended) For styling the interface.
(Note: styles.css is referenced in index.html but was not provided. You can create this file to add your own styling.)

📄 License
This project is open-source and available under the MIT License. This means you are free to use, modify, and distribute the code for any purpose, even commercially, as long as you include the original copyright and license notice.

For more details, see the LICENSE file (if you choose to add one).

💡 Contributing
Feel free to fork this repository, open issues, or submit pull requests if you have suggestions for improvements or bug fixes!