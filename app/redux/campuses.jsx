import axios from 'axios';

//action type
const INITIALIZE = 'INITIALIZE_CAMPUSES';
const UPDATE = 'UPDATE_CAMPUS';
const CREATE = 'CREATE_CAMPUS';
const REMOVE = 'REMOVE_CAMPUS';

//action creator
const init = campuses => ({ type: INITIALIZE, campuses });
const update = campus => ({ type: UPDATE, campus });
const create = campus => ({ type: CREATE, campus });
const remove = id => ({ type: REMOVE, id });

//reducer
export default function reducer(campuses = [], action) {
  switch (action.type) {
    case INITIALIZE:
      return action.campuses
    case UPDATE:
      return campuses.map(campus => (
        action.campus.id === campus.id ? action.campus : campus))
    case CREATE:
      return [...campuses, action.campus]
    case REMOVE:
      return campuses.filter(campus => campus.id !== action.id)
    default:
      return campuses
  }
}

//thunk creator
export const fetchCampuses = () => dispatch => {
  axios.get('/api/campuses')
    .then(res => dispatch(init(res.data)))
    .catch(err => console.error('Fetching campuses unsuccessful', err));
}

export const fetchCampus = id => dispatch => {
  axios.get(`/api/campuses/${id}`)
    .then(res => dispatch(update(res.data)))
    .catch(err => console.error('Fetching campus unsuccessful', err))
}

export const addCampus = campus => dispatch => {
  axios.post('/api/campuses', campus)
    .then(res => dispatch(create(res.data)))
    .catch(err => console.error(`Creating campus: ${campus} unsuccessful`, err))
}

export const updateCampus = (id, campus) => dispatch => {
  axios.put(`/api/campuses/${id}`, campus)
    .then(res => dispatch(update(res.data)))
    .catch(err => console.error(`Updating campus: ${campus} unsuccessful`, err))
}

export const removeCampus = id => dispatch => {
  dispatch(remove(id))
  axios.delete(`/api/campuses/${id}`)
    .catch(err => console.error(`Deleting campus: ${id} unsuccessful`, err))
}
