const txtMessage = document.getElementById('txtMessage');
const txtFeedback = document.getElementById('txtFeedback');

txtMessage.addEventListener('keypress',countCharacter);

//define the event handler function,...
function countCharacter(num){
//get message typed in the textarea...
let message = txtMessage.value;

//sanitize the retrived message by taking away repeated spaces and replacing them with a single  space.
message = message.replace(/\s+/g, ' ' );

//split sanitize message into word pieces
let wordPieces = message.split('');

//count the tal number of words in wordpieces
let numWords = wordPieces.length;

let numChar = numWords + 1;
for()

if (numChar <= 10) {
    txtFeedback.value = `Page count: 1 (${numChar} / 10) used!`;
} else   {
    txtFeedback.value = `Page count: 2 (${numChar} / 10) used!`;
    
}

}