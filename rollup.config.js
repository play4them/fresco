import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";

import pkg from "./package.json";

export default [
  // CommonJS
  {
    input: "./src/index.js",
    output: {
      file: pkg.main,
      format: "cjs"
    },
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {})
    ],
    plugins: [
      babel({
        exclude: "node_modules/**"
      }),
      resolve({ preferBuiltins: false }),
      commonjs()
    ]
  }
];
