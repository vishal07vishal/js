//QUe1:-Find the Product.

// const Find_Prod = (Array,N)=>{
//   let prodeuct = 1
//     Array.forEach(function cb(N){
//         prodeuct=prodeuct*N;
//     });
//     return prodeuct;
// };
//console.log(Find_Prod([1,2,3,4,5],5));


//Que2:-Find the Sum.

//  const Find_Sum = (Array,N)=>{
//     let add=0;
//     Array.forEach(function cb(N){
//         add=add+N;
//     })
//     return add;
//  };
//  console.log(Find_Sum([1,2,3,4,5],5));


//Que3:-Count Occurrences

// const findCount = (N, K, Arr) => 
// {
//     let count=0;
//     for(let i=0 ; i<N ; i++ ){
//       if(Arr[i] == K){
//          count=count+1;
//       } 
//      }
//      return count;

// };


//Que4:-Even Odd

// const findEvenOdd = (N, Arr) => 
// {
//     let A = [2]
//     let even = 0
//     let odd = 0
//     for(let i = 0; i < N; i++){
//       if(Arr[i] % 2 === 0){
//         even+= Arr[i]
//       }
//       else{
//         odd+= Arr[i]
//       }
//       }
    
//     A[0] = even
//     A[1] = odd
//     return A;
// };
 
// let arr= Array(1,2,3,4,5,6,7);
// let n=arr.length;
// console.log(findEvenOdd(n,arr));


//Que5:-find whether the number i present or not

// const Find_Num = (array,N,M) => 
// {
//    let i=0;
//   while(i<=N){
    
//     if(array[i]==M){
//       return "YES";
//     }
//   i++;
//   }
//   return "NO";
// };


//Que6:-Higher Age

// const highAge = (N, Arr) => 
// {
//       let arr = []
//   let j = 0
//     for( i = 0; i < N; i++){
//       if(Arr[i]>=18){
//         arr[j] = Arr[i]
//         j = j + 1;
        
//     }
//     }
//     return arr;
// };


//Que7:-Icrement the Array Elements

// const Inc_Arr = (array,N) => 
// {
//   array.forEach(function(ele){
//        console.log(ele + 1);
//     }) ; 

// };
 

// Que8:-Pass or Fail.

// const isAllPass = (N, Arr) => 
// {
//    let count=0;
//   for(let i=0;i<N;i++){
//     if(Arr[i]>=32){
//       count=count+1;
//     }
//     else{
//       break;
//     }
//   }
//   if(count===N){
//     return "YES";
//   }
//   return "NO";
// };


//Que9:-Unique Color Shirt


// function Unique_Shirts (arr,N) {
  
//   let clothes="";
//     let count=0;
//    for(let i=0;i<N;i++){
//        let sum=0;
//        for(let j=0;j<N;j++){
//        if(arr[i]==arr[j]){
//        sum++;
//       }
//     }
//       if(sum==1){
//          clothes=clothes+arr[i];
//          count++;
//     }
//  }
//  return count;
 
// };