import React from 'react'
import Header from './components/Header'
import Dialogue from './components/Dialogue'
import Sender from './components/Sender'

import {Context} from './context'
import {getTheme, setTheme} from './helpers/theme'

function App() {
    const [message, addMessage] = React.useState(null);
    const [theme, toggleTheme] = React.useState(getTheme())

    React.useEffect(() => {
        setTheme(theme)
    })

  return (
    <div className="container">
        <Context.Provider value={{
            theme, toggleTheme
        }}>
            <Header />
            <Dialogue newMessage={message} />
            <Sender onAddMessage={addMessage} />
        </Context.Provider>
    </div>
  );
}

export default App;
