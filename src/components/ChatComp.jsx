import React from 'react';
import searchIcon from '../assets/icons/searchIcon.png';

const ChatComp = () => {
  return (
    <div className='mainbox' style={styles.mainbox}>
      <div className='chatlist' style={styles.chatlist}>
        <div className='chatlistheader' style={styles.chatlistheader}>
            <div style={{width:'100%'}}><span style={styles.chatlistheadertext}>Chats</span></div>
            <div style={{width:'100%'}}>
                <input
                    type="text"
                    //value={value}
                    // onChange={handleChange}
                    placeholder="Search"
                    style={styles.chatsearchinput}
                />
            </div>
        </div>
        <div className='conversationwrapper' style={styles.conversationwrapper}>Conversation Wrapper</div>
      </div>
      <div className='chatwindow' style={styles.chatwindow}>
        <div className='chatwindowheader' style={styles.chatwindowheader}>
            <div style={styles.info}>
                <div style={styles.profileCircle}></div>
                <div style={styles.texts}>
                    <div style={styles.name}>Gagan Shetty</div>
                    <div style={styles.lastseeninfo}>Last seen 08 Aug at 05:07 PM</div>
                </div>
            </div>
            <img src={searchIcon} alt="Search" style={styles.searchIconImg} />
        </div>
        <div className='messageswrapper' style={styles.messageswrapper}>Messages Wrapper</div>
      </div>
    </div>
  );
};

const styles = {
  mainbox: {
    width: '60%',
    margin: '10px auto',
    borderRadius: '18px',
    boxShadow: '0 0 10px rgba(255, 255, 255, 0.28)',
    display: 'flex',
    flexDirection: 'row',
    minHeight: '75vh',
    position: 'relative',
    overflow: 'hidden',
    border: '5px solid #000',
  },
  chatlist: {
    width: '30%',
    borderRight: '5px solid #000',
    backgroundImage: 'linear-gradient(to top, #e5e5be90 40%, #003a7395)',
    display: 'flex',
    flexDirection: 'column',
  },
  chatlistheader: {
    padding: '10px',
    fontWeight: 'bold',
    color: '#000',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px'

  },
  chatlistheadertext:{
    fontSize: '35px',
    color: '#fff',
    fontFamily: "'Cal_Sans', sans-serif",
    letterSpacing: '3px',
  },
  chatsearchinput: { 
    padding: '8px', 
    width: '100%', 
    borderRadius: '10px', 
    fontFamily: "'Montserrat_Regular', sans-serif",
    border: '1px solid #ccc',
    boxSizing: 'border-box'
  },
  conversationwrapper: {
    flex: 1,
    backgroundColor: 'transparent',
    borderTop: '2px solid #000',
    padding: '10px',
    overflowY: 'auto',
  },
  chatwindow: {
    width: '70%',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
  },
  chatwindowheader: {
    display: 'flex',
    alignItems: 'center',
    padding: '14px 20px',
    background: '#fff',
    borderRadius: '18px 18px 0 0',
    boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
    justifyContent: 'space-between'
  },
    info: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  profileCircle: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    background: '#b8aee8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texts: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  name: {
    fontSize: 17,
    fontWeight: 500,
    color: '#222',
    marginBottom: 2,
    fontFamily: "'Cal_Sans', sans-serif",
    letterSpacing: '2px',
  },
  lastseeninfo: {
    fontSize: 13,
    color: '#888',
    fontFamily: "'Montserrat_Regular', sans-serif",
  },
  searchIconImg: {
    width: 22,
    height: 22,
    cursor: 'pointer',
    marginLeft: 8,
  },
  messageswrapper: {
    flex: 1,
    backgroundColor: '#F6F4F5', // Light gray
    padding: '10px',
    overflowY: 'auto',
  },
};

export default ChatComp;
