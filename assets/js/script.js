// global variables
var currentDayContainer = $("#currentDay");
var currentDay = document.createElement('div');
let now = moment().format('dddd, MMMM Do YYYY')
currentDay.textContent = now;
currentDayContainer.append(currentDay);
var nine = document.querySelector('#nine');
var ten = document.querySelector('#ten');
var eleven = document.querySelector('#eleven');
var twelve = document.querySelector('#twelve');
var one = document.querySelector('#one');
var two = document.querySelector('#two');
var three = document.querySelector('#three');
var four = document.querySelector('#four');
var five = document.querySelector('#five');
var timeBlock = document.querySelector('.time-block')

var update = document.createElement('p');
update.textContent = 'Appointment was saved to localStorage!';
update.setAttribute('style', 'padding-top: 20px');

var remove = document.createElement('p');
remove.textContent = 'Appointment was deleted from localStorage!';
remove.setAttribute('style', 'padding-top: 20px');


// color coding
function times() {

    var nineAM = moment().hour(9)
    if (moment().isAfter(nineAM)) {
        nine.classList.add('past')
    }
    else if (moment().isSame(nineAM)) {
        nine.classList.add('present')
    }
    else {
        nine.classList.add('future')
    }

    var tenAM = moment().hour(10)
    if (moment().isAfter(tenAM)) {
        ten.classList.add('past')
    }
    else if (moment().isSame(tenAM)) {
        ten.classList.add('present')
    }
    else {
        ten.classList.add('future')
    }

    var elevenAM = moment().hour(11)
    if (moment().isAfter(elevenAM)) {
        eleven.classList.add('past')
    }
    else if (moment().isSame(elevenAM)) {
        eleven.classList.add('present')
    }
    else {
        eleven.classList.add('future')
    }

    var twelvePM = moment().hour(12)
    if (moment().isAfter(twelvePM)) {
        twelve.classList.add('past')
    }
    else if (moment().isSame(twelvePM)) {
        twelve.classList.add('present')
    }
    else {
        twelve.classList.add('future')
    }

    var onePM = moment().hour(13)
    if (moment().isAfter(onePM)) {
        one.classList.add('past')
    }
    else if (moment().isSame(onePM)) {
        one.classList.add('present')
    }
    else {
        one.classList.add('future')
    }

    var twoPM = moment().hour(14)
    if (moment().isAfter(twoPM)) {
        two.classList.add('past')
    }
    else if (moment().isSame(twoPM)) {
        two.classList.add('present')
    }
    else {
        two.classList.add('future')
    }

    var threePM = moment().hour(15)
    if (moment().isAfter(threePM)) {
        three.classList.add('past')
    }
    else if (moment().isSame(threePM)) {
        three.classList.add('present')
    }
    else {
        three.classList.add('future')
    }

    var fourPM = moment().hour(16)
    if (moment().isAfter(fourPM)) {
        four.classList.add('past')
    }
    else if (moment().isSame(fourPM)) {
        four.classList.add('present')
    }
    else {
        four.classList.add('future')
    }

    var fivePM = moment().hour(17)
    if (moment().isAfter(fivePM)) {
        five.classList.add('past')
    }
    else if (moment().isSame(fivePM)) {
        five.classList.add('present')
    }
    else {
        five.classList.add('future')
    }
}


// saving and deleting
function saveData() {
    var btn1 = document.getElementById('btnOne');
    var btn2 = document.getElementById('btnTwo');
    var btn3 = document.getElementById('btnThree');
    var btn4 = document.getElementById('btnFour');
    var btn5 = document.getElementById('btnFive');
    var btn6 = document.getElementById('btnSix');
    var btn7 = document.getElementById('btnSeven');
    var btn8 = document.getElementById('btnEight');
    var btn9 = document.getElementById('btnNine');

    
    btn1.onclick = function() {
        var inp1 = nine.value;
        if (inp1) {
            localStorage.setItem('9AM',inp1);
            currentDay.append(update);
            setTimeout(function(){
                update.remove();
            }, 1250);
        }
        else {
            localStorage.removeItem('9AM');
            nine.value = ''
            currentDay.append(remove);
            setTimeout(function(){
                remove.remove();
            }, 1250);
        }}

        var key = localStorage.getItem('9AM');;
        nine.value = key;
    
    btn2.onclick = function() {
        var inp2 = ten.value;        
        if (inp2) {
            localStorage.setItem('10AM',inp2)
            currentDay.append(update);
            setTimeout(function(){
                update.remove();
            }, 1250);
        }
        else {
            localStorage.removeItem('10AM');
            ten.value = ''
            currentDay.append(remove);
            setTimeout(function(){
                remove.remove();
            }, 1250);
        }}
        var key2 = localStorage.getItem('10AM');;
        ten.value = key2;

     btn3.onclick = function() {
        var inp3 = eleven.value;        
        if (inp3) {
            localStorage.setItem('11AM',inp3)
            currentDay.append(update);
            setTimeout(function(){
                update.remove();
            }, 1250);
        }
        else {
            localStorage.removeItem('11AM');
            eleven.value = ''
            currentDay.append(remove);
            setTimeout(function(){
                remove.remove();
            }, 1250);
        }}
    var key3 = localStorage.getItem('11AM');;
        eleven.value = key3;

    btn4.onclick = function() {
        var inp4 = twelve.value;        
        if (inp4) {
            localStorage.setItem('12PM',inp4)
            currentDay.append(update);
            setTimeout(function(){
                update.remove();
            }, 1250);
        }
        else {
            localStorage.removeItem('12PM');
            twelve.value = ''
            currentDay.append(remove);
            setTimeout(function(){
                remove.remove();
            }, 1250);
        }}
    var key4 = localStorage.getItem('12PM');;
        twelve.value = key4;

    btn5.onclick = function() {
        var inp5 = one.value;        
        if (inp5) {
            localStorage.setItem('1PM',inp5)
            currentDay.append(update);
            setTimeout(function(){
                update.remove();
            }, 1250);
        }
        else {
            localStorage.removeItem('1PM');
            one.value = ''
            currentDay.append(remove);
            setTimeout(function(){
                remove.remove();
            }, 1250);
        }}
    var key5 = localStorage.getItem('1PM');;
        one.value = key5;

    btn6.onclick = function() {
        var inp6 = two.value;        
        if (inp6) {
            localStorage.setItem('2PM',inp6)
            currentDay.append(update);
            setTimeout(function(){
                update.remove();
            }, 1250);
        }
        else {
            localStorage.removeItem('2PM');
            two.value = ''
            currentDay.append(remove);
            setTimeout(function(){
                remove.remove();
            }, 1250);
        }}
    var key6 = localStorage.getItem('2PM');;
        two.value = key6;

    btn7.onclick = function() {
        var inp7 = three.value;        
        if (inp7) {
            localStorage.setItem('3PM',inp7)
            currentDay.append(update);
            setTimeout(function(){
                update.remove();
            }, 1250);
        }
        else {
            localStorage.removeItem('3PM');
            three.value = ''
            currentDay.append(remove);
            setTimeout(function(){
                remove.remove();
            }, 1250);
        }}
    var key7 = localStorage.getItem('3PM');;
        three.value = key7;

    btn8.onclick = function() {
        var inp8 = four.value;        
        if (inp8) {
            localStorage.setItem('4PM',inp8)
            currentDay.append(update);
            setTimeout(function(){
                update.remove();
            }, 1250);
        }
        else {
            localStorage.removeItem('4PM');
            four.value = ''
            currentDay.append(remove);
            setTimeout(function(){
                remove.remove();
            }, 1250);
        }}
    var key8 = localStorage.getItem('4PM');;
        four.value = key8;
    
    btn9.onclick = function() {
        var inp9 = five.value;        
        if (inp9) {
            localStorage.setItem('5PM',inp9)
            currentDay.append(update);
            setTimeout(function(){
                update.remove();
            }, 1250);
        }
        else {
            localStorage.removeItem('5PM');
            five.value = ''
            currentDay.append(remove);
            setTimeout(function(){
                remove.remove();
            }, 1250);
        }}
    var key9 = localStorage.getItem('5PM');;
        five.value = key9;
}

times();

saveData();
