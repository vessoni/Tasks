import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

import { PurpleButton } from '../../components/forms/styles';

export const Home = () => {
  return (
    <Box mt={4} mb={4}>
      <Card>
        <CardHeader title={<h1>Welcome to the Tasks Management App</h1>} />
        <Divider />
        <CardContent>
          <Typography variant="body1" paragraph>
            This application is designed to help you manage your tasks efficiently. Using
            this app, you can easily create, edit, and remove tasks. Below is an overview
            of the main features:
          </Typography>

          <Typography variant="h5" gutterBottom>
            Features
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Link to="/tasks">
                <PurpleButton>Tasks Page</PurpleButton>
              </Link>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Create Tasks"
                    secondary="Use the form to add new tasks by providing a name and description."
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Task List"
                    secondary="View all the tasks you have created in a list format."
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Edit Tasks"
                    secondary="Modify the details of your existing tasks."
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Remove Tasks"
                    secondary="Delete tasks that you no longer need."
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Responsive Design"
                    secondary="The application is designed to work seamlessly on both mobile and desktop devices."
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Link to="/users">
                <PurpleButton> Users Page</PurpleButton>
              </Link>

              <List>
                <ListItem>
                  <ListItemText primary="User List: Access a list of all users by navigating to the /users endpoint." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="User Details: Click on a user to view detailed information about them. This is achieved by navigating to /users/:id, where :id is the unique identifier of the user." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Refreshing the page while viewing a user’s details will retain the displayed information by fetching the user data again." />
                </ListItem>
              </List>
            </Grid>

            <Grid item xs={12} sm={12}>
              <Typography variant="body1" paragraph>
                We hope you find this app useful for managing your tasks and keeping track
                of user information. Explore the features and enjoy!
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};
