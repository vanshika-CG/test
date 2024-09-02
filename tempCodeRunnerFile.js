let temp = 0;
for(j=0;j<arr.length;j++){
  if (arr[j]>arr[j+1]){
    temp = arr[j+1]
    arr[j+1]=arr[j]
    arr[j]=temp
  }
}  console.log(arr);