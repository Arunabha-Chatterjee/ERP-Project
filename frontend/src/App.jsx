import { Toaster } from 'react-hot-toast';
import './App.css'

import { Outlet } from "react-router-dom";

function App() {

    return (
        <div className='font-mono'>
                <Toaster
                    position="top-center"
                    reverseOrder={true}
                    toastOptions={{
                        style: {
                            color: 'white',
                            background: '#030712',
                            border: '#1e2939',
                            zIndex: 9999,
                        }
                    }} />
                <Outlet />
        </div>
    )
}

export default App;
