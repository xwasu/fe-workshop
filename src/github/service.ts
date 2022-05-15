import {GitHubRepo, GitHubUser, IGitHubRepoResponse} from './model';

const API_URL = `https://api.github.com`;

export async function getUser(name: string): Promise<GitHubUser> {
  try {
    const resp = await fetch(`${API_URL}/users/${name}`);
    return new GitHubUser(await resp.json());
  } catch (e) {
    console.warn(e);
    return new GitHubUser();
  }
}

export async function getRepos(name: string): Promise<GitHubRepo[]> {
  try {
    const resp = await fetch(`${API_URL}/users/${name}/repos`);
    return (await resp.json() as IGitHubRepoResponse[])
      .filter(r => !r.fork)
      .map(r => new GitHubRepo(r));
  } catch (e) {
    console.warn(e);
    return [];
  }
}
