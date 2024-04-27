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
var mixedDataType;
(function (mixedDataType) {
    mixedDataType["readData"] = "Read_Data";
    mixedDataType["deleteData"] = "DELETE_DATA";
    mixedDataType[mixedDataType["id"] = 1111] = "id";
})(mixedDataType || (mixedDataType = {}));
console.log(mixedDataType["id"]);
