class Student{
    constructor(name,DOY){
        this.name=name
        this.DOY=DOY
    }
    age(){
        let date=new Date()
        let myage=date.getFullYear()-this.DOY
        console.log(myage)


    }
}
let student=new Student('Anurag','2002')

let date={
    "name":"anurag",
    "age":95,
    "address":{
        "1st":"Mumbai",
        "2nd":"wwe"
    }
}
console.log(date)
// console.log(student)