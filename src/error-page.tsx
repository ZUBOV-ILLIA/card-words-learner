import { useRouteError, isRouteErrorResponse } from "react-router-dom";

interface Error {
  statusText?: string;
  message?: string;
}

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  const errorMessage = isRouteErrorResponse(error)
    ? error.statusText || error.data?.message
    : (error as Error)?.message || "Unknown Error";

  return (
    <div id="error-page" className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-5xl font-bold text-red-500 mb-4">Oops!</h1>
      <p className="text-lg text-gray-700 mb-2">Sorry, an unexpected error has occurred.</p>
      <p className="text-gray-500">
        <i>{errorMessage}</i>
      </p>
      
    </div>
  );
}
