import styled from "styled-components";
import usePeopleStore from "../store/zustand.js";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  padding: 30px 50px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  gap: 15px;
  color: black;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  font-size: 18px;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  color: black;
  padding: 10px;
  border: 1px solid black;
  background-color: #ffffff;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  &:hover,
  &:active,
  &:focus {
    background-color: #0056b3;
  }
`;

const AddForm = () => {
  const people = usePeopleStore((state) => state.people);
  const setPeople = usePeopleStore((state) => state.setPeople);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newPerson = {
      id: Date.now(),
      name: formData.get("name"),
      position: formData.get("position"),
      tag: formData
        .get("tag")
        .split(",")
        .map((tag) => tag.trim()),
      heart: false,
      heartCount: 0,
    };

    setPeople([...people, newPerson]);

    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputDiv>
        <Label htmlFor="name">이름</Label>
        <Input type="text" id="name" name="name" required />
      </InputDiv>
      <InputDiv>
        <Label htmlFor="position">역할</Label>
        <Input type="text" id="position" name="position" required />
      </InputDiv>
      <InputDiv>
        <Label htmlFor="tag">태그</Label>
        <Input type="text" id="tag" name="tag" required />
      </InputDiv>
      <Button type="submit">추가</Button>
    </Form>
  );
};

export default AddForm;
