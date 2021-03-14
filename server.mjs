import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import {
  schema,
  rootValue
} from './data/index.mjs';

const app = express();
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue,
  graphiql: true,
}));

app.listen(process.env.PORT || 3001);
console.log(`Running a GraphQL API server at http://localhost:${process.env.PORT}/graphql`);
