import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'motion/react';

interface TrueFocusProps {
  sentence?: string;
  manualMode?: boolean;
  blurAmount?: number;
  borderColor?: string;
  glowColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
  focusWords?: string[];
}

interface FocusRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

const TrueFocus: React.FC<TrueFocusProps> = ({
  sentence = 'True Focus',
  manualMode = false,
  blurAmount = 5,
  borderColor = 'green',
  glowColor = 'rgba(0, 255, 0, 0.6)',
  animationDuration = 0.5,
  pauseBetweenAnimations = 1,
  focusWords
}) => {
  const words = useMemo(() => sentence.split(' '), [sentence]);
  const normalizedFocusWords = useMemo(() => {
    return focusWords?.map(word => word.trim().toLowerCase()) ?? [];
  }, [focusWords?.join('|') ?? '']);

  const activeIndices = useMemo(() => {
    if (!normalizedFocusWords.length) {
      return words.map((_, idx) => idx);
    }

    const matched = words
      .map((word, idx) => ({
        idx,
        normalized: word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
      }))
      .filter(({ normalized }) => normalizedFocusWords.includes(normalized))
      .map(({ idx }) => idx);

    return matched.length ? matched : words.map((_, idx) => idx);
  }, [words, normalizedFocusWords]);

  const [currentPointer, setCurrentPointer] = useState<number>(0);
  const [lastActivePointer, setLastActivePointer] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [focusRect, setFocusRect] = useState<FocusRect>({ x: 0, y: 0, width: 0, height: 0 });

  const activeWordIndex =
    activeIndices.length > 0 ? activeIndices[currentPointer % activeIndices.length] : -1;

  useEffect(() => {
    setCurrentPointer(0);
    setLastActivePointer(null);
  }, [activeIndices]);

  useEffect(() => {
    if (!manualMode && activeIndices.length > 0) {
      const interval = setInterval(
        () => {
          setCurrentPointer(prev => (prev + 1) % activeIndices.length);
        },
        (animationDuration + pauseBetweenAnimations) * 1000
      );

      return () => clearInterval(interval);
    }
  }, [manualMode, animationDuration, pauseBetweenAnimations, activeIndices.length]);

  useEffect(() => {
    if (activeWordIndex === null || activeWordIndex === -1) return;
    if (!wordRefs.current[activeWordIndex] || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = wordRefs.current[activeWordIndex]!.getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height
    });
  }, [activeWordIndex]);

  const handleMouseEnter = (index: number) => {
    if (manualMode) {
      const pointerIndex = activeIndices.indexOf(index);
      if (pointerIndex !== -1) {
        setLastActivePointer(pointerIndex);
        setCurrentPointer(pointerIndex);
      }
    }
  };

  const handleMouseLeave = () => {
    if (manualMode) {
      if (lastActivePointer !== null) {
        setCurrentPointer(lastActivePointer);
      }
    }
  };

  return (
    <div className="relative flex gap-4 justify-center items-center flex-wrap" ref={containerRef}>
      {words.map((word, index) => {
        const isActive = index === activeWordIndex;
        const isFocusable = activeIndices.includes(index);
        const shouldBlur = isFocusable && !isActive;
        return (
          <span
            key={index}
            ref={el => {
              wordRefs.current[index] = el;
            }}
            className="relative text-[3rem] font-black cursor-pointer"
            style={
              {
                filter: shouldBlur ? `blur(${blurAmount}px)` : 'blur(0px)',
                transition: `filter ${animationDuration}s ease`
              } as React.CSSProperties
            }
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {word}
          </span>
        );
      })}

      <motion.div
        className="absolute top-0 left-0 pointer-events-none box-border border-0"
        animate={{
      x: focusRect.x,
      y: focusRect.y,
      width: focusRect.width,
      height: focusRect.height,
      opacity: activeWordIndex >= 0 ? 1 : 0
        }}
        transition={{
          duration: animationDuration
        }}
        style={
          {
            '--border-color': borderColor,
            '--glow-color': glowColor
          } as React.CSSProperties
        }
      >
        <span
          className="absolute w-4 h-4 border-[3px] rounded-[3px] top-[-10px] left-[-10px] border-r-0 border-b-0"
          style={{
            borderColor: 'var(--border-color)',
            filter: 'drop-shadow(0 0 4px var(--border-color))'
          }}
        ></span>
        <span
          className="absolute w-4 h-4 border-[3px] rounded-[3px] top-[-10px] right-[-10px] border-l-0 border-b-0"
          style={{
            borderColor: 'var(--border-color)',
            filter: 'drop-shadow(0 0 4px var(--border-color))'
          }}
        ></span>
        <span
          className="absolute w-4 h-4 border-[3px] rounded-[3px] bottom-[-10px] left-[-10px] border-r-0 border-t-0"
          style={{
            borderColor: 'var(--border-color)',
            filter: 'drop-shadow(0 0 4px var(--border-color))'
          }}
        ></span>
        <span
          className="absolute w-4 h-4 border-[3px] rounded-[3px] bottom-[-10px] right-[-10px] border-l-0 border-t-0"
          style={{
            borderColor: 'var(--border-color)',
            filter: 'drop-shadow(0 0 4px var(--border-color))'
          }}
        ></span>
      </motion.div>
    </div>
  );
};

export default TrueFocus;
