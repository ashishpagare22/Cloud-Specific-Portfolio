import { useEffect, useState } from 'react'

function useTerminalTyping(
  lines,
  { typingSpeed = 34, lineDelay = 320, resetDelay = 2200 } = {},
) {
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    if (!lines.length) {
      return undefined
    }

    const currentLine = lines[lineIndex]
    let timeoutId

    if (charIndex < currentLine.text.length) {
      timeoutId = window.setTimeout(() => {
        setCharIndex((value) => value + 1)
      }, typingSpeed)
    } else if (lineIndex < lines.length - 1) {
      timeoutId = window.setTimeout(() => {
        setLineIndex((value) => value + 1)
        setCharIndex(0)
      }, lineDelay)
    } else {
      timeoutId = window.setTimeout(() => {
        setLineIndex(0)
        setCharIndex(0)
      }, resetDelay)
    }

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId)
      }
    }
  }, [charIndex, lineDelay, lineIndex, lines, resetDelay, typingSpeed])

  const typedLines = lines
    .map((line, index) => {
      if (index < lineIndex) {
        return line
      }

      if (index === lineIndex) {
        return {
          ...line,
          text: line.text.slice(0, charIndex),
        }
      }

      return null
    })
    .filter(Boolean)

  return {
    activeLineIndex: lineIndex,
    typedLines,
  }
}

export default useTerminalTyping
