const palindromes = function (s) {
    str=getStringClean(s);
    console.log(str);
    let i=0;
    let j=str.length-1;
    while (i<j){
        if (str[i]===str[j]){
            i++;
            j--;
        }
        else{
            return false;
        }
    }
    return true;

};
function getStringClean(s){
    clean="";
    for (let i=0;i<s.length;i++){
        if (s[i]===" " || s[i]==="!" || s[i]==="," || s[i]==="."){
            continue;
        }
        clean=clean+s[i].toLowerCase();
    }
    return clean;
}

// Do not edit below this line
module.exports = palindromes;
