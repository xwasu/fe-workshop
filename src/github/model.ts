export interface IGitHubUserResponse {
  avatar_url: string;
  bio: string;
}

export interface IGitHubRepoResponse {
  name: string;
  stargazers_count: number;
  fork: boolean;
  html_url: string;
}

export class GitHubUser {
  public img: string;
  public bio: string;

  constructor({avatar_url: img = '', bio = 'Cannot read a biography'}: Partial<IGitHubUserResponse> = {}) {
    [this.img, this.bio] = [img, bio];
  }

  toString() {
    return this.bio;
  }
}

export class GitHubRepo {
  public name: string;
  public stars: number;
  public url: string;

  constructor({name, stargazers_count: stars, html_url: url}: IGitHubRepoResponse) {
    [this.name, this.stars, this.url] = [name, stars, url];
  }
}
