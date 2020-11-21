import React from 'react'
import { connect } from 'react-redux'

class Item extends React.Component {

    render(){
        const list = this.props.list ?? []
        const item = list.find(d => d.id === this.props.id)

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
      list: state.app.list
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
