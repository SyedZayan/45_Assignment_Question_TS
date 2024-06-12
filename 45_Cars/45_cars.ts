function carinf(
  manufacturer: string,
  model: any,
  ...args: [string, any][]
): any {
  let carInformation: { [key: string]: any } = {
    carManufacturer: manufacturer,
    carModel: model,
  };

  args.forEach(([key, value]) => {
    carInformation[key] = value;
  });

  return carInformation;
}

let cars = carinf("Toyota", 2011, ["color", "black"], ["AC", true]);
console.log(cars);
