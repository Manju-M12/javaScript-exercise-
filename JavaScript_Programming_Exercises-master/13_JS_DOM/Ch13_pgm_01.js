// Level 1

// 1. Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
// 2. Get each of the the paragraph using document.querySelector('#id') and by their id
// 3. Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
// 4. Loop through the nodeList and get the text content of each paragraph
// 5. Set a text content to paragraph the fourth paragraph,Fourth Paragraph
// 6. Set id and class attribute for all the paragraphs using different attribute setting methods

// Level 2

// 1. Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
// 2. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
// 3. Set text content, id and class to each paragraph
// Level 1

// 1. Get the first paragraph by using document.querySelector(tagname) and tag name
const firstParagraph = document.querySelector('p');
console.log('First Paragraph (by tagname):', firstParagraph.textContent);

// 2. Get each of the paragraph using document.querySelector('#id') and by their id
const firstParaById = document.querySelector('#first-paragraph');
const secondParaById = document.querySelector('#second-paragraph');
const thirdParaById = document.querySelector('#third-paragraph');
const fourthParaById = document.querySelector('#fourth-paragraph');

console.log('First Paragraph (by id):', firstParaById.textContent);
console.log('Second Paragraph (by id):', secondParaById.textContent);
console.log('Third Paragraph (by id):', thirdParaById.textContent);
console.log('Fourth Paragraph (by id):', fourthParaById.textContent);

// 3. Get all the p elements as a NodeList using document.querySelectorAll(tagname) and by their tag name
const allParagraphs = document.querySelectorAll('p');
console.log('All Paragraphs NodeList:', allParagraphs);

// 4. Loop through the NodeList and get the text content of each paragraph
allParagraphs.forEach(paragraph => {
    console.log('Paragraph text content:', paragraph.textContent);
});

// 5. Set a text content to the fourth paragraph
fourthParaById.textContent = 'Fourth Paragraph (Updated)';
console.log('Updated Fourth Paragraph:', fourthParaById.textContent);

// 6. Set id and class attribute for all the paragraphs using different attribute setting methods
allParagraphs.forEach((paragraph, index) => {
    // Setting class attribute
    paragraph.className = `paragraph-${index + 1}`;
    // Setting id attribute
    paragraph.id = `paragraph-${index + 1}`;
});

// Level 2

// 1. Change style of each paragraph using JavaScript (color, background, border, font-size, font-family)
allParagraphs.forEach(paragraph => {
    paragraph.style.color = 'white';
    paragraph.style.backgroundColor = 'blue';
    paragraph.style.border = '2px solid black';
    paragraph.style.fontSize = '18px';
    paragraph.style.fontFamily = 'Arial, sans-serif';
});

// 2. Select all paragraphs and loop through each element to give the first and third paragraph a color of green,
//    and the second and the fourth paragraph a red color
allParagraphs.forEach((paragraph, index) => {
    if (index % 2 === 0) { // First and third paragraphs
        paragraph.style.color = 'green';
    } else { // Second and fourth paragraphs
        paragraph.style.color = 'red';
    }
});

// 3. Set text content, id, and class to each paragraph
allParagraphs.forEach((paragraph, index) => {
    paragraph.textContent = `Paragraph ${index + 1}`;
    paragraph.id = `new-paragraph-${index + 1}`;
    paragraph.className = `new-class-${index + 1}`;
    // Just for demonstration, logging the new values
    console.log(`Paragraph ${index + 1}:`, {
        id: paragraph.id,
        class: paragraph.className,
        text: paragraph.textContent
    });
});
