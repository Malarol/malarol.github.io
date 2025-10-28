let tilfeldigeTall = [];

for (let i=1; i <= 200; i++) {
    let tilfeldigtall = Math.floor(Math.random() * 100);
    tilfeldigeTall.push(tilfeldigtall);
}
console.log(tilfeldigeTall);

let høgtall = 0;
let lavtall = 100;
let fire = 0;
let fem = 0;
let sum = 0;

for (let i=0; i < 200; i++) {
    let tall = tilfeldigeTall[i];
    if (høgtall<tall) {
        høgtall = tall;
    }
    if (lavtall>tall) {
        lavtall = tall;
    }
    if (tall == 4) {
        fire += 1;
    }
    if (tall >= 5) {
        fem += 1;
    }
    sum += tilfeldigeTall[i];
    
}
console.log(høgtall);
console.log(lavtall);
console.log(fire);
console.log(sum);
console.log(sum/tilfeldigeTall.length);
console.log(fem);
