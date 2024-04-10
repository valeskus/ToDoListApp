import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, Firestore, setDoc, doc, getDoc } from 'firebase/firestore';
import { uuid } from 'uuidv4';

interface Item {
    id: string;
}

class Client {
    private app: FirebaseApp;
    private database: Firestore;

    constructor() {
        const firebaseConfig = {
            apiKey: "AIzaSyCxQ_s-07OJRvQYGLZ-ptBHUkgPED9tfAk",
            authDomain: "todolistapp-e432e.firebaseapp.com",
            projectId: "todolistapp-e432e",
            storageBucket: "todolistapp-e432e.appspot.com",
            messagingSenderId: "517413034743",
            appId: "1:517413034743:web:509e5ce33c072409b011f2",
            measurementId: "G-SH27VELCRG"
        };

        this.app = initializeApp(firebaseConfig);
        this.database = getFirestore(this.app);
    }

    signInWithEmailAndPassword(email: string, password: string) {
        return signInWithEmailAndPassword(getAuth(client.app), email, password);
    }

    createUserWithEmailAndPassword(email: string, password: string) {
        return createUserWithEmailAndPassword(getAuth(client.app), email, password);
    }

    async addItem<T extends Item>(userId: string, item: Omit<Item, 'id'>): Promise<Array<T>> {
        const items = await this.getItems(userId)

        const nextItems = [
            ...items,
            {
                ...item,
                id: uuid(),
            }
        ] as Array<T>;

        await setDoc(
            doc(this.database, "todos", userId), {
            items: nextItems
        });

        return nextItems;
    }

    getItems<T extends Item>(userId: string): Promise<Array<T>> {
        return getDoc(doc(this.database, 'todos', userId))
            .then((snapshot) => snapshot.data()?.items || []);
    }

    async editItem<T extends Item>(userId: string, editedItem: T): Promise<Array<T>> {
        const items = await this.getItems<T>(userId)

        const itemIndex = items.findIndex((item) => item.id === editedItem.id);

        if (itemIndex === -1) {
            throw new Error('Item not found');
        }

        items[itemIndex] = {
            ...items[itemIndex],
            ...editedItem
        };

        await setDoc(
            doc(this.database, "todos", userId), {
            items
        });

        return items;
    }
}

export const client = new Client();
