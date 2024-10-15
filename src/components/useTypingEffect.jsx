import { useEffect, useState } from 'react';

const useTypingEffect = (words, typingSpeed = 150, deletingSpeed = 50, delay = 2000) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];

    if (!isDeleting && charIndex === currentWord.length) {
      setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
    }

    const timeout = setTimeout(() => {
      setText(currentWord.substring(0, charIndex));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [ charIndex, isDeleting, index, words, typingSpeed, deletingSpeed, delay]);

  return { text };
};

export default useTypingEffect;
