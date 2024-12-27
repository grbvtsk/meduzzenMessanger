import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";


const Register = ()=>{

    const [formData, setFormData] = useState({
        name: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/auth/register", formData);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user",response.data.name)
            alert("Sign up is successful!");
            navigate("/chat");
        } catch (err) {
            alert("Invalid username or password");
            console.error(err);
        }
    };

    return(
        <div>
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <form
                    onSubmit={handleRegister}
                    className="w-full max-w-md bg-white rounded-lg shadow-lg p-6"
                >
                    <h2 className="text-2xl font-bold text-center mb-6">Sign up</h2>
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="Enter your username"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Sign up
                    </button>
                    <p className="text-center text-gray-600 mt-4">
                        Already have an account?{" "}
                        <span
                            className="text-blue-500 cursor-pointer hover:underline"
                            onClick={() => navigate("/")}
                        >
            Sign in
          </span>
                    </p>
                </form>
            </div>
        </div>
    )
}
export default Register
