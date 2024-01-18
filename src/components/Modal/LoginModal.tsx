import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import StrokeLine from '../StrokeLine';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { forgotPasswordByEmail } from '@/queries';
import PasswordVisibleInvisible from '../Shared/PasswordVisibleInvisible';
import { showToast } from '@/utils';
import Link from 'next/link';

interface IFormLoginInput {
  email: string;
  password: string;
}

interface LoginModalProps {
  openLoginModal: boolean;
  setOpenLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginModal: React.FC<LoginModalProps> = ({ setOpenLoginModal }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [signInData, setSignInData] = useState<boolean>(true);
  const [forgotPassword, setForgotPassWord] = useState<boolean>(false);
  const [passwordVisible, setPassWordVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<IFormLoginInput>();
  const {
    register: forgot,
    formState: { isValid: forgotValid },
    handleSubmit: forgotSubmit,
  } = useForm<any>();

  // Submit login button event handler
  const onSubmit: SubmitHandler<IFormLoginInput> = async (data) => {
    const { email, password } = data;

    setLoading(true);
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });
    setLoading(false);

    if (result?.error) {
      setAlertMessage('Invalid password or email, please try again. ');
      setShowAlert(true);
    } else {
      setOpenLoginModal(false);
      showToast('Login Successful.', 'success');
      if (router?.pathname === '/register') {
        router.push('/');
      }
    }
  };

  const handleForgotPassword = () => {
    setSignInData(false);
    setForgotPassWord(true);
  };

  // Submit login button event handler
  const onSubmitForgot: SubmitHandler<any> = async (data) => {
    setLoading(true);
    const result: any = await forgotPasswordByEmail(data);

    setLoading(false);
    if (result) {
      setOpenLoginModal(false);
      showToast('Reset password link has been sent to your inbox.', 'success');
    }
  };

  return (
    <div>
      <input type="checkbox" id="login_modal_id" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative p-[20px] md:p-[55px]">
          <label
            htmlFor="login_modal_id"
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={() => {
              setSignInData(true);
              setForgotPassWord(false);
            }}
          >
            ✕
          </label>
          {signInData && (
            <section>
              <div className="text-[32px] text-center">Sign in</div>
              <div className="py-5 flex justify-center">
                <StrokeLine />
              </div>
              <p className="mb-12 text-base md:text-[28px] text-center px-3">
                To gain access to exclusive offers, events and much more…
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-7">
                  <label className="block text-black apercu_regular text-sm mb-2">
                    Your email
                  </label>
                  <input
                    type="email"
                    placeholder="example@cruise-collective.com"
                    className="appearance-none border border-cruise  rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none "
                    {...register('email', { required: true })}
                  />
                  {errors.email?.type === 'required' && (
                    <p className="text-red text-sm mt-1">
                      Email name is required
                    </p>
                  )}
                </div>

                <div className="mb-7 relative">
                  <label className="block text-black apercu_regular text-sm mb-2">
                    Your password
                  </label>
                  <input
                    type={`${passwordVisible ? 'text' : 'password'}`}
                    placeholder="Password"
                    className="appearance-none border border-cruise  rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none"
                    {...register('password', { required: true })}
                  />
                  <PasswordVisibleInvisible
                    passwordVisible={passwordVisible}
                    setPassWordVisible={setPassWordVisible}
                  />
                  {errors.password && (
                    <div className="text-red text-sm mt-1">
                      Password is required
                    </div>
                  )}

                  {showAlert && (
                    <div className="bg-red-500 text-red p-1 mb-3 rounded">
                      {alertMessage}
                    </div>
                  )}
                </div>

                <div className="text-center">
                  <button
                    disabled={!isValid || loading}
                    type="submit"
                    className={`bg-cruise w-[200px] h-[50px] text-white text-sm apercu_regular uppercase tracking-[1.54px] ${
                      isValid && !loading
                        ? 'hover:underline hover:text-black'
                        : 'opacity-50'
                    }`}
                  >
                    Sign in
                  </button>
                </div>
              </form>

              <div className="mt-7 text-base text-center">
                <span className="cursor-pointer" onClick={handleForgotPassword}>
                  Recover your password{' '}
                </span>
                &nbsp; / &nbsp; Not yet registered?{' '}
                <Link
                  onClick={() => setOpenLoginModal(false)}
                  className="underline"
                  href="/register"
                >
                  Click here!
                </Link>
              </div>
            </section>
          )}

          {forgotPassword && (
            <section>
              <div className="text-[32px]">Forgot your password?</div>
              <div className="py-5">
                <StrokeLine />
              </div>

              <form onSubmit={forgotSubmit(onSubmitForgot)}>
                <div className="mb-7">
                  <label className="block text-black apercu_regular text-sm mb-2">
                    Enter email address
                  </label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="appearance-none border border-cruise  rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none"
                    {...forgot('email', {
                      required: 'Email is required',
                      pattern: {
                        value:
                          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: 'Please enter a valid email',
                      },
                    })}
                  />
                  {errors.email && (
                    <div className="text-red text-sm">
                      Please enter a valid email address
                    </div>
                  )}
                </div>

                <div className="text-center">
                  <button
                    disabled={!forgotValid || loading}
                    type="submit"
                    className={`bg-cruise w-[200px] h-[50px] text-white rounded text-sm apercu_regular uppercase tracking-[1.54px] ${
                      forgotValid && !loading
                        ? 'hover:underline hover:text-black'
                        : 'opacity-50'
                    }`}
                  >
                    Send email
                  </button>
                </div>
              </form>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
