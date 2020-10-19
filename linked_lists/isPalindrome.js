const LinkedList = require('./util/linkedList');

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next
    }
}

function reverse(list) {
    let current = list.head;
    const reversed = new LinkedList();
    while (current) {
        // you need to clone the node in order to reverse
        let node = new Node(current.data);
        node.next = reversed.head;
        reversed.head = node;
        current = current.next;
    }
    return reversed;
}
// Check whether list is a palindrome
// Reverse a list and then compare elements to each other
function isPalindrome(list) {
    if (!list.head) return false;
    const reversed = reverse(list);
    let node = list.head;
    let reversedListNode = reversed.head;
    // We only actually need to compare first half
    while(node) {
        if (node.data !== reversedListNode.data) {
            return false;
        }
        node = node.next;
        reversedListNode = reversedListNode.next;
    }
    return true;
}

const list = new LinkedList();
for (let i = 1; i <= 10; i++) {
    list.insertLast(i);
}
// false
console.log(isPalindrome(list));

const list1 = new LinkedList();
for (let elem of [1,2,5,2,1]) {
    list1.insertLast(elem);
}
// true
console.log(isPalindrome(list1));

// Use stack. Move first half of the list onto a stack and then compare it to the other half of the list
// (Elements coming off the stack will be in reversed order). If we don't know the length, can calculate it
// Using two pointers, slow & fast
function isPalindrome2(list) {
    if (!list.head) return false;
    if (!list.head.next) return true;
    let slow = list.head;
    let fast = list.head;
    const stack = [];

    while (fast && fast.next) {
        stack.push(slow.data);
        slow = slow.next;
        fast = fast.next.next;
    }

    // Move pointer forward if there is uneven number of elements
    if (fast) slow = slow.next;

    while (slow) {
        const current = stack.pop();
        if (current !== slow.data) return false;
        slow = slow.next;
    }

    return true;

}

const list2 = new LinkedList();
for (let i = 1; i <= 10; i++) {
    list2.insertLast(i);
}
// false
console.log(isPalindrome2(list));

const list3 = new LinkedList();
for (let elem of [1,2,5,2,1]) {
    list3.insertLast(elem);
}
// true
console.log(isPalindrome2(list1));

//
function isPalindrome3(list) {
 if (!list.head) return true;
 const { result } = isPalindromeRecursive(list.head, list.size());
 return result;
}

function isPalindromeRecursive(head, length) {
    if (length <= 0) return { node: head, result: true } // even number of nodes
    if (length === 1) return  { node: head.next, result: true } // odd number of nodes
    const { result, node } = isPalindromeRecursive(head.next, length - 2);
    if (result === false || head.data !== node.data) return { node: null, result: false };
    return { node: node.next, result: true };
}

const list4 = new LinkedList();
for (let i = 1; i <= 10; i++) {
    list4.insertLast(i);
}
// false
console.log(isPalindrome3(list));

const list5 = new LinkedList();
for (let elem of [2,1,5,1,2]) {
    list5.insertLast(elem);
}
// true
console.log(isPalindrome3(list1));
