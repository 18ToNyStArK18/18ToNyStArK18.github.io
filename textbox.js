console.log("hello");
const textarea = document.getElementById('textarea');
const areas = document.querySelectorAll('.area');

const pronouns = ['i', 'me', 'my', 'mine', 'myself', 'you', 'your', 'yours', 'yourself', 
                 'he', 'him', 'his', 'himself', 'she', 'her', 'hers', 'herself', 
                 'it', 'its', 'itself', 'we', 'us', 'our', 'ours', 'ourselves', 
                 'they', 'them', 'their', 'theirs', 'themselves'];

const articles = ['a', 'an', 'the'];

const prepositions = ['about', 'above', 'across', 'after', 'against', 'along', 'amid', 'among',
                     'around', 'at', 'before', 'behind', 'below', 'beneath', 'beside', 'between',
                     'beyond', 'by', 'down', 'during', 'except', 'for', 'from', 'in', 'inside',
                     'into', 'like', 'near', 'of', 'off', 'on', 'onto', 'out', 'outside', 'over',
                     'past', 'since', 'through', 'throughout', 'to', 'toward', 'under', 'underneath',
                     'until', 'unto', 'up', 'upon', 'with', 'within', 'without'];

areas.forEach((area) => {
    const areaText = area.textContent.trim();
    area.innerHTML = `<strong>${areaText}</strong><span>0</span>`;
});

function analyzeText() {
    const text = textarea.value;

    const letterCount = (text.match(/[a-zA-Z]/g) || []).length;
    updateArea(0, letterCount);
    
    const words = text.split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    updateArea(1, wordCount);
    
    const lineCount = text === '' ? 0 : text.split('\n').length;
    updateArea(2, lineCount);
    
    const pronounCount = countWordsByList(words, pronouns);
    updateArea(3, pronounCount);
    
    const spaceCount = (text.match(/\s/g) || []).length;
    updateArea(4, spaceCount);
    
    const articleCount = countWordsByList(words, articles);
    updateArea(5, articleCount);
    
    const prepositionCount = countWordsByList(words, prepositions);
    updateArea(6, prepositionCount);
    
    const specialCharCount = (text.match(/[^\w\s]/g) || []).length;
    updateArea(7, specialCharCount);
    
    const numberCount = (text.match(/\d/g) || []).length;
    updateArea(8, numberCount);
}

function countWordsByList(words, list) {
    let count = 0;
    words.forEach(word => {
        const cleanWord = word.replace(/[^\w\s]/g, '').toLowerCase();
        if (list.includes(cleanWord)) {
            count++;
        }
    });
    return count;
}
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

if (textarea) { 
    textarea.addEventListener('input', analyzeText);
}



window.addEventListener('DOMContentLoaded', () => {
    if (textarea) { 
        analyzeText(); 
    }
});