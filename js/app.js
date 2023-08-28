let  resultBtn = document.getElementById('result')
let  genegate = document.getElementById('genegate')
let  copy = document.getElementById('copy')
let  alerts = document.getElementById('alerts')
length  = 10;
genegate.onclick = () => {
    password = makePassword(length)
    resultBtn.value = password
}

copy.onclick = () => {
{
if(clipboard != undefined) 
    navigator.clipboard.writeText(resultBtn.value).then(
        () => {
            alerts.classList.toggle('show')
        },
        () => {
            alert("something went wrong");
        },
      );
    }
   
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