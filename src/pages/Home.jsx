import styled from "styled-components";
import { mockData } from "../data/mock_data";
import TeamCard from "../components/TeamCard.jsx";
import { useContext, useEffect, useState } from "react";
import usePeopleStore from "../store/zustand.js";
import TeamModal from "../components/TeamModal.jsx";
import AddForm from "../components/AddForm.jsx";
import { ThemeContext } from "../context/ThemeContext.js";
import darkMode from "../assets/dark_mode.png";
import lightMode from "../assets/light_mode.png";

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
`;

const TitleH1 = styled.h1`
  font-size: 24px;
`;

const ListDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 40px;
  max-width: 1680px;
  margin: 0 auto;
`;

const ThemeButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 15px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #0056b3;
  }
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
`;

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const people = usePeopleStore((state) => state.people);
  const setPeople = usePeopleStore((state) => state.setPeople);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const toggleModal = (person) => {
    setIsModalOpen(!isModalOpen);
    setSelectedPerson(person);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedPerson(null);
  };

  const handleThemeToggle = () => {
    toggleTheme();
  };

  useEffect(() => {
    if (people.length === 0) {
      setPeople(mockData);
    }
  }, [people.length, setPeople]);

  return (
    <ContainerDiv>
      <TitleH1>팀원 프로필</TitleH1>
      <ListDiv>
        {people.map((person) => {
          return <TeamCard key={person.id} person={person} onClick={() => toggleModal(person)} />;
        })}
      </ListDiv>
      <TitleH1>팀원 추가</TitleH1>
      <AddForm />
      <ThemeButton onClick={handleThemeToggle}>
        <Img src={isDarkMode ? darkMode : lightMode}></Img>
      </ThemeButton>
      {isModalOpen && <TeamModal handleModalClose={handleModalClose} selectedPerson={selectedPerson} />}
    </ContainerDiv>
  );
};

export default Home;
