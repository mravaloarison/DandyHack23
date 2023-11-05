# DandyHacks 2023: Magic Mouse 🐁

Magic Mouse is a chrome extension that allows you to
highlight any word or sentences or code in your browser and learn what about it.

[Demo](https://youtu.be/otI4Q1wfWmc)

# How to use it
### Server side
Clone this repository
```git
git clone https://github.com/mravaloarison/DandyHack23.git
```
Once you open the document named `Dandyhack23` Navigate to your flask file using the command:
```
cd flask
```
Create a python environment to run the Flask server locally:
```
python -m venv your_environment_name
```
Next, activate your environment
```
source your_environment_name/bin/activate
```
Once your environment is activate, install all the dependencies
```
pip install -r requirements.txt
```
Now, all you need to do is to give setup your openai API KEY, then run the Flask app and the server is ready
```
export OPENAI_API_KEY=YOUR_API_KEY
flask run
```

### Chrome set up
Go to [chrome://extensions/](chrome://extensions/), make sure to activate developer mode:

![Screenshot](./image.jpg)

Click `Load unpacked` button: 

![Load unpacked Screenshot](./image.jpg)

Navigate to the `chrome_extension` folfer from the cloned repository
```
DandyHack23 > chrome_extension
```

Have a better experience by pining the extension:

![Pin extension](./image.jpg)







## Features

- **Text Highlighting:** Easily select and highlight any text on a webpage.
- **Instant Explanations:** Once text is highlighted, the extension sends the selected text to a Flask backend.
- **AI-Powered Explanations:** The Flask backend communicates with OpenAI API to generate informative explanations for the highlighted text.
- **Read Aloud:** The generated explanations can also be read aloud using Elevenlabs API for an interactive learning experience.
- **Option to Display as note:** User can also get the text version of the explanation.

## Technologies Used

- [Flask](https://flask.palletsprojects.com/en/2.1.x/): Used for the server-side component to handle text explanations.
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript): Used for the Chrome extension and client-side interactions.
- [ElevenLabs](https://eleven-labs.com/): Provides text-to-speech capabilities to read the explanations aloud.
- [OpenAI](https://beta.openai.com/): Empowers the extension with natural language processing for generating explanations.
- [Chrome Extension Api](https://developer.chrome.com/docs/extensions/reference/): Help Interract with the browser

## Contact

- Project Lead: Maminiaina Ravaloarison
- Email: maminiainaravaloarison@gmail.com
- GitHub: https://github.com/mravaloarison

Feel free to reach out with any questions or feedback!
