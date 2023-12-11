import { ReactNode } from 'react';
import { notification } from 'antd';
import { BsInfoCircle, BsCheckCircle } from '../../assets/icon';

import TextElement from '../Text';

notification.config({
  duration: 10, // it's seconds
  placement: 'bottomLeft',
});

const showNotification = ({ message, description, ...props }: any) => {
  notification.open({
    message: (
      <TextElement size='sm' weight='medium' type='subTitle'>
        {message}
      </TextElement>
    ),
    description: description && (
      <TextElement size='sm' type='secondary' className=' lowercase'>
        {description}
      </TextElement>
    ),

    ...props,
  });
};

const DestroyNotifications = () => {
  notification.destroy();
};

// const closeNotificatin = (key: string) => {
//   notification.close(key);
// };
interface INotificationCaller {
  message: string | ReactNode;
  data?: {};
  description?: string | ReactNode;
}
interface INotification {
  warning: ({ message, description }: INotificationCaller) => void;
  error: ({ message, description }: INotificationCaller) => void;
  success: ({ message, description }: INotificationCaller) => void;
  info: ({ message, description }: INotificationCaller) => void;
  displayInfo: (message: INotificationCaller) => void;
}

class Notification implements INotification {
  info({ ...props }: INotificationCaller) {
    showNotification({ ...props });
  }
  warning({ ...props }: INotificationCaller) {
    showNotification({
      type: 'warning',
      icon: <BsInfoCircle className='warningIcon' />,
      ...props,
    });
  }
  success({ ...props }: INotificationCaller) {
    showNotification({
      type: 'success',
      icon: <BsCheckCircle className='successIcon' />,
      ...props,
    });
  }

  error({ ...props }: INotificationCaller) {
    const key = `notif${Math.random()}`;

    showNotification({
      type: 'error',
      key,
      duration: 0,
      ...props,
    });
  }

  displayInfo(message: INotificationCaller) {
    // if (Object.keys(message.data).length) {
    //   return false;
    // }
    if (message.message === 'info') {
      this.info(message);
    }
    if (message.message === 'warning') {
      this.warning(message);
    }
    if (message.message === 'success') {
      this.success(message);
    }
    if (message.message === 'error') {
      this.error(message);
    }
  }
}

export { DestroyNotifications, Notification };
// eslint-disable-next-line import/no-anonymous-default-export
export default new Notification();
