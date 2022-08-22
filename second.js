var nnums = [2,3,1,1,4]

var jump = function(nnums) {
    var step = 0;
    var e = 0;
    var max = 0;
    for(var i=0; i<nnums.length-1; i++) {
        max = Math.max(max, i+nnums[i]);
        if( i == e ) {
            step++;
            e = max;
        } 
    }
    return step;
};
console.log("Steps to reach end : "+ jump(nnums));