/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  //Update Name
  setName: function (newName) {
    this.name = newName;
    return this;
  },
  //Update Volume
  setVolume: function (newVolume) {
    this.volume = newVolume;
    return this;
  },
  //Update Color
  setColor: function (newColor) {
    this.color = newColor;
    return this;
  },
  //Update Number of Pockets
  setPocketNum: function (newPocketNum) {
    this.pocketNum = newPocketNum;
    return this;
  },
};

console.log("Old Values");
console.log("Name:", backpack.name);
console.log("Volume:", backpack.volume);
console.log("Color:", backpack.color);
console.log("Pocket Number:", backpack.pocketNum);
console.log("\n");

let newName = "Current Backpack";
let newVolume = 45;
let newColor = "blue";
let newPocketNum = 5;

console.log("Updating Values");
backpack
  .setName(newName)
  .setVolume(newVolume)
  .setColor(newColor)
  .setPocketNum(newPocketNum);
console.log("\n");

console.log("New Values");
console.log("Name:", backpack.name);
console.log("Volume:", backpack.volume);
console.log("Color:", backpack.color);
console.log("Pocket Number:", backpack.pocketNum);
