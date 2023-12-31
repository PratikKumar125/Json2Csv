# jsontocsvbuffer

[![npm version](https://badge.fury.io/js/jsontocsvbuffer.svg)](https://badge.fury.io/js/jsontocsvbuffer)

## Overview

`jsontocsvbuffer` is a versatile Node.js module designed to effortlessly transform JSON objects into CSV format. Whether you're dealing with complex, nested structures or simple key-value pairs, `jsontocsvbuffer` provides powerful features for easy conversion.

### Features

1. **Flexible Header Creation:** Generate a customizable CSV header even for flattened objects. Filter and create a header with only the desired keys when dealing with flattened JSON structures.

2. **Custom Delimiter:** Define your preferred delimiter for the CSV output. Tailor the delimiter according to your preferences or specific requirements.

3. **File Creation:** Use the returned CSV buffer to seamlessly create a CSV file. Set the `mimeType` option to 'text/csv' when creating the file.

### Installation

Install the package using npm:

```bash
npm install jsontocsvbuffer


### Installation

const json2csv = require('jsontocsvbuffer');

const data = [
  {"user.name.first": "Pratik", "user.name.last": "Kumar", "user.email": "pratik@pratik.com", "dob": "09-11-2023"};
];

// Specify custom delimiter (optional)
const options = { delimiter: "&" };

// Transform data into CSV buffer
const csvBuffer = json2csv(data, options);

// Output the CSV buffer
console.log(csvBuffer);

// Create a CSV file with mimeType: 'text/csv'

### Sample Output

// name&name&email&dob&
// Pratik&Kumar&pratik@pratik.com&09-12-2023&
