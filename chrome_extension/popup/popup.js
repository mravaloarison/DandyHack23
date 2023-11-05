const getAudioExplanation = document.getElementById("get-audio-explanation");
const explanation = document.getElementById("explanation");

getAudioExplanation.addEventListener("click", async (e) => {
  e.preventDefault();

  getAudioExplanation.setAttribute("aria-busy", "true");

  const req = await fetch("http://127.0.0.1:5000/generate_res");

  if (req.ok && req.status == 200) {
    const res = await req.json();
    
    // Split the text by lines
    const lines = res[0].split(/\r\n|\r|\n/);
    handleAudioFetch(lines.join(".. "));
    
    // Clear the explanation div
    // explanation.innerHTML = "";

    // // Create a new <p> element for each line
    // lines.forEach((line) => {
    //   const p = document.createElement("p");
    //   p.textContent = line;
    //   explanation.appendChild(p);
      
    //   // read line
    // });    
  } else {
    console.error("Failed to fetch data:", response.status, response.statusText);
  }
});


const textToSpeech = async (inputText) => {
  const API_KEY = VOICE_AI_API;
  const VOICE_ID = 'IKne3meq5aSn9XLyUdCD';

  const options = {
    method: 'POST',
    url: `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
    headers: {
      accept: 'audio/mpeg', 
      'content-type': 'application/json',
      'xi-api-key': `${API_KEY}`,
    },
    data: JSON.stringify({
      text: inputText,
    }),
    responseType: 'arraybuffer',
  };


  // Send the API request using the Fetch API and wait for the response.
  const response = await fetch(options.url, {
    method: options.method,
    headers: options.headers,
    body: options.data,
  });


  if (response.ok) {
    const audioData = await response.arrayBuffer();
    return audioData;
  } else {
    throw new Error("Failed to generate audio.");
  }
};

const handleAudioFetch = async (textSelected) => {
  const inputText = textSelected; 

  const data = await textToSpeech(inputText);

  const blob = new Blob([data], { type: 'audio/mpeg' });

  const url = URL.createObjectURL(blob);

  const audioElement = document.createElement("audio");
  audioElement.autoplay = true;
  audioElement.controls = true;

  const sourceElement = document.createElement("source");
  sourceElement.src = url;
  sourceElement.type = 'audio/mpeg';

  audioElement.appendChild(sourceElement);

  explanation.innerHTML = "";
  explanation.appendChild(audioElement);

  getAudioExplanation.setAttribute("aria-busy", "false");
};
