async function findMax(arr) {
    if (arr instanceof Array) {
        let max = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }
    throw new Error(`Quỳ`)
}

async function f() {
    try {
        let result = await findMax([1,3,6,9,69]);
        console.log(result);
    }
    catch (err) {
        console.log(err);
    }
}
f();