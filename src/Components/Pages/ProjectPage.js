import React from "react";
import axios from 'axios';
import { URL } from "../../config";
import { Button, Comment, Avatar, Tooltip, Input } from "antd";
import moment from "moment";
import 'antd/dist/antd.css';


import { withRouter } from "react-router";
import NewProject from '../Common/NewCommentForm'

const { TextArea } = Input;

class ProjectPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const projectId = this.props.match.params.projectId;
    fetch(`${URL}/projects/${projectId}`)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            hasError: false,
            project: result.project[0],
            comments: result.comments,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            hasError: true,
            error,
          });
        }
      );
  }

  ExampleComment = (comment) => (
    <Comment
      actions={[<span key="comment-nested-reply-to">Reply to</span>]}
      author={<a>Han Solo</a>}
      avatar={
        <Button type="text" shape="circle">
          AB
      </Button>
      }
      content={
        <p>
          We supply a series of design principles, practical patterns and high
          quality design resources (Sketch and Axure).
        </p>
      }
      datetime={
        <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
          <span>{moment().fromNow()}</span>
        </Tooltip>
      }
    >
    </Comment>
  );

  Comment = (comment) => (
    <Comment
      author={<a>comment.user_name</a>}
      avatar={
        <Button type="text" shape="circle">
          AB
      </Button>
      }
      content={
        <p>
          {comment.comment}
        </p>
      }
      datetime={
        <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
          <span>{moment().fromNow()}</span>
        </Tooltip>
      }
    >
    </Comment>
  );

  dataField = (label, data) => <span></span>;

  comp = () => {
    return (
      <div>
        <h1> This is the project name</h1>
        <p>
          {" "}
          This is a project to help people do something. Main goal is that the
          thing with the stuff. Strech goal, do something else as well.
        </p>
        <span> Created at</span>
        <span> 2020.11.12</span>
        <span style={{ float: "right" }}>List of techs</span>
        <div></div>
        <div>
          <h3>Description</h3>
          <p>It can have multiple paragraphs</p>
          <p>More about goals and plans</p>
          <p>
            Some details how much work has alredy been added. Maybe about the
            group dinamics of the people who work on this stuff. Some link some
            ideas. But mostly enough text for two lines.
          </p>
        </div>
        <div>
          <h3>Discussion</h3>
          <div>
            This is a place to ask your question, discover how many person is
            interested in this idea etc. This is the default message what is
            always (?) shown
          </div>
          <div>
            This is a place to ask your question, discover how many person is
            interested in this idea etc. This is the default message what is
            always (?) shown
          </div>
          {this.ExampleComment()}
          {this.ExampleComment()}
          {this.ExampleComment()}
        </div>
        <div style={{ maxWidth: "80%", margin: "auto" }}>
          <TextArea rows={4} />
        </div>
      </div>
    );
  };

  handleAddProject(formData, page) {
    const projectId = page.props.match.params.projectId;
    axios.post(`${URL}/projects/${projectId}/comments`, formData)
    .then(response => {
      const data = response.data[0];
      const newItemList = [data].concat(page.state.comments)
      page.setState({
        items: newItemList
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    console.log("ProjectPage", this.props.match.params.projectId, this.state);
    if (!this.state.isLoaded) {
      return "Loading";
    }
    if (this.state.hasError) {
      return this.comp();
      return "Opps some error, pls reload the page";
    }
    console.log(this.state);
    const { project, comments } = this.state;
    return (
      <div>
        <h1> {project.name} </h1>
        <p> {project.summary}</p>
        <span> Created at</span>
        <span> {moment(project.created_at).format("YYYY/MM/DD")}</span>
        <span style={{ float: "right" }}>List of techs</span>
        <div></div>
        <div>
          <h3>Description</h3>
          {project.description}
        </div>
        <div>
          <h3>Discussion</h3>
          <div>
            This is a place to ask your question, discover how many person is
            interested in this idea etc. This is the default message what is
            always (?) shown
          </div>
          {this.ExampleComment()}
          {this.ExampleComment()}
          {this.ExampleComment()}
        </div>
        {this.state.comments.map(comment => this.Comment(comment))}
        <div style={{ maxWidth: "80%", margin: "auto" }}>
          <NewProject onSubmit={this.handleAddProject} page={this}/>
        </div>

      </div>
    );
  }
}

export default withRouter(ProjectPage);
