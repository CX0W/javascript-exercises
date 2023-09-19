const removeFromArray = function(a,...b) {
    for (const arg of b){
        const index=a.indexOf(arg);
        if (index>-1){
            a.splice(index,1);
        }
    }
    return a;
};

// Do not edit below this line
module.exports = removeFromArray;
