import React from 'react';
import Gun from 'gun';
import AuthModal from './AuthModal';
require('gun/sea');

 const AuthLayer = (props) => {

const gun = Gun();
const user = gun.user();
   
    const hasCurrentUser = () => {
        if (user._.sea) {
            return true;
        }
        return false;
    }
    return (
        <div>
        {!hasCurrentUser() &&
            (<div className="backdrop">
                <AuthModal/>
            </div>)
        }
        </div>
    )
}
export default AuthLayer;