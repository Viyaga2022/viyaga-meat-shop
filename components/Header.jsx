"use client"


import { getUserAccount, logout, reset } from '@/redux/slices/authSlice'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PreLoader from './PreLoader'
import toast from 'react-hot-toast'
import { toggleSidebar } from '@/redux/slices/commonSlice'

function Header() {
    const dispatch = useDispatch()
    const router = useRouter()
    const { currentUser, userLoading, userErrorMsg } = useSelector((state) => state.auth)

    //const token = localStorage.getItem('auth')
    //console.log({token});

    useEffect(() => {

        if (!currentUser) {
            const token = localStorage.getItem('auth')
            console.log(token);
            if (!token) {
                //return router.replace('/accoun/login')
            }
            //dispatch(getUserAccount(token))
        }
        console.log({currentUser});
        if (userErrorMsg) {
            toast.error(userErrorMsg)
            setTimeout(() => {
                //dispatch(logout())
            }, 2000)
        }

        dispatch(reset())

    }, [userErrorMsg, currentUser, dispatch])

    if (userLoading) {
        return <PreLoader />
    }

    return (
        <header className="header style-4 bg-img header-fixed">
            <div className="container">
                <div className="header-content">
                    <div className="location">
                        <div className="location-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path
                                    d="M341.476 338.285l49.204-77.056C410.516 233.251 421 200.322 421 166 421 74.98 347.139 0 256 0 165.158 0 91 74.832 91 166c0 34.3 10.704 68.091 31.19 96.446l48.332 75.84C118.847 346.227 31 369.892 31 422c0 18.995 12.398 46.065 71.462 67.159C143.704 503.888 198.231 512 256 512c108.025 0 225-30.472 225-90 0-52.117-87.744-75.757-139.524-83.715zm-194.227-92.34a15.57 15.57 0 0 0-.517-.758C129.685 221.735 121 193.941 121 166c0-75.018 60.406-136 135-136 74.439 0 135 61.009 135 136 0 27.986-8.521 54.837-24.646 77.671-1.445 1.906 6.094-9.806-110.354 172.918L147.249 245.945zM256 482c-117.994 0-195-34.683-195-60 0-17.016 39.568-44.995 127.248-55.901l55.102 86.463a15 15 0 0 0 25.298 0l55.101-86.463C411.431 377.005 451 404.984 451 422c0 25.102-76.313 60-195 60zm0-391c-41.355 0-75 33.645-75 75s33.645 75 75 75 75-33.645 75-75-33.645-75-75-75zm0 120c-24.813 0-45-20.187-45-45s20.187-45 45-45 45 20.187 45 45-20.187 45-45 45z"
                                    fill="#fff"
                                />
                            </svg>
                        </div>
                        <div className="location-content">
                            <div className="d-flex align-items-center">
                                <h5 className="title me-2">Work</h5>
                            </div>
                            <p>Rkpuram sector-b near chawla circle....</p>
                        </div>
                        {/* javascript:void(0); */}
                        <div className="menu-toggler icon-box-2" onClick={() => dispatch(toggleSidebar())} >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 297.001 297.001">
                                <path d="M107.883 0h-85.27C10.144 0 .001 10.143.001 22.612v85.27c0 12.469 10.143 22.612 22.612 22.612h85.27c12.469 0 22.612-10.143 22.612-22.612v-85.27C130.493 10.143 120.352 0 107.883 0zm166.505 0h-85.27c-12.469 0-22.612 10.143-22.612 22.612v85.27c0 12.469 10.143 22.612 22.612 22.612h85.27c12.469 0 22.612-10.143 22.612-22.612v-85.27C297 10.143 286.857 0 274.388 0zM107.883 166.507h-85.27c-12.469 0-22.612 10.142-22.612 22.611v85.27C.001 286.857 10.144 297 22.613 297h85.27c12.469 0 22.612-10.143 22.612-22.612v-85.27c-.002-12.469-10.143-22.611-22.612-22.611zm166.505 0h-85.27c-12.469 0-22.612 10.143-22.612 22.612v85.27c0 12.469 10.143 22.612 22.612 22.612h85.27C286.857 297 297 286.857 297 274.388v-85.27c0-12.469-10.143-22.611-22.612-22.611z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="search-box style-1">
                    <div className="input-group input-radius">
                        <span className="input-group-text">
                            <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.9395 1.9313C5.98074 1.9313 1.94141 5.97063 1.94141 10.9294C1.94141 15.8881 5.98074 19.9353 10.9395 19.9353C13.0575 19.9353 15.0054 19.193 16.5449 17.9606L20.293 21.7067C20.4821 21.888 20.7347 21.988 20.9967 21.9854C21.2587 21.9827 21.5093 21.8775 21.6947 21.6924C21.8801 21.5073 21.9856 21.2569 21.9886 20.9949C21.9917 20.7329 21.892 20.4802 21.7109 20.2908L17.9629 16.5427C19.1963 15.0008 19.9395 13.0498 19.9395 10.9294C19.9395 5.97063 15.8982 1.9313 10.9395 1.9313ZM10.9395 3.93134C14.8173 3.93134 17.9375 7.05153 17.9375 10.9294C17.9375 14.8072 14.8173 17.9352 10.9395 17.9352C7.06162 17.9352 3.94141 14.8072 3.94141 10.9294C3.94141 7.05153 7.06162 3.93134 10.9395 3.93134Z"
                                    fill="#7D8FAB"
                                />
                            </svg>
                        </span>
                        <input
                            type="text"
                            placeholder="Type product name to search"
                            className="form-control main-in ps-0 bs-0"
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header