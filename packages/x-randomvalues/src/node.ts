// Copyright 2017-2020 @polkadot/x-randomvalues authors & contributors
// SPDX-License-Identifier: Apache-2.0

import crypto from 'crypto';

export default function getRandomValues <T extends Uint8Array> (arr: T): T {
  return crypto.randomBytes(arr.length).reduce((arr, value, index) => {
    arr[index] = value;

    return arr;
  }, arr);
}
