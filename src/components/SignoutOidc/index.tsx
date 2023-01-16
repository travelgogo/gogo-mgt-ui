import React, { useEffect } from 'react'
import userManager from '../../utilities/identityOidc'
import { useNavigate} from 'react-router-dom'
import { signoutRedirectCallback } from 'services/identityService'

function SignoutOidc() {
  const navigate = useNavigate()
  useEffect(() => {
    async function signoutAsync() {
      await signoutRedirectCallback()
      navigate('/')
    }
    signoutAsync()
  }, [])

  return (
    <div>
      Redirecting...
    </div>
  )
}

export default SignoutOidc
