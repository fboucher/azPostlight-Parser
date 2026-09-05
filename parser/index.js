const postlight = require('@fboucheros/parser');
const uuid = require('uuid');

module.exports = async function (context, req) {

    context.log('Start parsing a web page.');

    if (req.query.url || (req.body && req.body.url)) {

        const _url = (req.query.url || req.body.url);
        cleanedPost = await postlight.parse(_url);
        cleanedPost.id = uuid.v4();
        cleanedPost.url = _url;

        // Add partition key and row key for Azure Table Storage
        var today = new Date();
        cleanedPost.PartitionKey = today.toISOString().substring(0, 7);
        cleanedPost.RowKey = cleanedPost.id;

        context.res = {
            status: 200, /* Defaults to 200 */
            body: cleanedPost
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a URL on the query string or in the request body"
        };
    }

}