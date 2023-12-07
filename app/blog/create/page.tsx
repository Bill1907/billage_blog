'use client';
import { useMemo, useRef, useState, MouseEvent, KeyboardEvent } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';

export default function BlogCreatePage() {
  const initialValue = '# Hello World';

  const [title, setTitle] = useState('');
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState<string[]>([]);

  const editorRef = useRef<Editor>(null);

  const editorHeight = useMemo(() => {
    if (typeof window === 'undefined') return '800px';
    return `${window.innerHeight - 400}px`;
  }, []);

  const handleKeyDownEnterOnTagInput = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;
    if (tag === '') return;

    if (tags.includes(tag)) {
      setTag('');
      return;
    }

    setTags([...tags, tag]);
    setTag('');
  };

  const handleClickAppendTag = () => {
    setTags([...tags, tag]);
    setTag('');
  };

  const handleClickDeleteTag = (e: MouseEvent<HTMLSpanElement>) => {
    const target = e.target as HTMLSpanElement;
    const tag = target.innerText.replace('#', '');
    setTags(tags.filter((t) => t !== tag));
  };

  const handleClickSaveBlog = async () => {
    const editorMarkdown = editorRef.current?.getInstance().getMarkdown();

    await fetch('/api/blog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        tags: [
          'js',
          'ts',
          'javascript',
          'typescript',
          'test-driven-development',
        ],
        content: editorMarkdown,
      }),
    });
  };

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
      <div>
        <input
          className="w-full h-12 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <input
            className="w-full h-12 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
            type="text"
            placeholder="Tag"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            onKeyDown={(e) => handleKeyDownEnterOnTagInput(e)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
            onClick={handleClickAppendTag}
          >
            +
          </button>
        </div>
        <div>
          {tags.map((tag, index) => (
            <span
              className="bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 cursor-pointer hover:bg-gray-400"
              key={`tag_${index}`}
              onClick={handleClickDeleteTag}
            >
              #{tag}
            </span>
          ))}
        </div>
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
  );
}
