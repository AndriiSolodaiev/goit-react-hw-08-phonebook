import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  FormStyled,
  InputStyled,
  LabelStyled,
  ButtonStyled,
} from './RegisterForm.styled';

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <LabelStyled>
        Username <InputStyled type="text" name="name" />
      </LabelStyled>
      <LabelStyled>
        Email <InputStyled type="email" name="email" />
      </LabelStyled>
      <LabelStyled>
        Password <InputStyled type="password" name="password" />
      </LabelStyled>
      <ButtonStyled>Register</ButtonStyled>
    </FormStyled>
  );
};
