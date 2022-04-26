class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  insert(index, value) {
    const newNode = {
      value: value,
      next: null,
    };
    let leader = this.findIndex(index - 1);
    newNode.next = leader.next;
    leader.next = newNode;
    this.length++;
    return this;
  }
  findIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    let leader = this.findIndex(index - 1);
    const deletedValue = leader.next;
    leader.next = deletedValue.next;
    this.length--;
    return this;
  }
  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head; // value 1
    this.tail = this.head; // setting this.tail equal to 1
    let second = first.next; // value 2
    while (second) {
      // while there is a second value to compare the first one with...
      let temp = second.next; // value 3...everytime it loops, it becomes a new value
      second.next = first; // turns the next value of 2 into 1 so it switches from 1 -> 2 to 2 -> 1
      first = second; // the value of "first" is now switched to the value of "second" which is first.next or the value after the first value
      second = temp; // the variable "second" is now 3
    }
    this.tail.next = null; // this.tail is equal to 1 in this case because above, we say this.tail = this.head which is 1. so we are setting next of 1 to null
    this.head = first; // set the head to the last value in the linked list
    return this;
  }
}

// [ 1, 2, 3, 4, 5 ]

const reverse = new LinkedList(1);
reverse.append(2);
reverse.append(3);
reverse.append(4);
reverse.append(5);
// console.log(reverse.remove(1));
console.log(reverse.reverse());
