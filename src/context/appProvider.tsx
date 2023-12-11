import { Outlet } from 'react-router-dom';
import { UserProvider } from './userProvider';
import { DataProvider } from './dataProvider';

export const AppProvider = () => {
  return (
    <UserProvider>
      <DataProvider>
        <Outlet />
      </DataProvider>
    </UserProvider>
  );
};
