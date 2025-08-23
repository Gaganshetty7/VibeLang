import React from 'react';

const HeroIllustration = ({ children }) => {
    return (
        <div style={styles.heroBg}>
            {children}
        </div>
    )
}


const styles = {
  heroBg: {
    width: '100%',
    height: '100vh',
    background: '#003973',
    backgroundImage: 'linear-gradient(to right, #E5E5BE, #003973)'
  },
};

export default HeroIllustration;
