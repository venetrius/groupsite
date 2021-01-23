import React from "react";
import axios from 'axios';
import { URL } from "../../config";
import { Button, Comment, Avatar, Tooltip, Input } from "antd";
import moment from "moment";
import 'antd/dist/antd.css';
import Tag from 'antd/es/tag'

import { withRouter } from "react-router";
import NewProject from '../Common/NewCommentForm'

const { TextArea } = Input;

const colors = [ 'pink', 'red', 'yellow', 'orange', 'cyan', 'green', 'blue', 'purple', 'geekblue', 'magenta', 'volcano', 'gold', 'lime']

const getRandomVariant = () => colors[Math.floor(Math.random()*colors.length)]

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

  renderTechStack = (techStackAsString) => (
    <div>
      {techStackAsString.split(',').map(tech =>
        <Tag key={`${tech}-badge`} color={getRandomVariant()} style={{marginRight: "20px", float: 'right'}}> {tech} </Tag>
      )}
    </div>)

  Comment = (comment) => (
    <Comment
      author={<a>{comment.user_name}</a>}
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
          <span>{moment(comment.created_at).fromNow()}</span>
        </Tooltip>
      }
    >
    </Comment>
  );

  handleAddComment(formData, page) {
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
      return "Opps some error, pls reload the page";
    }
    console.log(this.state);
    const { project, comments } = this.state;
    return (
      <div style={{maxWidth: "1250px", margin: 'auto'}}>
        <div>
        <h1> {project.name} </h1>
        <span style={{display: 'block', width: '100%', textAlign: 'center'}}>{project.summary}</span>
        </div>

        <span> Created at</span>
        <span> {moment(project.created_at).format("YYYY/MM/DD")}</span>
        {this.renderTechStack(project.selected_stack)}
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
        </div>
        {comments.map(comment => this.Comment(comment))}
        <div style={{ maxWidth: "80%", margin: "auto" }}>
          <NewProject onSubmit={this.handleAddComment} page={this}/>
        </div>

      </div>
    );
  }
}

export default withRouter(ProjectPage);
