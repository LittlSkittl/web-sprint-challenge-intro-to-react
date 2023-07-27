// Write your Character component here
import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: rgba(0, 0, 0, 0.3);
  border-bottom: 2px solid crimson;

  h3, ul {
    color: white;
  }

  ul {
    list-style: none;
  }
  
  li {
    padding: 3px;
  }
`

const Character = (props) => {
  const { name, info, yearBorn, height, gender } = props

 console.log(info);

  return (
    <StyledCard>
      <h3>{name}</h3>
      <ul>
        <li>{yearBorn}</li>
        <li>{height}cm</li>
        <li>{gender}</li>
      </ul>
    </StyledCard>
 )
}

export default Character