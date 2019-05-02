import * as React from 'react';
import { connect } from 'react-redux';
import { Formik, Field, FieldProps } from 'formik';
// import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
// STYLES
import { media } from 'lib/styles';
// HELPERS
import { validators }  from 'lib/helpers';
// DUCKS
import { actions, effects } from 'redux/ducks/auth.duck';

const initialValues = {
  email: '',
  password: '',
};

interface MyFormValues {
  email: string;
  password: string;
}

interface Props {
  authLogin: (values: MyFormValues, setErrors, setSubmitting) => Promise<any>;
}

const Login: React.FC<Props> = ({ authLogin }) => {
  return (
    <LoginWrapper>
      <h1>Join us!</h1>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validate={validators.auth}
        onSubmit={(values: MyFormValues, { setSubmitting, setErrors }) => {
          console.log('values', values);
          authLogin(values, setErrors, setSubmitting);
          
          // setSubmitting(false);
          // setFieldValue('email', '');
          // setFieldValue('password', '');
        }}
        render={({ handleSubmit, errors, ...rest}) => {
          console.log('rest', rest);
          return (
          <StyledForm onSubmit={handleSubmit}>
            <Notice>
              If you don't have an account already, this form will create you
              one.
            </Notice>
            <FormItem>
              <Label>Email</Label>
              <Field
                name="email"
                render={({ field, form, ...rest }: FieldProps<MyFormValues>) => {
                  console.log('form', form);
                  console.log('rest', rest);
                  return(
                  <>
                    <Input
                      {...field}
                      className={
         (form.touched[field.name] && form.errors[field.name])
          ? 'error'
          : ''
      } 
      type="text" placeholder="Email" />
      {form.touched[field.name] && form.errors[field.name] && (
          <Error>{form.errors[field.name]}</Error>
      )}
                  </>
                );
              }}
              />
            </FormItem>
            <FormItem>
              <Label>Password</Label>
              <Field
                name="password"
                render={({ field, form }: FieldProps<MyFormValues>) => (
                  <>
                    <Input {...field}
                    className={
                      (form.touched[field.name] && form.errors[field.name])
                       ? 'error'
                       : ''
                   } 
                    type="password" placeholder="Password"
                    
                    />
                    {form.touched[field.name] && form.errors[field.name] && (
          <Error>{form.errors[field.name]}</Error>
      )}
                  </>
                )}
              />
            </FormItem>
            {!!Object.keys(errors).length && errors.form && (
              <Error>{errors.form}</Error>
            )}
            <Button type="submit">Log In</Button>
          </StyledForm>
        );
      }}
      />
      <Divider>Or</Divider>
      <SocialWrapper>
        {/* <button type="button" className="login-social">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.18 31.93c.97 0 1.75-.78 1.75-1.75V1.82c0-.97-.78-1.75-1.75-1.75H1.82C.85.07.07.85.07 1.82v28.36c0 .97.78 1.75 1.75 1.75h28.36z"
              fill="#3C5A99"
            />
            <path
              d="M22.05 31.93V19.6h4.15l.62-4.82h-4.77V11.7c0-1.38.4-2.33 2.4-2.33h2.53v-4.3c-.44-.06-1.95-.2-3.7-.2-3.68 0-6.2 2.25-6.2 6.37v3.54h-4.15v4.8h4.16v12.35h4.93z"
              fill="#FFF"
            />
          </svg>
        </button> */}
        <button type="button" className="login-social">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path
              d="M15.999.395C7.164.395 0 7.558 0 16.396c0 7.068 4.584 13.065 10.943 15.181.8.147 1.092-.347 1.092-.77 0-.38-.014-1.387-.022-2.722-4.451.967-5.39-2.145-5.39-2.145-.727-1.848-1.776-2.34-1.776-2.34-1.453-.993.11-.973.11-.973 1.605.113 2.45 1.65 2.45 1.65 1.428 2.444 3.745 1.738 4.657 1.328.145-1.034.559-1.739 1.016-2.139-3.553-.404-7.288-1.776-7.288-7.907 0-1.747.623-3.175 1.647-4.294-.165-.405-.714-2.03.156-4.234 0 0 1.344-.43 4.4 1.64a15.36 15.36 0 0 1 4.006-.539c1.359.007 2.728.184 4.006.54 3.054-2.07 4.395-1.64 4.395-1.64.873 2.202.324 3.828.159 4.233 1.026 1.12 1.645 2.547 1.645 4.294 0 6.146-3.741 7.5-7.305 7.895.574.494 1.086 1.47 1.086 2.963 0 2.14-.02 3.864-.02 4.39 0 .427.288.925 1.1.768C27.42 29.455 32 23.462 32 16.396c0-8.838-7.164-16-16.001-16"
              fill="#FFFFFF"
            />
          </svg>
        </button>
        {/* <button type="button" className="login-social">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 26">
            <path
              d="M32 3.076a13.14 13.14 0 0 1-3.771 1.034A6.584 6.584 0 0 0 31.116.478a13.166 13.166 0 0 1-4.169 1.593 6.557 6.557 0 0 0-4.792-2.073 6.565 6.565 0 0 0-6.565 6.565c0 .514.058 1.015.17 1.496a18.639 18.639 0 0 1-13.532-6.86 6.539 6.539 0 0 0-.889 3.3 6.563 6.563 0 0 0 2.92 5.465 6.532 6.532 0 0 1-2.973-.821l-.001.083a6.568 6.568 0 0 0 5.267 6.437 6.578 6.578 0 0 1-2.965.113 6.571 6.571 0 0 0 6.133 4.559 13.172 13.172 0 0 1-8.154 2.81c-.53 0-1.052-.031-1.566-.091a18.587 18.587 0 0 0 10.064 2.949c12.076 0 18.679-10.004 18.679-18.68 0-.284-.006-.567-.019-.85A13.315 13.315 0 0 0 32 3.077"
              fill="#55acee"
            />
          </svg>
        </button> */}
        <button type="button" className="login-social">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none">
              <rect fill="#FFF" width="40" height="40" rx="2" />
              <path
                d="M28.64 20.2c0-.63-.06-1.25-.16-1.84H20v3.48h4.84c-.2 1.13-.84 2.08-1.8 2.72v2.26h2.92c1.7-1.57 2.68-3.87 2.68-6.62z"
                fill="#4285F4"
              />
              <path
                d="M20 29c2.43 0 4.47-.8 5.96-2.18l-2.9-2.26c-.82.54-1.85.86-3.06.86-2.34 0-4.33-1.58-5.04-3.7h-3v2.32C13.44 26.98 16.48 29 20 29z"
                fill="#34A853"
              />
              <path
                d="M14.96 21.7c-.18-.53-.28-1.1-.28-1.7 0-.6.1-1.17.28-1.7v-2.34h-3c-.6 1.2-.96 2.6-.96 4.04 0 1.45.35 2.83.96 4.04l3-2.33z"
                fill="#FBBC05"
              />
              <path
                d="M20 14.58c1.32 0 2.5.45 3.44 1.35l2.58-2.6C24.46 11.9 22.42 11 20 11c-3.52 0-6.56 2.02-8.04 4.96l3 2.33c.7-2.15 2.7-3.73 5.04-3.73z"
                fill="#EA4335"
              />
            </g>
          </svg>
        </button>
      </SocialWrapper>
    </LoginWrapper>
  );
};
export default connect(
  // state => ({
  //   token: selectors.getToken(state),
  //   isLoading: selectors.getLoading(state),
  //   error: selectors.getErrors(state),
  // }),
  null,
  { ...actions, ...effects },
)(Login);

const LoginWrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 500px;
  margin: 45px auto;
  background-color: rgba(20, 22, 24, 0.5);

  ${media.phone`
    margin-top: 20px;
    margin-bottom: 0;
    background-color: transparent;
  `};

  ${media.smallPhone`
    width: 100%;
  `};

  h1 {
    text-align: center;
    background-color: ${({ theme }) => theme.colors.red};
    padding: 10px;
    margin: 0;
    ${media.phone`
      background-color: transparent;
    `};

  }
`;

const Notice = styled.div`
  padding: 20px 0;
  opacity: 0.7;
  font-size: 14px;

  ${media.phone`
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
  `};
`;

const Divider = styled.div`
  position: relative;
  display: block;
  text-transform: uppercase;
  text-align: center;
  font-size: 12px;
  padding: 15px 0;
  opacity: 0.4;

  ::before,
  ::after {
    content: '';
    height: 1px;
    width: 40%;
    border-top: 1px solid hsla(0, 0%, 100%, 0.5);
    position: absolute;
    opacity: 0.6;
    padding: 0 10px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  ::before {
    left: 0;
  }

  ::after {
    right: 0;
  }
`;

const StyledForm = styled.form`
  padding: 10px 30px;
  ${media.phone`
    padding: 10px;
  `};
  
  & > div:last-of-type {
    margin-bottom: 0;
  }
`;

const SocialWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  padding: 10px 200px;

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  svg {
    width: 30px;
    height: auto;

    :hover {
      opacity: 0.8;
    }
  }

  ${media.phone`
    padding-left: 20px;
    padding-right: 20px;
  `};
`;

const Input = styled.input`
    box-sizing: border-box;
    width: 100%;
    padding: 10px 15px;
    margin-bottom: 5px;
    font-size: 16px;
    border: 1px solid transparent;
    box-shadow: none;
    border-radius: 4px;
    &.error {
      border-color: ${({ theme }) => theme.colors.red};
      &:focus {
        box-shadow: 3px 3px 10px
            ${({ theme }) => theme.colors.red},
            0 0 0 1px ${({ theme }) => theme.colors.red};
      }
    }
}
`;

const Button = styled.button`
    display: block;
    margin-top: 40px;
  width: 100%;
      padding: 20px;
    background-color: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.white};
    border: 0;
    border-radius: 2px;
    font-size: 14px;
    text-transform: uppercase;
    cursor: pointer;

    :hover {
      opacity: 0.8;
    }
}
`;

const FormItem = styled.div`
  margin-bottom: 24px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const Error = styled.span`
  color: ${({ theme }) => theme.colors.red};
  font-size: 14px;
`;
