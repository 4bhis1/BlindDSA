
var climbStairs = function (n) {

    const num = Array(n)

    const _func = (n) => {
        if (n <= 2) return n
        else if(num[n]) return num[n]

        num[n] =  _func(n - 1) + _func(n - 2)
        return num[n]
    }


    return _func(n)

};