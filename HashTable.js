class HashTable {
    constructor(size) {
        this.buckets = []; // each bucket/index holds an array of key, value pairs 
        this.size = size; 
    }
    calculateHash(key) {
        return key.toString().length % this.size; // returns index between 0 and array.length - 1
    }

    add(key, value) {
        // calculate hash
        var index = this.calculateHash(key); 
        if (!this.buckets[index]) {
            this.buckets[index] = []; 
        }
        this.buckets[index].push([key, value]); 
        return index; 
    }

    search(key) {
        // calculate hash
        var index = this.calculateHash(key); 
        if (!this.buckets[index]) {
            return -1; 
        }
        var entries = this.buckets[index]; 
        entries.forEach((entry) => {
            if (entry[0] === key) {
                return entry[1]; 
            }
        })
        return -1; 
    }

}