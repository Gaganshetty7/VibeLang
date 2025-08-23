import React from 'react'

const HeroSection = () => {
    return (
        <div style={styles.heroDiv}>
            <div style={styles.headerDiv}>
                <span style={styles.name}>VibeLang</span>
                <span style={styles.note}>Powered by real-time messaging & Seamless translations.</span>
                <div style={styles.buttonsDiv}>
                    
                </div>
            </div>
            
        </div>
    )
}

const styles = {
    heroDiv:{
        flex: 1,
        paddingTop: '70px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start' 
    },
    headerDiv: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#000',
    },
    name: {
    fontSize: '100px',
    fontFamily: "'Cal_Sans', sans-serif",
    fontColor: 'linear-gradient(to right, #E5E5BE, #003973)'
    },
    note: {
        fontSize: '17px',
        fontWeight: '300',
        fontFamily: "'Montserrat_Regular', sans-serif",
        marginTop: '10px',
        width: '600px',
        color: '#000',
    }
}

export default HeroSection