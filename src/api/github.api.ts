import { Octokit } from 'octokit';

export class GithubApi {
  private api = new Octokit({ auth: import.meta.env.VITE_GITHUB_AUTH }).rest;

  public getContributors = async (owner: string, repo: string) => {
    const { data } = await this.api.repos.listContributors({ owner, repo });
    return data;
  };
}
