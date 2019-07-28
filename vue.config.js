module.exports = {
  // BELOW ERROR: Do not set output directory to project root.
  // outputDir: "./",
  //
  configureWebpack: {
    //
    // Configuration Error: Avoid modifying webpack output.path directly. Use the "outputDir" option instead
    // output: {
    //   path: __dirname,
    //   filename: "main.js",
    //   libraryTarget: "commonjs2"
    // },
    externals: {
      scenegraph: "scenegraph"
    }
  }
};
