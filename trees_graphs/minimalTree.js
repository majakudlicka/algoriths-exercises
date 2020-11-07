class TreeNode {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}
/**
 * As the list is already sorted the best way to create a balanced tree is by
 * adding the middle node (parent) then the children. The algorithm is basically
 * involves adding the middle element of which split of the array so that the
 * parent is added before the left and right children of each subtree.
 */
function minTree(arr) {
	if (!arr.length) return null;
	const midElIndex = Math.floor(arr.length/2);
	const mid = new TreeNode(arr[midElIndex]);
	mid.left = minTree(arr.slice(0, midElIndex));
	mid.right = minTree(arr.slice(midElIndex+1));
	return mid;
}

const root1 = minTree([1,2,3,4,5,6,7,8,9,10]);
const root2 = minTree([1,20,35,79,100,120,124,125,900,10000]);

console.log('root1 ', root1);
console.log('root2 ', root2);
