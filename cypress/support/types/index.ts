/**
 * User credentials interface
 */
export interface User {
    username: string;
    password: string;
}

/**
 * Available user types in the system
 */
export type UserType =
    | 'standardUser'
    | 'lockedUser'
    | 'problemUser'
    | 'performanceGlitchUser'
    | 'errorUser'
    | 'visualUser';

/**
 * Users fixture structure
 */
export type UsersFixture = Record<UserType, User>;

/**
 * Customer information for checkout
 */
export interface CustomerInfo {
    firstName: string;
    lastName: string;
    postalCode: string;
}

