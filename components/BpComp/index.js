import { connect } from 'react-redux'
import { bpStore } from "../../store";
const { addName } = bpStore.actions;

const bpComp = (props) => {

    const updateName = (e) => {
        props.addName(e.target.value)
    };

    return(
        <div>
        <p>{props.greeting}</p>

        <input onChange={updateName} placeholder={"add name here"}/>
        </div>
    )
}

const mapStateToProps = (state /*, ownProps*/) => {
    console.log(state, 'state')
    return {
        greeting: state.bpStore
    }
};

const mapDispatchToProps = { addName };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(bpComp)