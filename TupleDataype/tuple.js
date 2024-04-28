// here we will discuss tuple DataType
//  tuple data type basically mixed data - key , value;
var users;
users = [];
var user1 = { name: "Lucky", id: 101 };
var user2 = { name: "Luck", id: 102 };
var user3 = { name: "Luc", id: 103 };
users.push(user1, user2, user3);
console.log(users);
var getRequest;
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler("GET");
