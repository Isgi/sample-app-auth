import axios from 'axios';
import { AsyncStorage } from 'react-native';

import apiUrl from '../utils/apiUrl';


export const authentication = (access_token) => {
  if (access_token) {
    return {
      type: 'Login',
      payload: { access_token }
    }
  }
}

export const login = ({username, password}) => {
  return dispatch => {
    return axios({
      method: 'post',
      url: `${apiUrl()}/sessions/create`,
      data: {
        username,
        password
      }
    })
    .then(async res => {
      //token in res.data.access_token
      const { access_token } = res.data;
      //if access_token exists
      if (access_token) {
        //save token to localstorage
        try {
          await AsyncStorage.setItem('@access_token', access_token);
          dispatch(authentication(res.data.access_token));
        } catch (error) {
          console.log(error);
          // Error saving data
          alert('Something is wrong '+error);
        }
      } else {
        alert('Something is wrong');
      }
    })
    .catch(err => {
      alert(err.response.data)
    })
  }
}

export const register = ({username, password, name}) => {
  return dispatch => {
    return axios({
      method: 'post',
      url: `${apiUrl()}/users`,
      data: {
        username,
        password,
        name
      }
    })
    .then(async res => {
      //token in res.data.access_token
      const { access_token } = res.data;
      //if access_token exists
      if (access_token) {
        //save token to localstorage
        try {
          await AsyncStorage.setItem('@access_token', access_token);
          dispatch(authentication(res.data.access_token));
        } catch (error) {
          console.log(error);
          // Error saving data
          alert('Something is wrong '+error);
        }
      } else {
        alert('Something is wrong');
      }
    })
    .catch(err => {
      console.log(error);
      alert('Something is wrong '+error);
    })
  }
}

export const logout = () => {
  return async dispatch => {
    try {
      const error = await AsyncStorage.removeItem('@access_token');
      if (!error){
        return dispatch({
          type: 'Logout'
        })
      }
    } catch (error) {
      console.log(error);
      // Error remove data
      alert('Something is wrong '+error);
    }
  }
}
