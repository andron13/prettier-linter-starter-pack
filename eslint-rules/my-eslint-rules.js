/** @type {import("eslint").Linter.RulesRecord} */

// ========================================
// SORTING AND ORGANIZATION RULES
// ========================================

const sortingRules = {
  // Import sorting
  "import/order": [
    "error",
    {
      "newlines-between": "always-and-inside-groups",
      groups: [
        "builtin",
        "external",
        "internal",
        ["parent", "sibling"],
        "object",
        "type",
        "index",
      ],
      alphabetize: {
        order: "asc",
        caseInsensitive: true,
      },
    },
  ],

  // Remove unused imports
  "unused-imports/no-unused-imports": "error",

  // Prohibit relative paths (use aliases)
  "no-relative-import-paths/no-relative-import-paths": [
    "error",
    { allowSameFolder: false, rootDir: "src", prefix: "@" },
  ],

  // Imports at the beginning of the file
  "import/first": "error",

  // Empty line after imports
  "import/newline-after-import": "error",
};

// ========================================
// MAIN ESLINT RULES
// ========================================
export const myEslintRules = {
  // Include sorting rules
  // !!!!       perfectionist.configs["recommended-natural"], or this sortingRules
  // ...sortingRules,

  // ========================================
  // TYPESCRIPT RULES
  // ========================================

  // Prohibit type assertions
  "@typescript-eslint/consistent-type-assertions": [
    "error",
    { assertionStyle: "never" },
  ],

  // Require explicit return type (stricter than base config)
  "@typescript-eslint/explicit-function-return-type": "error",

  // Require explicit access modifiers
  "@typescript-eslint/explicit-member-accessibility": [
    "error",
    { accessibility: "explicit", overrides: { constructors: "off" } },
  ],

  // Require types for exported functions
  "@typescript-eslint/explicit-module-boundary-types": "error",

  // Prefer method signature style
  "@typescript-eslint/method-signature-style": "error",

  // Strictly prohibit any
  "@typescript-eslint/no-explicit-any": "error",

  // Disable floating promises for flexibility
  "@typescript-eslint/no-floating-promises": "off",

  // Remove obvious types
  "@typescript-eslint/no-inferrable-types": "error",

  // Prohibit magic numbers (except basic ones)
  "@typescript-eslint/no-magic-numbers": [
    "error",
    {
      ignore: [0, 1, -1, 2],
      ignoreArrayIndexes: true,
      ignoreClassFieldInitialValues: true,
      ignoreReadonlyClassProperties: true,
      enforceConst: true,
      ignoreDefaultValues: true,
    },
  ],

  // Disable for modern TS versions
  "@typescript-eslint/no-unnecessary-type-parameters": "off",

  // Strict control of unused variables
  "@typescript-eslint/no-unused-vars": [
    "error",
    {
      args: "all",
      argsIgnorePattern: "^_",
      caughtErrors: "all",
      caughtErrorsIgnorePattern: "^_",
      destructuredArrayIgnorePattern: "^_",
      vars: "all",
      varsIgnorePattern: "^_",
      ignoreRestSiblings: true,
    },
  ],

  // Prohibit use before definition
  "@typescript-eslint/no-use-before-define": "error",

  // Remove empty exports
  "@typescript-eslint/no-useless-empty-export": "error",

  // Require compare function for array.sort()
  "@typescript-eslint/require-array-sort-compare": "error",

  // Disable for flexibility in templates
  "@typescript-eslint/restrict-template-expressions": "off",

  // Control unbound methods
  "@typescript-eslint/unbound-method": ["error", { ignoreStatic: true }],

  // ========================================
  // REACT RULES
  // ========================================

  // Disabled - TypeScript replaces PropTypes
  "react/prop-types": "off",

  // Require displayName for components
  "react/display-name": "error",

  // React 17+ doesn't require React import
  "react/jsx-uses-react": "off",
  "react/react-in-jsx-scope": "off",

  // Mandatory key prop
  "react/jsx-key": "error",

  // Allow using index as key
  "react/no-array-index-key": "off",

  // Self-closing tags
  "react/self-closing-comp": "error",

  // Short syntax for boolean props
  "react/jsx-boolean-value": ["error", "never"],

  // ========================================
  // REACT HOOKS RULES
  // ========================================

  // Hooks rules
  "react-hooks/rules-of-hooks": "error",

  // Warning about dependencies in useEffect
  "react-hooks/exhaustive-deps": "warn",

  // ========================================
  // IMPORT/EXPORT RULES
  // ========================================

  // Prohibit circular imports
  "import/no-cycle": "error",

  // Control file extensions
  "import/extensions": [
    "error",
    "ignorePackages",
    { js: "never", jsx: "never", ts: "never", tsx: "never" },
  ],

  // Don't require default export
  "import/prefer-default-export": "off",

  // Disabled - TypeScript checks itself
  "import/no-unresolved": "off",

  // Disabled due to TypeScript resolver issues
  "import/no-duplicates": "off",

  // ========================================
  // GENERAL CODE QUALITY RULES
  // ========================================

  // Disable for React components
  "class-methods-use-this": "off",

  // Mandatory curly braces
  curly: ["error", "all"],

  // Disable for TypeScript
  "dot-notation": "off",

  // Disable for formatting flexibility
  "implicit-arrow-linebreak": "off",
  "function-paren-newline": "off",
  "operator-linebreak": "off",
  "object-curly-newline": "off",

  // Maximum line length
  "max-len": [
    "error",
    {
      code: 120,
      ignoreComments: true,
      ignoreTemplateLiterals: true,
      ignoreStrings: true,
    },
  ],

  // Maximum number of lines per function
  "max-lines-per-function": [
    "error",
    { max: 40, skipBlankLines: true, skipComments: true },
  ],

  // Prohibit console (except warn)
  "no-console": ["error", { allow: ["warn"] }],

  // Prohibit empty functions
  "no-empty-function": "error",

  // Use const for immutable variables
  "prefer-const": "error",

  // Prohibit var
  "no-var": "error",

  // Strict comparison
  eqeqeq: ["error", "always"],

  // ========================================
  // UNICORN RULES
  // ========================================

  // Disable null prohibition
  "unicorn/no-null": "off",

  // Disable globalThis preference
  "unicorn/prefer-global-this": "off",

  // Disable querySelector preference
  "unicorn/prefer-query-selector": "off",

  // Control abbreviations
  "unicorn/prevent-abbreviations": [
    "error",
    { allowList: { props: true, Props: true } },
  ],

  // Disable explicit length check
  "unicorn/explicit-length-check": "off",

  // Control file naming
  "unicorn/filename-case": [
    "error",
    {
      cases: {
        kebabCase: true,
        camelCase: false,
        pascalCase: false,
      },
    },
  ],

  // Empty lines between class methods
  "lines-between-class-members": [
    "error",
    {
      enforce: [
        { blankLine: "always", next: "method", prev: "*" },
        { blankLine: "always", next: "*", prev: "method" },
      ],
    },
  ],

  // Spaces in curly braces
  "object-curly-spacing": ["error", "always"],

  // Trailing commas
  "comma-dangle": ["error", "only-multiline"],
};
