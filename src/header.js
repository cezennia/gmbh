import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <div class="header">
            <div class="container">
                
                <nav class="level">
                    <div class="level-left">
                        <p class="level-item">
                            <a>angular</a> / <a>angular.js</a>
                        </p>
                    </div>


                    <div class="level-right">
                        <p class="level-item">
                            <div class="tags has-addons level-item">
                                <span class="tag is-light">Watch</span>
                                <span class="tag is-white">4,638</span>                            
                            </div>
                        </p>
                        <p class="level-item">
                            <div class="tags has-addons level-item">
                                <span class="tag is-light">Star</span>
                                <span class="tag is-white">48,638</span>                            
                            </div>
                        </p>
                        <p class="level-item">
                            <div class="tags has-addons level-item">
                                <span class="tag is-light">Fork</span>
                                <span class="tag is-white">28,638</span>                            
                            </div>
                        </p>
                    </div>
                </nav>
            </div>
            <div class="tabs is-boxed container">
                <ul>
                    <li >
                        <a>
                            <span class="icon is-small"><svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"></path></svg></span>
                            <span>Code</span>
                        </a>
                    </li>
                    <li class="is-active">
                        <a>
                            <span class="icon is-small"><svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg></span>
                            <span>Issues</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span class="icon is-small"><svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg></span>
                            <span>Pull Requests</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span class="icon is-small"><svg class="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"></path></svg></span>
                            <span>Projects</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span class="icon is-small"><svg class="octicon octicon-book" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"></path></svg></span>
                            <span>Wikis</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span class="icon is-small"><svg class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"></path></svg></span>
                            <span>Insights</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div> 
    );
  }
}

export default Header;
