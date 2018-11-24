import { Store } from 'svelte/store.js';

class FirebaseStore extends Store {
    
}

const store = new FirebaseStore({
    todos: [],
    profile: {}
});