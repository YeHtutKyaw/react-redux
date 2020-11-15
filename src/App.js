import React from 'react'
import { connect } from 'react-redux'
//action
import { setState, fetchUserList } from './reducers/app'

import Item from './components/Item'

class App extends React.Component {

  componentWillMount(){
    this.props.fetchUserList()
  }

  render(){
    const list = this.props.list ?? []

    return (
      <div style={styles.container}>
          <h1 style={styles.title}>User List</h1>

          <ul style={styles.itemList}>
          {
            list.map((data, index) => {
              return (
                <Item
                  key = { index }
                  id = { data.id }
                />
              )
            })
          }
        </ul>
      </div>  
    )
  }
}

export default connect(
  state => ({
    list: state.app.list
  }),
  {
    setState,
    fetchUserList
  }
)(App)

const styles = {
    container: {
        margin: 'auto',
        marginTop: 20,
        padding: 20,
        width: 800,
        borderWith: 5,
        borderStyle: 'solid',
        borderColor: '#ddd',
        background: '#697689'
    },
    title: {
        textAlign: 'center',
        color: 'white'
    },
    itemList: {
      listStyle: 'none',
      padding: 0,
      display: 'flex',
      flexDirection: 'column'
  }
}
