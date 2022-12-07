const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    PP: Int
}
# Query    
type Query {
    users: [User]
    user(username: String!): User
    }
    
type Auth {
    token: ID
    user: User
}
type Mutation {
    login(email: String!, password: String!): Auth
}
`;





module.exports = typeDefs;