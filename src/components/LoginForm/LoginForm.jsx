import {
  ButtonStyled,
  FormStyled,
  InputStyled,
  LabelStyled,
} from 'components/RegistrationForm/RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <LabelStyled>
        Email <InputStyled type="email" name="email" />
      </LabelStyled>
      <LabelStyled>
        Password <InputStyled type="password" name="password" />
      </LabelStyled>
      <ButtonStyled>Log in</ButtonStyled>
    </FormStyled>
  );
};
