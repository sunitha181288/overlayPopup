import { Subject } from 'rxjs';

import { OverlayRef } from '@angular/cdk/overlay';

import { TemplateRef, Type } from '@angular/core';

export interface OverlayCloseEvent<R> {
  type: 'backdropClick' | 'close';
  data: any;
}

// R = Response Data Type, T = Data passed to Modal Type
export class AppOverlayRef<R = any, T = any> {
  afterClosed$ = new Subject<OverlayCloseEvent<R>>();

  constructor(
    public overlay: OverlayRef,
    public content: any,
    public data: T // pass data to modal i.e. FormData
  ) {
    // overlay.backdropClick().subscribe(() => this._close('backdropClick', null));
  }

  close(data?: R) {
    this._close('close', data);
  }

  private _close(type, data) {
    this.overlay.dispose();
    this.afterClosed$.next({
      type,
      data
    });

    this.afterClosed$.complete();
  }
}
