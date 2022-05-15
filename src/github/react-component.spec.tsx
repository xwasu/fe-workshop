import * as React from 'react';
import { shallow } from 'enzyme';
import { RepoTableRow } from './react-component';

const assert = require('assert');

describe('<RepoTableRow />', () => {
  it('creates table cells for name, stars and url', () => {
    // given
    const [name, stars, url] = ['repo', 7, 'url'];
    const props = { name, stars, url };

    // when
    const result = shallow(<RepoTableRow {...props} />);

    // then
    assert.ok(result.contains(<td>{name}</td>));
    assert.ok(result.contains(<td>{stars} ⭐</td>));
    assert.ok(result.contains(<td><a href={url}>🔗</a></td>));
  });

  it('ignores 0 stars', () => {
    // given
    const [name, stars, url] = ['repo', 0, 'url'];
    const props = { name, stars, url };

    // when
    const result = shallow(<RepoTableRow {...props} />);

    // then
    assert.ok(result.contains(<td>{name}</td>));
    assert.ok(result.contains(<td>-</td>));
    assert.ok(result.contains(<td><a href={url}>🔗</a></td>));
  })
});
