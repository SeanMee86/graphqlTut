const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))









const port = 8000 || process.env.PORT;
app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});
