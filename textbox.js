console.log("hello");
// DOM Elements
const textarea = document.getElementById('textarea');
const areas = document.querySelectorAll('.area');

// Common English pronouns
const pronouns = ['i', 'me', 'my', 'mine', 'myself', 'you', 'your', 'yours', 'yourself', 
                 'he', 'him', 'his', 'himself', 'she', 'her', 'hers', 'herself', 
                 'it', 'its', 'itself', 'we', 'us', 'our', 'ours', 'ourselves', 
                 'they', 'them', 'their', 'theirs', 'themselves'];

// Common English articles
const articles = ['a', 'an', 'the'];

// Common English prepositions
const prepositions = ['about', 'above', 'across', 'after', 'against', 'along', 'amid', 'among',
                     'around', 'at', 'before', 'behind', 'below', 'beneath', 'beside', 'between',
                     'beyond', 'by', 'down', 'during', 'except', 'for', 'from', 'in', 'inside',
                     'into', 'like', 'near', 'of', 'off', 'on', 'onto', 'out', 'outside', 'over',
                     'past', 'since', 'through', 'throughout', 'to', 'toward', 'under', 'underneath',
                     'until', 'unto', 'up', 'upon', 'with', 'within', 'without'];

// Initialize areas with counters
areas.forEach((area) => {
    const areaText = area.textContent.trim();
    area.innerHTML = `<strong>${areaText}</strong><span>0</span>`; // Initialize with span
});

// Function to analyze text and update results
function analyzeText() {
    const text = textarea.value;

    // Letters count (excluding spaces and special characters)
    const letterCount = (text.match(/[a-zA-Z]/g) || []).length;
    updateArea(0, letterCount);
    
    // Words count
    const words = text.split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    updateArea(1, wordCount);
    
    // Lines count
    const lineCount = text === '' ? 0 : text.split('\n').length;
    updateArea(2, lineCount);
    
    // Pronouns count
    const pronounCount = countWordsByList(words, pronouns);
    updateArea(3, pronounCount);
    
    // Spaces count
    const spaceCount = (text.match(/\s/g) || []).length;
    updateArea(4, spaceCount);
    
    // Articles count
    const articleCount = countWordsByList(words, articles);
    updateArea(5, articleCount);
    
    // Prepositions count
    const prepositionCount = countWordsByList(words, prepositions);
    updateArea(6, prepositionCount);
    
    // Special Characters count (excluding alphanumeric and spaces)
    const specialCharCount = (text.match(/[^\w\s]/g) || []).length;
    updateArea(7, specialCharCount);
    
    // Numbers count
    const numberCount = (text.match(/\d/g) || []).length;
    updateArea(8, numberCount);
}

// Helper function to count occurrences of words from a list
function countWordsByList(words, list) {
    let count = 0;
    words.forEach(word => {
        // Remove punctuation and convert to lowercase for comparison
        const cleanWord = word.replace(/[^\w\s]/g, '').toLowerCase();
        if (list.includes(cleanWord)) {
            count++;
        }
    });
    return count;
}

// Update specific area with count
function updateArea(index, count) {
    if (index < areas.length) {
        const span = areas[index].querySelector('span');
        if (span) {
            span.textContent = count;
        } else {
            console.error(`Span not found in area at index ${index}`);
        }
    } else {
        console.error(`Area at index ${index} does not exist`);
    }
}

// Add event listeners
if (textarea) { // Check if textarea exists
    textarea.addEventListener('input', analyzeText);
}



// Initialize the page
window.addEventListener('DOMContentLoaded', () => {
    if (textarea) { // Only run if textarea exists
        analyzeText(); // Initial analysis
    }
});