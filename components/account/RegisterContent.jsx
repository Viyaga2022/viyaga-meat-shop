import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PreLoader from '../PreLoader';
import toast from 'react-hot-toast';
import { register, reset } from '@/redux/slices/authSlice';
import { useRouter } from 'next/navigation';

const RegisterContent = () => {
    const [formData, setFormData] = useState({})
    const [checkboxChecked, setCheckboxChecked] = useState(false)

    const dispatch = useDispatch()
    const router = useRouter()
    const { registerSuccessMsg, registerErrorMsg, isLoading } = useSelector((state) => state.auth)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        const { name, email, password } = formData

        if (!name, !email, !password) {
            toast.error('Please Enter the required field')
        } else if (!checkboxChecked) {
            toast.error('Please Accept our terms and conditions')
        }
        else {
            dispatch(register(formData))  
        }
    }

    useEffect(() => {
        if (registerErrorMsg) {
            toast.error(registerErrorMsg)
        }

        if (registerSuccessMsg) {
            toast.success(registerSuccessMsg)
            setTimeout(() => {
                router.push('/account/login')
            },2000)
        }

        dispatch(reset())
    }, [registerErrorMsg, registerSuccessMsg])

    return (
        <>
            <div className="page-content">
                <div className="account-box">
                    <div className="page-title">
                        <h5 className="title">Register</h5>
                    </div>
                    <div className="container">
                        <div className="section-head text-center">
                            <h2>Getting Started</h2>
                            <p>Create an account to continue!</p>
                        </div>
                        <div className="account-area">
                            <form>
                                <div className="mb-3 input-group input-group-icon">
                                    <div className="input-group-text">
                                        <div className="input-icon">
                                            <svg
                                                width={16}
                                                height={21}
                                                viewBox="0 0 16 21"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M8 7.75C10.0711 7.75 11.75 6.07107 11.75 4C11.75 1.92893 10.0711 0.25 8 0.25C5.92893 0.25 4.25 1.92893 4.25 4C4.25 6.07107 5.92893 7.75 8 7.75Z"
                                                    fill="#7D8FAB"
                                                />
                                                <path
                                                    d="M15.5 16.75V18.25C15.4985 18.4488 15.4207 18.6395 15.2825 18.7825C13.61 20.455 8.57 20.5 8 20.5C7.43 20.5 2.39 20.455 0.7175 18.7825C0.579333 18.6395 0.501458 18.4488 0.5 18.25V16.75C0.5 14.7609 1.29018 12.8532 2.6967 11.4467C4.10322 10.0402 6.01088 9.25 8 9.25C9.98912 9.25 11.8968 10.0402 13.3033 11.4467C14.7098 12.8532 15.5 14.7609 15.5 16.75Z"
                                                    fill="#7D8FAB"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <input type="text" name='name' onChange={handleChange} className="form-control" placeholder="Name" />
                                </div>
                                <div className="mb-3 input-group input-group-icon">
                                    <div className="input-group-text">
                                        <div className="input-icon">
                                            <svg
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M23.208 5.35425C23.1103 4.7009 22.7817 4.10419 22.2818 3.67229C21.7819 3.24039 21.1439 3.00188 20.4832 3H3.51674C2.85613 3.00188 2.21805 3.24039 1.71818 3.67229C1.2183 4.10419 0.889719 4.7009 0.791992 5.35425L12 12.6068L23.208 5.35425Z"
                                                    fill="#7D8FAB"
                                                />
                                                <path
                                                    d="M12.4072 14.13C12.2859 14.2085 12.1445 14.2502 12 14.2502C11.8555 14.2502 11.7141 14.2085 11.5927 14.13L0.75 7.1145V18.2332C0.750794 18.9668 1.04255 19.6701 1.56124 20.1887C2.07993 20.7074 2.78321 20.9992 3.51675 21H20.4833C21.2168 20.9992 21.9201 20.7074 22.4388 20.1887C22.9575 19.6701 23.2492 18.9668 23.25 18.2332V7.11375L12.4072 14.13Z"
                                                    fill="#7D8FAB"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <input type="email" name='email' onChange={handleChange} className="form-control" placeholder="Email" />
                                </div>
                                <div className="mb-3 input-group input-group-icon">
                                    <div className="input-group-text">
                                        <div className="input-icon">
                                            <svg
                                                width={14}
                                                height={20}
                                                viewBox="0 0 14 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M13 6H12V3C12 2.20435 11.6839 1.44129 11.1213 0.87868C10.5587 0.316071 9.79565 0 9 0H5C4.20435 0 3.44129 0.316071 2.87868 0.87868C2.31607 1.44129 2 2.20435 2 3V6H1C0.734784 6 0.48043 6.10536 0.292893 6.29289C0.105357 6.48043 0 6.73478 0 7V15C0 16.3261 0.526784 17.5979 1.46447 18.5355C2.40215 19.4732 3.67392 20 5 20H9C10.3261 20 11.5979 19.4732 12.5355 18.5355C13.4732 17.5979 14 16.3261 14 15V7C14 6.73478 13.8946 6.48043 13.7071 6.29289C13.5196 6.10536 13.2652 6 13 6ZM4 3C4 2.73478 4.10536 2.48043 4.29289 2.29289C4.48043 2.10536 4.73478 2 5 2H9C9.26522 2 9.51957 2.10536 9.70711 2.29289C9.89464 2.48043 10 2.73478 10 3V6H4V3ZM8 13.72V15C8 15.2652 7.89464 15.5196 7.70711 15.7071C7.51957 15.8946 7.26522 16 7 16C6.73478 16 6.48043 15.8946 6.29289 15.7071C6.10536 15.5196 6 15.2652 6 15V13.72C5.69772 13.5455 5.44638 13.2949 5.27095 12.9932C5.09552 12.6914 5.00211 12.349 5 12C5 11.4696 5.21071 10.9609 5.58579 10.5858C5.96086 10.2107 6.46957 10 7 10C7.53043 10 8.03914 10.2107 8.41421 10.5858C8.78929 10.9609 9 11.4696 9 12C8.99789 12.349 8.90448 12.6914 8.72905 12.9932C8.55362 13.2949 8.30228 13.5455 8 13.72Z"
                                                    fill="#7D8FAB"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <input
                                        type="password"
                                        name='password'
                                        className="form-control dz-password"
                                        placeholder="Password"
                                        onChange={handleChange}
                                    />
                                    <span className="input-group-text show-pass">
                                        <i className="fa fa-eye-slash text-primary" />
                                        <i className="fa fa-eye text-primary" />
                                    </span>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        onClick={() => setCheckboxChecked(!checkboxChecked)}
                                        defaultValue=""
                                        id="flexCheckChecked"
                                    />
                                    <label className="form-check-label" htmlFor="flexCheckChecked">
                                        Accept our terms and Condition
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer fixed">
                <div className="container">
                    <button type='submit' onClick={handleRegister} className="btn mb-3 btn-primary w-100">
                        {isLoading?'Loading...':' REGISTER'}
                    </button>
                    <div className="text-center text-primary">
                        <Link href="/account/login" className="text-secondary font-w600">
                            Already have an account ? Log in
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default RegisterContent