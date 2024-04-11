import { initializeApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore, setDoc, doc, getDoc } from 'firebase/firestore';
import uuid from 'react-native-uuid';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    getReactNativePersistence,
    initializeAuth,
    getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, Auth, User
} from "@firebase/auth";
import * as JSFirebase from 'firebase/auth'
import { Platform } from 'react-native';


interface Item {
    id: string;
}

class Client {
    private app: FirebaseApp;
    private database: Firestore;
    private auth: Auth;

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
        this.auth = initializeAuth(this.app, {
            persistence: Platform.OS === 'web'
                ? (JSFirebase as any).browserLocalPersistence
                : getReactNativePersistence(AsyncStorage),
        });
    }

    signInWithEmailAndPassword(email: string, password: string) {
        return signInWithEmailAndPassword(this.auth, email, password);
    }

    createUserWithEmailAndPassword(email: string, password: string) {
        return createUserWithEmailAndPassword(this.auth, email, password);
    }

    async signOut() {
        return signOut(getAuth(client.app))
    }

    getUser() {
        return new Promise<User | void>((resolve) => {
            this.auth.onAuthStateChanged((user) => {
                resolve(user);
            })
        });
    }

    async addItem<T extends Item>(userId: string, item: Omit<Item, 'id'>): Promise<Array<T>> {
        const items = await this.getItems(userId)

        const nextItems = [
            ...items,
            {
                ...item,
                id: uuid.v4(),
            }
        ] as Array<T>;

        await setDoc(
            doc(this.database, "todos", userId), {
            items: nextItems
        });

        return nextItems;
    }

    async getItems<T extends Item>(userId: string): Promise<Array<T>> {
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
