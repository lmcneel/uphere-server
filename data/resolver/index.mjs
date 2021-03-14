// The root provides a resolver function for each API endpoint
const rootValue = {
    hello: () => {
        return {
            hello: 'Hi world!'
        }
    },
    user: () => {
        return {
            id: 'd2f46e69-b20e-458d-ada1-714aca715b41',
            name: 'Sample User',
            username: 'sUser',
            email: 'sample.user@email.email'
        }
    }
};

export default rootValue;
