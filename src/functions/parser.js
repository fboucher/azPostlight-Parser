const { app } = require('@azure/functions');
const postlight = require('@fboucheros/parser');
const uuid = require('uuid');

app.http('parser', {
    methods: ['GET', 'POST'],
    authLevel: 'function',
    route: 'parser',
    handler: async (request, context) => {
        context.log('Start parsing a web page.');

        const query = request.query.get('url');
        const body = request.method === 'POST' ? await request.json().catch(() => null) : null;
        const _url = query || (body && body.url);

        if (_url) {
            const cleanedPost = await postlight.parse(_url);
            cleanedPost.id = uuid.v4();
            cleanedPost.url = _url;

            // Add partition key and row key for Azure Table Storage
            const today = new Date();
            cleanedPost.PartitionKey = today.toISOString().substring(0, 7);
            cleanedPost.RowKey = cleanedPost.id;

            return {
                status: 200, /* Defaults to 200 */
                jsonBody: cleanedPost
            };
        }

        return {
            status: 400,
            body: "Please pass a URL on the query string or in the request body"
        };
    }
});
