import React from "react";
import styled from "styled-components";


const Container = styled.div`
  height: 90%;
  background: url("https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble-outline.png");
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const FormContainer = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  margin: 50px;
  margin-top: 0;
  @media only screen and (max-width: 480px) {
    margin: 20px;
  }
`;

const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    height: 50%;
    margin-right: 0;
  }
`;

const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    height: 50%;
  }
`;

const Input = styled.input`
  width: 200px;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    padding: 5px;
  }
`;

const TextArea = styled.textarea`
  width: 200px;
  height: 60%;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    padding: 5px;
    margin-top: 20px;
  }
`;

const Button = styled.button`
  border: none;
  padding: 15px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    padding: 5px;
    font-size: 14px;
  }
`;

const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const AddressItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    width: 15px;
  }
`;

const Text = styled.span`
  font-size: 20px;
  margin-right: 15px;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>
            Questions? <br /> Let's Get In Touch
          </Title>
          <Form>
            <LeftForm>
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" />
              <Input placeholder="Subject" />
            </LeftForm>
            <RightForm>
              <TextArea placeholder="Your Message" />
              <Button>Send</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <AddressContainer>
          <AddressItem>
            <Icon src="https://cdn-icons-png.flaticon.com/512/1865/1865269.png" />
            <Text>123 Park Avenue St., New York, USA</Text>
          </AddressItem>
          <AddressItem>
            <Icon src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREa8Pu35Odjs4Mm-F2MWbnnpQHqT-yp8tQESxyxWuEZCU9l1xWe3UW6x5PTiwLmAWodn4&usqp=CAU" />
            <Text>+1 631 1234 5678</Text>
            <Text>+1 326 1234 5678</Text>
          </AddressItem>
          <AddressItem>
            <Icon src="data:image/png;base64,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" />
            <Text>contact@lama.dev</Text>
            <Text>sales@lama.dev</Text>
          </AddressItem>
        </AddressContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;