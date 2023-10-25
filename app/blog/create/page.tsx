'use client';
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import Header from "@/components/Header";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor"),
  { ssr: false }
);

export default function BlogCreatePage() {
  const [value, setValue] = useState("**Hello world!!!** \n\n ```js \n console.log('Hello world!!!') \n ```");
  const handleClickSaveBlog = async () => {
      const result = await fetch("http://localhost:3000/api/blog", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({content: value})
      }).then(res => res.json())
      console.log('save blog', result)
  }
  return (
    <main>
        <section data-color-mode="dark">
            <div className="wmde-markdown-var">
                <button onClick={handleClickSaveBlog}>
                    save
                </button>
            </div>
            <MDEditor value={value} onChange={() => setValue} height={1200} />
        </section>
    </main>
  )
}