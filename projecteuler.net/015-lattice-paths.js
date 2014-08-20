// http://repl.it/XH3

// PROBLEM //

/*
Starting in the top left corner of a 2×2 grid, and only being able to move to
the right and down, there are exactly 6 routes to the bottom right corner.

How many such routes are there through a 20×20 grid?
*/

// HELPERS //

Array.fill=function(s,v){var a=[],i=0;while(i++<s)a.push(v);return a};

// ANSWER //

function calculatePaths(width, height) {
    var paths = Array.fill(height + 1, 0)
        .map(function(){ return Array.fill(width + 1, 0); });

    for (var x = 0; x <= width; x++)
        for (var y = 0; y <= height; y++)
            paths[x][y] = (!x || !y) ? 1 : paths[x-1][y] + paths[x][y-1];

    return paths[width][height];
}

calculatePaths(20, 20);

// 137846528820
