import {react, useHistory} from "react"

const FlowMenu = (props) => {
    const history = useHistory();
    return (
        <>
            <h3>Flow menu</h3>
            <br/>
            <button onClick={() => history.history} >Back</button>
        </>
    );
}