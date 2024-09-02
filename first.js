// console.log("hello world")
// let a = 10;
// b = 15;
// console.log(a+b)

// var a =1
// var b =2 
// var a =6
// console.log(a)      [in case of let it will give u error but in var it will give second value]



// let a = 10
// let b = 12
// if (a<b){
//     console.log(a)

// }



// let string ="vanshika"
// console.log(string);
// for (i=0; i<=string.length-1;i++){
//     console.log(string)
// }




// let string ="vanshika"
// for (i=0; i<=string.length-1;i++){
//     console.log(string[i])
// }



// for(let i=0; i<=5; i++) {
//     console.log(i)
// }


// let a =[1,2,3];
// let b =[4,5,6];
// console.log(a+b);        output- (1,2,34,5,6)


// function sum(a=5,b=7){
//     return a+b;
// };
// console.log(sum(undefined,20));   



// let a;
// console.log(a);   output-undefined


// {
//     let a = 5;
//     console.log(a);
// }
// {
//     let a = 10;
//     console.log(a)
// }



// let x = BigInt("123");
// console.log(x);     output-123n



// a = 123;
// b = 1;
// console.log(a+b);


// a = "abc";
// b = "5";
// console.log(a+b);



// a = a+1 is same as a++
// a = a-1 is same as a--
// a =  a+1 same as a+=1




// && --- and operator
// || ---or operator
// ! ----not operator



// odd even

// let num = 158
// if (num%2 ===0){
//     console.log("even");
// } else {
//     console.log("odd");
// }



// let age = 25
// let  result = age>=18 ? "adult" : "not adult";
// console.log(result);


// let y = 10;
// let z = (y=5);
// console.log(y,z);    output-----5 5


// var a = 10;
// (function(){
//     console.log(a);
//     var a = 20;
//     console.log(a);
// }) ();                  output------not understood



// console.log(2+false);
// var a;
// console.log(a+2);    output ----- NaN


// var a ="5";
// var b = 10;
// console.log(+a+b);     output----15

// let a = [1,2,3];
// let b = [1,2,3];
// console.log(a==b);
// console.log(a===b);     
//output is always false when we compare two objects                                      //false
                        





  //  (finding length)                                
// let arr =[1,3,2,4,5,8,7];
// for(i=0;arr[i] != undefined; i++){

// }

 
//   i=0;
// while(arr[i]= undefined){
//     len = len +1 ;i++
// }
// // console.log(len);
// for(i=1; i<len+1; i++){

// }
// for (j=0; j= len-1; j++){

// }
// arr [i]==arr[j]




// let arr = [1,3,2,4,5,7];
// arr.sort();
// // console.log(arr);
// for (i=2;arr[i]-arr[i-1]<2;i++){

// console.log(arr[i]);


// }










// let arr = [0,0,1,0,1,0,1];
// for (i=1;arr[i]<=arr[i+1];i++){
// console.log(arr[i])
// }
// for ()
// var len = arr.length;
// var count = 0;
// for(i=0;i<len;i++){
//     if (arr[i]==0){
//         count++
//     }
// }
// // console.log(count)

// for(i=0;1<count;i++){
//     count.push(0);
// }








// let arr = [0,0,2,1,1,2,0,0];
// var len = arr.length
// count=0;
// for(i=0; i<len;i++){
//     if (arr[i]==0){
//         count++;
//     }
// } console.log (count);
// for(i=0;i<len;i++){
//     if (arr[i]==1){
//         count++
//     }
// } console.log(count)







// findind lenght of array(without inbuilt function)

// let  arr = [1,3,2,4,5,8,7];
// let count = 0;
// for (i=0; arr[i]!=undefined;i++){
//   count++;
// } console.log(count);




//finding missing no. in array

// let arr = [1,3,2,4,5,8,7];
// for (i=1; i<=8;i++){
// if(arr.includes(i))
//   {}
// else
//  console.log(i)
// }


//(for sort)
// let arr = [1,3,2,4,5,8,7];
// let temp = 0;
// for(j=0;j<arr.length;j++){
//   if (arr[j]>arr[j+1]){
//     temp = arr[j+1]
//     arr[j+1]=arr[j]
//     arr[j]=temp
//   }
// }  console.log(arr);