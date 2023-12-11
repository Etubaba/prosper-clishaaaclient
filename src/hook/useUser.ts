import local from '../utils/local';
import { appConfig } from '../constants/settings';

// remember to optimize this function
const SaveUser = (token: any) => {
  local.set(appConfig.userLocalKey, JSON.stringify(token));
};

const ClearUser = () => {
  local.remove(appConfig.userLocalKey);
};

const GetUser = async (): Promise<any> => {
  const userToken: string | null = local.get(appConfig.userLocalKey);

  if (userToken) {
    // const userObj: string[] = userToken.split('.');
    return new Promise((resolve) => {
      // const userInfo = {
      //   ...JSON.parse(atob(userObj[1])),
      //   verified: userObj[userObj.length - 1],
      // };
      resolve(JSON.parse(userToken));
    });
  }
  return null;
};
export { SaveUser, GetUser, ClearUser };
