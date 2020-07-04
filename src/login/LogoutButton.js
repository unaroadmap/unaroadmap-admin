import * as React from 'react';
import { forwardRef } from 'react';
import { useLogout } from 'react-admin';
import MenuItem from '@material-ui/core/MenuItem';
import ExitIcon from '@material-ui/icons/PowerSettingsNew';

const LogoutButton = forwardRef((props, ref) => {
    const logout = useLogout();
    const handleClick = () => logout('/custom-login');
    return (
        <MenuItem 
            onClick={handleClick}
            ref={ref}
        >
            <ExitIcon /> Logout
        </MenuItem>
    )
});

export default LogoutButton;