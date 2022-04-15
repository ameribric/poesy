import React, { useState, useEffect } from "react";

function NewPoemForm({ title, author, masterpiece }) {
  const [isNewPoemForm, setisNewPoemForm] = useState('')
  return (
    <form className="new-poem-form" onChange={e => setisNewPoemForm(e.target.value)}>
      <input placeholder="Title" title = {title} />
      <input placeholder="Author" author = {author} />
      <textarea placeholder="Write your masterpiece here..." rows={10} masterpiece = {masterpiece} />
      <input type="submit" value={isNewPoemForm} onSubmit={e=> (e.preventDefault()); console.log('You clicked submit')}/>
  );
    </form>
  );
}

export default NewPoemForm;
