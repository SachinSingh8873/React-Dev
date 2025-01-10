import React from 'react'

function Login() {
  return (
   <>
    <div class="flex items-center justify-center bg-black bg-opacity-20 min-h-screen rounded-box">
    <div class="w-full max-w-sm bg-white p-10 rounded-box shadow-md">
    <h2 class="text-2xl font-bold text-gray-800 text-center mb-5">Login</h2>
    <form>
      <div class="mb-4">
        <label for="username" class="block text-sm font-medium text-gray-600 mb-2">
          Username
        </label>
        <input type="text" id="username" placeholder="Enter your username" required
          class="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
      </div>
      <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray-600 mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          required
          class="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition btn btn-ghost bg-blue-500 text-white hover:bg-white-600 hover:text-blue-500">
        Login
      </button>
      <p class="mt-4 text-sm text-gray-600 text-center">Don't have an account? 
        <a href="/register" class="text-blue-500 hover:underline">
          Register here
        </a>
      </p>
    </form>
  </div>
</div>
   </>
  )
}

export default Login
