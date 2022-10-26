import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import Todo from '../../components/todo';
import { db } from '../../firebase';
import { collection, onSnapshot, serverTimestamp, addDoc } from 'firebase/firestore';
function MyItems() {
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState('');
	useEffect(() => {
		onSnapshot(collection(db, 'todos'), (snapshot) => {
			setTodos(snapshot.docs.map(doc => doc.data()))
		})
	}, [input])
	const addTodo = (e) => {
		e.preventDefault();
		addDoc(collection(db, 'todos'), {
			todo: input,
			timestamp: serverTimestamp()
		})
		setInput('')
	};
	return (
		<div className="App">
			<h2> My Items </h2>
			<form>
				<TextField id="outlined-basic" label="Add your item" variant="outlined" style={{ margin: "0px 5px" }} size="small" value={input}
					onChange={e => setInput(e.target.value)} />
				<Button variant="contained" color="primary" onClick={addTodo}  >Add Item</Button>
			</form>
			<ul>
				{todos.map(({ todo }) => <Todo todo={todo} />)}
			</ul>
		</div>
	);
}
export default MyItems;