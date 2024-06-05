import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { Input } from '../../../components/forms/input';
import { PurpleButton } from '../../../components/forms/styles';

interface Task {
  id: number;
  name: string;
  description: string;
}

interface Props {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  open: boolean;
  currentTask: Task | null;
  setCurrentTask: (task: Task | null) => void;
  setOpen: (open: boolean) => void;
}

export const EditTaskDialog = ({
  tasks,
  setTasks,
  currentTask,
  open,
  setOpen,
  setCurrentTask,
}: Props) => {
  const { handleSubmit, control, reset } = useForm();

  useEffect(() => {
    if (currentTask) {
      reset(currentTask);
    }
  }, [currentTask, reset]);

  const onSubmit = async (data: any) => {
    const updatedTasks = tasks.map((task) =>
      task.id === currentTask?.id ? { ...task, ...data } : task,
    );
    setTasks(updatedTasks);
    toast.success('Task updated successfully');

    setCurrentTask(null);
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>Edit Task</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item md={12} xs={12}>
              <Input name="name" control={control} label="Name" required fullWidth />
            </Grid>
            <Grid item md={12} xs={12}>
              <Input
                name="description"
                control={control}
                label="Description"
                required
                fullWidth
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <DialogActions>
                <Button
                  onClick={() => setOpen(false)}
                  style={{ marginRight: '2rem', marginTop: '1rem' }}
                >
                  Cancel
                </Button>
                <PurpleButton type="submit" color="primary">
                  Update
                </PurpleButton>
              </DialogActions>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
    </Dialog>
  );
};
