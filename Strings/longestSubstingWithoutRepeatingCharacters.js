
var lengthOfLongestSubstring = function(s) {

    const obj = {}
    let strt = 0, end = 0, res =0

    while(end<s.length){
        if(!obj[s[end]]){
            obj[s[end]] =1
        }else{
            obj[s[end]]++
        }

        while(obj[s[end]]>1){
            obj[s[strt]]--
            strt++
          
        }
        end++

        res = Math.max(res, end-strt)
    }


return res

};