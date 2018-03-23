import React, { Component } from 'react';
import * as Moment from 'moment';
import Loader from './assets/img/ball-triangle.svg';

class Issues extends Component {

    apiURL = "https://api.github.com/repos/angular/angular.js/issues";

    constructor(props) {
        super(props);

        this.state = {
            issues: [],
            loading: false
        }
    }

    componentDidMount() {
        this.getIssues();
    }

    

    getIssues() {
        this.setState({loading: true});

        fetch(this.apiURL)
        .then(response => {
            if (response.ok){
                // console.log("Hey");
                return response.json();
            } else {
                throw Error(response.statusText);
            }
            
        })
        .then((data) => {
            // console.log(data);
            this.setState({loading: false});
            this.setState({
                issues: data
            });
        })
        .catch(error => {
            this.setState({loading: false});
            // console.log(error.message);
        });
    }

    render() {
        let issues = this.state.issues.map((item, index) => {
            let tags = item.labels.map((tag, index) => {
                return (
                    <span style={{backgroundColor: '#' + tag.color, marginLeft: 4, color: "#fff"}} class="tag">{tag.name}</span>
                );
            });

            return (
                <div key={index} class="panel-block">
                    <span class="panel-icon">
                        { (item.state === "open") ? <svg class="octicon octicon-issue-opened open" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z" stroke="none" fill="#28a745" stroke-width="1px"></path></svg> : ""}
                    </span>
                    <div>
                        <h2><a class="title is-4">{item.title}</a>{tags}</h2>
                        <p class="subtitle is-6 is-small">
                            <span>#{item.number} opened {Moment(item.created_at).fromNow()} by {item.user.login} </span>
                            
                        </p>    
                    </div>
                    <span style={{marginLeft: "auto"}} class="panel-icon">
                        { (item.comments !== 0) ? <span style={{display: "inline-flex"}}><svg class="octicon octicon-comment v-align-middle" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 1H2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h2v3.5L7.5 11H14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 9H7l-2 2v-2H2V2h12v8z"></path></svg> <p style={{paddingLeft: 3, color: "#000"}}>{item.comments}</p> </span> : ""}
                    </span>
                
                </div>
            );
        });

        return (
            <div class="container">
                <nav class="level">
                    <div class="level-left">
                        <p class="level-item">
                            <div class="tags has-addons level-item">
                                <span class="tag is-white">Labels</span>
                                <span class="tag is-white">Milestones</span>                            
                            </div>
                        </p>
                    </div>

                    <div class="level-right">
                        <p class="level-item">
                            <a class="button is-primary">New Issue</a>
                        </p>
                    </div>
                </nav>
                <nav class="panel">
                    {/* <p class="panel-heading">
                        repositories
                    </p>
                    <div class="panel-block">
                        <p class="control has-icons-left">
                        <input class="input is-small" type="text" placeholder="search"/>
                        <span class="icon is-small is-left">
                            <i class="fa fa-search"></i>
                        </span>
                        </p>
                    </div>
                    <p class="panel-tabs">
                        <a class="is-active">all</a>
                        <a>public</a>
                        <a>private</a>
                        <a>sources</a>
                        <a>forks</a>
                    </p> */}
                    {/* mini-component for issues */}
                    { this.state.loading ? <img src={Loader} /> : issues}
                </nav>            
            </div>
        );
    }
}

export default Issues;
