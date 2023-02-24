import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    appContainer: {
      flex: 1,  
      backgroundColor: '#ffe',
      alignItems: 'center',
      justifyContent: 'center',
    },
    topContainer: {
      flexDirection:"row",    
      flex: 1,
      width:'100%',
      backgroundColor: '#aaf',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    midContainer: {
      flexDirection:"row",
      width:'100%',
      flex: 1,
      backgroundColor: '#aff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bottomContainer: {
      flexDirection:"row",
      width:'100%',
      flex: 1,
      backgroundColor: '#ada',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      width: 150,
      height: 50,
      fontSize: 40,
      alignItems: 'center',
      paddingTop: 10,
      borderRadius: 10,
      backgroundColor: '#3498db'
    },
    textContainer: {
      fontWeight:'bold',
      fontSize:20,
    }
  });
