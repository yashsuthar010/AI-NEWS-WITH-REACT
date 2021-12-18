import  {makeStyles} from '@material-ui/core/styles';


export default  makeStyles({
    container: {
        padding: '0 5%',
        width:'100%',
        margin:0,
        paddingTop:'5rem',
        background:'#F5F5F5'

    },
    card:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        width:'102%',
        height:'50vh',
        padding:'10%',
        borderRadius:10,
        color:'white'

    },
    infoCard:{
        display:'flex',
        flexDirection:'column',
        textAlign:'center'
    }
});
