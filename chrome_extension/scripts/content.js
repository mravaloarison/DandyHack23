document.addEventListener('mouseup', async function () {
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();

    if (selectedText !== "") {
        // Sending GET request to Flask app only when there is something selected
        await fetch(`http://127.0.0.1:5000/explain?q=${selectedText}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
});