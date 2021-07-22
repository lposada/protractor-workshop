/* eslint-disable class-methods-use-this */
import { cwd } from 'process';

import {
  existsSync, mkdirSync,
  writeFileSync, readFileSync,
} from 'fs';

const path = require('path');

export class DownloadService {
  private folder: string;

  constructor() {
    this.folder = path.resolve(cwd(), 'temp');
  }

  public createFolder() {
    if (!existsSync(this.folder)) {
      mkdirSync(this.folder);
    }
  }

  public downloadFile(link: string, filename) {
    this.createFolder();
    const base64File = link.replace(/^data:image\/(png|jpg|jpeg);base64,/, '');
    writeFileSync(path.resolve(this.folder, filename), base64File, 'base64');
  }

  public readFileFromTemp(filename: string): Buffer {
    return readFileSync(path.resolve(this.folder, filename));
  }
}
