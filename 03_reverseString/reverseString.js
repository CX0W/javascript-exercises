const reverseString = function(a) {
    let rev="";
    let i=a.length-1;
    while (i>=0){
        rev=rev+a[i];
        i--;
    }
    return rev;


};

// Do not edit below this line
module.exports = reverseString;
