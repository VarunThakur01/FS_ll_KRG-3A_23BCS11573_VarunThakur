import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/dashboard");
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      p: 3,
      background: 'linear-gradient(135deg, #009688, #00695C)',
      color: 'white'
    }}>
      <Typography variant="h4" gutterBottom>
        Welcome to EcoTrack
      </Typography>

      <Typography variant="subtitle1" sx={{ mb: 3 }}>
        Developed by varun thakur
      </Typography>

      <Button
        variant="contained"
        size="large"
        onClick={handleLogin}
        sx={{
          mt: 2,
          px: 6,
          py: 1.5,
          backgroundColor: 'white',
          color: '#00695C',
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: '#e0f2f1'
          }
        }}
      >
        Login as varun thakur
      </Button>
    </Box>
  );
};

export default Login;