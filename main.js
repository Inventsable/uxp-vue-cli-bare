/*
 * Sample plugin scaffolding for Adobe XD.
 *
 * Visit http://adobexdplatform.com/ for API docs and more sample code.
 */

let fs, pluginFolder;

async function init() {
  fs = require("uxp").storage.localFileSystem;
  pluginFolder = await fs.getPluginFolder();
  console.log(fs);
  console.log(require("uxp").storage);
  console.log(pluginFolder);
}

// const { Rectangle, Color } = require("scenegraph");

// function rectangleHandlerFunction(selection) {
//   const newElement = new Rectangle();
//   newElement.width = 100;
//   newElement.height = 50;
//   newElement.fill = new Color("Purple");

//   selection.insertionParent.addChild(newElement);
//   newElement.moveInParentCoordinates(100, 100);
// }

function show(event) {
  init();
  let dom = document.createElement("panel");
  dom.innerHTML = `
        <div></div>
    `;
  event.node.appendChild(dom);
}

function hide(event) {
  event.node.firstChild.remove();
}

function update(selection, documentRoot) {
  // ...update panel DOM based on selection...
}

module.exports = {
  // commands: {
  //   createRectangle: rectangleHandlerFunction
  // },
  panels: {
    main: {
      show,
      hide,
      update
    }
  }
};
