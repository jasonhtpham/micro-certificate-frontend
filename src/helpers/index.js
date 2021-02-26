import { axiosInstance } from './API/axiosInstance';
import API from './API/api.js';
import CertAPI from './API/certApi.js';
import TextHelper from './data/TextHelper';
import OutputHelper from './data/OutputHelper';
import { useKeyPress, useLocalStorage, useLocation } from './hooks';
import { socketInstance, useSocket, socketAuthCallback } from './socket';
export {
  axiosInstance,
  API,
  CertAPI,
  TextHelper,
  OutputHelper,
  useKeyPress,
  useLocalStorage,
  useLocation,
  socketInstance,
  useSocket,
  socketAuthCallback
};
