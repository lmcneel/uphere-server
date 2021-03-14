import user from './users.mjs';

const hello = `
    type Hello {
        hello: String
    }
`;

const query = `
    ${user}
    ${hello}
    type Query {
        hello: Hello,
        user: User
    }
`

export default query;
