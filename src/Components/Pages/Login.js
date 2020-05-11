import React, { useState } from 'react';
import { Redirect } from 'react-router'
import Axios from 'axios';

import qs from 'query-string';
import { useGlobal } from '../../state';

const backendEndpoint = 'https://yyc-server.herokuapp.com';
const getTokenFromQuery = () => {
  const queryValues = qs.parse(window.location.search);
  return queryValues.token
}

const Login = () => {
  const [loadingSpinner, setLoadingSpinner] = useState(false)
  const [loadUser, setLoadUser] = useState(false)
  const [ global, setGlobal, user ] = useGlobal()

  function fetchUser(token) {
    setLoadUser(true)
    Axios.get(`${backendEndpoint}/user/profile`, { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => {
      setGlobal({ ...global, user: res.data.data })
      setLoadUser(false)
    })
    .catch(error => { setLoadUser(false); console.log('error', error)})
  }

  if(global.user) {
    return <Redirect to="/projects" />
  }
  const token = getTokenFromQuery()

  if (token && !loadingSpinner) {
    if (!user && !loadUser) {
      fetchUser(token)
    }
    setGlobal({...global, token})
    setLoadingSpinner(true)
  }

  if (loadingSpinner) {
    return (
      <div>
        <button type="primary" loading>
          Loading
        </button>
      </div>
    )
  }

  return (
    <main id="login-page">
      <div>YYC Labs</div>
      <p>A GitHub account is required to login to YYC Labs.</p>
      <a href={backendEndpoint +"/auth/github"}>  login </a>
    </main>
  )
}

export default Login