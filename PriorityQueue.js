// Priority Queue implemented in JavaScript using a max heap 
// index of parent: Math.ceil(i/2 - 1)
// left child of index: 2*i + 1
// right child of index: 2*i + 2
class PQ {
    constructor(comparator = (a, b) => b - a) {
        this.array = []; 
        this.comparator = (l1, l2) => comparator(this.array[l1], this.array[l2]); 
    }

    // push element to end of array and bubble up
    enqueue(element) {
        this.array.push(element); 
        this.bubbleUp(); 
    }

    // switch with first (max) element
    // pop max element and return
    // bubble down first element 
    dequeue() {
        this.swap(0, this.array.length - 1); 
        var maxValue = this.array.pop(); 
        this.bubbleDown(); 
        return maxValue; 
    }

    swap(i1, i2) {
        // swap values at given indices in array
        var temp = this.array[i1]; 
        this.array[i1] = this.array[i2];
        this.array[i2] = temp; 
    }

    bubbleUp() {
        var i = this.array.length - 1; 
        const parent = (i) => Math.ceil(i/2 - 1); // const because calculation does not change 
        // while parent >= 0 and curr > parent, swap curr and parent 
        while (parent(i) >= 0 && this.comparator(parent(i), i) > 0) {
            this.swap(parent(i), i); 
            i = parent(i); 
        }
    }

    bubbleDown() {
        var i = 0; 
        const getGreaterChild = (i) => this.array[2*i + 1] > this.array[2*i + 2] ? 2*i + 1 : 2*i + 2; 
        // while curr < this.array length and curr is less than greater child, swap curr and greater child 
        while (getGreaterChild(i) < this.array.length && this.comparator(i, getGreaterChild(i)) > 0) {
            this.swap(i, getGreaterChild(i)); 
            i = getGreaterChild(i); 
        }
    }
}
console.log('running'); 
var pq = new PQ(); 
pq.enqueue(5); 
pq.enqueue(7); 
pq.enqueue(4); 
pq.dequeue(7); 
pq.dequeue(4); 
console.log(pq); 