const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log('hash', hash);
//   });
// });

var hashedPassword = '$2a$10$DQCibt.eb2P37pUatIwHLuKprQsQ8ayzgE62zX7dBsfukH9eBckM2';

bcrypt.compare(password, hashedPassword, (err, result) => {
  console.log(result);
})
