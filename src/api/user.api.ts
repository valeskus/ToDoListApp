import { client } from "./client";

export const login = async (email: string, password: string) => {
    return client.signInWithEmailAndPassword(email, password);
}

export const register = async (email: string, password: string) => {
    return client.createUserWithEmailAndPassword(email, password);
}

export const logOut = () => {
    return client.signOut();
}

export const getUser = () => {
    return client.getUser();
}