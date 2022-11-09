import React from 'react';
import styled from 'styled-components';
import CssBaseline from '@mui/material/CssBaseline';
import './itemSelected.css';
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import itemSelected from "../../images/itemSelected.png";
import { Container } from '@mui/system';
import storage from '../../firebase';
import { useEffect, useState } from "react";
import {
	ref,
	uploadBytes,
	getDownloadURL,
	listAll,
} from "firebase/storage";
import { v4 } from "uuid";


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
		<body >
			<CssBaseline />
			<h1> ITEM SELECTED </h1><br />
			<div class="container">
				<div className="slide-container">
					<Fade>
						<div className="each-fade">
							<img class="img-slide" src={fadeImages[0]} />
						</div>
						<div className="each-fade">
							<img class="img-slide" src={fadeImages[1]} />
						</div>
						<div className="each-fade">
							<img class="img-slide" src={fadeImages[2]} />
						</div>
					</Fade>
				</div>
				<div class="text">
					<h2><b>Gray croptop with blue shorts</b></h2><br />
					<i>Elizabeth Young - Saint Paul, MN</i><br />
					<strong>Swap option available</strong><br />
					For sale: 20$ <br />
					<em>Description:</em><br />
					I bouth this shirt 2 months ago and wore it 3 times. The shorts I bought from H&M last week but it is not fit to me <br />
					(continue reading)<br />
					<div id="contact-button">
						<Button
							style={{
								backgroundColor: "#000000",
								padding: "1px 20px",
								fontSize: "12px",
							}} variant="contained">
							<a href="/items">Contact Me</a>
						</Button>
					</div>

				</div>
			</div>

			<span>
				<br />
				<br />


			</span><br />




		</body>
	);
}

function sayHello() {
	alert('Go to another page');
}



// Usage


export default ItemSelected;