const
    express = require('express'),
    axios = require('axios'),
    querystring = require('querystring');

const
    CLIENT_ID = 'your client id',
    CLIENT_SECRET = 'your client secret'

const app = express();

app.use(
    express.json(),
    express.urlencoded({ extended: false })
);

app.get('/auth/overwolf/callback', function(req, res, next) {
    if ( !req.query.code ) {
        res.send('error');
        return;
    }

    axios.post('https://accounts.overwolf.com/oauth2/token',
        querystring.stringify({
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            grant_type: 'authorization_code',
            code: req.query.code,
            redirect_uri: 'http://localhost:8080/auth/overwolf/callback'
        }),
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then(function(response) {
            // the response will contain the access token to be used
            if ( response.data.access_token ) {
                res.redirect(`http://localhost:3000/login-success?${querystring.stringify(response.data)}`);
            } else {
                console.error(response.data);
                res.send('');
            }
        }).catch((e) => {
            console.error(e.response.data);
            res.send('error');
        });
});

app.get('/', function(req, res, next) {
    res.send('');
});

module.exports = app;
