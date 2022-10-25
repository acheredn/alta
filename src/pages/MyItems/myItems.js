import React from 'react';
import styled from 'styled-components';
import db from "../../firebase";
import CssBaseline from '@mui/material/CssBaseline';
import './myItems.css';
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Container } from '@mui/system';
import storage from '../../firebase';
import database from '../../firebase';
import { useEffect, useState } from "react";
import {
	ref,
	uploadBytes,
	getDownloadURL,
	listAll,
	list,
} from "firebase/storage";
import { v4 } from "uuid";


const MyItems = () => {
	const [imageUpload, setImageUpload] = useState(null);
	const [imageUrls, setImageUrls] = useState([]);


	const imagesListRef = ref(storage, "images/");
	const uploadFile = () => {
		if (imageUpload == null) return;
		const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
		uploadBytes(imageRef, imageUpload).then((snapshot) => {
			getDownloadURL(snapshot.ref).then((url) => {
				setImageUrls((prev) => [...prev, url]);
			});
		});
	};

	const [customerName, setCustomerName] = useState("");
	const [customerPassword, setCustomerPassword] = useState("");
	const [customersData, setCustomersData] = useState([]);
	const [updatedCustomerName, setUpdatedCustomerName] = useState("");
	const [updatedCustomerPassword, setUpdatedCustomerPassword] = useState("");
	const [dataIdToBeUpdated, setDataIdToBeUpdated] = useState("");


	const submit = (e) => {
		e.preventDefault();
		db.collection("customersData").add({
			name: customerName,
			password: customerPassword,
		});

		setCustomerName("");
		setCustomerPassword("");
	};

	const updateData = (e) => {
		e.preventDefault();
		db.collection("customersData").doc(dataIdToBeUpdated).update({
			name: updatedCustomerName,
			password: updatedCustomerPassword,
		});

		setUpdatedCustomerPassword("");
		setUpdatedCustomerName("");
		setDataIdToBeUpdated("");
	};

	useEffect(() => {
		listAll(imagesListRef).then((response) => {
			response.items.forEach((item) => {
				getDownloadURL(item).then((url) => {
					setImageUrls((prev) => [...prev, url]);
				});
			});
		});

		db.collection("customersData").onSnapshot((snapshot) => {
			setCustomersData(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					data: doc.data(),
				}))
			);
		});
	}, []);



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
		<body >
			<Container component="main" maxWidth="s">
				<CssBaseline />

				<Button onClick={uploadFile}> Upload Image</Button>
				{imageUrls.map((url) => {
					return <img src={url} />;
				})}

				{/* <Button style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}} onClick={sayHello}>Contact me</Button><br /> */}


			</Container>
			<div className="App">
				<div className="App__form">
					<input
						type="text"
						placeholder="Name"
						value={customerName}
						onChange={(e) => setCustomerName(e.target.value)}
					/>
					<input
						type="text"
						placeholder="Password"
						value={customerPassword}
						onChange={(e) => setCustomerPassword(e.target.value)}
					/>
					<button onClick={submit}>Submit</button>
				</div>
			</div>
			<div className="App__DataDisplay">
				<table>
					<tr>
						<th>NAME</th>
						<th>PASSWORD</th>
					</tr>

					{customersData?.map(({ id, data }) => (
						<tr key={id}>
							<td>{data.name}</td>
							<td>{data.password}</td>
						</tr>
					))}
				</table>
			</div>

		</body>
	);
}

function sayHello() {
	alert('Go to chat page');
}



// Usage


export default MyItems;