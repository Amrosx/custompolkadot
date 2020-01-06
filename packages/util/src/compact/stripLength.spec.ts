// Copyright 2017-2020 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import compactStripLength from './stripLength';

describe('compactStripLength', (): void => {
  it('correctly removes the length prefix', (): void => {
    expect(
      compactStripLength(Uint8Array.from([2 << 2, 12, 13]))
    ).toEqual([
      3,
      Uint8Array.from([12, 13])
    ]);
  });
});
