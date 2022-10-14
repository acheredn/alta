import React from 'react';
import styled from 'styled-components';
import CssBaseline from '@mui/material/CssBaseline';
import './itemSelected.css';
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import itemSelected from "../../images/itemSelected.png";
import { Container } from '@mui/system';
import { autocompleteClasses, Grid } from '@mui/material';



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
	const fadeImages = [
		itemSelected,
		"https://assets.vogue.com/photos/6230a9e30c75bb354d918725/1:1/w_2667,h_2667,c_limit/slide_4.jpg",
		"https://di2ponv0v5otw.cloudfront.net/posts/2022/09/26/63325aaef644e5d1a4fdf4fd/m_wp_63325abb32c1dc1574b94303.webp"
	];

	return (

		// <><><h1>ITEM SELECTED
		// </h1><Button onClick={sayHello}>Contact me</Button></><img src="https://www.tutorialspoint.com/html/images/test.png" alt="Simply Easy Learning" width="200" height="80"></img></>
		<body >
			<Container component="main" maxWidth="s">
			<CssBaseline />
			<h1>ITEM SELECTED</h1><br />
			<div sx={{
				marginTop: 8,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}>
				{/* <img src="https://i.pinimg.com/736x/1e/b1/7e/1eb17e74fe8c3619edc8d07001a72957.jpg" alt="itemSelected" width="300" height="500"></img><br /> */}
				<div className="slide-container">
					<Fade>
						<div className="each-fade">
							<img src={fadeImages[0]} />
						</div>
						<div className="each-fade">
							<img src={fadeImages[1]} />
						</div>
						<div className="each-fade">
							<img src={fadeImages[2]} />
						</div>
					</Fade>
				</div>
			</div>

			<span className='center' >
				<h2><b>Gray croptop with blue shorts</b></h2><br />
				<i>Elizabeth Young - Saint Paul, MN</i><br />
				<strong>Swap option available</strong><br />
				For sale: 20$ <br />
				<em>Description:</em><br />
				I bouth this shirt 2 months ago and wore it 3 times. The shorts I bought from H&M last week but it is not fit to me <br />
				(continue reading)<br />
				<br />
				<br />
				<Button
				onClick={sayHello}
				type="submit"
				fullWidth
				variant="contained"
				sx={{ mt: 3, mb: 2}}
			>
				Contact Me
			</Button>
			</span><br />
			{/* <Button style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}} onClick={sayHello}>Contact me</Button><br /> */}
		
			
			</Container>
			
		</body>
	);
}

function sayHello() {
	alert('Go to chat page');
}


// Usage


export default ItemSelected;