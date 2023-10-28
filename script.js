// Replace with your GPT-3.5 API key
const apiKey = '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';

document.getElementById('generateButton').addEventListener('click', generateItinerary);

function generateItinerary() {
    const outputElement = document.getElementById('output');
    const budget = document.getElementById('budget').value;
    const location = document.getElementById('location').value;
    const days = document.getElementById('days').value;
    const prompt = `Generate a sustainable travel itinerary for a ${days}-day trip to ${location} with a budget of $${budget}.`;

    axios.post('https://api.openai.com/v1/engines/text-davinci-002/completions',  {
        prompt: prompt,
        max_tokens: 1000,   }, {
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        }
    })
    .then((response) => {
        const itinerary = response.data.choices[0].text;
        outputElement.innerText = itinerary;
    })
    .catch((error) => {
        console.error(error);
    });

    // In the actual code, you should handle the API response and display the itinerary.
}
