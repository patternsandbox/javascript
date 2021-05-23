# Decorator Pattern
>

## Problem

## Solution

## Example

### 1. Class
```javascript
class User {
  constructor(title, first, last) {
    this.first = first;
    this.last = last;
    this.title = title;
  }

  getFullName() {
    return `${this.first} ${this.last}`;
  }
}

class UserDecorator {
  constructor(user) {
    this.user = user;
  }

  getFullName() {
    return this.user.getFullName();
  }
}

class UserFullNameWithTitleDecorator extends UserDecorator {
  getFullName() {
    return `${this.user.title} ${this.user.getFullName()}`;
  }
}

// without decorator
const user = new User("Mr.", "John", "Doe");
console.log("\nWithout decorator");
console.log(user.getFullName());
console.log(user.title + user.getFullName());

// with decorator
const decoratedUser = new UserFullNameWithTitleDecorator(user);
console.log("\nWith decorator");
console.log(decoratedUser.getFullName());

```
*Listing 1: index.js*
```javascript
test("TODO", () => {
  expect(true).toBeTruthy();
});

```
*Listing 2: test.js*

## References

