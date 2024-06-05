import { Delete, Edit } from '@mui/icons-material';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';
import { toast } from 'react-toastify';

interface Task {
  id: number;
  name: string;
  description: string;
}

interface Props {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  currentTask: Task | null;
  open: boolean;
  setCurrentTask: (task: Task | null) => void;
  setOpen: (open: boolean) => void;
}

export const ListTasks = ({
  tasks,
  setTasks,

  setCurrentTask,

  setOpen,
}: Props) => {
  const handleDelete = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    toast.success('Task deleted successfully');
  };

  const handleEdit = (task: Task) => {
    setCurrentTask(task);
    setOpen(true);
  };

  return (
    <>
      <Typography variant="h4" gutterBottom align="center">
        Tasks
      </Typography>
      <List>
        {/* if empty return in the center, no task */}
        {tasks.length === 0 && (
          <Grid container justifyContent="center">
            <Typography variant="body1" align="center">
              No tasks available. Create one now.
            </Typography>
          </Grid>
        )}
        {tasks.map((task) => (
          <React.Fragment key={task.id}>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={task.name}
                secondary={task.description}
                primaryTypographyProps={{ variant: 'h6' }}
              />
              <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(task)}>
                <Edit />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDelete(task.id)}
              >
                <Delete />
              </IconButton>
            </ListItem>
            <Divider component="li" />
          </React.Fragment>
        ))}
      </List>
    </>
  );
};
