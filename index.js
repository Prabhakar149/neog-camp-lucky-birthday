const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const clickButton = document.querySelector(".my-button");
const myMessage = document.querySelector(".message");


function checkBirthdayLucky(){
    const dob = dateOfBirth.value;
    const myNumber = luckyNumber.value;
    
    if(dob && myNumber){
        const sum = sumOfDob(dob);
        if(sum % myNumber === 0){
            myMessage.innerText = "Your birthday is lucky 🙌🏽";
        }else{
            myMessage.innerText = "Your birthday is not lucky 😟";
        }
    }else{
        myMessage.innerText = "please give some value for both fields ! 😑";
    }
}

function sumOfDob(dob){
    dob=dob.replaceAll("-","");
    let sum = 0;
    for(let i of dob){
        sum = sum+Number(i);
    }
    return sum;
}

clickButton.addEventListener("click", checkBirthdayLucky);