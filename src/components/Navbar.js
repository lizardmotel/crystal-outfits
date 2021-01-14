import React, { Component } from 'react';


import {Link} from 'react-router-dom';
import styled from 'styled-components';
import MenuButton from './MenuButton';


class Navbar extends Component {

    render() {
        return (
            <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5 pb-0'>

                <MenuButton />

                <ul id='navBar' className='navbar-nav mx-auto px-0'>
                    <li className='nav-item mr-5'>
                        <Link to='/' className='nav-link'>
                            Home Page
                        </Link>
                    </li>
                </ul>
                
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
    background: var(--mainPurple);
    height: 60px;
    .nav-link {
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
    .nav-title {

    }
`;

export default Navbar;