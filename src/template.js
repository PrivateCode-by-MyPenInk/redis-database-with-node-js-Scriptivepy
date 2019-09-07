const stdin = process.openStdin();
const redis = require('redis'),
    client = redis.createClient();

// Fetching 'yourname' from database as reply
client.get('yourname', (err, reply) => {
    // Printing out the value from database as a proof of persistance
    console.log('[*] Last saved name: ' + reply + '\n\n');
    console.log('[*] Enter your name: ');
});

// Whenever a user writes something this code will be executed.
stdin.on('data', (data) => {
    // Input of user saved to variable name.
    const name = data.toString().replace('\n', '');

    // Set key 'yourname' to console input
    client.set('yourname', name);
    
    // Fetching 'yourname' from database as 'reply'
    client.get('yourname', (err, reply) => {
        // Logging '[*] Your name is: reply'
        console.log('[*] Your name is: ' + reply + '\n');
    
        // Exit with errorCode 0
        process.exit(0);
    });
});

client.on('error', function (err) {
    console.log('Error ' + err);
});
