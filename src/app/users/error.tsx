"use client";
import { useEffect } from "react";
export default function ErrorPage({ error } : { error : Error }) {
    useEffect(() => {
        console.error(error)
    }, [error])
  return (
    <div className="flex items-center justify-center h-screen">
        <div className="text-red-500 text-2xl">Error while fetching data</div>
    </div>
  )
}
