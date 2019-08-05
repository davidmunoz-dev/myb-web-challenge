import React from "react";
import Container from 'react-bootstrap/Container';

class Fetch extends React.Component {

    constructor(props) {
        super(props);
        this.path = props.path;
        this.state = {
            loading: true,
            data: null
        };
    }

    async componentDidMount() {
        const url = "http://localhost:5000" + this.path;
        const response = await fetch(url);
        const fetchedData = await response.json();
        this.setState({ data: fetchedData, loading: false });
        this.props.handlerFromParant(this.state);
    }

    render() {
        if (this.state.loading) {
            return <div>Loading...</div>;
        }

        return (
            <Container />
        );
    }
}

export default Fetch;