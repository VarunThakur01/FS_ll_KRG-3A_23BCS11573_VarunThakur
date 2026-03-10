import React, { useState } from 'react';
import useForm from '../hooks/useForm';
import {
    Box,
    Typography,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Button,
    List,
    ListItem,
    ListItemText,
    Paper,
    Grid
} from '@mui/material';

const TaskManager = () => {
    const [tasks, setTasks] = useState([]);

    const { values, handleChange, resetForm } = useForm({
        title: '',
        priority: 'Low'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!values.title.trim()) return;

        setTasks((prevTasks) => [...prevTasks, { title: values.title, priority: values.priority }]);
        resetForm();
    };

    return (
        <Box sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h5" gutterBottom>
                Task Tracker
            </Typography>

            <Paper sx={{ p: 3, mb: 3 }}>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Task Title"
                                name="title"
                                value={values.title}
                                onChange={handleChange}
                                required
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel id="priority-label">Priority</InputLabel>
                                <Select
                                    labelId="priority-label"
                                    label="Priority"
                                    name="priority"
                                    value={values.priority}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="Low">Low</MenuItem>
                                    <MenuItem value="Medium">Medium</MenuItem>
                                    <MenuItem value="High">High</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                sx={{ height: '56px' }}
                            >
                                Add Task
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>

            <Typography variant="h6" gutterBottom>
                Task List
            </Typography>

            {tasks.length > 0 ? (
                <Paper>
                    <List>
                        {tasks.map((task, index) => (
                            <ListItem key={index} divider={index !== tasks.length - 1}>
                                <ListItemText
                                    primary={`${task.title} | ${task.priority}`}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            ) : (
                <Typography variant="body1" color="text.secondary">
                    No tasks added yet.
                </Typography>
            )}
        </Box>
    );
};

export default TaskManager;
