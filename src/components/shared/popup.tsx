"use client"

const [showModal, setShowModal] = useState(false);

const openModal = () => {
  setShowModal(true);
};

const closeModal = () => {
  setShowModal(false);
};

const handleSubmit = (event) => {
  // Handle form submission logic here
  event.preventDefault();
  // Add your logic to handle the form data
  closeModal();
};




{showModal && (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-4 w-96">
          <h1 className="text-lg font-mono mb-4">Enter Data Manually</h1>
          <form onSubmit={handleSubmit}>
            {/* Add Mentor Name, Mentor ID fields */}
            <label className="block mb-2">Mentor Name:</label>
            <input
              className="block w-full mb-4 p-2 border border-gray-300 rounded-md"
              type="text"
              name="mentorName"
              required
            />

            <label className="block mb-2">Mentor ID:</label>
            <input
              className="block w-full mb-4 p-2 border border-gray-300 rounded-md"
              type="text"
              name="mentorId"
              required
            />

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
          <button
            className="mt-2 text-gray-600 hover:text-gray-800"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )}