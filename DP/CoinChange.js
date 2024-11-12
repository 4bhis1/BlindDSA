/* 
var coinChange = function (coins, amount) {

    let minCount = Number.MAX_VALUE
  
    const func = (index, numberOfCoins, amount) => {
        if (index >= coins.length || amount < 0) {
            return
        } else if (amount === 0) {
            minCount = Math.min(minCount, numberOfCoins)
            return
        }

        func(index, numberOfCoins + 1, amount - coins[index])
        func(index + 1, numberOfCoins, amount)
    }



    func(0, 0, amount)

    return minCount === Number.MAX_VALUE ? -1 : minCount
    
};

*/

var coinChange = function (coins, amount) {
    const dp = Array(amount + 1).fill(-1)

    const func = (amount) => {
        if (amount === 0) {
            return 0
        }

        if (amount < 0) {
            return Number.MAX_VALUE
        }

        if(dp[amount]!==-1){
            return dp[amount]
        }

        // here minCount will get the possible min value at particular amount from coin array
        let minCount = Number.MAX_VALUE

        for (let coin of coins) {
            let result = func(amount - coin)
            if (result !== Number.MAX_VALUE) {
                minCount = Math.min(minCount, result + 1)
            }
        }

        dp[amount] = minCount
        return dp[amount]
    }


    func(amount)

    return dp[amount]
};

console.log(coinChange([2],3))