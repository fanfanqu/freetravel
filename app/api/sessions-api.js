import express from 'express';
import {User} from '../db/schema';
import sha1 from 'sha1';
import _ from 'lodash';

const router = express.Router();

router.post('/', (req, res, next) => {
    const name = req.body.name;
    const password = req.body.password;

    if (_.isEmpty(name) || _.isEmpty(password)) {
        res.status(400).send('name and password can not be null');
    }
    else {
        User.findOne({name}, (err, userData) => {
            if (err) return next(err);
            if (userData === null || userData.password != password) {
                res.status(401).send('name or password is wrong');
            }
            else if (userData.password === password) {
                if (userData) {
                    res.status(201).send('login success');
                    res.cookie('token', userData.name + ':' + sha1(userData.password));
                }
            }
        });
    }
});

router.get('/personal', function (req, res) {
    const token = req.cookies['token'];
    if (validateToken(token)) {
        const name = getUsernameFromToken(token);
        return res.json({name});
    }
    res.sendStatus(401);
});

function generateToken(userData) {
    return userData.name + ':' + sha1(userData.password);
}

function getUsernameFromToken(token) {
    const separatorIndex = _.lastIndexOf(token, ':');
    return token.substring(0, separatorIndex);
}

function validateToken(token) {
    if (token === null || token.length === 0 || !token.includes(':')) {
        return false;
    }
    const username = getUsernameFromToken(token);
    const user = findUser(username);
    if (user) {
        const {password} = user;
        return generateToken(username, password) === token;
    }
    return false;
}

function findUser(username) {
    return _.find(username, {username});
}


export default router;
