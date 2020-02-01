/**
 * User Model 
 *
 * @export
 * @interface User
 */
export interface User {
    gender: string;
    name: {
        title: string;
        first: string;
        last: string;
    },
    location: {
        street: {
            number: number;
            name: string;
        },
        city: string;
        state: string;
        country: string;
        postcode: number;
        coordinates: {
            latitude: string;
            longitude: string;
        },
        timezone: {
            offset: string;
            description: string;
        }
    },
    email: string;
    login: {
        uuid: string;
        username: string;
        password: string;
        salt: string;
        md5: string;
        sha1: string;
        sha256: string;
    },
    dob: {
        date: string;
        age: number;
    },
    registered: {
        date: string;
        age: number;
    },
    phone: string;
    cell: string;
    id: {
        name?: string;
        value?: null
    },
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    },
    nat: string;
}

/**
 * Array of Users from https://randomuser.me/api/
 *
 * @export
 * @interface UserResults
 */
export interface UserResults{
    results: User[];
    info: {
        seed: string;
        results: number;
        page: number;
        version: string;
    }
}
