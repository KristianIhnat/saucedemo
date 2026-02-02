export interface User {
    username: string;
    password: string;
}

export interface UsersFixture {
    standardUser: User;
    lockedUser: User;
}