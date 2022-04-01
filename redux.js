const {createStore} = Redux;

const initState = {
  todos: [],
  posts: []
}

function myreducer(state = initState, action) {
  if(action.type == 'ADD_TODO'){
    return {
      ...state,
      todos: [...state.todos, action.todo]
    }
  }
  if(action.type == 'ADD_POST'){
    return {
      ...state,
      posts: [...state.posts, action.post]
    }
  }
}


const store = createStore(myreducer);

store.subscribe(() => {
  console.log(store.getState());
})


store.dispatch({type:'ADD_TODO', todo:'buy hell'});
store.dispatch({type:'ADD_TODO', todo:'buy water'});
store.dispatch({type:'ADD_POST', post:'this is a random blog'});
store.dispatch({type:'ADD_POST', post:'annonymous blog is going on..'});
