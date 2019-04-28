import React, { Fragment, Component } from 'react'

export default class Events extends Component {

  handleExpand() {
    this.setState({
      isPreview : False
    })
  }
  render() {
    var storage_array = []
    var events_jsx = []
    for (var idx in storage_array) {
      events_jsx.push(<Event
        title={storage_array[idx].title}
        date={storage_array[idx].date}
        time={storage_array[idx].time}
        location={storage_array[idx].location}
        summary={storage_array[idx].summary}
        prereqs={storage_array[idx].prereqs}
        photos={storage_array[idx].photos}
        links={storage_array[idx].links}
        tutorial={storage_array[idx].tutorial}
      />)
    }
    return (
      <Fragment>
        {events_jsx}
      </Fragment>
    )
  }
}
