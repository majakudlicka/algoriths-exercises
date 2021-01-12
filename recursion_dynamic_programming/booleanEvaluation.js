/**
 * Evaluates in how many ways expression can be paranthesized to evaluate to the desired result
 * @param expression
 * @param expectedRes
 * @returns {number}
 */
function countEval(expression, expectedRes) {
	if (expression.length === 0) return 0;
	if (expression.length === 1) {
		return Boolean(Number(expression)) === expectedRes ? 1 : 0;
	}
	let ways = 0;
	for (let i = 1; i < expression.length; i+=2) {
		const operator = expression.charAt(i);
		const left = expression.substring(0, i);
		const right = expression.substring(i+1);

		const leftTrue = countEval(left, true);
		const leftFalse = countEval(left, false);
		const rightTrue = countEval(right, true);
		const rightFalse = countEval(right, false);

		const allWays = (leftTrue + leftFalse) * (rightTrue + rightFalse);

		let totalTrue = 0;

		if (operator === '&') {
			totalTrue = rightTrue * leftTrue;
		} else if (operator === '^') {
			totalTrue = leftTrue * rightFalse + leftFalse * rightTrue;
		} else if (operator === '|') {
			totalTrue = leftTrue * rightTrue + leftTrue * rightFalse + leftFalse * rightTrue;
		}

		ways += expectedRes ? totalTrue : allWays - totalTrue;
	}

	return ways;

}

const example1 = countEval('1^0|0|1', false);
const example2 = countEval('0&0&0&1^1|0', true);

console.log({ example1 });
console.log({ example2 });
