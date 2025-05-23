import styled from "styled-components";
import { mockData } from "../data/mock_data";
import TeamCard from "../components/TeamCard.jsx";
import { useEffect } from "react";
import usePeopleStore from "../store/zustand.js";

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  align-items: center;
`;

const TitleH1 = styled.h1`
  font-size: 24px;
  color: white;
`;

const ListDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  justify-items: center;
  max-width: 1680px;
  padding: 20px;
  margin: 0 auto;
`;

const Home = () => {
  const people = usePeopleStore((state) => state.people);
  const setPeople = usePeopleStore((state) => state.setPeople);

  useEffect(() => {
    if (people.length === 0) {
      setPeople(mockData);
    }
  }, [people.length, setPeople]);

  return (
    <ContainerDiv>
      <TitleH1>Team Members</TitleH1>
      <ListDiv>
        {people.map((person) => {
          return <TeamCard key={person.id} person={person} />;
        })}
      </ListDiv>
    </ContainerDiv>
  );
};

export default Home;
