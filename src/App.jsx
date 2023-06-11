import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Note from './pages/Note'
import EditNote from './pages/EditNote'
import CreateNote from './pages/CreateNote'
//import dummyNotes from './dummyNotes'
import { useEffect, useState } from 'react'

const App = () =>{
    const [ notes, setNotes ] = useState(JSON.parse(localStorage.getItem('note')) || [])

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])
    return(
        <main id='app'>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Note notes = {notes}/>} />
                <Route path='/edit-note/:id' element={<EditNote notes={notes} setNotes={setNotes} />} />
                <Route path='/create-note' element={<CreateNote setNotes={setNotes}/>} />
            </Routes>
        </BrowserRouter>
        </main>
    )
}

export default App