// 题目描述：
// 请你仅使用两个队列实现一个后入先出（LIFO）的栈，并支持普通栈的全部四种操作（push、top、pop 和 empty）。

// 实现 MyStack 类：

//     void push(int x) 将元素 x 压入栈顶。
//     int pop() 移除并返回栈顶元素。
//     int top() 返回栈顶元素。
//     boolean empty() 如果栈是空的，返回 true ；否则，返回 false 。

 

// 注意：

//     你只能使用队列的基本操作 —— 也就是 push to back、peek/pop from front、size 和 is empty 这些操作。
//     你所使用的语言也许不支持队列。 你可以使用 list （列表）或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。

 

// 示例：

// 输入：
// ["MyStack", "push", "push", "top", "pop", "empty"]
// [[], [1], [2], [], [], []]
// 输出：
// [null, null, null, 2, 2, false]

// 解释：
// MyStack myStack = new MyStack();
// myStack.push(1);
// myStack.push(2);
// myStack.top(); // 返回 2
// myStack.pop(); // 返回 2
// myStack.empty(); // 返回 False

 

// 提示：

//     1 <= x <= 9
//     最多调用100 次 push、pop、top 和 empty
//     每次调用 pop 和 top 都保证栈不为空


var MyStack = function() {
    this.queue=[]
    this._queue=[]
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    while(this.queue.length>1){
        this._queue.push(this.queue.shift())
    }
    let ans = this.queue.shift()
    while(this._queue.length){
        this.queue.push(this._queue.shift())
    }
    return ans
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.queue.slice(-1)[0]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return !this.queue.length
};