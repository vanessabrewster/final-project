import React, { Component } from 'react';
let projects = [
  { name: 'Project One', date: 'blah blah blah', startTime: '12347593', endTime: '34623823', totalTime: '1234567' },
  { name: 'Project Two', date: 'blah blah blah', startTime: '12347593', endTime: '34623823', totalTime: '1234567' },
  { name: 'Project Three', date: 'blah blah blah', startTime: '12347593', endTime: '34623823', totalTime: '1234567' },
  { name: 'Project Four', date: 'blah blah blah', startTime: '12347593', endTime: '34623823', totalTime: '1234567' },
]

export default class List extends Component {
  render() {
    return (
      <div>
        <ul>
          {projects.map((project, i) => {
            return <ListRow key={i} project={project} />
          })}
        </ul>
      </div>
    )
  }
}

export class ListRow extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div>
          <button>Start</button>
        </div>
        <div>
          {this.props.project.date}
        </div>
        <div>
          {this.props.project.name}
        </div>
        <div>
          {this.props.project.totalTime}
        </div>
        <div>
          {this.props.project.startTime}
        </div>
        <div>
          {this.props.project.endTime}
        </div>
      </div>
    )
  }
}
