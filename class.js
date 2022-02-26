// class er name sadharonoto upper case dia suru hoi
class Support {
    name;
    designation = 'Support Web Dev';
    address = 'BD'
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    startSession(){
        console.log(this.name, 'start a support session');
    }
}

const aamir = new Support('Amir khan', 'BD');
const salman = new Support('Solaiman khan', 'Dubai');
const sharuk = new Support('SRK khan', 'Dubai');
const akshay = new Support('Akshay Kumar', 'Dubai');
aamir.startSession();
salman.startSession();
sharuk.startSession();
akshay.startSession();
console.log(aamir, salman, sharuk, akshay);
// console.log(salman);