import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile
} from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../firebase.init';
import Loading from '../Shared/Loading';

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  let signInError;

  if (user) {
    console.log(user);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  if (loading) {
    return <Loading></Loading>;
  }

  if (error) {
    signInError = (
      <p className="text-red-500">
        <small>{error?.message}</small>
      </p>
    );
  }

  const onSubmit = async (data) => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    toast('User Created');
    reset();
  };
  return (
    <div className="h-screen lg:mt-16  mb-0 flex bg-accent justify-center items-center">
      <div class="card flex-shrink-0 w-full  max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <h1 className="text-center text-2xl">SignUp</h1>
          <div class="form-control">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="form-control w-full max-w-xs">
                <label class="label" for="name">
                  <span class="label-text">Name</span>
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  class="input input-bordered w-full max-w-xs"
                  {...register('name', {
                    required: {
                      value: true,
                      message: 'Name is Required',
                    },
                  })}
                />
                <label class="label">
                  {errors.email?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label" for="email">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  class="input input-bordered w-full max-w-xs"
                  {...register('email', {
                    required: {
                      value: true,
                      message: 'Email is Required',
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: 'Provide a valid Email',
                    },
                  })}
                />
                <label class="label">
                  {errors.email?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === 'pattern' && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label" for="pass">
                  <span class="label-text">Password</span>
                </label>
                <input
                  type="password"
                  id="pass"
                  placeholder="Your Password"
                  class="input input-bordered w-full max-w-xs"
                  {...register('password', {
                    required: {
                      value: true,
                      message: 'Password is Required',
                    },
                    minLength: {
                      value: 6,
                      message: 'Must be 6 characters or longer',
                    },
                  })}
                />
                <label class="label">
                  {errors.password?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors?.password?.message}
                    </span>
                  )}
                  {errors.password?.type === 'minLength' && (
                    <span className="label-text-alt text-red-500">
                      {errors?.password?.message}
                    </span>
                  )}
                </label>
              </div>
              {signInError}
              <input
                class="btn btn-outline w-full max-w-xs"
                type="submit"
                value="SignUp"
              />
            </form>
            <p>
              <small>
                Already have an account?{' '}
                <Link className="text-primary px-2" to="/login">
                  Login
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
