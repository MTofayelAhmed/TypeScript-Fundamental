// here we will discuss tuple DataType 
//  tuple data type basically mixed data - key , value;
var user;
user = [101, "tofayel"];
user.push(102, "Rakib");
console.log(user);
// enum data type (no duplicates data helps to store constant)
// numeric enum 
var DataType;
(function (DataType) {
    DataType[DataType["readData"] = 2] = "readData";
    DataType[DataType["deleteData"] = 3] = "deleteData";
    DataType[DataType["saveData"] = 4] = "saveData";
})(DataType || (DataType = {}));
console.log(DataType.readData);
