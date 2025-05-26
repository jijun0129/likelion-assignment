import styled from "styled-components";
import { mockData } from "../data/mock_data";
import TeamCard from "../components/TeamCard.jsx";
import { useEffect, useState } from "react";
import usePeopleStore from "../store/zustand.js";
import TeamModal from "../components/TeamModal.jsx";
import AddForm from "../components/AddForm.jsx";

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
`;

const TitleH1 = styled.h1`
  font-size: 24px;
  color: white;
`;

const ListDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 40px;
  max-width: 1680px;
  margin: 0 auto;
`;

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const people = usePeopleStore((state) => state.people);
  const setPeople = usePeopleStore((state) => state.setPeople);

  const toggleModal = (person) => {
    setIsModalOpen(!isModalOpen);
    setSelectedPerson(person);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedPerson(null);
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
      {isModalOpen && <TeamModal handleModalClose={handleModalClose} selectedPerson={selectedPerson} />}
    </ContainerDiv>
  );
};

export default Home;
