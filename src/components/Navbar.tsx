import React from 'react'
import {Link} from 'react-router-dom'

class Navbar extends React.Component<any,any> {

    render(): React.ReactNode {
        return (
            <>
                <header>
                    <span>React Typescript SSR Boilerplate</span>
                    <span className='links'>
                        <Link to={'/'}>Home</Link>
                        <Link to={'/about'}>About Me</Link>
                    </span>
                </header>
            </>
        )
    }
}

export default Navbar