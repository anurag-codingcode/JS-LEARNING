// filter

// let a1=[4,6,2,9,10,3,84] // filter out numbers less than 5
// let b1=a1.filter((i)=>{return i<5})
// console.log(b1)

// a1=["anurag","rounak","shubham"] //find string with occurence of an alphabet
// let toFind='r'
// b1=a1.filter((i)=>{return i.includes(toFind)})
// console.log(b1)
// a1=[5,7,9,2] // to check if the array includes a certain element
// toFind=[9,10]
// b1=a1.filter((i)=>{return toFind.includes(i)})
// console.log(b1)

// a1=[5,7,9,2,10] // to check for even numbers
// b1=a1.filter((i)=>{return i%2==0})
// console.log(b1)

// a1=[{ // implementing filteration on object
//     name:"ron",
//     marks:90
// },{
//     name:'dio',
//     marks:67
// }]
// b1=a1.filter((i)=>{return i.marks>80})
// console.log(b1)




//map

// let a2 = [3, 5, 6, 8] // find the exponent of every element in array
// let b2 = a2.map((i) => { return i ** 2 })
// console.log(b2)


// a2 = ['Anurag', 'Akhilesh'] // concatination of string in array
// b2 = a2.map((i) => { return i + " Engineer" })
// console.log(b2)


// a2 = [ // removing a particular element in an object
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' }
// ];
// b2=a2.map((i)=>{return i.name})
// console.log(b2)


// a2 = ['1', '2', '3']; // converting every string element to an integer
// b2 = a2.map((i)=> parseInt(i));
// console.log(b2)

// const arr1= [{ id: 1, value: 10 }, { id: 2, value: 20 }]; // combining two array
// const arr2=[{ id: 1, name: 'One' }, { id: 2, name: 'Two' }];
// var combinedArr=arr1.map((item)=> ({...item,...arr2.find(i=>i.id===item.id)}))
// console.log(combinedArr)




//reduce

// let x=0 // calculating the sum of every element
// let a2 = [3, 5, 6, 8]
// const c=a2.reduce((x,i)=>{return x+i})
// console.log(c)

// const words= ['The', 'quick', 'brown', 'fox']; // concatination words to make sentence
// const sentence=words.reduce((accumlator,word)=>{
//     return accumlator+" "+word
// },"")
// console.log(sentence)

// const nestedArray = [[1, 2], [3, 4], [5, 6]]; // making a nested array to a single array 
// temp=[]
// const combinedArr=nestedArray.reduce((temp,currentArr)=>{return temp.concat(currentArr)})
// console.log(combinedArr)

// const fruits = ['apple', 'banana', 'orange', 'apple', 'orange']; 
// // find the occurrences of the string i array
// const fruitCount=fruits.reduce((accumlate,fruit)=>{
//     accumlate[fruit]=(accumlate[fruit]||0)+1
//     return accumlate
// },{})
// console.log(fruitCount)


// const items = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// // getting unique elements in an array
// const uniqueItems=items.reduce((accumlator,item)=>{
//     return accumlator.includes(item)?accumlator:[item,...accumlator]
// },[])
// console.log(uniqueItems)





// for each

// const fruits = ["apple", "orange", "cherry"]; //logging using foreach
// fruits.forEach((e,i)=>{
//     console.log("index is ",i,"and element is",e)
// })

// let sum=0
// let numbers = [1, 2, 3, 4, 5];// calculating sum using forEach
// numbers.forEach((num)=>sum+=num)
// console.log(sum)


// let foundElement;// finding elements
// fruits.forEach(fruit => {
//   if (fruit === 'apple') {
//     foundElement = fruit;
//   }
// });

// numbers=[9,2,10,11]  // finding if prime or not
// numbersPrimeOrNot=[]
// numbers.forEach((num,index,arr)=>arr[index]=primeOrNot(num))
// console.log(numbers)

// function primeOrNot(num){
//     if (num<=2){
//         return true
//     }
//     else if(num%2==0){
//         return false
//     }
//     for(let i=3;i<num;i++){
//         if (num%i==0){
//             return false
//         }
//     }
//     return true
// }



// numbers=[1,4,6,9] // double every element in the array
// numbers.forEach((num,ind,arr)=>arr[ind]=num*2)
// console.log(numbers)