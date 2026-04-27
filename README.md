# greet-utils

A simple utility package for greetings, farewells, and name formatting.

---

## 📦 Installation

Install via npm:

```bash
npm install greet-utils
```

## Usage

```javascript
const { greet, farewell, formatName } = require('greet-utils');

console.log(greet('Tushar'));
// Hello, Tushar

console.log(farewell('Tushar'));
// Goodbye, Tushar

console.log(formatName('tushar'));
// TUSHAR
```

## Features

- Simple greeting function
- Farewell messages
- Name formatting utility
- Lightweight and dependency-free

## API

### greet(name)
Returns a greeting message.

```javascript
greet('John');
// Hello, John
```

### farewell(name)
Returns a farewell message.

```javascript
farewell('John');
// Goodbye, John
```

### formatName(name)
Formats a name into uppercase trimmed string.

```javascript
formatName(' john ');
// JOHN
```

## Structure
```bash
greet-utils/
├── src/
│   ├── greet.js
│   ├── farewell.js
│   └── utils/
│       └── formatName.js
├── index.js
├── package.json
└── README.md
```
## Notes
- This package is designed for learning and simple utility use cases.
- No external dependencies required.

## License

MIT