// here we will discuss tuple DataType 
//  tuple data type basically mixed data - key , value;



let user:[number, string]
user = [101, "tofayel"]


user.push(102, "Rakib")
console.log(user)


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
enum mixedDataType{
    readData= "Read_Data",
    deleteData= "DELETE_DATA",
    id = 1111
}
console.log(mixedDataType["id"])



