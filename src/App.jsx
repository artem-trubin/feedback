import { useState } from 'react'
import styled from 'styled-components'

const FeedbackContainer = styled.div`
  width: 300px;

  padding: 10px;

  border-radius: 15px;
  border: solid 3px black;

  position: absolute;
  top: calc(50% - 100px);
  left: calc(50% - 150px);

  box-shadow: 15px 15px black;
  background-color: white;
`;

const FeedbackButton = styled.button`
  width: 70px;
  height: 30px;

  cursor: pointer;

  border: 2px solid black;
  border-radius: 5px;

  background-color: ${props => props.$bgColor || 'black'};
  color: white;

  &:hover {
    background-color: white;
    color: black;
  }

  &:active{
    background-color: grey;
  }
`;

const ButtonBlock = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-around;
`;

const Header = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: 800;

  margin: 15px 0px;
`;

const Statistic = styled.div`
  text-align: center;
  font-size: 24px;

  color: ${props => props.$status > 0 ? "green" : props.$status < 0 ? "red" : "yellow"}
`;

const App = () => {
  const [good, setGood] = useState(0)
  const [ok, setok] = useState(0)
  const [bad, setBad] = useState(0)

  const overall = good * 2 + ok + bad * -2;

  const options = [
    {
      text: "GOOD",
      onClick: () => setGood(good + 1),
      bgColor: "#2f6924",
    },
    {
      text: "OK",
      onClick: () => setok(ok + 1),
      bgColor: "#848733",
    },
    {
      text: "BAD",
      onClick: () => setBad(bad + 1),
      bgColor: "#732626",
    },
  ];

  return (
    <FeedbackContainer>
      <Header>GIVE FEEDBACK</Header>
      <ButtonBlock>
        {
          options.map((option, i) => <FeedbackButton
            $bgColor={option.bgColor}
            onClick={option.onClick}
            key={i}
          >
            {option.text}
          </FeedbackButton>)
        }
      </ButtonBlock>
      <Header>OVERALL</Header>
      <Statistic $status={overall}>{overall}</Statistic>
    </FeedbackContainer>
  );
}

export default App
