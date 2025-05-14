import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
}

export const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  duration = 0.5, 
  className = '',
  direction = 'up',
  distance = 30
}) => {
  const getDirectionValues = () => {
    switch (direction) {
      case 'up': return { y: distance };
      case 'down': return { y: -distance };
      case 'left': return { x: distance };
      case 'right': return { x: -distance };
      case 'none': return {};
      default: return { y: distance };
    }
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0,
        ...getDirectionValues()
      }}
      animate={{ 
        opacity: 1,
        x: 0,
        y: 0 
      }}
      transition={{ 
        duration,
        delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface SlideInProps {
  children: ReactNode;
  direction: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  duration?: number;
  className?: string;
  distance?: number;
}

export const SlideIn: React.FC<SlideInProps> = ({
  children,
  direction,
  delay = 0,
  duration = 0.6,
  className = '',
  distance = 100
}) => {
  const getDirectionValues = () => {
    switch (direction) {
      case 'left': return { x: -distance };
      case 'right': return { x: distance };
      case 'up': return { y: -distance };
      case 'down': return { y: distance };
      default: return { x: distance };
    }
  };

  return (
    <motion.div
      initial={getDirectionValues()}
      animate={{ x: 0, y: 0 }}
      transition={{ 
        duration, 
        delay,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface ScaleInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const ScaleIn: React.FC<ScaleInProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  className = ''
}) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        duration, 
        delay,
        type: "spring",
        stiffness: 200,
        damping: 15
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerChildren?: number;
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  wordSpacing?: number;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  delay = 0,
  staggerChildren = 0.08,
  element = 'h1',
  wordSpacing = 0.25
}) => {
  // Separa il testo in parole
  const words = text.split(' ');

  // Configura le varianti di animazione
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren, delayChildren: delay, delay }
    })
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 110, damping: 10 }
    }
  };

  const Component = motion[element];

  return (
    <Component
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
      style={{ display: 'flex', flexWrap: 'wrap' }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block"
          variants={child}
          style={{ marginRight: `${wordSpacing}rem` }}
        >
          {word}
        </motion.span>
      ))}
    </Component>
  );
};

interface AnimateOnScrollProps {
  children: ReactNode;
  threshold?: number;
  animation?: 'fadeIn' | 'slideIn' | 'scaleIn';
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export const Reveal: React.FC<AnimateOnScrollProps> = ({
  children,
  threshold = 0.1,
  animation = 'fadeIn',
  direction = 'up',
  className = ''
}) => {
  const getInitialValues = () => {
    const config: any = { opacity: 0 };
    
    if (animation === 'fadeIn') {
      if (direction === 'up') config.y = 50;
      else if (direction === 'down') config.y = -50;
      else if (direction === 'left') config.x = 50;
      else if (direction === 'right') config.x = -50;
    }
    
    if (animation === 'scaleIn') {
      config.scale = 0.8;
    }
    
    return config;
  };
  
  return (
    <motion.div
      initial={getInitialValues()}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        x: 0, 
        scale: 1 
      }}
      transition={{ 
        duration: 0.8, 
        ease: "easeOut" 
      }}
      viewport={{ once: true, amount: threshold }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  amplitude?: number; // Ampiezza dell'oscillazione
  duration?: number; // Durata del ciclo in secondi
}

export const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  className = '',
  amplitude = 10,
  duration = 4
}) => {
  return (
    <motion.div
      className={className}
      animate={{ 
        y: [0, -amplitude, 0, amplitude, 0],
      }}
      transition={{ 
        duration,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut" 
      }}
    >
      {children}
    </motion.div>
  );
};

interface PulseElementProps {
  children: ReactNode;
  className?: string;
  scale?: number;
  duration?: number;
}

export const PulseElement: React.FC<PulseElementProps> = ({
  children,
  className = '',
  scale = 1.05,
  duration = 2
}) => {
  return (
    <motion.div
      className={className}
      animate={{ 
        scale: [1, scale, 1],
      }}
      transition={{ 
        duration,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut" 
      }}
    >
      {children}
    </motion.div>
  );
};

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  className = '',
  speed = 0.05,
  delay = 0,
  element = 'p'
}) => {
  const Component = motion[element];
  
  return (
    <Component className={className}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 0.1, 
            delay: delay + speed * index,
            ease: "linear" 
          }}
        >
          {char}
        </motion.span>
      ))}
    </Component>
  );
};
