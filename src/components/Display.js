import React from 'react';
import { Icon, Image, Statistic } from 'semantic-ui-react';


class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <Statistic.Group widths='two'>
                    <Statistic>
                    <Statistic.Value>
                        <Icon name='baseball ball' size='small'/>{this.props.count.balls}
                    </Statistic.Value>
                    <Statistic.Label>Balls</Statistic.Label>
                    </Statistic>
                    <Statistic>
                    <Statistic.Value>
                        <Image src='https://image.flaticon.com/icons/svg/37/37689.svg' className='circular inline' />
                        {this.props.count.strikes}
                    </Statistic.Value>
                    <Statistic.Label>Strikes</Statistic.Label>
                    </Statistic>
                </Statistic.Group>
            </div>
        );
    }
}
 
export default Display;