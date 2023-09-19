const repeatString = function(a,b) {

    let res="";
    if (b===-1){
        return  `ERROR`;
    }
    while (b>0){
        res=res+a;
        b--;
    }
    return `${res}`;

};

// Do not edit below this line
module.exports = repeatString;
