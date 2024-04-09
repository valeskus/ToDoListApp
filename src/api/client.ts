import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, Auth } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

class Client {
    private app: FirebaseApp;

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
    }

    signInWithEmailAndPassword(email: string, password: string) {
        return signInWithEmailAndPassword(getAuth(client.app), email, password);
    }

    createUserWithEmailAndPassword(email: string, password: string) {
        return createUserWithEmailAndPassword(getAuth(client.app), email, password);
    }
}

export const client = new Client();
