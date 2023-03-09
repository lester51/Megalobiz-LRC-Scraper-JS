# MEGALOBIZ LRC SCRAPER

![Megalobiz Logo](https://www.megalobiz.com/pics/images/max100h/megalobiz_logo_little.png)

A simple lyric(.lrc) config scraper on megalobiz and returns a promise/JSON Object that contains config file for lyric file(.lrc) for vivo music.

# HOW TO INSTALL?
```
npm i megalobiz-lrc-scraper
```

# Require to export function
```js
//CommonJS
const megalobiz = require('megalobiz-lrc-scraper');
```

## SIMPLE USAGE
### usage of `searchLRC()` and `getLRC()`
```js
const megalobiz = require('megalobiz-lrc-scraper');

let res = await megalobiz.searchLRC({
 query: "Racing into the night"
})
console.log(res)

let res2 = await megalobiz.getLRC(res[0].link)
console.log(res2)
```