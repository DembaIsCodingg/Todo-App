import Header from './Header';
import Content from './Content';
import AddItem from './AddItem';
import { db } from './.env/firebase-config';
import {collection, getDocs, addDoc, updateDoc,doc,deleteDoc} from "firebase/firestore"
import {useState, useEffect} from 'react'
import SearchItem from './SearchItem';


function App() {
  const [todos,SetTodo] = useState([])
  const [newtodo,SetNewTodo] =useState('')
  const [search,Setsearch] = useState('')
  const userCollectionRef = collection(db,"Taks")

  useEffect(()=>{
    const getData = async () =>{
      const data = await  getDocs(userCollectionRef)
      SetTodo(data.docs.map((doc)=> ({...doc.data(),id:doc.id})))
    }
    getData()
  },[todos])

  const addItem = async () =>{
    await addDoc(userCollectionRef,{Task:newtodo,checked:false})
    
  }
  const handleCheck = async (id,checked)=>{
    const userDoc = doc(db,"Taks",id)
    const newFields = {checked:!checked}
    await updateDoc(userDoc,newFields)
  }
  const DeleteUser = async (id) =>{
    const userDoc = doc(db,"Taks",id)
    await deleteDoc(userDoc)
  }

  return (
    <div className="App h-screen p-0 m-0">
      <Header />
      <AddItem 

      SetNewTodo = {SetNewTodo}
      addItem = {addItem}
      />
      <SearchItem 
      Setsearch = {Setsearch}
      />
      <Content 
      handleCheck={handleCheck}
      DeleteUser={DeleteUser}
      todos = {todos.filter((todo)=> ((todo.Task).toLowerCase().includes(search.toLowerCase())))}
      />
    </div>
  );
}

export default App;
