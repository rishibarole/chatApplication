
import { connect } from "react-redux"

function mapStateToProps(state){
    return{
        users:state
    }
}

const App = connect(mapStateToProps);

export default App;