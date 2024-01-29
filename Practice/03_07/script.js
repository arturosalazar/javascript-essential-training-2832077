/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const chest = {
  name: "Cedar Chest",
  material: "cedar",
  color: "brown",
  volume: 60,
  box: {
    volume: 30,
    material: "steel",
    empty: true,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  paintOutside: function (color) {
    this.color = color;
    console.log("The chest is now the color", color);
  },
};

console.log("The chest is:", chest);
console.log("The color of the ourside of the chest is:", chest.color);
console.log("You can use the paintOutside method to change the chest color!");
console.log("Try it now!");
