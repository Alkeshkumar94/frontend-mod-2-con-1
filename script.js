let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
    arr.map(element => {
        if (element.marks > 50) {
            console.log(`id:${element.id}, name:${element.name}, age:${element.age}, marks:${element.marks}`);

        }
    })
}

function PrintStudentsbyForEach() {
    //Write your code here , just console.log
    arr.forEach(element => {
        if (element.marks > 50) {
            console.log(`id:${element.id}, name:${element.name}, age:${element.age}, marks:${element.marks}`);

        }
    })


}

function addData() {
    //Write your code here, just console.log
    let newData = { id: 4, name: "susan", age: "20", marks: 45 }
    arr.push(newData);
    arr.forEach(element => {
        console.log(`id:${element.id}, name:${element.name}, age:${element.age}, marks:${element.marks}`);
    })
}

function removeFailedStudent() {
    //Write your code here, just console.log
    arr = arr.filter(element => element.marks >= 50)
    arr.forEach(element => {
        console.log(`id:${element.id}, name:${element.name}, age:${element.age}, marks:${element.marks}`);
    })
}

function concatenateArray() {
    //Write your code here, just console.log
    let arr2 = [
        { id: 5, name: "rahul", age: "19", marks: 81 },
        { id: 6, name: "shivam", age: "21", marks: 82 },
        { id: 7, name: "vishal", age: "23", marks: 34 },
    ]
    let total = arr.concat(arr2);
    total.forEach(element => {
        console.log(`id:${element.id}, name:${element.name}, age:${element.age}, marks:${element.marks}`);
    })
}