export const ContactForm = ({
  handleOnSubmit,
  handleOnChange,
  inputs,
  status,
}) => {
  return (
    <form
      onSubmit={handleOnSubmit}
      className="relative w-full px-4 mx-auto max-w-lg mt-10"
    >
      <h1 className="relative text-center font-light text-gray-800 dark:text-gray-300 text-3xl leading-relaxed lg:text-5xl">
        <span className="uppercase font-bold tracking-10">Contact me</span>
      </h1>

      <div className="mt-10">
        <label htmlFor="email">Email</label>
        <input
          className="block w-full p-2 bg-gray-800 border border-white focus:outline-none"
          id="email"
          type="email"
          onChange={handleOnChange}
          required
          placeholder="your@email.com"
          value={inputs.email}
        />
      </div>
      <div className="mt-10">
        <label htmlFor="message">Message</label>
        <textarea
          className="block w-full p-2 bg-gray-800 border border-white focus:outline-none"
          id="message"
          onChange={handleOnChange}
          required
          rows="10"
          value={inputs.message}
          placeholder="Your message..."
        />
      </div>
      <button
        className="mt-10 py-2 px-4 border-2 border-gray-800 dark:border-white text-gray-800 dark:text-white uppercase text-sm tracking-24 bg-transparent hover:bg-white hover:text-gray-900 transition duration-150 ease-in-out"
        type="submit"
        disabled={status.submitting}
      >
        {!status.submitting
          ? !status.submitted
            ? "Submit"
            : "Submitted"
          : "Submitting..."}
      </button>
      <div className="mt-4">
        {status.info.error && (
          <div className="error">Error: {status.info.msg}</div>
        )}
        {!status.info.error && status.info.msg && (
          <div className="success">{status.info.msg}</div>
        )}
      </div>
    </form>
  );
};
