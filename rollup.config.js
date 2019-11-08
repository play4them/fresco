import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";

import packageJSON from "./package.json";
const input = "./src/index.js";

export default [
  // CommonJS
  {
    input,
    output: {
      file: packageJSON.main,
      format: "cjs"
    },
    plugins: [
      babel({
        exclude: ["node_modules/**"]
      }),
      external(),
      resolve(),
      commonjs({
        // https://github.com/rollup/rollup-plugin-commonjs#usage-in-monorepo
        include: /node_modules/,
        namedExports: {
          // node_modules/prop-types/factoryWithTypeCheckers.js#L115
          "prop-types": [
            "array",
            "bool",
            "func",
            "number",
            "object",
            "string",
            "symbol",
            "any",
            "arrayOf",
            "element",
            "elementType",
            "instanceOf",
            "node",
            "objectOf",
            "oneOf",
            "oneOfType",
            "shape",
            "exact"
          ]
        }
      })
    ]
  }
];
