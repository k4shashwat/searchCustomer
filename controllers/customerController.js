const hbs = require('hbs');
const customer = require('../customers/fetchCustomers.js');
const _ = require('lodash');

let custList = [];

hbs.registerHelper("math", function (lvalue, operator, rvalue, options) {
	lvalue = parseFloat(lvalue);
	rvalue = parseFloat(rvalue);

	return {
		"+": lvalue + rvalue
	}[operator];
});

/*
* @name fetchAllSortedCustomers
 * 
 * @param {number} lat Latitude of Location 1 
 * @param {number} long1 Longitude of Location 1  
 * @description
 * Calculates the distance between two GPSCoordinates using  formula
 * 
 * @returns {number} Net Distance in kilometres
*/

const fetchAllSortedCustomers = (req, res) => {
	custList = customer.fetchCustomers();
	let lat = 53.339428;
	let lon = -6.257664;
	let sortedData = customer.filterCustomers(custList, lat, lon);
	sortedData = _.sortBy(sortedData, ['user_id']);
	res.render('customers.hbs', {
		data: sortedData
	});
}
/*
* @name fetchMyCustomers  
 * @description
 * Calculates the distance between two GPSCoordinates using  formula
 *
 * @returns {number} Net Distance in kilometres
*/

const fetchMyCustomers = (req, res) => {
	custList = customer.fetchCustomers();
	let lat = req.query.lat || 53.339428;
	let lon = req.query.lon || -6.257664;
	let sortedData = customer.filterCustomers(custList, lat, lon);
	sortedData = _.sortBy(sortedData, ['user_id']);
	res.render('customers.hbs', {
		data: sortedData
	});
}

module.exports = {
	fetchAllSortedCustomers,
	fetchMyCustomers
}