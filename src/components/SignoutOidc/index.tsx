import React, { useEffect } from 'react'
import userManager from '../../utilities/identityOidc'
import { useNavigate} from 'react-router-dom'

function SignoutOidc() {
  const navigate = useNavigate()
  useEffect(() => {
    async function signoutAsync() {
      await userManager.signoutRedirectCallback()
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
