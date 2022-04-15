import React, { useState } from "react";

function Poem({title, author, content, }) {
  const [readButton, setReadButton] = useState(false)
  return (
    <div>
      <h3 title = {title} >Title</h3>
      <p conetent = {content}>Content</p>
      <p>
        <strong author = {author} >- By Author</strong>
      </p>
      <button setReadButton(readButton) > Mark as read</button>
    </div>
  );
}

const postRequest
{
  method: 'POST'
  headers: "Content-Type": "application/json"
  body: JSON.stringify( {title, content,author} )
  "title": "",
  "content": "",
  "author": ""
}
const request = async () => {
  let req = await fetch('http://localhost:8004/poems')
  let res = await req.json()
 console.log(res)
 
export default Poem;
