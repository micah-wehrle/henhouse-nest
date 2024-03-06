import { Injectable } from '@nestjs/common';
import { FileManagerService } from 'src/global-services/file-manager/file-manager.service';

@Injectable()
export class PromotionCheckerService {
  private globalChecks: number = 0;
  private activeViewerList: ViewerData[] = [];

  private viewerTimeout: number = 20000; // 20 seconds

  private writeTimer: number = 10 * 60 * 1000; // 10 minutes

  private lastCheck: number = -1;

  constructor(private fileManager: FileManagerService) {
    this.loadPastChecks();
    setInterval(() => {
      if (this.lastCheck !== this.globalChecks) {
        this.writeChecks();
      }
    }, this.writeTimer);
  }

  public check(uid: string, incrementChecks: boolean): object {
    this.cleanupViewerList(uid);
    if (incrementChecks) {
      this.globalChecks ++;
    } 

    return {
      globalChecks: this.globalChecks,
      activeViewers: this.activeViewerList.length
    }
  }

  private cleanupViewerList(uid: string) {
    let foundUid: boolean = false;
    const curTime = new Date().getTime();
    for (let i = this.activeViewerList.length - 1; i >= 0; i--) {
      if (this.activeViewerList[i].uid === uid) {
        foundUid = true;
        this.activeViewerList[i].lastView = curTime;
      }
      if (curTime - this.activeViewerList[i].lastView > this.viewerTimeout) {
        this.activeViewerList.splice(i, 1);
      }
    }

    if (!foundUid) {
      this.activeViewerList.push({
        uid, 
        lastView: curTime
      });
    }
  }

  private loadPastChecks() {
    const data: any = this.fileManager.readFile('promo-check-count.txt');
    if (data) {
      this.globalChecks += Number(data);
      this.lastCheck = this.globalChecks;
    }
    else {
      console.error('error loading data');
    }
  }

  private writeChecks() {
    this.fileManager.writeFile('promo-check-count.txt', `${this.globalChecks}`);
  }
}

type ViewerData = {
  uid: string;
  lastView: number;
}