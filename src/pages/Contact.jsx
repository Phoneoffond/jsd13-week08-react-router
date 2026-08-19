export default function Contact() {
  return (
    <div className="text-left bg-white rounded-2xl md:rounded-4xl flex flex-col p-4 md:p-8">
      <h1 className="text-2xl md:text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-700 text-base md:text-xl mb-2 mt-4">Message</p>
      <textarea
        className="border border-gray-300 rounded-2xl md:rounded-4xl p-4 mb-4 text-sm md:text-base"
        rows="1"
        placeholder="Enter your message here..."
      />
      <button className="bg-orange-500 text-white px-4 md:px-6 py-2 rounded-2xl md:rounded-4xl hover:opacity-80 transition-colors w-max-content text-sm md:text-base">
        Send Message
      </button>
    </div>
  );
}