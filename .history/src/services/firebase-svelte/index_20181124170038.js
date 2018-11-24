import { Store } from 'svelte/store.js';
import { connect } from 'tls';

class FirebaseStore extends Store {
    
}

export const store = new FirebaseStore({
    todos: [],
    profile: {}
});

export default connect = ()=>{
    
}