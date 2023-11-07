/* Problem Defenation:
              Cars: Write a function that stores information about a car in a Object.
              The function should always receive a manufacturer and a model name.
              It should then accept an arbitrary number of keyword arguments.
              Call the function with the required information and two other name-value pairs,
               such as a color or an optional feature. Print the Object that’s returned to make sure
               all the information was stored correctly.
           */
/* Solution of Problem */
function create_car(company, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: company,
        model: model
    };
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var option = options_1[_a];
        var key = Object.keys(option)[0];
        var value = option[key];
        car[key] = value;
    }
    return car;
}
var newcar = create_car("Honda", "2023", { color: "Silver" }, { features: "navigation system" });
console.log(newcar);
