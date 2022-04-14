const { build, analyzeMetafile } = require("esbuild");

const go = async () => {
  let result = await build({
    entryPoints: ["src/index.js"],
    bundle: true,
    minify: true,
    sourcemap: true,
    outfile: "build/index.js",
    loader: {
      ".svg": "dataurl",
      ".css": "text",
    },
    sourceRoot: "./",
    platform: "node",
    inject: ["./esbuild-nodejs-shims.js"],
    metafile: true,
  });
  let text = await analyzeMetafile(result.metafile);
  console.log(text);
};

go();
