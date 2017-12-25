import axios from 'axios';

import apiUrl from '../utils/apiUrl';

export const getSentence = (access_token) => {
  return dispatch => {
    return axios({
      method: 'get',
      url: `${apiUrl()}/api/protected/random-quote`,
      headers: {'Authorization': `Bearer ${access_token}`}
    })
    .then(async res => {
      return dispatch({
        type: 'SET_SENTENCE',
        payload: { text: res.data },
      });
    })
    .catch(err => {
      alert(err.response.data)
    })
  }
}
