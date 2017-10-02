React Intl Nested Example
=========================

This is a runnable example showing how to use React Intl with nested collections of string messages from different "widgets" that could be defined in separate npm packages and combined in one app.

This example app creates a string messages bundle per logical widget in the app via the `scripts/group-messages.js` script.

## Running

**You first need to build the main React Intl library:**

```
$ cd ../..
$ npm run build
$ cd examples/nested/
```

Then you can build and run this example:
## Find & extract formatted message string templates (with ids) in the code
_... and logically group into component level files_

```
$ npm run build
```
..then go look in ./build/lang/** for files in default locale (en-US) to see updated strings


### Manage translations
You can manage translations. 
- Update non-default locale-specific language files with new id:message (key/value) pairs...including the 'non-translated' versions of strings.
- Find non-translated strings across locale-specific language files.

run:

```
$ npm run manage:translations
```
Refer to console output for where new or changed language strings exist that require translation attention.

#### Things to be careful of:
Translation evaluation is compared to defaultMessages in the code.  If you extract from a specific defaultMessage once (and it populates the language files to indicate the string needs translating), then change the defaultMessage in the code...the system will see the strings in the language files as 'different than the default', and will no longer indicate they need translating

## run project 
_...just to play with it (without live update)_
```
$ npm start
```

## dev mode

or you can edit any source in `src/client/` and recompile the example on fly :

```
$ npm run watch
$ npm start
```
