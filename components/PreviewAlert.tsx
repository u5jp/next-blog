
export default function PreviewAlert() {
  return (
    <div className="previewAlert">
      <p>This is the preview mode!</p>
      {/* TODO: This will lead me to API route that will remove preview cookies */}
      <a
        className="u-red-text u-hoverable u-clickable"
        href="/api/exit-preview">
        Click here if you want to leave preview
      </a>
    </div>
  )
}
