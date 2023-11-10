import { Injectable } from '@nestjs/common';

import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class FileManagerService {

  public readFile(file: string, createIfNull: boolean): string {
    const filePath = path.join(process.cwd(), file);
    const readFile = fs.readFileSync(filePath, 'utf-8');
    if (!readFile) {
      if (createIfNull) {
        // Create new file and write 0
      }
      else {
        return null;
      }
    }
    return readFile.toString();
  }

  public writeFile(file: string, data: string): void {
    const filePath = path.join(process.cwd(), file);
    fs.writeFile(filePath, data, "utf-8", ()=>{});
  }
}
