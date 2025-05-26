import React from 'react';
import { Heart } from 'lucide-react';
const anatomyImage = '/static/Anatomy.png';
const AnatomySection = () => {
    return (
      <div className="anatomy-section">
        <div className="anatomy-container">
          <div className="anatomy-figure">
            <img 
              src={anatomyImage} 
              alt="Human Anatomy" 
              className="anatomy-image"
            />
            {/* <div className="anatomy-indicator healthy-heart">
              <Heart size={16} />
              <span>Healthy Heart</span>
            </div>
            <div className="anatomy-indicator healthy-leg">
              <span>Healthy Leg</span>
            </div> */}
          </div>
        </div>
      </div>
    );
  };
  export {AnatomySection};