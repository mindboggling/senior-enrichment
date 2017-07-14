import axios from 'axios';

//action type
const INITIALIZE = 'INITIALIZE_USER';
const UPDATE = 'UPDATE_USER';
const CREATE = 'CREATE_USER';
const REMOVE = 'REMOVE_USER';

//action creator
const init = users => ({ type: INITIALIZE, users });
const create = user => ({ type: CREATE, user });
const update = user => ({ type: UPDATE, user });
const remove = id => ({ type: REMOVE, id });

//reducer
export default function reducer(users = [], action) {
  switch (action.type) {
    case INITIALIZE:
      return action.users
    case CREATE:
      return [action.user, ...users]
    case UPDATE:
      return users.map(user => (
        action.user.id === user.id ? action.user : user))
    case REMOVE:
      return users.filter(user => user.id !== action.id)
    default:
      return users
  }
}

//thunk creator
export const fetchUsers = () => dispatch => {
  axios.get('/api/users')
    .then(res => dispatch(init(res.data)))
    .catch(err => console.error('Fetching students unsuccessful', err));
}

export const fetchUser = id => dispatch => {
  axios.get(`/api/users/${id}`)
    .then(res => dispatch(update(res.data)))
    .catch(err => console.error('Fetching student unsuccessful', err))
}

export const addUser = user => dispatch => {
  axios.post('/api/users', user)
    .then(res => dispatch(create(res.data)))
    .catch(err => console.error(`Creating student: ${user} unsuccessful`, err))
}

export const updateUser = (id, user) => dispatch => {
  axios.put(`/api/users/${id}`, user)
    .then(res => dispatch(update(res.data)))
    .catch(err => console.error(`Updating student: ${user} unsuccessful`, err))
}

export const removeUser = id => dispatch => {
  dispatch(remove(id))
  axios.delete(`/api/users/${id}`)
    .catch(err => console.error(`Deleting student: ${id} unsuccessful`, err))
}
