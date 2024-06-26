// here we will discuss tuple DataType
//  tuple data type basically mixed data - key , value;

// let user:[number, string]
// user = [101, "tofayel"]

// user.push(102, "Rakib")
// console.log(user)

// enum data type (no duplicates data helps to store constant)
// numeric enum
// enum DataType{
//     readData =2,
//     deleteData,
//     saveData
// }
// console.log(DataType.readData)

// string enum
// enum DataTypeString {
//     readData = "READ_DATA",
//     deleteData = "DELETE_DATA",

// }
// console.log(DataTypeString.deleteData)

// Hetorogenious enum
// enum mixedDataType{
//     readData= "Read_Data",
//     deleteData= "DELETE_DATA",
//     id = 1111
// }
// console.log(mixedDataType["id"])

// objects discussion

// let users: object[];
// users=[];

// let user1:{id: number, name: string}
// user1 ={id: 1111, name: "Lucky"}

// users.push(user1);

// if we want to make any property optional , we can use ? sign

// let user2:{id: number, name?: string}
// user2= {id: 1112}
// users.push(user2)
// console.log(users)

// for (const key in users) {
//    console.log(users[key])

//     }

// here we will discuss custom type

type User = { name: string; id: number };
let users: User[];
users =[]

let user1: User = { name: "Lucky", id: 101 };
let user2: User = { name: "Luck", id: 102 };
let user3: User = { name: "Luc", id: 103 };


users.push(user1, user2, user3)
console.log(users)

type RequestType = "GET" | "POST"
let getRequest: RequestType

function requestHandler(requestType: RequestType) {
   console.log(requestType)
}

requestHandler("GET")