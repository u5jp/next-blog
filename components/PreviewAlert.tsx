import { FC } from 'react';

const PreviewAlert:FC = () => {
  return (
    <div className="ly_previewAlert">
      <p>This is the preview mode!</p>
      <a
        className="hp-red-text hp-hoverable hp-clickable"
        href="/api/exit-preview">
        Click here if you want to leave preview
      </a>
    </div>
  )
}

export default PreviewAlert
