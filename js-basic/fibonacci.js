

// console.log(fibo);

/* function fobonacci(loop) {
    const fibo = [0,1];

    for(let i = 2; i <= loop; i++) {
        //nth = (n-1)th + (n-2)th;
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}

const myFibo = fobonacci(20);

console.log(myFibo); */

function fobonacci(loop) {
    if(typeof loop != 'number') {
        return 'Please Give A Number';
    } 
    if(loop < 2) {
        return 'Please Enter A Positive Number Greater than 1';
    }
    const fibo = [0,1];

    for(let i = 2; i <= loop; i++) {
        //nth = (n-1)th + (n-2)th;
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}

const myFibo = fobonacci(1);

function add(a, b){
    return a + b;
  }
  console.log(add("adam" + "eve"))

  Math.random