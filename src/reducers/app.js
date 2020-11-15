/**
 * reducer app
 */

const SET_STATE = 'app/updateState'

const DUMMY_LIST = [{"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"},{"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"},{"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"},{"id":4,"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"},{"id":5,"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"},{"id":6,"email":"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"}]

export const setState = updateState => {
  return {
    type: SET_STATE,
    payload: { updateState }
  }
}

export function fetchUserList() {
    return dispatch => {
        console.log('...fetchUserList')
        let action = setState({ list: DUMMY_LIST })
        dispatch(action)
    }
}

const initialState = {
    list: [],
    total: 0
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_STATE:
      return { ...state, ...action.payload.updateState }

    default:
      return state
  }
}

// dispatch(setState({ list: [] }))
// const url = `https://reqres.in/api/users`
// fetch(url)
//     .then(res => res.json())
//     .then(json => {
//         dispatch(setState({ list: json.data, total: json.total }))
//     });