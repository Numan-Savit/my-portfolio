

const HireMeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-[90%] max-w-md p-6 relative">

        <h2 className="text-2xl font-bold mb-4 text-center dark:text-white">Hire Me</h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          />
          <textarea
            placeholder="Message"
            className="w-full p-2 border rounded h-24 dark:bg-gray-700 dark:text-white"
          />
          <button type="submit" className="btn btn-primary w-full">
            Send
          </button>
        </form>

        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl font-bold text-gray-600 dark:text-white hover:text-red-500"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default HireMeModal;
