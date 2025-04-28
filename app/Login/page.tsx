export default function LoginPage() {
    return (
      <div
        className="h-screen bg-cover bg-center flex justify-center items-center"
        style={{
          backgroundImage:
            "url('https://worldwildschooling.com/wp-content/uploads/2024/01/Matterhorn_Mumemories_Adobe-Stock-Photo_682931585.jpg')",
        }}
      >
        <div className="w-11/12 max-w-sm text-center">
          <div className="bg-black text-white text-2xl font-semibold px-6 py-2 rounded-full inline-block mb-5">
            Welcome to Trailwise
          </div>
  
          <form className="bg-white p-6 rounded-2xl shadow-md flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              required
              className="p-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="p-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            />
            <button
              type="submit"
              className="py-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-full text-base transition"
            >
              Log In
            </button>
  
            <div className="relative my-5 text-gray-600 font-medium">
              <div className="absolute top-1/2 left-0 w-2/5 h-px bg-gray-300"></div>
              <span className="px-2 bg-white relative z-10">OR</span>
              <div className="absolute top-1/2 right-0 w-2/5 h-px bg-gray-300"></div>
            </div>
  
            <div className="flex justify-center gap-5">
              <button
                type="button"
                className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold hover:bg-red-700 transition"
              >
                G
              </button>
              <button
                type="button"
                className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl hover:bg-gray-800 transition"
              >
                
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  