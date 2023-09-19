const sumAll = function(a,b) {
    if (a<0 || b<0){
        return "ERROR";
    }
    if (typeof(a)!='number' || typeof(b)!='number'){
        return "ERROR";
    }
    let sum=0;
    if (a<b){
        while (a<=b){
            sum=sum+a;
            a++;
        }
    }
    else{
        while (b<=a){
            sum=sum+b;
            b++;
        }

    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
