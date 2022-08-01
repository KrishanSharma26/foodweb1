import LockIcon from '@mui/icons-material/Lock';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router";
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { resetPassword } from '../api/auth/auth';
import styleLogin from './css/login.module.css';
import styleSignup from './css/signup.module.css';

export default function SignUp() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' });
  const password = watch('password');

  const toastHandler = (response, text) => {
    if (response) {
      toast.success(text, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error(text, {
        position: 'top-center',
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

    await resetPassword(data).then(res => {
      if (res) {
        router.push('/auth');
        toastHandler(res, 'Password reset successful.');
      } else {
        router.push('/auth');
        toastHandler(res, 'Token is invalid or expired.');
      }
    });
  };

  return (
    <div className={styleSignup.container}>
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
        <span className={styleSignup.illustration}>
          <Image
            src="/assets/svg/Illustration.svg"
            alt="Illustration"
            width={1381}
            height={1100}
          ></Image>
        </span>
      </div>
      <div className={styleSignup.rightCont}>
        <form
          method="POST"
          style={{ display: 'flex' }}
          className={styleLogin.login}
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2>Reset Password</h2>

          <div className={styleLogin.logininput}>
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

          <div className={styleLogin.error}>
            {errors.password && <p>{errors.password.message}</p>}
          </div>

          <div className={styleLogin.logininput}>
            <input
              type="password"
              placeholder="Confirm-Password"
              name="confirmPassword"
              {...register('confirmPassword', {
                required: 'Confirm Password is required!',
                validate: value =>
                  value === password || 'Password do not match',
              })}
            />
            <LockIcon fontSize="small" color="disabled" />
          </div>
          <div className={styleLogin.error}>
            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
          </div>

          <button type="submit" className={styleLogin.button}>
            Reset
          </button>
        </form>
      </div>
    </div>
  );
}
