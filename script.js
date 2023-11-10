// Replace with your GPT-3.5 API key
const apiKey = '';

document.getElementById('generateButton').addEventListener('click', generateItinerary);

function generateItinerary() {
    const budget = document.getElementById('budget').value;
    const location = document.getElementById('location').value;
    const days = document.getElementById('days').value;
    const outputElement = document.getElementById('output');
    const loadingSkeleton = document.getElementById('loadingSkeleton');
    const regenerateBtn = document.getElementById('regenerateButton');
    const inputs = document.getElementById('itiinput');

    // Show the loading skeleton while generating the itinerary
    loadingSkeleton.style.display = 'block';
    output.style.display = 'block';
    regenerateBtn.style.display = 'block';
    inputs.style.display = 'none';
    
    document.getElementById("testing_load").scrollIntoView();
    
    // Construct a prompt that includes user input
    const prompt = `Generate a 🌍 sustainable travel itinerary for a ${days}-day trip to ${location} with a budget of $${budget}.`;

    axios.post('https://api.openai.com/v1/engines/text-davinci-002/completions', {
        prompt: prompt,
        max_tokens: 1000, // Adjust the max_tokens as needed
    }, {
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        }
    })
    .then((response) => {
        const itinerary = response.data.choices[0].text;
        const formattedItinerary = formatItinerary(itinerary);
        outputElement.innerHTML = formattedItinerary;
        
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        // Hide the loading skeleton when the response is received
        loadingSkeleton.style.display = 'none';

    });
    
}

function formatItinerary(itinerary) {
    // You can add your own formatting logic here.
    // For example, you can add line breaks and structure the content.
    // This is a simple example, and you can customize it further.

    const paragraphs = itinerary.split('\n');
    const formattedItinerary = paragraphs
        .filter(paragraph => paragraph.trim() !== '')
        .map(paragraph => {
            // Identify and bold day numbers (e.g., "Day 1", "Day 2")
            const formattedParagraph = paragraph.replace(/(Day \d+)/g, '<strong>$1</strong>');
            return `<p>${formattedParagraph}</p>`;
        })
        .join('');

    return formattedItinerary;
}

function regenItinerary(){
    window.scrollTo(0, 0);
    setTimeout(function(){location.reload()}, 790);
}

