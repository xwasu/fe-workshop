import * as React from 'react';

import {GitHubRepo} from "./model";
import {getRepos} from "./service";

interface IReposProps { user: string }

export class Repos extends React.Component<IReposProps, {repos: GitHubRepo[]}> {
  constructor(props: IReposProps) {
    super(props);
    this.state = {repos: []}
  }

  async componentDidMount() {
    this.setState({repos: await getRepos(this.props.user)})
  }

  render() {
    return (<RepoTable repos={this.state.repos} />);
  }
}

function RepoTable({repos}: {repos: GitHubRepo[]}) {
  return (
    <table className="pure-table pure-table-bordered" style={{margin: '0 auto'}}>
      <tbody>
      {repos.map(r => <RepoTableRow {...r} key={r.name}/>)}
      </tbody>
    </table>
  )
}

export function RepoTableRow({name, stars, url}: GitHubRepo) {
  return (
    <tr>
      <td>{name}</td>
      <td>{stars > 0 ? `${stars} ⭐` : '-'}</td>
      <td><a href={url}>🔗</a></td>
    </tr>
  );
}
