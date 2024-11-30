
var intToRoman = function (num) {

    const roman = ['M','CM', 'D','CD', 'C','XC', 'L','XL', 'X','IX', 'V','IV' ,'I']
    const numArray = [1000,900, 500,400, 100,90, 50, 40,10,9, 5,4, 1]

    let rmnStr = ''


    for (let i = 0; i < numArray.length; i++) {
        while (num >= numArray[i]) {
            rmnStr += roman[i]
            num = num - numArray[i]
        }
    }


    return rmnStr
};



/*

*/