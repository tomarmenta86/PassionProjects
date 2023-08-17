import { gql } from '@apollo/client';
export const QUERY_ME = gql`
query me {
    me {
      _id
      email
      firstName
      lastName
      posts {
        _id
        budget
        createdAt
        description
        interested_users {
          _id
          email
          firstName
          lastName
        }
        requester_id {
          _id
        }
        tag
        title
      }
    }
  }
`;
export const QUERY_ALL_USERS = gql `
query users {
    users {
      _id
      email
      firstName
      lastName
      posts {
        _id
        budget
        createdAt
        description
        tag
        title
        interested_users {
          _id
          email
          firstName
          lastName
        }
      }
    }
  }
`;
export const QUERY_ALL_POSTS = gql`
query posts {
    posts {
      _id
      budget
      createdAt
      description
      tag
      title
      requester_id {
        _id
        email
        firstName
        lastName
      }
      interested_users {
        _id
        email
        firstName
        lastName
      }
    }
  }
`