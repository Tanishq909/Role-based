import axios from 'axios';

const instance = axios.create({
    baseURL: "https://role-based-backend-git-master-tanishq909s-projects.vercel.app",
    headers: {
        "Content-Type": 'application/json'
    },
    withCredentials: true
});

export const get = (url, params) => instance.get(url, { params });
export const post = (url, data) => instance.post(url, data);
export const put = (url, data) => instance.put(url, data);
export const deleteUser = (url) => instance.delete(url);


// // Add a request interceptor
// instance.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     return config;
//   }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   });

// // Add a response interceptor
// instance.interceptors.response.use(function (response) {
//     console.log("Interceptor response",response)
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response;
//   }, function (error) {
//     console.log("Interceptor errror",error)
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error);
//   });


instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
instance.interceptors.response.use(function (response) {
        console.log('intercpert reponse',response)
    return response;
  }, function (error) {
    console.log('intercpert reponse',error)
    return Promise.reject(error);
  });
