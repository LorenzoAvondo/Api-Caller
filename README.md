## 🚀 API Caller

This project provides a simple, interactive web interface for making HTTP requests to various API endpoints, including support for JSON bodies and multiple file uploads (specifically PDF files). It's a handy tool for testing APIs directly from your browser.

## ✨ Features

Customizable API URL: Easily specify the target API endpoint.

Multiple HTTP Methods: Supports POST, GET, PUT, and DELETE requests.

JSON Request Body: Include a JSON payload for POST and PUT requests.

File Upload Support: Attach multiple PDF files to your requests.

Configurable File Field Name: Set the name of the form field for file uploads to match your API's expectations.

Dynamic File List: View and remove selected files before sending the request.

Response Display: See the API's response directly in the browser.

PDF Download: If the API responds with a PDF, it will automatically prompt you to download the file.


## 🛠️ How to Use

Clone the repository:

```Bash
git clone https://github.com/LorenzoAvondo/Api-Caller.git

cd YOUR_REPO_NAME
```

Open apiCAller.html: Simply open the index.html file in your web browser. There's no need for a local server, as it's a client-side application.

  

## 💻 Project Structure

```
├── apiCAller.html # The main HTML structure of the API caller interface.

├── script.js      # Contains the JavaScript logic for handling user input, API calls, and response processing.

└── styles.css     # For styling the interface.
```

## 📄 License

This project is open-source and available under the MIT License. This means you are free to use, modify, and distribute the code for any purpose, even commercially, as long as you include the original copyright and license notice.

## 💡 Contributing

Feel free to fork this repository, open issues, or submit pull requests if you have suggestions for improvements or bug fixes!
