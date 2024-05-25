import React, { useState, useEffect } from "react";

function Typing({ text, typingSpeed = 80, deletingSpeed = 50, duration = 1000}) {
  const [displayedText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        if (displayedText.length < text.length) {
          setDisplayText((prev) => prev + text.charAt(prev.length));
        } else {
            setTimeout(() => {
              setIsDeleting(true);
            }, duration);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayText((prev) => prev.slice(0, prev.length - 1));
        } else {
          setIsDeleting(false);
        }
      }
    };

    const timeout = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);

  }, [displayedText, isDeleting, text, typingSpeed, deletingSpeed, duration]);

  return (
    <div class="typing-effect">
        {displayedText}
      <span class="caret">|</span>
    </div>
  );
}

export default Typing;