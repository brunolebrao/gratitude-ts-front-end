import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import {
  Formik,
  FormikActions,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik';
import * as yup from 'yup';
import {InputText} from '../InputText';
import {Button} from '@material-ui/core';

interface MyFormValues {
  email: string;
  password: string;
}

const Login: React.SFC<{}> = () => {
  return (
    <Formik
      initialValues={{email: '', password: ''}}
      validationSchema={validationSchema}
      onSubmit={(
        values: MyFormValues,
        actions: FormikActions<MyFormValues>
      ) => {
        console.log({values, actions});
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
      render={({values, handleSubmit}) => (
        <form onSubmit={handleSubmit}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={2}
          >
            <Grid>
              <h2>Faça seu Login</h2>
            </Grid>
            <Grid item xs={12}>
              <Field
                name="email"
                label="E-Mail"
                component={InputText}
                variant="outlined"
                type="text"
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="password"
                label="Senha"
                component={InputText}
                variant="outlined"
                type="password"
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" color="primary">
                Enviar
              </Button>
            </Grid>
          </Grid>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </form>
      )}
    />
  );
};

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .min(3)
    .max(255)
    .email('E-mail inválido')
    .required('E-mail é obrigatório'),
  password: yup
    .string()
    .min(8, 'Mínimo de 8 caracteres')
    .max(12, 'Máximo de 12 caracteres')
    .required('Senha é obrigatório'),
});

export default Login;
