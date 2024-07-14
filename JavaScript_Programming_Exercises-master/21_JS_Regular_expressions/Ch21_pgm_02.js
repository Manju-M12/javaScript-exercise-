// Write a function called tenMostFrequentWords which get the ten most frequent word from a string?



function tenMostFrequentWords(text) {
    // Remove punctuation and convert text to lowercase
    const cleanedText = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase();

    // Split the text into words
    const words = cleanedText.split(/\s+/);

    // Count the frequency of each word
    const wordCounts = {};
    words.forEach(word => {
        if (wordCounts[word]) {
            wordCounts[word]++;
        } else {
            wordCounts[word] = 1;
        }
    });

    // Convert the wordCounts object into an array of [word, count] pairs
    const wordCountPairs = Object.entries(wordCounts);

    // Sort the array by the count in descending order
    const sortedWordCountPairs = wordCountPairs.sort((a, b) => b[1] - a[1]);

    // Get the top 10 most frequent words
    const topTenWords = sortedWordCountPairs.slice(0, 10);

    // Return the result as an array of objects with word and count properties
    return topTenWords.map(pair => ({
        word: pair[0],
        count: pair[1]
    }));
}

// Example usage
const text = "This is a test. This test is only a test. If this had been an actual emergency, the test you just heard would have been followed by official information, news, or instructions. This is only a test.";
console.log(tenMostFrequentWords(text));
