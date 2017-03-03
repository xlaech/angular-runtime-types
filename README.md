## Problem Domain
### Motivation
Consider the following very simple Angular2 component written in Typescript:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  template: '<button (click)="foo = 'haha'">Click to destroy happiness of mankind</button>'
})
export class HomePage {
  foo: number = 4;
}
```

The biggest benefit of using Typescript in a JavaScript is the Typesafety it provides. 
However, code inside of Angular templates wil not be check during compiletime. Since it is
allready JavaScript at runtime, the code above will set the number above to a string value
and change it's "type" to string.

Many errors one can make in template files are often difficult to spot or understand because of this.

### Usage/Solution
This package provides new Types for all primitives which will check all assignments at runtime, so that
you acctually get feedback if you make an error at runtime in your template files.

#### Primitives
todo
#### Array
todo
#### List
todo
#### Map
todo
#### Dictionary
todo

## Development
Feel free to submit pullrequests at any time.
### Getting the project
1. Clone from github
2. Run `npm install`
3. Install globally `npm install -g typescript`

### Building
If you are using VSCode (which you should :)) than just press Ctrl+Shift+B to run the Build Task. 
If not you can run

`tsc -p ./ts/`

in the project directory.

### Running Tests
The test are written in mocha. You can run them with

`npm tests`

in the project directory.