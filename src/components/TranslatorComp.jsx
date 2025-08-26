import React from 'react'

const TranslatorComp = () => {
  return (
    <div style={styles.mainBox}>

      {/* Left Panel */}
      <div style={styles.leftPanel}>

        <div style={styles.topBtns}>
          <button style={styles.actionBtn}>Detect language</button>
        </div>
        <div style={styles.leftPanelBody}>
            <div style={styles.enterText}>Enter text</div>
        </div>
      </div>

      {/* Right Panel */}
      <div style={styles.rightPanel}>

        <div style={styles.topBtns}>
          <button style={styles.actionBtn}>Choose Language</button>
        </div>
        <div style={styles.rightPanelBody}>
            <div style={styles.displayText}>Translation</div>
        </div>
      </div>

      {/* Translate Button */}
      <button style={styles.translateBtn}>Translate</button>
    </div>
  )
}

const styles = {
  mainBox: {
    width: '90%',
    maxWidth: '1200px',
    background: '#fff',
    borderRadius: '18px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
    padding: '30px 30px 30px 30px',
    display: 'flex',
    flexDirection: 'row',
    minHeight: '420px',
    position: 'relative'
  },
  leftPanel: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    
  },
  rightPanel: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  topBtns: {
    display: 'flex',
    gap: '12px',
    justifyContent: 'center',
    marginBottom: '16px'
  },
  leftPanelBody: {
    flex:1,
    borderRight: '2px solid #79797936',
  },
  enterText: {
    fontSize: '2rem',
    color: '#003973',
    marginBottom: '16px',
    marginLeft: '6px',
    fontFamily: "'Montserrat_Regular', sans-serif",
  },
  rightPanelBody: {
    flex:1,
    paddingLeft: '30px'
  },
  displayText:{
    fontSize: '2rem',
    color: '#003973',
    marginBottom: '16px',
    marginLeft: '6px',
    fontFamily: "'Montserrat_Regular', sans-serif",
  },
  actionBtn: {
    border: '2px solid #000',
    color: '#003973',
    background: '#fff',
    padding: '8px 22px',
    borderRadius: '30px',
    fontWeight: '300',
    fontSize: '18px',
    cursor: 'pointer',
    fontFamily: "'Cal_Sans', sans-serif"
  },
  translateBtn: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: '10px',
    background: '#003973',
    backgroundImage: 'linear-gradient(to right, #E5E5BE, #003973)',
    color: '#fff',
    border: '2px solid #000',
    borderRadius: '100px',
    fontFamily: "'Cal_Sans', sans-serif",
    fontWeight: '300',
    fontSize: '20px',
    padding: '5px 25px',
    cursor: 'pointer',
    boxShadow: '0 1px 4px rgba(0,0,0,0.05)'
  }
};


export default TranslatorComp