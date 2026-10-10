import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }
   componentDidCatch(error, errorInfo) {
    console.log("Error:", error);
    console.log("Error Info:", errorInfo);
  }

  static getDerivedStateFromError(hasError) {
    return { hasError };
  }

  render() {
    if (this.state.hasError) {
      return (
       <div className="min-h-screen flex items-center justify-center bg-white px-4">
          <div className="w-full max-w-sm text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-red-500"
              >
                <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>
 
            <h1 className="mt-5 text-2xl font-semibold text-gray-900">
              Oops, xəta baş verdi
            </h1>
 
            <p className="mt-2 text-sm text-gray-500">
              Gözlənilməz bir problem yarandı. Səhifəni yeniləməyi cəhd edin.
            </p>
 
            <button
              onClick={() => window.location.reload()}
              className="mt-6 w-full rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            >
              Yenidən cəhd et
            </button>
 
            {this.state.hasError?.stack && (
              <details className="mt-5 text-left">
                <summary className="cursor-pointer text-xs text-gray-400 hover:text-gray-600">
                  Xəta detallarını göstər
                </summary>
                <pre className="mt-2 max-h-48 overflow-auto rounded-md bg-gray-50 border border-gray-200 p-3 text-xs text-gray-600 whitespace-pre-wrap break-words">
                  {this.state.hasError.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
