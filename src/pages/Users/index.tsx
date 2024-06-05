import MaterialTable from '@material-table/core';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
}

interface Data {
  users: User[];
}

export const Users = () => {
  const { data, isPending } = useFetch<Data>('users');
  const navigate = useNavigate();

  if (isPending || !data) {
    console.log('loading');
    return <div>Loading...</div>;
  }

  const handleRedirect = (user: User | undefined) => {
    navigate(`/users/${user?.id}`);
  };

  return (
    <Box mt={4} mb={4}>
      <MaterialTable
        title={<h1> Users </h1>}
        columns={[
          {
            title: 'Image',
            field: 'image',
            render: (rowData) => (
              <img
                src={rowData.image}
                style={{ width: 50, borderRadius: '50%' }}
                alt="UserImage"
              />
            ),
          },
          { title: 'id', field: 'id', hidden: true },
          { title: 'First Name', field: 'firstName' },
          { title: 'Last Name', field: 'lastName' },
          { title: 'Email', field: 'email' },
        ]}
        onRowClick={(event, rowData) => handleRedirect(rowData)}
        data={data.users}
        options={{
          pageSize: 10,
          pageSizeOptions: [10, 20, 30],
        }}
      />
    </Box>
  );
};
