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
  margin-left: 60px;
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
        <Image open={open} src="https://cdn3d.iconscout.com/3d/premium/thumb/businesswoman-with-smartphone-with-blank-screen-4861732-4051495.png" />
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
            <Icon src="data:image/jpeg;base64,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" />
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