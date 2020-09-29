/*
 * Copyright 2021 American Express Travel Related Services Company, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations
 * under the License.
 */

// eslint-disable-next-line import/prefer-default-export
export function isDevelopment() {
  return process.env.NODE_ENV !== 'production';
}

export function getLocalRootModule({ modules }) {
  return modules.find(({ rootModule }) => rootModule);
}

export function getModuleFromFilePath({ modules, filePath }) {
  return modules.find(({ modulePath }) => filePath.startsWith(modulePath));
}

export function getModuleInfoFromLocalePath(filePath) {
  const [modulePath, fileBasePath = ''] = filePath.split('/locale/');
  const [moduleName] = modulePath.split('/').reverse();
  const [languagePack] = fileBasePath.split('/');
  const locale = languagePack.toLowerCase().replace('.json', '');
  return [moduleName, modulePath, languagePack, locale];
}

export function openBrowser(Url) {
  // eslint-disable-next-line global-require
  const open = require('open');

  return open(Url);
}
