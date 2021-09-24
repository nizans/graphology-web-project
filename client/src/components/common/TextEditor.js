import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import Spinner from 'components/UI/Spinner';

const TextEditor = props => {
  const { handleChange, value, name, height = '100%', title, placeholder, inline = false } = props;
  const [ready, setReady] = useState(false);
  return (
    <>
      <h3 className="_text-3xl">{title}</h3>
      <Editor
        textareaName={name}
        value={value}
        apiKey={'bull4brfw8frsrmmmbme09tjrl43xjf55mkrygmkcd2xexig'}
        onInit={() => {
          setReady(true);
        }}
        onEditorChange={val => {
          handleChange({ target: { name: name, value: val } });
        }}
        inline={inline}
        init={{
          selector: 'textarea',
          placeholder: placeholder,
          resize: false,
          directionality: 'rtl',
          height: height,
          width: '100%',
          menubar: false,
          plugins: [
            'advlist autolink lists link charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount',
          ],
          toolbar:
            'undo redo | ' +
            'bold italic | alignleft aligncenter ' +
            'alignright alignjustify lineheight | bullist numlist | ' +
            'removeformat',
          content_css: false,
          content_style: `body: {
                background-color: #FFFBF7; 
                display: ${ready ? 'block' : 'none'}}`,
        }}
      />
      {!ready && <Spinner />}
    </>
  );
};

export default TextEditor;
