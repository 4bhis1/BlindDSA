var productExceptSelf = function (nums) {
    const LHS = [], RHS = [], result = []
    let lhs = 1, rhs = 1
    for (let i = 0; i < nums.length; i++) {
        lhs = lhs * nums[i]
        LHS.push(lhs)
        rhs = rhs * nums[nums.length - 1 - i]
        RHS.unshift(rhs)
    }
    result.push(RHS[1])
    for (let i = 1; i < nums.length - 1; i++) {
        result.push(LHS[i - 1] * RHS[i + 1])
    }
    result.push(LHS[nums.length - 2])
    return result
};