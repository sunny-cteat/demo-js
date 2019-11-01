//lv1-1  一个可把字符串每个单词首字母变为大写的函数
let str = " hello world" ;
let a= str.split(" ") ;
for(let i = 0; i < a.length; i++) {
    var str1=a[i].slice(0,1).toLocaleUpperCase()
    var str1=a[i].substring(0,1).toUpperCase();
    var str2=a[i].slice(1).toLocaleLowerCase();
    var str2=a[i].substring(1).toLocaleLowerCase();
    a[i] = str1 + str2;
}
console.log(a.join('')) ;
//lv1-2  一个对传入的数组进行冒泡排序的函数
var arr = [3, 4, 1,8,7,5,9, 2];
function bubbleSort (arr) {
  var max = arr.length - 1;
  for (var j = 0; j < max; j++) {
    var done = true;
    for (var i = 0; i < max - j; i++) {
      if (arr[i] > arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        done = false;
      }
    }
    if (done) {
      break;
    }
  }
  return arr;
}
console.log(bubbleSort(arr));
//lv2  一个将传入的数组展平为一堆数组的函数
var _shuzu = [ [1,2] , 3, [4 ,[5,[6]] , 7] ];
var new_shuzu = _shuzu.toString().split(',');
console.log(new_shuzu);