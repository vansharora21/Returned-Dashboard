import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import ReturnedLogo from '../../assets/ReturnedLogo.svg';
import LoginFormRightSectionImage from '../../assets/LoginFormRightSectionImage.png';
import { RootState } from '../../redux/store';
import { loginUser } from '../../redux/slices/authSlice';
import { authForgotPassword } from '../../redux/slices/forgotPasswordSlice';
import CircularProgress from '@mui/material/CircularProgress';
import ButtonComponent from '../../components/Button/Button';


const LoginForm: React.FC = () => {
  const { user, token, loading, error } = useSelector((state: RootState) => state.auth);
  const forgotPasswordState = useSelector((state: RootState) => state.forgotPassword);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [forgotPassword, setForgotPassword] = useState(false);
  const [forgotPasswordSuccess, setForgotPasswordSuccess] = useState('');
  const [showCircular, setCircularShow] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError("Email is required");
      return false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePassword = (password: string) => {
    if (!password) {
      setPasswordError("Password is required");
      return false;
    } else if (password.length < 5) {
      setPasswordError("Password must be at least 5 characters");
      return false;
    }
    setPasswordError("");
    return true;
  };

  useEffect(() => {
    if (error) {
      setPasswordError(error);
    }
  }, [error]);

  useEffect(() => {
    if (user && token) {
      navigate('/');
    }
  }, [user, token, navigate]);

  useEffect(() => {
    if (forgotPasswordState.error) {
      setEmailError(forgotPasswordState.error);
    }
    if (forgotPasswordState.success) {
      setForgotPasswordSuccess('If this email is registered, a password reset link has been sent.');
    }
  }, [forgotPasswordState]);

  const handleClick = () => {
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    if (isEmailValid && isPasswordValid) {
      dispatch(loginUser({ email, password }) as any);
    }
  };

  const forgotPasswordHandleClick = () => {
    setCircularShow(true)
    const isEmailValid = validateEmail(email);
    if (isEmailValid) {
      dispatch(authForgotPassword({ email }) as any);
    }
  };

  const handleLoginBack =()=>{
    setCircularShow(false)
    setForgotPassword(false);
    setForgotPasswordSuccess('');
  };


  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, minHeight: '100vh' }}>
      {/* Left Section (Form) */}
      <Box
        sx={{
          flex: { xs: 1, md: 0.6 },
          display: 'flex',
          flexDirection: 'column',
          p: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <Box
          sx={{
            mb: { xs: 4, md: 8 },
            mt: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src={ReturnedLogo} alt="Returned Logo" style={{ height: '36px' }} />
        </Box>

        <Box
          sx={{
            maxWidth: '450px',
            width: '100%',
            mx: 'auto',
            my: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}
        >
          <Typography sx={{ textAlign: 'center', fontWeight: 600 }}>
            Sign in to "Product Name"
          </Typography>

          <TextField
            type="email"
            variant="outlined"
            label="Your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value);
              setForgotPasswordSuccess('');
            }}
            error={!!emailError}
            helperText={emailError}
            fullWidth
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '32px' } }}
          />

          {!forgotPassword &&
            <TextField
              type="password"
              variant="outlined"
              label="Enter Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                validatePassword(e.target.value);
              }}
              error={!!passwordError}
              helperText={passwordError}
              fullWidth
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: '32px' } }}
            />}

          {forgotPasswordSuccess && (
            <Typography sx={{ color: 'green', textAlign: 'center', mt: 2 }}>{forgotPasswordSuccess}</Typography>
          )}

          {!forgotPassword && <Typography
            onClick={() => setForgotPassword(true)}
            sx={{ textAlign: 'right' }}>Forgot Password</Typography>}

          {forgotPassword && <Typography
            onClick={handleLoginBack}
            sx={{ textAlign: 'right' }}>Back to Login</Typography>}

          {forgotPassword ? <ButtonComponent
            label={showCircular ?<CircularProgress style={{color:"white", fontSize:"100px"}}/> : "Send link to email"}
            onClick={forgotPasswordHandleClick}
            disabled={!email || !password || !!emailError || !!passwordError || loading}
          /> : <ButtonComponent
            label="Sign in"
            onClick={handleClick}
            disabled={!email || !password || !!emailError || !!passwordError || loading}
          />}

          <Typography sx={{ textAlign: 'center' }}>
            <span style={{ color: '#6D6E6F', fontSize: '16px', fontWeight: '500' }}>
              Need an account?{' '}
            </span>
            <span
              style={{
                textDecoration: 'underline',
                color: 'black',
                cursor: 'pointer',
              }}
            >
              Sign up
            </span>
          </Typography>
        </Box>

        <Typography sx={{ textAlign: 'center', mt: 'auto', py: 3, px: 2 }}>
          By proceeding you agree to the
          <span
            style={{
              textDecoration: 'underline',
              color: 'black',
              cursor: 'pointer',
              margin: '0 3px',
            }}
          >
            Terms & Conditions
          </span>
          and
          <span
            style={{
              textDecoration: 'underline',
              color: 'black',
              cursor: 'pointer',
              marginLeft: '3px',
            }}
          >
            Privacy Policy
          </span>
        </Typography>
      </Box>

      {/* Right Section (Image) */}
      <Box
        sx={{
          flex: { xs: 1, md: 0.4 },
          display: { xs: 'none', md: 'flex' },
        }}
      >
        <img
          src={LoginFormRightSectionImage}
          alt="Login Illustration"
          style={{
            width: '100%',
            height: '100vh',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </Box>
    </Box>
  );
};

export default LoginForm;


