function hasPath(maze, start, destination) {
    var queue = []; 
    var visited = new Set(); 

    queue.push(start); 
    visited.add(start); 

    var directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]; // up, down, right, left

    for (const [x, y] of queue) {
        // if current equals destination and is not a wall 
        if (x === destination[0] && y === destination[1] && maze[x][y] === 0) return true; 
        // for each direction get farthest pos before you hit a wall
        // if pos has not been visited, mark as visited and add to queue 
        for (var direction of directions) {
            let currx = x; 
            let curry = y; 
            while (maze[currx + direction[0]][curry + direction[1]] !== 1) {
                currx += direction[0]; 
                curry += direction[1]; 
            }
            if (!visited.has([currx, curry])) {
                visited.add([currx, curry]); 
                queue.push([currx, curry]); 
            }
        }
    }
    return false; 
}