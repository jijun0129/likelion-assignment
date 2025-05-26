import styled from "styled-components";
import { useState, useEffect } from "react";

import profile from "../assets/default_profile.png";

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: opacity 0.3s;
`;

const ModalBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background: #ffffff;
  border-radius: 16px;
  padding: 20px;
  z-index: 1001;
  color: black;
`;

const ModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const CloseButton = styled.button`
  color: inherit;
  border: none;
  background: none;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const CustomerDataDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  font-size: 16px;
  font-weight: 500;
`;

const TitleH2 = styled.h2`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
`;

const ContextP = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 5px;
`;

const TagDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 5px 0 10px 0;
  gap: 5px;
`;

const TagP = styled.p`
  border-radius: 5px;
  background-color: #e7f1ff;
  font-size: 14px;
  color: #007bff;
  padding: 5px 10px;
  margin: 5px 0;
`;

const TeamModal = ({ handleModalClose, selectedPerson }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (selectedPerson) setShow(true);
  }, [selectedPerson]);

  const closeWithFade = () => {
    setShow(false);
    setTimeout(() => {
      handleModalClose();
    }, 300);
  };

  if (!selectedPerson) return null;
  return (
    <ModalBackdrop show={show} onClick={closeWithFade}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <ModalDiv>
          <CloseButton onClick={closeWithFade}>×</CloseButton>
          <CustomerDataDiv>
            <TitleH2>{selectedPerson.name}</TitleH2>
            <Img src={profile} alt="Profile" />
            <ContextP>{selectedPerson.position}</ContextP>
            <TagDiv>
              {selectedPerson.tag.map((tag) => (
                <TagP key={`${selectedPerson.id}+${tag}`}>{tag}</TagP>
              ))}
            </TagDiv>
          </CustomerDataDiv>
        </ModalDiv>
      </ModalBox>
    </ModalBackdrop>
  );
};

export default TeamModal;
