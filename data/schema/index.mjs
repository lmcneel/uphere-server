import { buildSchema } from 'graphql';
import query from './queries/index.mjs';

const schema = buildSchema(`
    ${ query }
`);

export default schema;
