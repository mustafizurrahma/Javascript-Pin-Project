function generatorPin() {
    const random = Math.random() * 10000;
    const pin = (random + '').split('.')[0];
    if (pin.length === 4) {
        return pin;
    } else {
        return generatorPin();
    }
}

function generatePin() {
    const generatePinInput = document.getElementById('ranNum');
    generatePinInput.value = generatorPin();
}

const allNumbers = document.getElementById('allNumbers').addEventListener('click', function () {
    const digit = event.target.innerText;
    if (isNaN(digit)) {
        //Handle BackSpace

        //Handle Clear

    } else {
        const typeNumber = document.getElementById('typeNumber');
        typeNumber.value = typeNumber.value + digit;
    }
})


function compeairPin() {
    const generatePin = document.getElementById('ranNum').value;
    const NumberPin = document.getElementById('typeNumber').value;
    if (generatePin === NumberPin) {

        displayMatchResult('block', 'none');

    } else {
        displayMatchResult('none', 'block');
    }
}

function displayMatchResult(currectPin, incurrectPin) {
   
    const currect = document.getElementById('trueNotification');
    currect.style.display = currectPin; 
    
    const incurrect = document.getElementById('falseNotification');
    incurrect.style.display = incurrectPin;

}

//Submit Button Conformation Message.
function submitConformation() {
    swal("Thanks For !", "Buying The Mega Bus Ticket!", "success");
}
