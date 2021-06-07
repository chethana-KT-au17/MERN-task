const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://nithya-admin:pass@123@cluster0.vzmsb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true
}, (err) => {
    if (!err) {
        console.log('mongodb connection success :)')
    } else {
        console.log('error in db connection' + err)
    }
});

require('./join');
require('./events.model');
require('./Donation.js');
require('./contact.model');
