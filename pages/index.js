import {PureComponent} from 'react';
import {AppWrapper} from '../components/AppWrapper'
import BPComp from '../components/BpComp'

class App extends PureComponent {

    constructor(props) {
        super(props)

    }

    render() {


        return(
            <AppWrapper>
                <BPComp/>
            </AppWrapper>
        )

    }


}

export default App