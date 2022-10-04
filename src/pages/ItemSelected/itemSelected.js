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
		// <><><h1>ITEM SELECTED
		// </h1><Button onClick={sayHello}>Contact me</Button></><img src="https://www.tutorialspoint.com/html/images/test.png" alt="Simply Easy Learning" width="200" height="80"></img></>
		<body>
			<h1>ITEM SELECTED</h1><br />
			<img src="https://i.pinimg.com/736x/1e/b1/7e/1eb17e74fe8c3619edc8d07001a72957.jpg" alt="itemSelected" width="300" height="500"></img><br />
			<span>
				<h2><b>Gray croptop with blue shorts</b></h2><br />
				<i>Elizabeth Young - Saint Paul, MN</i><br />
				<strong>Swap option available</strong><br />
				For sale: 20$ <br />
				<em>Description:</em><br />
				I bouth this shirt 2 months ago and wore it 3 times. The shorts I bought from H&M last week but it is not fit to me <br />
				(continue reading)<br />
			</span><br />
			<Button onClick={sayHello}>Contact me</Button><br />
		</body>
	);
}

function sayHello() {
	alert('Go to chat page');
}


// Usage


export default ItemSelected;