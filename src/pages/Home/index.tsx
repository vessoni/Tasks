import { Box, Container, List, ListItem, ListItemText, Typography } from '@mui/material';

export const Home = () => {
  return (
    <Container>
      <Box mt={4} mb={4}>
        <Typography variant="h4" gutterBottom>
          Welcome to the Tasks Management App
        </Typography>
        <Typography variant="body1" paragraph>
          This application is designed to help you manage your tasks efficiently. Using
          this app, you can easily create, edit, and remove tasks. Below is an overview of
          the main features:
        </Typography>

        <Typography variant="h5" gutterBottom>
          Features
        </Typography>

        <Typography variant="h6" gutterBottom>
          Tasks Page
        </Typography>
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
      </Box>
    </Container>
  );
};
