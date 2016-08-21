// import express from 'express';
// import _ from 'lodash';
// import sha1 from 'sha1';
//
// const router = express.Router();
// router.get('/personal', function (req, res) {
//     const username = req.body.name;
//     let userData = findUser(username);
//     const token = req.cookie('token', username + ':' + sha1(userData));
//     if (validateToken(token)) {
//         const username = getUsernameFromToken(token);
//         return res.json({username});
//     }
// });
//
// function getUsernameFromToken(token) {
//     const separatorIndex = _.lastIndexOf(token, ':');
//     return token.substring(0, separatorIndex);
// }
//
// function validateToken(token) {
//     if (token === null || token.length === 0 || !token.includes(':')) {
//         return false;
//     }
//     const username = getUsernameFromToken(token);
//     const user = findUser(username);
//     if (user) {
//         const {password} = user;
//         return generateToken(username, password) === token;
//     }
//     return false;
// }
// function findUser(username) {
//     return _.find(username, {username});
// }
//
// export default router;
