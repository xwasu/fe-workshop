import {GitHubUser, IGitHubUserResponse} from './model';

const assert = require('assert'); // assert from Node

describe('GitHubUser', () => {
  it('should create an object with img and bio keys', () => {
    // given
    const [givenUrl, givenBio] = ['url', 'bio'];
    const input: IGitHubUserResponse = {
      avatar_url: givenUrl,
      bio: givenBio
    };

    // when
    const result = new GitHubUser(input);

    // then
    assert.strictEqual(result.img, givenUrl);
    assert.strictEqual(result.bio, givenBio);
  });

  it('should return bio when calling toString', () => {
    // given
    const [givenUrl, givenBio] = ['url', 'bio'];
    const input: IGitHubUserResponse  = {
      avatar_url: givenUrl,
      bio: givenBio
    };

    // when
    const result = new GitHubUser(input);

    // then
    assert.strictEqual(`${result}`, givenBio);
  });
});
