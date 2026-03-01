import { useState } from "react"
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSave = (event: any) => {
        event.preventDefault();
        localStorage.setItem('user', JSON.stringify({
            username,
            password
        }));
        navigate('/home')
    };

    return (
        <div>
            <form 
                className="flex flex-col gap-4 items-center"
                onSubmit={handleSave}
            >
                <div className="flex flex-col gap-4 items-start">
                    <label htmlFor="username">Username</label>
                    <input 
                        id="username" 
                        type="text" 
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                        className="w-sm border border-black rounded-lg h-8 p-4"
                    />
                </div>
                <div className="flex flex-col gap-4 items-start">
                    <label htmlFor="password">Password</label>
                    <input 
                        id="password" 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-sm border border-black rounded-lg h-8 p-4"
                    />
                </div>
                <button className="mt-8 cursor-pointer bg-blue-100 h-8 w-16">
                    Login
                </button>
            </form>
        </div>

    )
}

export default LoginPage