import { Injectable } from '@nestjs/common';

import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class FileManagerService {

  public readFile(file: string): string {
    const filePath = path.join(process.cwd(), file);
    const readFile = fs.readFileSync(filePath, 'utf-8');
    return readFile.toString();
  }

  public writeFile(file: string, data: string): void {
    const filePath = path.join(process.cwd(), file);
    fs.writeFile(filePath, data, "utf-8", ()=>{});
  }

  public fileExists(file: string): boolean {
    try {
      return !!fs.readFileSync(path.join(process.cwd(), file), 'utf-8');
    }
    catch(e) {
      return false;
    }
  }
}
