import { Box, Paper } from '@mui/material'
import SearchResults from '../components/SearchResults';
import SearchForm from '../components/SearchForm';

const styles = {
  paperContainer: {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    minHeight: window.innerHeight,
    backgroundColor: "gray"
  }
}
function index() {
  return (
    <Paper
      style={styles.paperContainer}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <SearchForm readOnly={true}/>
        <SearchResults />
      </Box>
    </Paper>
  )
}

export default index