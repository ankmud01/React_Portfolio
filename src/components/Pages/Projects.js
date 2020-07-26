import React, { Component } from 'react';
import Portfolio from '../PortfolioPage/Portfoliopage';
import repoData from '../../repoDetail.json';

export default class Projects extends Component {
  state = {
    repoData,
  };
  render() {
    return (
      <div>
        <h2>Projects</h2>
        <hr />
        {this.state.repoData.map((data) => (
          <Portfolio
            id={data.id}
            name={data.name}
            giturl={data.git_url}
            description={data.description}
            homepage={data.homepage}
            image={data.image}
            technology={data.techhology}
          />
        ))}
      </div>
    );
  }
}
