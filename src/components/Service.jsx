import React, { useState } from "react";
import styled from "styled-components";
import MiniCard from "./MiniCard";


const Container = styled.div`
  display: flex;
  height: 100%;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 50%;
  position: relative;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
  display: ${(props) => props.open && "none"};
  height: 100%;
  margin-left: 100px;
`;

const Video = styled.video`
  display: ${(props) => !props.open && "none"};
  height: 300px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Right = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 480px) {
    padding: 20px;
  }
`;

const Title = styled.h1``;

const Desc = styled.p`
  font-size: 20px;
  margin-top: 20px;
  color: #555;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const Button = styled.button`
  width: 180px;
  border: none;
  border-radius: 10px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  padding: 15px;
  margin-top: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
`;

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
  position: absolute;
  background-color: white;
  padding: 5px;
  border: none;
  border-radius: 5px;
  right: 5px;
  top: 30%;
`;

const Service = () => {
  const [open, setOpen] = useState(false);
  const smallScreen = window.screen.width <= 480 ? true : false;
  return (
    <Container>
      <Left>
        <Image open={open} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6389FP2oLKYN09kMLUKWGsBozykIkJqnlOw&usqp=CAU" />
        <Video
          open={open}
          autoPlay
          loop
          controls
          src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
        />
      </Left>
      <Right>
        <Wrapper>
          <Title>Simple process to start</Title>
          <Desc>
            We provide digital experience services to startups and small
            businesses to looking for a partner of their digital media, design &
            development, lead generation and communications requirents. We work
            with you, not for you. Although we have a great resources
          </Desc>
          <CardContainer>
            <MiniCard />
            <MiniCard />
            <MiniCard />
          </CardContainer>
          <Button onClick={() => setOpen(true)}>
            <Icon src="data:image/png;base64,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" />
            How it works
          </Button>
        </Wrapper>
      </Right>
      {smallScreen && open && (
        <Modal>
          <Video
            open={open}
            autoPlay
            loop
            controls
            src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
          />
          <CloseButton onClick={() => setOpen(false)}>Close</CloseButton>
        </Modal>
      )}
    </Container>
  );
};

export default Service;