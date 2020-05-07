const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('../../utils/generateToken.js');

/* db */
const U = require('./model.js');

const router = express.Router();

/* endpoints */

// router.post('/squ1n7/c', (req, res) => {
//     const nu = req.body;
//     const hash = bcrypt.hashSync(nu.p, 8);
//     nu.p = hash;

//     U.r(nu)
//         .then(n => {
//             res.status(201).json(n);
//         })
//         .catch(e => {
//             res.status(400).json(e);
//         });
// });

router.post('/squ1n7/log', (req, res) => {
    const { un, p } = req.body;
    U.fb({ un })
        .first()
        .then(usr => {
            if (usr && bcrypt.compareSync(p, usr.p)) {
                const token = jwt.generateToken(usr);
                res.status(201).json({ token });
            }
            else {
                res.status(401).json({ e: 'n' });
            }
        })
        .catch(e => {
            res.status(500).json({ e: 'o' });
        })
});

router.delete('/squ1n7/:i', (req, res) => {
    const i = req.params.i;
    U.del(i)
        .then(d => {
            res.status(200).json(d);
        })
        .catch(e => {
            res.status(400).json(e);
        })
})

module.exports = router;