import { Delete, Edit } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

import { Input } from '../../components/forms/input';
import { PurpleButton } from '../../components/forms/styles';
import { CreateTasks } from './components/CreateTasks';
import { EditTaskDialog } from './components/EditTaskDialog';
import { ListTasks } from './components/ListTasks';

interface Task {
  id: number;
  name: string;
  description: string;
}

export const Tasks = () => {
  const [tasks, setTasks] = useState([] as Task[]);
  const [open, setOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);

  return (
    <>
      <Box mt={4} mb={4}>
        <CreateTasks tasks={tasks} setTasks={setTasks} />
      </Box>
      <Box mt={4} mb={4} p={2} boxShadow={3} borderRadius={1} bgcolor="background.paper">
        <ListTasks
          tasks={tasks}
          setTasks={setTasks}
          setOpen={setOpen}
          currentTask={currentTask}
          setCurrentTask={setCurrentTask}
          open={open}
        />
      </Box>
      <EditTaskDialog
        setCurrentTask={setCurrentTask}
        currentTask={currentTask}
        open={open}
        setOpen={setOpen}
        setTasks={setTasks}
        tasks={tasks}
      />
    </>
  );
};
