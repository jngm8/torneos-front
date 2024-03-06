import Button from "../components/Button";


function Unauthorized() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-4xl font-bold text-red-500 mb-4">401 Unauthorized</h1>
            <p className="text-lg text-gray-700 mb-4">
                Oops! It seems you are not authorized to access this page.
            </p>
            <p className="text-gray-700 mb-4">
                Please contact the administrator if you believe this is an error.
            </p>
            <Button danger rounded>Go Back</Button>
        </div>
    </div>
  )
}

export default Unauthorized;