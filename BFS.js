// get shortest path to a node 
class BFS {
    constructor() {
        this.queue = []; 
        this.visited = new Set(); 
    }
    getShortestDist(start, target) {
        this.queue.push([start, 0]);  // push [start val, distance] 
        this.visited.add(start); 

        for (const [val, dist] of this.queue) {
            if (val === target) return dist; 
            var neighbors = getNeighbors(val); 
            for (const [val, dist] of neighbors) {
                if (!this.visited.has(val)) {
                    this.queue.push([val, dist + 1])
                    this.visited.add(val); 
                }
            }
        }
        return -1; 
    }

    getNeighbors(val) {
        // implement based on problem
    }
}