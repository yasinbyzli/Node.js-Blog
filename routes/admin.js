const express = require('express');
const router = express.Router();


router.get("/", (req, res) => {
    res.redirect('/admin/admin')
})

module.exports = router;