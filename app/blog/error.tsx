"use client";

export default function ErrorWrapper({ error }: { error: Error }) {
  return <h1>OOPS!!! {error.message}</h1>;
}
