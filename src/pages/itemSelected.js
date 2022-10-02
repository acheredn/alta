import React from 'react';
import styled from 'styled-components';



const ItemSelected = () => {
	const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  &:hover {
	background-color: blue;
  }
`;
	return (
		<><h1>ITEM SELECTED
		</h1><Button onClick={sayHello}>Contact me</Button></>

	);
};
function sayHello() {
	alert('Go to chat page');
}



// Usage


export default ItemSelected;
