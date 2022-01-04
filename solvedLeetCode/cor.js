/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
	if (numRows < 2) return s;
	let result = [];
	let rowNo = 0,
		direction = 1;

	for (i = 0; i < s.length; i++) {
		result[rowNo] ? (result[rowNo] += s[i]) : (result[rowNo] = s[i]);
		rowNo += direction;
		if (rowNo > 0 && rowNo % numRows === 0) {
			rowNo = numRows - 2;
			direction = -1;
		}
		if (rowNo < 0) {
			rowNo = 1;
			direction = 1;
		}
	}

	return result.reduce((a, b) => a + b);
};
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
	result = (x + "")
		.split("")
		.reverse()
		.reduce((a, b) => (a === "0" ? b : a + b));
	result =
		result[result.length - 1] === "-" ? "-" + result.slice(0, -1) : result;

	return (+result | 0) == result ? result : 0;
};

var myAtoi = function (s) {
	s = s.trim();
	let result = "";

	const isPositive = s[0] !== "-";

	if (["-", "+"].includes(s[0])) s = s.slice(1);

	for (i = 0; i < s.length; i++) {
		if (s[i] != +s[i] || s[i] === " ") break;
		if (!result && s[i] === "0") continue;
		result += s[i];
	}

	if (!result) return 0;

	if ((+result | 0) != result) return isPositive ? 2147483647 : -2147483648;

	return isPositive ? +result : -1 * result;
};

var isPalindrome = function (x) {
	if (x < 0 || (!x % 10 && x > 9)) return false;

	let rev = 0,
		num = x;

	while (num) {
		rev = rev * 10 + (num % 10);
		num = Math.floor(num / 10);
	}

	return x === rev;
};

isPalindrome(10012);

const isMatch = function (s, p) {
	const mat = Array(s.length + 1)
		.fill()
		.map(() => Array(p.length + 1).fill(0));

	mat[0][0] = 1;

	for (let i = 1; i < mat[0].length; i++) {
		if (p[i - 1] === "*") {
			mat[0][i] = mat[0][i - 2];
		}
	}

	for (let i = 1; i < mat.length; i++) {
		for (let j = 1; j < mat[0].length; j++) {
			if (p[j - 1] == "." || p[j - 1] == s[i - 1]) {
				mat[i][j] = mat[i - 1][j - 1];
			} else if (p[j - 1] == "*") {
				mat[i][j] = mat[i][j - 2];
				if (p[j - 2] == "." || p[j - 2] == s[i - 1]) {
					mat[i][j] = mat[i][j] | mat[i - 1][j];
				}
			}
		}
	}
	return !!mat[s.length][p.length];
};

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
	result = 0;
	left = 0;
	right = height.length - 1;
	while (left < right) {
		result = Math.max(
			result,
			Math.min(height[left], height[right]) * (right - left)
		);
		if (height[left] < height[right]) left++;
		else right--;
	}
	return result;
};

/**
 * @param {number} num
 * @return {string}
 */
const conversionTable = [
	{ symbol: "M", value: 1000 },
	{ symbol: "CM", value: 900 },
	{ symbol: "D", value: 500 },
	{ symbol: "CD", value: 400 },
	{ symbol: "C", value: 100 },
	{ symbol: "XC", value: 90 },
	{ symbol: "L", value: 50 },
	{ symbol: "XL", value: 40 },
	{ symbol: "X", value: 10 },
	{ symbol: "IX", value: 9 },
	{ symbol: "V", value: 5 },
	{ symbol: "IV", value: 4 },
	{ symbol: "I", value: 1 },
];

var intToRoman = function (num) {
	roman = "";
	i = 0;
	while (i < conversionTable.length) {
		if (num >= conversionTable[i].value) {
			roman += conversionTable[i].symbol;
			num -= conversionTable[i].value;
		} else i++;
	}
	return roman;
};

/**
 * @param {string} s
 * @return {number}
 */
const conversionTable1 = [
	{ symbol: "M", value: 1000 },
	{ symbol: "CM", value: 900 },
	{ symbol: "D", value: 500 },
	{ symbol: "CD", value: 400 },
	{ symbol: "C", value: 100 },
	{ symbol: "XC", value: 90 },
	{ symbol: "L", value: 50 },
	{ symbol: "XL", value: 40 },
	{ symbol: "X", value: 10 },
	{ symbol: "IX", value: 9 },
	{ symbol: "V", value: 5 },
	{ symbol: "IV", value: 4 },
	{ symbol: "I", value: 1 },
];

var romanToInt = function (s) {
	result = 0;
	i = 0;
	j = 0;
	length = 0;
	while (i < s.length && j < conversionTable.length) {
		length = conversionTable[j].symbol.length;
		if (s.slice(i, i + length) === conversionTable[j].symbol) {
			result += conversionTable[j].value;
			i += length;
		} else j++;
	}
	return result;
};

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	strs.sort();

	let result = "",
		isCommon = true,
		word = strs[0],
		i = 0;

	while (isCommon && i < word.length) {
		for (j = 1; j < strs.length; j++)
			if (strs[j][i] !== word[i]) {
				isCommon = false;
				break;
			}
		if (isCommon) result += word[i];
		i++;
	}
	return result;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
	dif = null;
	len = nums.length;
	result = 0;
	for (i = 0; i < len - 2; i++) {
		for (j = i + 1; j < len - 1; j++) {
			for (k = j + 1; k < len; k++) {
				sum = nums[i] + nums[j] + nums[k];
				newDif = Math.abs(target - sum);
				if (dif === null || newDif < dif) {
					dif = newDif;
					result = sum;
				}
			}
		}
	}
	return result;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
	let dif = null,
		len = nums.length,
		result = 0;
	for (i = 0; i < len - 2; i++) {
		for (j = i + 1; j < len - 1; j++) {
			for (k = j + 1; k < len; k++) {
				sum = nums[i] + nums[j] + nums[k];
				newDif = Math.abs(target - sum);
				if (dif === null || newDif < dif) {
					dif = newDif;
					result = sum;
				}
			}
		}
	}
	return result;
};
