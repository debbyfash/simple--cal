const displayBoard = document.querySelector("#displayBoard");
const txtSMS = document.querySelector("#txtSMS");


txtSMS.addEventListener('keyup', countCharacters);

function countCharacters() {
    let sms = txtSMS.Value;
    let smsPieces = sms.split('').length;


   let pageCount = Math.floor(smsPieces / 160) + 1;
//    console.log("Page count is" + pageCount); 
   let totalCharacters = 160 * pageCount;

    displayBoard.innerHTML = `page count: ${pageCount} (${smsPieces} / ${totalCharacters}) `;
    

}