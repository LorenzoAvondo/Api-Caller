const fileInput = document.getElementById('apiFiles');
const fileListUI = document.getElementById('fileList');
let selectedFiles = [];

fileInput.addEventListener('change', function () {
    const newFiles = Array.from(fileInput.files);
    selectedFiles = selectedFiles.concat(newFiles);
    renderFileList();
    fileInput.value = '';
});

function renderFileList() {
    fileListUI.innerHTML = '';
    selectedFiles.forEach((file, index) => {
        const li = document.createElement('li');
        li.textContent = file.name;
        const removeBtn = document.createElement('button');
        removeBtn.textContent = '✖';
        removeBtn.className = 'remove-btn';
        removeBtn.onclick = () => {
            selectedFiles.splice(index, 1);
            renderFileList();
        };
        li.appendChild(removeBtn);
        fileListUI.appendChild(li);
    });
}

document.getElementById('callApiBtn').addEventListener('click', function () {
    const apiUrl = document.getElementById('apiUrl').value.trim();
    const method = document.getElementById('apiMethod').value.trim();
    const apiBodyText = document.getElementById('apiBody').value.trim();
    const fileFieldName = document.getElementById('fileFieldName').value.trim() || 'files';

    let options = {
        method: method,
        headers: {},
    };

    if (method === 'GET' || method === 'DELETE') {
        fetch(apiUrl, options)
            .then(handleResponse)
            .catch(handleError);
        return;
    }

    // Se ci sono file, usa FormData
    if (selectedFiles.length > 0) {
        const formData = new FormData();

        selectedFiles.forEach(file => {
            formData.append(fileFieldName, file);
        });

        if (apiBodyText) {
            try {
                const jsonObj = JSON.parse(apiBodyText);
                for (const [key, value] of Object.entries(jsonObj)) {
                    formData.append(key, typeof value === 'object' ? JSON.stringify(value) : value);
                }
            } catch (err) {
                alert('JSON non valido.');
                return;
            }
        }

        options.body = formData;
    } else {
        // Nessun file -> invia come JSON puro
        if (apiBodyText) {
            try {
                const jsonObj = JSON.parse(apiBodyText);
                options.body = JSON.stringify(jsonObj);
                options.headers['Content-Type'] = 'application/json';
            } catch (err) {
                alert('JSON non valido.');
                return;
            }
        }
    }

    fetch(apiUrl, options)
        .then(handleResponse)
        .catch(handleError);
});

function handleResponse(response) {
    const contentType = response.headers.get('Content-Type');

    if (response.ok && contentType && contentType.includes('application/pdf')) {
        return response.blob().then(blob => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'download.pdf';
            a.click();
            URL.revokeObjectURL(url);
        });
    }

    return response.text().then(text => {
        document.getElementById('responseContainer').innerText = text;
    });
}

function handleError(error) {
    console.error('Errore:', error);
    document.getElementById('responseContainer').innerText = 'Errore: ' + error.message;
}
