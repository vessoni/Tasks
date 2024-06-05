import MaterialTable from '@material-table/core';
import { Box } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

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

export const UsersDetail = () => {
  // const { id } = useParams<{ id: string }>();
  // const { data, isPending } = useFetch<any>(`users/${id}`);
  // const navigate = useNavigate();

  // if (isPending || !data) {
  //   console.log('loading');
  //   return <div>Loading...</div>;
  // }

  // console.log(data);

  return (
    <Box mt={4} mb={4}>
      Hello
    </Box>
  );
};
