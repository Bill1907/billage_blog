'use client'
import dynamic from 'next/dynamic'
import React, { useRef, useState } from 'react'
import Header from '@/components/Header'
import '@toast-ui/editor/dist/toastui-editor.css'

import { Editor } from '@toast-ui/react-editor'

export default function BlogCreatePage() {
  const editorRef = useRef<Editor>(null)
  const [value, setValue] = useState(
    "**Hello world!!!** \n\n ```js \n console.log('Hello world!!!') \n ```",
  )
  const handleClickSaveBlog = async () => {
    const editorMarkdown = editorRef.current?.getInstance().getMarkdown()
    console.log(editorMarkdown)
    // const result = await fetch('http://localhost:3000/api/blog', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ content: value }),
    // }).then((res) => res.json())
    // console.log('save blog', result)
  }
  return (
    <main>
      <section data-color-mode="dark">
        <div className="wmde-markdown-var">
          <button onClick={handleClickSaveBlog}>save</button>
        </div>
        <div className="px-6">
          <Editor
            initialValue={value}
            previewStyle="vertical"
            height="1200px"
            initialEditType="markdown"
            useCommandShortcut={true}
            ref={editorRef}
          />
        </div>
      </section>
    </main>
  )
}
