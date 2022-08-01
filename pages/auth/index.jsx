import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CallIcon from '@mui/icons-material/Call';
import LockIcon from '@mui/icons-material/Lock';
import MailIcon from '@mui/icons-material/Mail';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  emailVerification,
  forgotPassWord,
  logIn,
  signUp,
} from '../api/auth/auth';
import styleForgotPassword from './css/forgotPassword.module.css';
import styleLogin from './css/login.module.css';
import styleSignup from './css/signup.module.css';

export default function SignUp() {
  const [signup, setLogin] = useState('none');
  const [login, setSignUp] = useState('flex');
  const [forgotPassword, setforgotPassword] = useState('none');

  const [verifyEmail, setVerifyEmail] = useState('none');

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [userId, setUserId] = useState('');
  const [btn, setBtn] = useState('');

  const form = useRef(null);
  const router = useRouter();

  const setStyle = (login, signup, forgotPassword, verifyEmail) => {
    setLogin(login);
    setSignUp(signup);
    setforgotPassword(forgotPassword);
    setVerifyEmail(verifyEmail);
  };

  const toastHandler = (response, text) => {
    if (response) {
      setBtn('');
      toast.success(text, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error(text, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const onSubmit = async (data, e) => {
    e.preventDefault();

    await signUp(data).then(res => {
      if (res[1] === true) {
        setUserId(res[0]);
        form.current.reset();
        toastHandler(true, 'Sign up successful, Verify your email address.');
        setStyle('none', 'none', 'none', 'flex');
      } else {
        toastHandler(false, res);
      }
    });
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' });
  const signupPassword = watch('password');

  const loginHandler = async e => {
    e.preventDefault();
    const data = { email, password };
    await logIn(data).then(res => {
      if (res === true) {
        setEmail('');
        setPassword('');
        setBtn('');

        toastHandler(res, 'You Have Logged In Successfully.');
        setTimeout(() => router.push('/'), 2000);
      } else {
        toastHandler(false, res);
      }
    });
  };

  const forgotPasswordHandler = async e => {
    e.preventDefault();
    const data = { email, btn };
    if (btn === 'back') {
      setEmail('');
      setPassword('');
      setStyle('none', 'flex');
      setBtn('');
    } else {
      await forgotPassWord(data).then(res => {
        if (res === true) {
          setEmail('');
          setPassword('');
          setStyle('none', 'flex');
          toastHandler(res, 'Password reset email sent to your account.');
        } else {
          toastHandler(false, res);
        }
      });
    }
  };

  const emailVerifyHandler = async e => {
    e.preventDefault();
    const data = { otp, userId };
    if (otp !== '') {
      await emailVerification(data).then(res => {
        if (res === true) {
          setOtp('');
          setStyle('none', 'flex', 'none', 'none');
          toastHandler(res, 'Email verification successful.');
        } else {
          toastHandler(false, res);
        }
      });
    }
  };

  const validateEmailFormat = mail => {
    if (/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(mail)) {
      return false;
    }
    return true;
  };

  return (
    <div className={styleSignup.container}>
      <span className={styleSignup.illustration}>
        <Image
          src="/assets/svg/illustration.svg"
          alt="Illustration"
          width={1381}
          height={1100}
        ></Image>
      </span>
      <div className={styleSignup.leftCont}>
        <span className={styleSignup.img}>
          <Image
            src="/assets/svg/logo.svg"
            alt="sharmastore logo"
            width={80}
            height={80}
          />
        </span>
        <span className={styleSignup.title}>
          <Link href={'/'}>
            <h1>SHARMASTORE</h1>
          </Link>
          <p>SharmaStore never sleeps.</p>
        </span>
      </div>
      <div className={styleSignup.rightCont}>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <form
          ref={form}
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: `${signup}` }}
          className={styleSignup.signup}
        >
          <h2>Sign up</h2>
          <div className={styleSignup.input}>
            <input
              type="text"
              placeholder="Name"
              name="fullname"
              {...register('fullname', { required: 'Username is required!' })}
            />
            <AccountCircleIcon fontSize="small" color="disabled" />
          </div>
          <div className={styleSignup.error}>
            {errors.fullname && <p>{errors.fullname.message}</p>}
          </div>
          <div className={styleSignup.input}>
            <input
              type="email"
              placeholder="Email-Id"
              name="email"
              {...register('email', {
                required: 'Email Id is required!',
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: 'This Email format is not valid!',
                },
              })}
            />
            <MailIcon fontSize="small" color="disabled" />
          </div>
          <div className={styleSignup.error}>
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div className={styleSignup.input}>
            <input
              type="text"
              placeholder="Mobile-Number"
              name="number"
              {...register('number', {
                required: 'Mobile-number is required!',
                minLength: {
                  value: 10,
                  message: 'Mobile-number must be equal to 10 charectors!',
                },
                maxLength: {
                  value: 10,
                  message:
                    'Mobile-number cannot exceed more than 10 charectors!',
                },
              })}
            />
            <CallIcon fontSize="small" color="disabled" />
          </div>
          <div className={styleSignup.error}>
            {errors.number && <p>{errors.number.message}</p>}
          </div>
          <div className={styleSignup.input}>
            <input
              type="password"
              placeholder="Password"
              name="password"
              {...register('password', {
                required: 'Password is required!',
                minLength: {
                  value: 8,
                  message: 'Password must be more than 8 charectors!',
                },
                maxLength: {
                  value: 13,
                  message: 'Password cannot exceed more than 13 charectors!',
                },
              })}
            />
            <LockIcon fontSize="small" color="disabled" />
          </div>
          <div className={styleSignup.error}>
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <div className={styleSignup.input}>
            <input
              type="password"
              placeholder="Confirm-Password"
              name="confirmpassword"
              {...register('confirmpassword', {
                required: 'Confirm Password is required!',
                validate: value =>
                  value === signupPassword || 'Password do not match',
              })}
            />
            <LockIcon fontSize="small" color="disabled" />
          </div>
          <div className={styleSignup.error}>
            {errors.confirmpassword && <p>{errors.confirmpassword.message}</p>}
          </div>
          <button type="submit" className={styleSignup.btn}>
            sign up
          </button>
          <div className={styleSignup.loginpage}>
            <p>Already have an account?</p>

            <a onClick={() => setStyle('none', 'flex')}>&nbsp;Login</a>
          </div>
        </form>

        <form
          method="POST"
          style={{ display: `${login}` }}
          className={styleLogin.login}
          onSubmit={loginHandler}
        >
          <h2>Login</h2>
          <div className={styleLogin.logininput}>
            <input
              placeholder="Email-Id"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <MailIcon fontSize="small" color="disabled" />
          </div>
          <div className={styleLogin.error}>
            {btn === '1' && email === '' && <p>Email Id is required!</p>}
            {btn === '1' && email !== '' && validateEmailFormat(email) && (
              <p>The Email format is not valid!</p>
            )}
          </div>
          <div className={styleLogin.logininput}>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <LockIcon fontSize="small" color="disabled" />
          </div>
          <div className={styleLogin.error}>
            {btn === '1' && password === '' && <p>Password is required!</p>}
            {btn === '1' && password !== '' && password.length <= 7 && (
              <p>Password is more than 8 charectors!</p>
            )}
            {btn === '1' && password !== '' && password.length >= 13 && (
              <p>Password is less than 13 charectors!</p>
            )}
          </div>
          <div className={styleLogin.toForgotPassword}>
            <a onClick={() => setStyle('none', 'none', 'flex')}>
              Forgot Password ?
            </a>
          </div>
          <button
            type="submit"
            className={styleLogin.button}
            onClick={() => {
              setBtn('1');
            }}
          >
            Login
          </button>

          <div className={styleLogin.signuppage}>
            <p>Don't have an account?</p>

            <a
              onClick={() => {
                form.current.reset();
                setStyle('flex', 'none');
              }}
            >
              &nbsp;Signup
            </a>
          </div>
        </form>

        <form
          method="POST"
          onSubmit={forgotPasswordHandler}
          style={{ display: `${forgotPassword}` }}
          className={styleForgotPassword.forgot}
        >
          <h2>Forgot Password</h2>
          <p>Enter the Email address associated with your account.</p>
          <div className={styleForgotPassword.input}>
            <input
              placeholder="Email-Id"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <MailIcon fontSize="small" color="disabled" />
          </div>
          <div className={styleSignup.error}>
            {btn === '1' && email === '' && <p>Email Id is required!</p>}
            {btn === '1' && email !== '' && validateEmailFormat(email) && (
              <p>The Email format is not valid!</p>
            )}
          </div>
          <span className={styleForgotPassword.btn}>
            <button
              onClick={() => {
                setBtn('back');
                setStyle('none', 'flex', 'none');
              }}
              className={styleForgotPassword.button}
            >
              Back
            </button>
            <button
              type="submit"
              className={styleForgotPassword.button}
              onClick={() => {
                setBtn('1');
              }}
            >
              Next
            </button>
          </span>
        </form>

        <form
          method="POST"
          onSubmit={emailVerifyHandler}
          style={{ display: `${verifyEmail}` }}
          className={styleForgotPassword.forgot}
        >
          <h2>Verify Email</h2>
          <p>Enter OTP sent to your email address.</p>
          <div className={styleForgotPassword.input}>
            <input
              type="text"
              placeholder="OTP"
              name="otp"
              value={otp}
              onChange={e => setOtp(e.target.value)}
            />
            <input type="hidden" name="userId" value={userId} />
            <MailIcon fontSize="small" color="disabled" />
          </div>
          <div className={styleForgotPassword.error}>
            {btn === '1' && otp === '' && <p>OTP is required!</p>}
          </div>
          <span className={styleForgotPassword.btn}>
            <button
              type="submit"
              className={styleForgotPassword.button}
              style={{ marginLeft: 'auto' }}
              onClick={() => {
                setBtn('1');
              }}
            >
              Next
            </button>
          </span>
        </form>
      </div>
    </div>
  );
}
