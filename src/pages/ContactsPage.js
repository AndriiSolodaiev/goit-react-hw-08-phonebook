import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Form } from 'components/Form';
import { AiFillPhone } from 'react-icons/ai';
import { IoMdContacts } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import styled from 'styled-components';

const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactPageContainer>
      <div>
        <PageTitle>
          Phonebook <AiFillPhone />
        </PageTitle>
        <Form />
      </div>
      <ContactListWrapper>
        <h2>
          Contacts <IoMdContacts />
        </h2>
        <Filter />

        {isLoading && !error && <p>Loading...</p>}
        <ContactList />
      </ContactListWrapper>
    </ContactPageContainer>
  );
};

export default ContactsPage;

const PageTitle = styled.h2`
  margin-bottom: 30px;
  text-align: center;
  font-size: 40px;
`;

const ContactListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
  gap: 20px;
`;

const ContactPageContainer = styled.div`
  padding-top: 100px;
  padding-bottom: 50px;
`;
