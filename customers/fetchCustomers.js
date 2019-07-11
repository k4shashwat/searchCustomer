const fs = require('fs');
const path = require("path");
const _ = require('lodash');
const gps = require('gps-range');

/*
* @name fetchCustomers
 Read customers Data from file  & parse data  
*/
const fetchCustomers = () => {
  try {
    let customers = fs.readFileSync(path.resolve(__dirname, '../customer-data.txt'), 'utf8');
    return JSON.parse(customers);
  } catch (error) {
    return [];
  }
};

const filterCustomers = gps['filterCustomers'];

module.exports = {
  fetchCustomers,
  filterCustomers
};
