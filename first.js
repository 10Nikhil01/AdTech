var nums = [1,3,6,7]
        let target = 2

        
var searchInsert = (nums, target) => {
    let left = 0;
    let right = nums.length;

    while (left < right) {
        const middle = Math.floor((left + right) / 2);
        if (nums[middle] < target) {
            left = middle + 1;
        } else {
            right = middle;
        }
    }

    return left;
};
document.write("Insert Target at index : "+searchInsert(nums,target))