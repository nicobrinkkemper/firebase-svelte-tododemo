import { Store } from 'svelte/store.js';

class FirebaseStore extends Store {
    
}

export const store = new FirebaseStore({
    todos: [],
    profile: {}
});

export default connect = ()=>{
    
}