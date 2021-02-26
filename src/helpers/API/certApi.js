import { axiosInstance, errorHelper, generateSuccess } from './axiosInstance';

class CertAPI {

  create(certDetails) {
    return axiosInstance.post('admin/createCert', certDetails).then(response => {
      return generateSuccess(response.data);
    }).catch(error => errorHelper(error, "createCert"));
  }
}

const instance = new CertAPI();
export default instance;