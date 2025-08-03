const characters =["A","B","C","D","E","F","G","H","I","J","K","L",
    "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b",
    "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
    "s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", 
    "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",
    ")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".",
    "?","/"];

let passwordEl1 = document.getElementById("password-el1")
let passwordEl2 = document.getElementById("password-el2")

function generatePassword(){

    passwordEl1.textContent = ""
    passwordEl2.textContent = ""
    
    for (let i = 0; i < 15; i++){
        let password1 = Math.floor(Math.random()* characters.length)
        let password2 = Math.floor(Math.random()* characters.length)
        passwordEl2.textContent += characters[password2]
        passwordEl1.textContent += characters[password1]
        // console.log(characters[password])
    }
}

function copy(){
    var copyText = document.getElementById("password-el1")
    navigator.clipboard.writeText(copyText.textContent)
    alert("Password copied to clipboard")
}



