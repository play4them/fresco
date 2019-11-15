import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import { uglify } from "rollup-plugin-uglify";
import { terser } from "rollup-plugin-terser";

import packageJSON from "./package.json";
const input = "./src/index.js";
const minifyExtension = pathToFile => pathToFile.replace(/\.js$/, ".min.js");

const namedExports = {
  "@mdi/react": ["Icon"],
  "react-copy-to-clipboard": ["CopyToClipboard"],
  "react-switch": ["Switch"],

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
};

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
        exclude: "node_modules/**"
      }),
      external(),
      resolve(),
      commonjs({
        namedExports: namedExports
      })
    ]
  },
  {
    input,
    output: {
      file: minifyExtension(packageJSON.main),
      format: "cjs"
    },
    plugins: [
      babel({
        exclude: "node_modules/**"
      }),
      external(),
      resolve(),
      commonjs({
        namedExports: namedExports
      })
    ]
  },
  // UMD
  {
    input,
    output: {
      file: packageJSON.browser,
      format: "umd",
      name: "reactSampleComponentsLibrary",
      globals: {
        react: "React",
        "@emotion/styled": "styled",
        "@emotion/core": "core"
      }
    },
    plugins: [
      babel({
        exclude: "node_modules/**"
      }),
      external(),
      resolve(),
      commonjs({
        namedExports: namedExports
      })
    ]
  },
  {
    input,
    output: {
      file: minifyExtension(packageJSON.browser),
      format: "umd",
      name: "reactSampleComponentsLibrary",
      globals: {
        react: "React",
        "@emotion/styled": "styled",
        "@emotion/core": "core"
      }
    },
    plugins: [
      babel({
        exclude: "node_modules/**"
      }),
      external(),
      resolve(),
      commonjs({
        namedExports: namedExports
      }),
      terser()
    ]
  },
  // ES
  {
    input,
    output: {
      file: packageJSON.module,
      format: "es",
      exports: "named"
    },
    plugins: [
      babel({
        exclude: "node_modules/**"
      }),
      external(),
      resolve(),
      commonjs({
        namedExports: namedExports
      })
    ]
  },
  {
    input,
    output: {
      file: minifyExtension(packageJSON.module),
      format: "es",
      exports: "named"
    },
    plugins: [
      babel({
        exclude: "node_modules/**"
      }),
      external(),
      resolve(),
      commonjs({
        namedExports: namedExports
      }),
      terser()
    ]
  }
];
