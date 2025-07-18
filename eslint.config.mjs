import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import react from "eslint-plugin-react";
import tseslint from "typescript-eslint";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import reactCompiler from "eslint-plugin-react-compiler";
import perfectionist from "eslint-plugin-perfectionist";
import eslintPluginImport from "eslint-plugin-import";
import eslint from "@eslint/js";
import eslintPluginNoRelativeImportPaths from "eslint-plugin-no-relative-import-paths";
import unusedImports from "eslint-plugin-unused-imports";
import { myEslintRules } from "./eslint-rules/my-eslint-rules.js";
import unicorn from "eslint-plugin-unicorn";

export default tseslint.config(
  {
    languageOptions: {
      sourceType: "module",
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  { ignores: ["dist", "**/*.js", "**/*.d.ts", "**/*.config.ts"] },
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      eslint.configs.recommended,
      perfectionist.configs["recommended-natural"],
      eslintPluginImport.flatConfigs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...tseslint.configs.stylisticTypeChecked,
      ...tseslint.configs.strictTypeChecked,
      unicorn.configs.recommended,
      eslintPluginPrettier,
    ],
    languageOptions: {
      ecmaVersion: "latest",
      globals: globals.browser,
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "react-compiler": reactCompiler,
      "unused-imports": unusedImports,
      "no-relative-import-paths": eslintPluginNoRelativeImportPaths,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "react-compiler/react-compiler": "error",
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...myEslintRules,
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },
  },
);
