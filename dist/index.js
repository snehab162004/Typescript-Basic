let studName;
let age;
let isRanked;
let unkown;
var Color;
(function (Color) {
    Color["red"] = "red";
    Color["blue"] = "blue";
    Color["black"] = "black";
    Color["yellow"] = "yellow";
})(Color || (Color = {}));
function getColor(color) {
    console.log({ color });
}
getColor(Color.red);
