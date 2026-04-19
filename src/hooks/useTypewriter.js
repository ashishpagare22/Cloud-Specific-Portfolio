import { useEffect, useState } from 'react'

function useTypewriter(
  words,
  { typingSpeed = 100, deletingSpeed = 55, pauseDuration = 1500 } = {},
) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (!words.length) {
      return undefined
    }

    const currentWord = words[currentWordIndex]
    let timeoutId

    if (!isDeleting && displayText === currentWord) {
      timeoutId = window.setTimeout(() => setIsDeleting(true), pauseDuration)
    } else if (isDeleting && displayText === '') {
      timeoutId = window.setTimeout(() => {
        setIsDeleting(false)
        setCurrentWordIndex((index) => (index + 1) % words.length)
      }, deletingSpeed)
    } else {
      timeoutId = window.setTimeout(() => {
        const nextLength = displayText.length + (isDeleting ? -1 : 1)
        setDisplayText(currentWord.slice(0, nextLength))
      }, isDeleting ? deletingSpeed : typingSpeed)
    }

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId)
      }
    }
  }, [
    currentWordIndex,
    deletingSpeed,
    displayText,
    isDeleting,
    pauseDuration,
    typingSpeed,
    words,
  ])

  return displayText
}

export default useTypewriter
