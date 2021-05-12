function getarray() {
    var arr = [];
    for (var i=1; i<256; i++) {
        arr.push(i);
    }
    return arr;
}
console.log(getarray());


function evenSum() {
    var sum = 0;
    for(var i=1; i<=1000; i++) {
        if(i%2 === 0){
            sum+=i;
        }
    }
    return sum;
}
console.log(evenSum());


function oddSum(){
    var sum = 0;
    for(var i=0; i<5000; i++){
        if(i%2 !== 0){
            sum += i;
        }
    }
    return sum;
}
console.log(oddSum());


function iterateArr(arr) {
    var sum = 0;
    for(var i=0; i<arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
console.log(iterateArr([3,6,9,35,64,12,3]));


function findMax(arr){
    var max = arr[0];
    for(var i=1; i<arr.length; i++){
        if(max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax([5,78,3,9,23,98,2]));


function average(arr){
    var sum = 0;
    for(var i=0; i<arr.length; i++){
        sum = sum+arr[i];
        }
    return sum/arr.length;
}
console.log(average([3,6,12,9,45,1]));


function returnOdd() {
    var arr = [];
    for(var i=1; i<50; i++) {
        if(i%2 != 0) {
            arr.push(i);
        }
    }
    return arr;
}
console.log(returnOdd());


function greaterThan(arr, y) {
    var greater = 0;
    for(var i=0; i<arr.length; i++) {
        if(arr[i]>y){
            greater++;
        }
    }
    return greater;
}
console.log(greaterThan([6,8,13,18,29,3,15], 10));


function squared(arr) {

    for(var i=0; i<arr.length; i++) {
        arr[i] = arr[i]*arr[i];
    }
    return arr;
}
console.log(squared([1,3,4,5,7,8]));


function negToZero(arr) {
    for(var i=0; i<arr.length; i++) {
        if(arr[i]<0) {
            arr[i] = 0;
        }
    }
    return arr;
}
console.log(negToZero([4,-5,9,-13,-16,20]));


function maxMinAvg(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];
    for(var i=1; i<arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
        if(arr[i] < min) {
            min = arr[i];
        }
        sum = sum+arr[i];
    }
    var avg = sum/arr.length;
    var newArr = [max, min, avg];
    return newArr;
}
console.log(maxMinAvg([1,3,7,13,29]));


function swap(arr) {
    var temp = arr[0];
        arr[0] = arr[arr.length - 1];
        arr[arr.length-1] = temp;
    return arr
}
console.log(swap([5,7,13,6,10]))


function numString(arr) {
    for(var i=0; i<arr.length; i++) {
        if(arr[i] < 0) {
            arr[i] = "Dojo"
        }
    }
    return arr;
}
console.log(numString([3,-6,7,-1,-4,8]))