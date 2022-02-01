const CustomersRating = () => {
  return (
    <div classname="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-coolGray-900 dark:text-coolGray-100">
      <div classname="flex flex-col w-full">
        <h2 classname="text-3xl font-semibold text-center">Customer reviews</h2>
        <div classname="flex flex-wrap items-center mt-2 mb-1 space-x-2">
          <div classname="flex">
            <button
              type="button"
              title="Rate 1 stars"
              aria-label="Rate 1 stars"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                classname="w-6 h-6 dark:text-yellow-500"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </button>
            <button
              type="button"
              title="Rate 2 stars"
              aria-label="Rate 2 stars"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                classname="w-6 h-6 dark:text-yellow-500"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </button>
            <button
              type="button"
              title="Rate 3 stars"
              aria-label="Rate 3 stars"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                classname="w-6 h-6 dark:text-yellow-500"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </button>
            <button
              type="button"
              title="Rate 4 stars"
              aria-label="Rate 4 stars"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                classname="w-6 h-6 dark:text-coolGray-600"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </button>
            <button
              type="button"
              title="Rate 5 stars"
              aria-label="Rate 5 stars"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                classname="w-6 h-6 dark:text-coolGray-600"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </button>
            {/**/}
          </div>
          <span classname="dark:text-coolGray-400">3 out of 5</span>
        </div>
        <p classname="text-sm dark:text-coolGray-400">861 global ratings</p>
        <div classname="flex flex-col mt-4">
          <div classname="flex items-center space-x-1">
            <span classname="flex-shrink-0 w-12 text-sm">5 star</span>
            <div classname="flex-1 h-4 overflow-hidden rounded-sm dark:bg-coolGray-700">
              <div classname="dark:bg-orange-300 h-4 w-5/6" />
            </div>
            <span classname="flex-shrink-0 w-12 text-sm text-right">83%</span>
          </div>
          <div classname="flex items-center space-x-1">
            <span classname="flex-shrink-0 w-12 text-sm">4 star</span>
            <div classname="flex-1 h-4 overflow-hidden rounded-sm dark:bg-coolGray-700">
              <div classname="dark:bg-orange-300 h-4 w-4/6" />
            </div>
            <span classname="flex-shrink-0 w-12 text-sm text-right">67%</span>
          </div>
          <div classname="flex items-center space-x-1">
            <span classname="flex-shrink-0 w-12 text-sm">3 star</span>
            <div classname="flex-1 h-4 overflow-hidden rounded-sm dark:bg-coolGray-700">
              <div classname="dark:bg-orange-300 h-4 w-3/6" />
            </div>
            <span classname="flex-shrink-0 w-12 text-sm text-right">50%</span>
          </div>
          <div classname="flex items-center space-x-1">
            <span classname="flex-shrink-0 w-12 text-sm">2 star</span>
            <div classname="flex-1 h-4 overflow-hidden rounded-sm dark:bg-coolGray-700">
              <div classname="dark:bg-orange-300 h-4 w-2/6" />
            </div>
            <span classname="flex-shrink-0 w-12 text-sm text-right">33%</span>
          </div>
          <div classname="flex items-center space-x-1">
            <span classname="flex-shrink-0 w-12 text-sm">1 star</span>
            <div classname="flex-1 h-4 overflow-hidden rounded-sm dark:bg-coolGray-700">
              <div classname="dark:bg-orange-300 h-4 w-1/6" />
            </div>
            <span classname="flex-shrink-0 w-12 text-sm text-right">17%</span>
          </div>
          {/**/}
        </div>
      </div>
    </div>
  );
};

export default CustomersRating;