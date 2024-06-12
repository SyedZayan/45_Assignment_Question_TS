function carinf(manufacturer, model, color, AC) {
    let carinformation = {
        carManufacturer: manufacturer,
        carModel: model,
        color: color,
        AC: AC,
    };
    return carinformation;
}
let cars = carinf("toyota", 2011, "black");
console.log(cars);
export {};
