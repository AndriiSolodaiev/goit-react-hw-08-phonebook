import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  FormStyled,
  InputStyled,
  LabelStyled,
  ButtonStyled,
  LinkStyled,
} from './RegisterForm.styled';
import { toast } from 'react-toastify';

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (
      form.elements.name.value &&
      form.elements.email.value &&
      form.elements.password.value
    ) {
      dispatch(
        register({
          name: form.elements.name.value,
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
      form.reset();
      return;
    }
    toast.warn('Please fill in all fields!');
    return;
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
      <p>
        If you already have <br /> an account,
        <LinkStyled to="/login"> Log in.</LinkStyled>
      </p>
    </FormStyled>
  );
};
