import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <>
            <div className='container'>
                <Link to="/">
                    <img style={{ height: 32 }} src="/images/logo.svg" alt="logo" />
                </Link>
            </div>
            <div className='border-bottom'></div>
        </>
    )
}

export default Header;