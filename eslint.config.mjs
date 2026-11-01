import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

// eslint-config-next 16 enables the React Compiler rules from
// eslint-plugin-react-hooks v7. This portfolio's animation components were
// written against the classic rules (rules-of-hooks, exhaustive-deps) and
// rely on patterns those compiler rules reject, such as Math.random arc
// colors and mutation inside useFrame. Turning the compiler rules off keeps
// lint aligned with the existing behaviour instead of rewriting the visuals.
const reactCompilerRules = [
  "react-hooks/static-components",
  "react-hooks/use-memo",
  "react-hooks/preserve-manual-memoization",
  "react-hooks/incompatible-library",
  "react-hooks/immutability",
  "react-hooks/globals",
  "react-hooks/refs",
  "react-hooks/set-state-in-effect",
  "react-hooks/error-boundaries",
  "react-hooks/purity",
  "react-hooks/set-state-in-render",
  "react-hooks/unsupported-syntax",
  "react-hooks/config",
  "react-hooks/gating",
];

const eslintConfig = [
  ...nextCoreWebVitals,
  {
    rules: Object.fromEntries(reactCompilerRules.map((rule) => [rule, "off"])),
  },
];

export default eslintConfig;
