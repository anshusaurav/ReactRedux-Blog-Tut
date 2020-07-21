import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {nanoid} from '@reduxjs/toolkit'
import {postAdded} from './postsSlice'
export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const disptatch = useDispatch()
  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)
  const onSavePostClicked = () =>{
    if(title && content) {
      disptatch(
        postAdded({
          id: nanoid(),
          title,
          content
        })
      )
      setTitle('')
      setContent('')
    }
  }
  return (
    <section>
      <form>
        <label htmlFor='postTitle'>Post Title:</label>
        <input
          type='text'
          id='postTitle'
          name='postTile'
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor='postContent'>Post Content:</label>
        <textarea
          id='postContent'
          name='postContent'
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick = {onSavePostClicked}>Save Posts</button>
      </form>
    </section>
  )
}
