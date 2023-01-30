import { Box, Paper, Typography } from '@mui/material'
import SearchForm from '../components/SearchForm';


const styles = {
  paperContainer: {
    backgroundColor: "grey",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    minHeight: window.innerHeight,
    
  }
}

function index() {
  return (
    <Paper
      style={styles.paperContainer}>
      
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
      >
        <SearchForm/>
      </Box>

    </Paper>
  )
}

export default index