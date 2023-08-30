var  resultBtn = document.getElementById('result')
let  genegate = document.getElementById('genegate')
let  copy = document.getElementById('copy')
let  alerts = document.getElementById('alerts')
length  = 10;
genegate.onclick = () => {
    password = makePassword(length)
    resultBtn.value = password
}

function makePassword(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

function myFunction() {
    var copyed = resultBtn.value;
    // Select the text field
    resultBtn.select();
    resultBtn.setSelectionRange(0, 99999); // For mobile devices
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyed);
    // Alert the copied text
    alert("Copied the text: " + copyed);
  }