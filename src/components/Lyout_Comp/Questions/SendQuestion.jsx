import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function SendQuestion() {
  const [isOpened, setIsOpened] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    // כאשר הקומפוננטה נטענת, הפעל את האנימציה
    controls.start({ x: isOpened ? 0 : '-100%' });
  }, [isOpened, controls]);

  const handleScroll = () => {
    // הפעל פעולה בהתאם לגלילה
    if (window.scrollY > 100) {
      setIsOpened(true);
    } else {
      setIsOpened(false);
    }
  };

  useEffect(() => {
    // הוסף את האזנה לאירוע הגלילה
    window.addEventListener('scroll', handleScroll);

    // הסר את האזנה בעת יציאה מהדף
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'white',
        zIndex: 1000,
        overflow: 'hidden',
      }}
      initial={{ x: '-100%' }}
      animate={controls}
      transition={{ duration: 1 }}
    >
      <h1>World!</h1>
    </motion.div>
  );
}
