import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#524632',
        alignItems: 'center',
        justifyContent: 'center',
    },
    boardView: {
      backgroundColor: '#8F7E4F',
      width:300,
      paddingBottom:15,
      borderRadius:10,
      justifyContent:'center',
      alignItems:'center',
      marginTop:30,
    },
    boardList: {
      marginTop:30,
    },
    boardText: {
        color:'#F6FEDB',
        margin:3,
        fontSize:18,

    },
    boardImage:{ 
        width: 150, 
        height: 150, 
        borderRadius: 10
    },
    boardButton:{
        backgroundColor:'#8F7E4F',
        justifyContent:'center',
        alignItems:'center',
        width:150,
        marginLeft:75,
        marginTop:20,
        height:50,

    },
    buttonText:{
        fontSize:18,
    },
    header: {
        fontSize: 30,
        color: '#EAF0CE',
        marginTop:75,

      },
  
  });

  export default styles