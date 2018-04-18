import gql from 'graphql-tag';

export const userByIdQuery = gql`
    query UserById($id : ID!) {
        User(id: $id) {
            id
            address
            addressLat
            addressLong
            dateOfBirth
            email
            gender
            imageUrl
            name
            phoneNo
        }
    }
`

export const updateUser = gql`
    mutation UpdateUser($id: ID!, $name: String, $email: String, $phoneNo: String, $imageUrl: String, $dateOfBirth: DateTime, $address: String, $addressLat: String, $addressLong: String, $gender: Gender) {
        updateUser(id: $id, name: $name, email: $email, phoneNo: $phoneNo, imageUrl: $imageUrl, dateOfBirth: $dateOfBirth, address: $address, addressLat: $addressLat, addressLong: $addressLong, gender: $gender) {
            id
            address
            addressLat
            addressLong
            dateOfBirth
            email
            gender
            imageUrl
            name
            phoneNo
        }
    }
`