// here we will discuss tuple DataType 
//  tuple data type basically mixed data - key , value;
var user;
user = [101, "tofayel"];
user.push(102, "Rakib");
console.log(user);
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
var user2;
user2 = { id: 1112 };
users.push(user2);
console.log(users);
for (var key in users) {
    console.log(users[key]);
}
