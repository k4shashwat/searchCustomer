const express = require('express');
const router = express.Router();
const customers = require("../controllers/customerController");

router.get('/customerLists', customers.fetchAllSortedCustomers);
router.get('/customer', customers.fetchMyCustomers);

module.exports = router;