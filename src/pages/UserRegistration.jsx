import { useState } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";
import { Google } from "@mui/icons-material";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import app from "../utils/firebase.init";
const auth = getAuth(app);
const SignUpLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailSignup = async (email, password) => {
    try {
      signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const user = userCredential.user;
          console.log("Email Signup", user);
        }
      );

      // You can perform additional actions, like sending a verification email, etc.
    } catch (error) {
      console.error("Error during email signup:", error.message);
    }
  };

  const handleEmailLogin = async (email, password) => {
    try {
      createUserWithEmailAndPassword(auth, email, password).then(
        async (userCredential) => {
          console.log(userCredential);
        }
      );
    } catch (error) {
      console.error("Error during email login:", error.message);
    }
  };

  const provider = new GoogleAuthProvider();
  const handleGoogleSignup = async () => {
    try {
      signInWithPopup(auth, provider).then((result) => {
        const user = result.user;
        console.log(user);
      });
    } catch (error) {
      console.error("Error during Google signup:", error.message);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" align="center">
        Sign Up / Login
      </Typography>
      <form>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
          type="password"
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleEmailSignup}
        >
          Sign Up
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 1 }}
          fullWidth
          onClick={handleEmailLogin}
        >
          Login
        </Button>
        <div style={{ margin: "20px 0", textAlign: "center" }}>
          <Typography variant="subtitle1">OR</Typography>
        </div>
        <Button
          onClick={handleGoogleSignup}
          variant="contained"
          sx={{ color: "white" }}
        >
          <Google /> With Google
        </Button>
      </form>
    </Container>
  );
};

export default SignUpLoginForm;
