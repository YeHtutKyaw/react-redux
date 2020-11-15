import React from 'react'
import { connect } from 'react-redux'

class Item extends React.Component {

    render(){
        const { list = [] } = this.props.app
        const item = list[this.props.id - 1]

        return (
            <li style={styles.item}> 
                <img src={item.avatar} height='40' /> 
                <div style={{ marginLeft: 10}}><b>{`${item.first_name} ${item.last_name}`}</b> - <i>{item.email}</i></div>
            </li>
        )
    }
}

export default connect(
    state => ({
      app: state.app
    }),
    {}
  )(Item)

const styles = {
    item: {
        margin: 4,
        padding: 10,
        color: 'white',
        background: '#009688',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }
}
