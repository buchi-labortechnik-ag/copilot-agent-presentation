import React from 'react';
import { motion } from 'framer-motion';
import './Slide.css';

const slideVariants = {
  hidden: { opacity: 0, x: '100vw' },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 50, damping: 20 } },
  exit: { opacity: 0, x: '-100vw', transition: { ease: 'easeInOut' } },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      stiffness: 50,
      type: 'spring'
    }
  }
};

const Slide = ({ title, subtitle, bulletPoints, image, columns, stepByStep, keyTakeaway, callToAction, headline, textContent }) => {
  return (
    <motion.div
      className="slide"
      variants={slideVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div className="slide-content" variants={contentVariants}>
        {headline && <h1>{headline}</h1>}
        {title && <h2>{title}</h2>}
        {subtitle && <p className="subtitle">{subtitle}</p>}
        
        {bulletPoints && (
          <ul>
            {bulletPoints.map((point, index) => (
              <motion.li
                key={index}
                custom={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1, type: 'spring', stiffness: 50 }}
              >
                {point}
              </motion.li>
            ))}
          </ul>
        )}

        {columns && (
          <div className="columns">
            {columns.map((column, index) => (
              <motion.div 
                key={index} 
                className="column"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.2, type: 'spring', stiffness: 50 }}
              >
                <h3>{column.title}</h3>
                <ul>
                  {column.points.map((point, pIndex) => (
                    <li key={pIndex}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        )}

        {stepByStep && (
          <div className="step-by-step">
            <ol>
              {stepByStep.map((step, index) => (
                 <motion.li
                  key={index}
                  custom={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, type: 'spring', stiffness: 50 }}
                >
                  <strong>{step.split(':')[0]}:</strong>{step.substring(step.indexOf(':') + 1)}
                </motion.li>
              ))}
            </ol>
            {keyTakeaway && <p className="key-takeaway"><strong>Key Takeaway:</strong> {keyTakeaway}</p>}
          </div>
        )}
        
        {textContent && <p>{textContent}</p>}

        {callToAction && <p className="call-to-action">{callToAction}</p>}
        
        {image && <motion.img 
          src={image} 
          alt={title || headline || 'Presentation image'} 
          className="slide-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, type: 'spring', stiffness: 50 }}
        />}
      </motion.div>
    </motion.div>
  );
};

export default Slide;
