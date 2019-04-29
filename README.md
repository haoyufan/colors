
# colors.js
## get color and style in your node.js console

## colors and styles!

### text colors

  - black
  - red
  - green
  - yellow
  - blue
  - magenta
  - cyan
  - white
  - gray
  - grey

### background colors

  - bgBlack
  - bgRed
  - bgGreen
  - bgYellow
  - bgBlue
  - bgMagenta
  - bgCyan
  - bgWhite

### styles

  - reset
  - bold
  - dim
  - italic
  - underline
  - inverse
  - hidden
  - strikethrough

### extras

  - rainbow
  - zebra
  - america
  - trap
  - random


## Usage

By popular demand, `colors` now ships with two types of usages!

The super nifty way

```js
var colors = require('colors');
colors.init();
console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass
```

or a slightly less nifty way which doesn't extend `String.prototype`

```js
var colors = require('colors');
console.log(colors.green('hello')); // outputs green text
console.log(colors.red.underline('i like cake and pies')) // outputs red underlined text
console.log(colors.inverse('inverse the color')); // inverses the color
console.log(colors.rainbow('OMG Rainbows!')); // rainbow
console.log(colors.trap('Run the trap')); // Drops the bass
```

I prefer the first way. Some people seem to be afraid of extending `String.prototype` and prefer the second way. 

If you are writing good code you will never have an issue with the first approach. If you really don't want to touch `String.prototype`, the second usage will not touch `String` native object.

## Custom themes

### Using standard API

```js
var colors = require('colors');
colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});
// outputs red text
console.log("this is an error".error);
// outputs yellow text
console.log("this is a warning".warn);
```

### Using string safe API

```js
var colors = require('colors');

// set theme
colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});
// outputs red text
console.log(colors.error("this is an error"));
// outputs yellow text
console.log(colors.warn("this is a warning"));
```