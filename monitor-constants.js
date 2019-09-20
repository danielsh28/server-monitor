require('dotenv').config();

module.exports.UNITS= {
    MEM_UNITS: 'gb',
     TIMEOUT : 60000,
    HUNDRED_PERCENTAGE :100
};

module.exports.DB_URL= process.env.NODE_ENV === 'prod' ? 'mongodb+srv://'+ process.env.DB_USER + ':' + process.env.DB_PASS + '@appcluster-ztphv.mongodb.net/' +
    'DEV_DB?retryWrites=true&w=majority': 'mongodb://localhost/serverDB';
