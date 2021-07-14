import React, { useEffect, useState } from 'react'
import "./style.css";
export const DownloadFile: React.FC = ({list , isVisible}) => {
  // set up local state for generating the download link
  const [downloadLink, setDownloadLink] = useState('')
  console.log("Visible > "+isVisible);
  // function for generating file and set download link
  const makeTextFile = () => {
    // This creates the file.
    // In my case, I have an array, and each item in
    // the array should be on a new line, which is why
    // I use .join('\n') here.
    const data = new Blob([list.join('\n')], { type: 'text/csv' })

    // this part avoids memory leaks
    if (downloadLink !== '') window.URL.revokeObjectURL(downloadLink)

    // update the download link state
    setDownloadLink(window.URL.createObjectURL(data))
  }

  // Call the function if list changes
  useEffect(() => {
    makeTextFile()
  }, [list])

  return (
    <a
      className={`${isVisible ? "disable" : ""}`}
      // this attribute sets the filename
      download='data.csv'
      // link to the download URL
      href={downloadLink}
    >
      Descargar CSV
    </a>
  )
}

export default DownloadFile
