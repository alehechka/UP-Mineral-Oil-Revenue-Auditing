import * as React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

interface NavbarProps {
    auth: any,
    profile: {
        initials: string;
    }
}

const Navbar = (props: NavbarProps) => {
    const links = props.auth.uid ? <SignedInLinks profile={props.profile} /> : <SignedOutLinks />;
    const url = window.location.protocol + "//" + window.location.host;
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <img src={`${url}/uplogo.png`} width="53px" height="60px" style={{paddingRight: "5px", paddingTop: "3px"}} alt="Union Pacific Logo"></img>
                <Link to="/" className="brand-logo"> UP MORA</Link>
                {links}
            </div>
        </nav>
    );
}

const mapStateToProps = (state: any) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);
