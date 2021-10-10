// Faster method of implementing PQ 
// Larger runtime because you have to sort the PQ on each insert 
class PQ {
    constructor(comparator = (a, b) => b - a) {
        this.array = []; 
        this.comparator = comparator; 
    }

    enqueue(element) {
        this.array.push(element); 
        // sort array
        this.array.sort(this.comparator); 
    }

    dequeue() {
        var maxElement = this.array.shift(); 
        return maxElement; // removes greatest/first element from array 
    }
}

console.log('running'); 
var pq = new PQ(); 
pq.enqueue(5); 
pq.enqueue(4); 
pq.enqueue(7); 
pq.dequeue(); 
console.log(pq); // should print , 5