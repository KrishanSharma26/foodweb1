import { axiosInstance } from '../../../config/axios';
let forgotToken = '';

export const signUp = async body => {
  try {
    const res = await axiosInstance.post('api/v1/signup', body);
    const user_id = res.data.user._id;
    return [user_id, true];
  } catch (error) {
    const message = error.response.data;
    return message;
  }
};

export const logIn = async body => {
  try {
    const res = await axiosInstance.post('api/v1/login', body, {
      withCredentials: true,
    });
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('user', JSON.stringify(res.data.user));

    return true;
  } catch (error) {
    const message = error.response.data;
    return message;
  }
};

export const forgotPassWord = async body => {
  try {
    const res = await axiosInstance.post('api/v1/forgotPassword', body);
    forgotToken = res.data.token;
    return true;
  } catch (error) {
    const message = error.response.data;
    return message;
  }
};

export const resetPassword = async body => {
  try {
    await axiosInstance.post(`api/v1//password/reset/:${forgotToken}`, body);
    return true;
  } catch (error) {
    const message = error.response.data;
    return message;
  }
};

export const emailVerification = async body => {
  try {
    await axiosInstance.post('api/v1/verifyEmail', body);
    return true;
  } catch (error) {
    const message = error.response.data;
    return message;
  }
};
