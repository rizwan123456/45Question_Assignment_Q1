/* Problem Defenation:
              Cars: Write a function that stores information about a car in a Object.
               The function should always receive a manufacturer and a model name. 
               It should then accept an arbitrary number of keyword arguments. 
               Call the function with the required information and two other name-value pairs, 
               such as a color or an optional feature.Print the Object that’s returned to make sure 
               all the information was stored correctly.
                
           */


               function create_car(company: string, model: string, ...options: any[]) {
                let car: any = {
                  manufacturer: company,
                  model: model
                };
              
                for (let option of options) {
                  let key = Object.keys(option)[0];
                  let value = option[key];
                  car[key] = value;
                }
              
                return car;
              }
              
              let newcar = create_car("Honda", "2023", { color: "Silver" }, { features: "navigation system" });
              console.log(newcar);
              
           