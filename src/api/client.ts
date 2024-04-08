import { initializeApp } from 'firebase/app';

class Client {
    public app: any;

    constructor() {

        // Initialize Firebase
        const firebaseConfig = {
            apiKey: 'api-key',
            authDomain: 'project-id.firebaseapp.com',
            databaseURL: 'https://project-id.firebaseio.com',
            projectId: 'project-id',
            storageBucket: 'project-id.appspot.com',
            messagingSenderId: 'sender-id',
            appId: 'app-id',
            measurementId: 'G-measurement-id',
        };

        this.app = initializeApp(firebaseConfig);
    }
}

export const client = new Client();