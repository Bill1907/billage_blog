'use client'
import React, { useMemo, useRef, useState } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css'

import { Editor } from '@toast-ui/react-editor'

export default function BlogCreatePage() {
  const initialValue = '# Hello World'

  const editorRef = useRef<Editor>(null)
  const editorHeight = useMemo(() => {
    if (typeof window === 'undefined') return '800px'
    return `${window.innerHeight - 400}px`
  }, [])

  const handleClickSaveBlog = async () => {
    const editorMarkdown = editorRef.current?.getInstance().getMarkdown()

    const result = await fetch('/api/blog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: editorMarkdown }),
    }).then((res) => res.json())
  }

  return (
    <section
      data-color-mode="dark"
      className="max-w-screen-2xl mx-auto flex flex-col gap-4 mt-6"
    >
      <div className="flex justify-end">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleClickSaveBlog}
        >
          Save
        </button>
      </div>
      <Editor
        initialValue={initialValue}
        previewStyle="vertical"
        height={editorHeight}
        initialEditType="markdown"
        useCommandShortcut={true}
        language={'ko-KR'}
        ref={editorRef}
        theme="dark"
      />
    </section>
  )
}
