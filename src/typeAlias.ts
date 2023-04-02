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

function getActionss(btns: Last) :void {
  console.log(`Actions for Button Up is ${btns.up} `);
  console.log(`Actions for Button Down is ${btns.down} `);
  console.log(`Actions for Button Left is ${btns.left} `);
  console.log(`Actions for Button Right is ${btns.right} `);
}

getActionss({ up: "Jump", down: "Go Down", right: "Go Right", left: "Go Left", x: true });
