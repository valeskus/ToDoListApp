import { client } from "./client";

export interface Card {
    index: number;
    title: string;
    description: string;
    id: string;
}

export const add = (userId: string, card: Omit<Card, 'id'>) => {
    return client.addItem<Card>(userId, card);
}

export const get = (userId: string) => {
    return client.getItems<Card>(userId)
}
