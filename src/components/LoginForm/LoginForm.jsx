import {
  ButtonStyled,
  FormStyled,
  InputStyled,
  LabelStyled,
  LinkStyled,
} from 'components/RegistrationForm/RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.elements.email.value && form.elements.password.value) {
      dispatch(
        logIn({
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
      form.reset();
      return;
    }
    toast.warn('Please fill in all fields!');
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
      <p>
        If you do not have <br /> an account yet,
        <LinkStyled to="/register"> Sign up.</LinkStyled>
      </p>
    </FormStyled>
  );
};
