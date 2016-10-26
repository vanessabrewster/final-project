import React, { Component } from 'react';
import moment from 'moment';
import _ from "lodash";

export default class List extends Component {

  render() {
    return (
      <div className="list">
        <ul>
          {_.map(this.props.projects,(project, i) => {
            return <ListRow key={i} project={project} />
          })}
        </ul>
      </div>
    )
  }
}

export class ListRow extends Component {

  render() {
    let duration = moment.duration(this.props.project.difference)
    let display = `${duration.hours()}:${duration.minutes()}:${duration.seconds()}`
    return (
      <div className="listrow">
        <div className="listrowdate">
          <p>{this.props.project.date}</p>
        </div>
        <div className="listrowduration">
          <p>{moment(this.props.project.startTime).format('hh:mm:ss')} – {moment(this.props.project.endTime).format('hh:mm:ss')}</p>
        </div>
        <div className="listrowname">
          <h2>{this.props.project.projectName}</h2>
        </div>
        <div className="listrowtotaltime">
          <h3>{display}</h3>
        </div>
      </div>
    )
  }
}
