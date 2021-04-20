export const ExampleLogin = () => {
  return (
    <div class="sm:py-5 md:py-10 lg:py-20 lg:my-20">
      <div class="block lg:flex bg-white dark:bg-gray-800 rounded-lg">
        <div class="w-full lg:w-1/6 flex lg:border-r border-gray-400">
          <div class="m-auto rounded-full">
            <a href="/" class="flex items-base pt-10 lg:p-2 -mb-10 lg:-mb-0">
              <img
                src="https://parsinta.com/logo/blue.png"
                alt=""
                class="w-12 lg:w-48"
              />
              <div class="block lg:hidden text-2xl text-primary hover:text-primary tracking-wide font-semibold uppercase">
                Parsinta
              </div>
            </a>
          </div>
        </div>
        <div class="w-full lg:w-2/3 px-6 py-16 lg:shadow-lg">
          <div class="mb-4 font-light tracking-widest text-2xl">LOGIN</div>
          <form>
            <div class="mb-4">
              <label
                for="email"
                class="block mb-2 text-sm text-gray-800 dark:text-gray-200"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                class="focus:border-blue-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                autocomplete="email"
                required
              />
              <div v-if="feedback.email.error">
                <div
                  class="text-sm text-red-500 mt-2"
                  v-text="feedback.email.message"
                ></div>
              </div>
            </div>
            <div class="mb-4">
              <label
                for="password"
                class="block mb-2 text-sm text-gray-800 dark:text-gray-200"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                class="focus:border-blue-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                autocomplete="current-password"
                required
              />
            </div>
            <label class="mb-4 flex items-center">
              <input
                type="checkbox"
                class="form-checkbox"
                name="remeber"
                id="remeber"
                checked
              />
              <span class="ml-2">I want to remember you ?</span>
            </label>
            <div class="block md:flex items-center justify-between">
              <button
                type="submit"
                class="align-middle bg-blue-500 hover:bg-blue-600 text-center px-4 py-2 text-white text-sm font-semibold rounded-lg inline-block shadow-lg"
              >
                LOGIN
              </button>

              <a
                class="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-600 no-underline block mt-3"
                href="/password/reset"
              >
                Forgot Your Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
