import React from 'react';
import { Button } from 'semantic-ui-react';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    handleClick = (e) => {
        this.props.updateCount(e.target.name)
    }

    render() { 
        return (
            <div className="dashboard">
                <Button.Group>
                    <Button name="strike" onClick={this.handleClick}>
                        Strike
                    </Button>
                    <Button name="ball" onClick={this.handleClick}>
                        Ball
                    </Button>
                </Button.Group>{' '}
                <Button.Group>
                    <Button name="foul" onClick={this.handleClick}>
                        Foul
                    </Button>
                    <Button name="hit" onClick={this.handleClick}>
                        Hit
                    </Button>
                </Button.Group>
            </div>
        );
    }
}
 
export default Dashboard;