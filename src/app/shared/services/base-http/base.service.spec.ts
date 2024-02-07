import { TestBed } from '@angular/core/testing';
import { TestModule } from 'src/app/test/test.module';

import { BaseService } from './base.service';

describe('BaseService', () => {
  let service: BaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ TestModule ]
    });
    service = TestBed.inject(BaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
