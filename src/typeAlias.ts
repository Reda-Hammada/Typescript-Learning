/**
 * data types
 * Type Alias
 */

//

type Buttons = {
  up: string;
  down: string;
  left: string;
  right: string;
};

type Last = Buttons & {
  x: boolean;
};

function getActions(btns: Last) {
  console.log(`Actions for Button Up is ${btns.up} `);
  console.log(`Actions for Button Down is ${btns.down} `);
  console.log(`Actions for Button Left is ${btns.left} `);
  console.log(`Actions for Button Right is ${btns.right} `);
}

getActions({ up: "Jump", down: "Go Down", right: "Go Right", left: "Go Left", x: true });
