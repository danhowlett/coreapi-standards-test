# OpenAPI specification - standards parser

## Installation

Run `yarn install` to install development dependencies (remainder of the library is currently zero-dependency!)

## Usage

`node index.js <DOCUMENT_STATUS> <INVENTORY_FILE> <OUTPUT_FILE>`

Potential document statuses are `in-development`, `draft` and `released`.

## Rationale

We would like to be able to accomplish three things with our approach here:

1. Make our API standards modular so that they are easier to author, edit and amend over time
1. Allow business units to adopt their own API standards in certain areas without
   having to fork away from the core API standards
1. Create a systematic linkage between API standards, the rules that enforce them and the
   common specification components that enable them

## Approach

Our approach includes a number of elements:

1. Modular standards. A standard can be comprised of up to three sets of files:
   - The Markdown documentation that details the standard itself
   - Linter rules that enforce the standard in one or more formats (such as Spectral)
   - OpenAPI files that can be referenced to define the standard in either YAML or JSON format
1. An overall standards inventory - `inventory.json` - that contains each of these modules in order
   as well as which standard sets they will be included in
1. A parser application that can assemble these components into a single Markdown documentation file
   and set of linter rules. This is currently in the `/standards-parser` folder but will be broken out
   into its own repo and internal `npm` package.
