# UNDERSTANDING TYPESCRIPT

Notes and code from the Academind's course ([from Udemy](https://www.udemy.com/course/understanding-typescript/?src=sac&kw=typescript)).

## what is TypeScript?

+ a JavaScript superset.
+ a language building up on JavaScript
+ adds nre features + advantages to JS
+ browser can't execute it!
+ compiled to JS
+ features are compiled to JS workarounds, possible errors are thrown

## why TypeScript?

```js
function add(num1, num2) {
  return num1 + num2;
}

console.log(add('2', '3')) // unwanted behavior at runtime
```

### mitigation strategies

+ add if check to add function
+ validate & sanitice user input
+ developers can still write invalid code!
+ TypeScript is a tool that helps developers write better code!
