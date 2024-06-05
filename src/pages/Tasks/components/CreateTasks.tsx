import { Card, CardContent, CardHeader, Divider, Grid } from '@mui/material';
import { Control, FieldValues, useForm, UseFormHandleSubmit } from 'react-hook-form';
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
}

export const CreateTasks = ({ tasks, setTasks }: Props) => {
  const { handleSubmit, control, reset } = useForm();

  const onSubmit = async (data: any) => {
    const newTask: Task = {
      id: tasks.length + 1,
      name: data.name,
      description: data.description,
    };
    setTasks([...tasks, newTask]);
    toast.success('Task added successfully');
    reset();
  };

  return (
    <Card>
      <CardHeader title={<h1>Add task form</h1>} />

      <Divider />
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item md={3} xs={12}>
              <Input name="name" control={control} label="Name" required fullWidth />
            </Grid>
            <Grid item md={3} xs={12}>
              <Input
                name="description"
                control={control}
                label="Description"
                required
                fullWidth
              />
            </Grid>
            <Grid item md={3} xs={12}>
              <PurpleButton type="submit">Add Task</PurpleButton>
            </Grid>
          </Grid>
        </form>
      </CardContent>
      <Divider />
    </Card>
  );
};
