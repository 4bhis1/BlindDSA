/* 

  const arrayLR = [], arrayRL = []
    let smallest =Number.MAX_VALUE, largest = -1
    for (let i = 0; i < prices.length; i++) {
        smallest = Math.min(smallest, prices[i])
        arrayLR.push(smallest)
        largest = Math.max(largest, prices[prices.length - i - 1])
        arrayRL.unshift(largest)
    }
    let result = 0
    for(let i=0;i<prices.length;i++){
        result = Math.max(result,arrayRL[i]-arrayLR[i] )
    }
    return result


 */




var maxProfit = function (prices) {

    let smallest = prices[0]
    let maxResult = 0

    for (let i = 0; i < prices.length; i++) {
        smallest = Math.min(prices[i], smallest)
        maxResult = Math.max(maxResult, prices[i] - smallest)
    }

    return maxResult
};
