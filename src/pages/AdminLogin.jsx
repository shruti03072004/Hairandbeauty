import React, { useState } from "react"

const AdminLogin = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ username: "", password: "" })
  const [error, setError] = useState("")

  const handleChange = (e) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    // Hardcoded admin credentials (later we’ll replace with backend JWT auth)
    if (
      credentials.username === "admin" &&
      credentials.password === "admin123"
    ) {
      onLogin()
    } else {
      setError("Invalid credentials")
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F5F1E9]">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#3D217F]">
          Admin Login
        </h2>
        <form onSubmit={submit} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={credentials.username}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded focus:ring-2 focus:ring-[#DDB892] focus:outline-none"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded focus:ring-2 focus:ring-[#DDB892] focus:outline-none"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-[#DDB892] text-white rounded font-semibold hover:scale-105 transition-transform"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default AdminLogin
