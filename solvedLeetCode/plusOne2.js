/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function (digits) {
    for (let i=digits.length - 1;i>-1;i--){
        digits[i] = (digits[i] + 1) % 10;
        if (digits[i]) break;
    }
	if (!digits[0]) digits.unshift(1);
    
	return digits;
};
