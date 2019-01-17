//Big O of merge sort is o(n log n)
//NOT everything has to be compared to everything e.g bubble sort


const mergeSort = (nums) => {
    if(nums.length < 2 ) {
        return nums;
    }
    const length = nums.length;
    const middle = Math.floor(length / 2);
    const a = nums.slice(0, middle);
    const b = nums.slice(middle, length);
    const aSorted = mergeSort(a);
    const bSorted = mergeSort(b);
 
    return mergeTogether(aSorted, bSorted);
}

const mergeTogether = (a, b) => {
    const results = [];
    // continue loop while a.length <=0 && b.length <= 0 
    while(a.length && b.length) {
        if(a[0] <= b[0]) {
            results.push(a.shift());
        } else {
            results.push(b.shift());
        }
    }

    // while(a.length) {
    //     results.push(a.shift());
    // }

    // while(b.length) {
    //     results.push(b.shift());
    // }

    // return results;

    //the above show programatically same as below
    return results.concat(a, b);
};

