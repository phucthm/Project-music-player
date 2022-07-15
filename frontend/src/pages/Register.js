import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { /*register,*/ reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'


function Register() {
  const [formData, setFormData] = useState({
    nickName: '',
    firstName: '',
    lastName: '',
    email: '',
    birthday: '',
    gender: '',
    phone: '',
  })

  const { nickName, firstName, lastName, email, birthday, gender ,phone  } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div class='heading' />
          <div class='avata'/>

          <view className='form-group'>
            <input
              type='text'
              className='form-control'
              id='nickName'
              name='nickName'
              value={nickName}
              placeholder='Enter your Nickname'
              onChange={onChange}
            />
          </view>

          <view className='form-group'>
            <input
              type='text'
              className='form-control'
              id='firstname'
              name='firstName'
              value={firstName}
              placeholder='Enter your First name'
              onChange={onChange}
            />
          </view>

          <view className='form-group'>
            <input
              type='text'
              className='form-control'
              id='lastName'
              name='lastName'
              value={lastName}
              placeholder='Enter your Last name'
              onChange={onChange}
            />
          </view>

          <view className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              placeholder='Enter your email'
              onChange={onChange}
            />
          </view>

          <view className='form-group'>
            <input
              type='DOB'
              className='form-control'
              id='birthday'
              name='birthday'
              value={birthday}
              placeholder='Enter your DOB'
              onChange={onChange}
            />
          </view>

          <view className='form-group'>
            <input
              type='gender'
              className='form-control'
              id='gender'
              name='gender'
              value={gender}
              placeholder='Enter your gender'
              onChange={onChange}
            />
          </view>

          <view className='form-group'>
            <input
              type='phone'
              className='form-control'
              id='phone'
              name='phone'
              value={phone}
              placeholder='Enter your phone number'
              onChange={onChange}
            />
          </view>

          <view className='form-group'>  

            <button type='submit' className='btn btn-block'>
              Change profile
            </button>

          </view>
          
        </form>
      </section>
    </>
  )
}

export default Register

