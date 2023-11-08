import React from 'react';
import EyeVisible from './EyeVisible';
import EyeInvisible from './EyeInvisible';

const PasswordVisibleInvisible = ({passwordVisible, setPassWordVisible}) => {
    return (
        <div
        onClick={() => setPassWordVisible(!passwordVisible)}
        className="absolute right-3 top-9 cursor-pointer"
      >
        {passwordVisible && <EyeVisible />}
        {!passwordVisible && <EyeInvisible />}
      </div>
    );
};

export default PasswordVisibleInvisible;