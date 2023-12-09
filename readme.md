# json2csv

[![npm version](https://badge.fury.io/js/json2csv.svg)](https://badge.fury.io/js/json2csv)

## Overview

`json2csv` is a versatile Node.js module designed to effortlessly transform JSON objects into CSV format. Whether you're dealing with complex, nested structures or simple key-value pairs, `json2csv` provides powerful features for easy conversion.

### Features

1. **Flexible Header Creation:** Generate a customizable CSV header even for flattened objects. Filter and create a header with only the desired keys when dealing with flattened JSON structures.

2. **Custom Delimiter:** Define your preferred delimiter for the CSV output. Tailor the delimiter according to your preferences or specific requirements.

3. **File Creation:** Use the returned CSV buffer to seamlessly create a CSV file. Set the `mimeType` option to 'text/csv' when creating the file.

### Installation

Install the package using npm:

```bash
npm install json2csv


### Installation

const json2csv = require('json2csv');

const data = [
  {"user.name.first": "Pratik", "user.name.last": "Kumar", "user.email": "pratik@pratik.com", "dob": "09-11-2023"};
];

// Specify custom delimiter (optional)
const options = { delimiter: "&" };

// Transform data into CSV buffer
const csvBuffer = json2csv.handle(data, options);

// Output the CSV buffer
console.log(csvBuffer);

// Create a CSV file with mimeType: 'text/csv'

### Sample Output
// Given the input data and custom delimiter:

const data = [
  {"user.name.first": "Pratik", "user.name.last": "Kumar", "user.email": "pratik@squareboat.com", "dob": "22-10-2003"}
];

const options = { delimiter: "&" };

const csvBuffer = json2csv.handle(data, options);

// Output
console.log(csvBuffer);

// Expected Output
// name&name&email&dob&
// Pratik&Kumar&pratik@pratik.com&09-12-2023&
