"use client";
import React, { useEffect } from "react";
import { toast } from 'react-toastify'
import { HOME } from "../../routes/paths.routes";




export default function ErrorBoundaryFallback({ error }: any) {



  const logError = (error: Error) => {
    // Do something with the error, e.g. log to an external API
    console.error(error);
  };


  useEffect(() => {

    toast.error(error.message);
    toast.info("Redirecting in 3s ...");

    setTimeout(() => {
      window.location.href = HOME;
    }, 3000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  logError(error);
  return (
    <>
      <div
      role="alert"
      >
        <p>Something went wrong:</p>
        <pre
          style={{ color: "red" }}
        >
          {error.message}
        </pre>
      </div>

    </>
  );
}