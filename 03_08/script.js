/**
 * Create a Backpack object.
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
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack object:", backpack);
console.log("The pocketNum value:", backpack.pocketNum);

console.log("Strap length L:", backpack.strapLength.left);
console.log("Strap length R:", backpack.strapLength.right);

console.log("Changing strap lengths to L:30, R:45");
backpack.newStrapLength(30, 45);

console.log("Strap length L:", backpack.strapLength.left);
console.log("Strap length R:", backpack.strapLength.right);
