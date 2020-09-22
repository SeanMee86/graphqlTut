const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const {username, password, database} = require('./keys');

mongoose.connect(`mongodb+srv://${username}:${password}@wbcluster.nxeyu.mongodb.net/${database}?retryWrites=true&w=majority`, {useUnifiedTopology: true, useNewUrlParser: true})

mongoose.connection.once('open', () => {
    console.log("connected to database");
})

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

const port = 8000 || process.env.PORT;
app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});
