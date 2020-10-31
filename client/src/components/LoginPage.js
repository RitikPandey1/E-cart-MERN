import {
  Button,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Formik ,Form} from "formik";
const useStyle = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    marginTop: "50px",
  },
  formElement: { margin: theme.spacing(2, 0, 2, 0) },
}));

const LoginPage = () => {
  const classes = useStyle();
  return (
    <>
      <Grid container>
        <Grid item xs={1} sm={4} />
        <Grid item xs={10} sm={4}>
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors = {};
              console.log(values);
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              if (!values.password) {
                errors.password = "Required";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting, errors, handleChange, touched }) => (
              <Form className={classes.form}>
                <Typography variant="h5"> Login to ECART</Typography>
                <TextField
                  fullWidth
                  className={classes.formElement}
                  label="Email"
                  id="email"
                  type="email"
                  variant="outlined"
                  onChange={handleChange}
                  helperText={errors.email && touched.email && errors.email}
                  error={errors.email && touched.email && true}
                />
                <TextField
                  fullWidth
                  className={classes.formElement}
                  label="Password"
                  id="password"
                  type="password"
                  variant="outlined"
                  onChange={handleChange}
                  helperText={
                    errors.password && touched.password && errors.password
                  }
                  error={errors.password && touched.password && true}
                />
                <Button
                  fullWidth
                  variant="contained"
                  type="submit"
                  className={classes.formElement}
                  color="primary"
                  disabled={isSubmitting}
                >
                  login
                </Button>
                <Typography variant="subtitle1">
                  Create new account <Link to="/signin">Sign in</Link>
                </Typography>
              </Form>
            )}
          </Formik>
        </Grid>
        <Grid item xs={1} sm={4} />
      </Grid>
    </>
  );
};

export default LoginPage;
