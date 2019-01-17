const quickSort = (nums) =>{
    if(nums.length <= 1) return nums;
    const pivotPoint = nums[nums.length -1];

    let a = [];
    let b = [];

    for(let i = 0; i < nums.length -1; i++) {
        if(nums[i] < pivotPoint) {
            a.push(nums[i]);
        } else {
            b.push(nums[i]);
        }
    }
//using spread operator ES6
//return [...quickSort(a), pivotPoint, ...quickSort(b)];

return quickSort(a).concat(pivotPoint, quickSort(b));

};