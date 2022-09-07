// Toggle button for switching between light and dark mode

let display = document.getElementById("body");
let toggleBtn = document.getElementById("dark-light");
let toggle = false;

toggleBtn.addEventListener('click', () => {
    if(toggle == false) {
        display.style.backgroundColor = 'black';
        toggleBtn.style.backgroundColor = '#feece2';
        toggleBtn.style.boxShadow = '5px 5px 5px gray';
        document.getElementById("hours").style.color = 'white';
        document.getElementById("minutes").style.color = 'white';
        document.getElementById("seconds").style.color = 'white';
        document.getElementById("session").style.color = 'white';
        toggle = true;
    }
    else {
        display.style.backgroundColor = '#feece2';
        document.getElementById("hours").style.color = 'black';
        document.getElementById("minutes").style.color = 'black';
        document.getElementById("seconds").style.color = 'black';
        document.getElementById("session").style.color = 'black';
        toggle = false;
    }
});

// Calculator 

let calcDisp = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName('btn'));
let str1 = "";
let operator = "";
let str2 = "";
let res = "";
let pressed = false;

buttons.map((button) => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerHTML) {
            case 'C':
                if(calcDisp.innerHTML) {
                    calcDisp.innerHTML = 'Enter the numbers';
                }
                str1 = "";
                str2 = "";
                operator = "";
                break;
            case 'X': 
                if(calcDisp.innerHTML) {
                    calcDisp.innerHTML = calcDisp.innerHTML.substring(0,(calcDisp.innerHTML.length - 1));
                }
                else {
                    calcDisp.innerHTML = "Enter the numbers";
                }
                break;
            case '+':
                if(!pressed) {
                    pressed = true;
                    operator = '+';
                    calcDisp.innerHTML = '+';
                }
                break;
            case '-':
                if(!pressed) {
                    pressed = true;
                    operator = '-';
                    calcDisp.innerHTML = '-';
                }
                break;
            case '*':
                if(!pressed) {
                    pressed = true;
                    operator = '*';
                    calcDisp.innerHTML = '*';
                }
                break;
            case '/':
                if(!pressed) {
                    pressed = true;
                    operator = '/';
                    calcDisp.innerHTML = '/';
                }
                break;
            case '%':
                if(!pressed) {
                    pressed = true;
                    operator = '%';
                    calcDisp.innerHTML = '%';
                }
                break;
            case '=':
                if(pressed) {
                    pressed = false;
                }
                res = eval(str1 + operator + str2);
                calcDisp.innerHTML = res;
                str2 = "";
                str1 = "";
                break;
            default:
                if(pressed) {
                    str2 += e.target.innerHTML;
                    calcDisp.innerHTML = str2;
                    if(res !== "") {
                        str1 = res;
                        res = "";
                    }
                }
                else {
                    str1 += e.target.innerHTML;
                    calcDisp.innerHTML = str1; 
                }
        }
    })
});

// World Clock

function displayTime() {
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var mins = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();
    var session = document.getElementById("session");
  
    if (hrs >= 12) {
      session.innerHTML = "PM";
    } else {
      session.innerHTML = "AM";
    }
    if (hrs > 12) {
      hrs = hrs - 12;
    }
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = seconds;
}

setInterval(displayTime, 1000);
