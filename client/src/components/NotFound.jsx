import { ArrowLeftIcon } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-center text-6xl text-slate-400 font-medium">
        Resume not found
      </p>
      <a
        href="/"
        className="mt-6 bg-green-500 hover:bg-green-600 text-white rounded-xl px-6 h-9 m-1 ring-offset-1 ring-1 ring-green-400 flex items-center transition-colors"
      >
        <ArrowLeftIcon className="mr-2 size-4" />
        Go to home page
      </a>
    </div>
  );
};

export default NotFound;
