// pages/login.js or pages/login.tsx
import LoginModal from '@/components/Modal/LoginModal';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const Login = () => {
  const router = useRouter();
  const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);

  useEffect(() => {
  
    if (router.pathname === '/login') {
      
      document.getElementById('login_modal_id')?.click();
      setOpenLoginModal(true);
    }
  }, [router.pathname]);

  return (
  <>
  
  <label
            
              className="cursor-pointer hidden"
              htmlFor="login_modal_id"
            >
              Sign in
            </label>
      
            <LoginModal
          openLoginModal={openLoginModal}
          setOpenLoginModal={setOpenLoginModal}
        />
  
  </>
        

  );
};

export default Login;
