'use client'
import React, { useRef, useState } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css'

import { Editor } from '@toast-ui/react-editor'

export default function BlogCreatePage() {
  const editorRef = useRef<Editor>(null)
  const [value, _] = useState(
    "**Hello world!!!** \n\n ```js \n console.log('Hello world!!!') \n ```",
  )
  const handleClickSaveBlog = async () => {
    const editorMarkdown = editorRef.current?.getInstance().getMarkdown()

    const result = await fetch('/api/blog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: editorMarkdown }),
    }).then((res) => res.json())
    console.log('save blog', result)
  }
  return (
    <main>
      <section data-color-mode="dark">
        <form className="">
          <button onClick={handleClickSaveBlog}>save</button>
        </form>
        <div className="px-6">
          <Editor
            initialValue={value}
            previewStyle="vertical"
            height="800px"
            initialEditType="markdown"
            useCommandShortcut={true}
            language={'ko-KR'}
            ref={editorRef}
          />
        </div>
      </section>
    </main>
  )
}
