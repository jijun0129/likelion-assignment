import styled from "styled-components";
import usePeopleStore from "../store/zustand.js";

const CardDiv = styled.div`
  position: relative;
  text-align: center;
  border-radius: 10px;
  border: 1px solid #dddddd;
  background-color: #ffffff;
  padding: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const HeartDiv = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 10px;
  right: 10px;
`;
const Heart = styled.div`
  font-size: 24px;
  color: #ff0000;
  cursor: pointer;
`;
const HeartCount = styled.div`
  font-size: 14px;
  color: #000000;
  margin-right: 5px;
  display: inline-block;
  vertical-align: middle;
  font-weight: bold;
`;

const NameP = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin: 5px 0 20px 0;
`;

const PositionP = styled.p`
  font-size: 16px;
  color: black;
  margin: 10px 0;
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

const TeamCard = ({ person }) => {
  const toggleHeart = usePeopleStore((state) => state.toggleHeart);

  const handleCardClick = () => {
    console.log("Card clicked");
    // ♡
  };

  const handleHeartClick = (e, id) => {
    e.stopPropagation();
    toggleHeart(id);
  };

  return (
    <CardDiv onClick={handleCardClick}>
      <HeartDiv>
        <HeartCount>{person.heartCount}</HeartCount>
        <Heart onClick={(e) => handleHeartClick(e, person.id)}>{person.heart ? "♥" : "♡"}</Heart>
      </HeartDiv>
      <NameP>{person.name}</NameP>
      <PositionP>{person.position}</PositionP>
      <TagDiv>
        {person.tag.map((tag) => (
          <TagP key={`${person.id}+${tag}`}>{tag}</TagP>
        ))}
      </TagDiv>
    </CardDiv>
  );
};

export default TeamCard;
