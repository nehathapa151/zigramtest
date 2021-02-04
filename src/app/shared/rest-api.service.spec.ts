import { TestBed } from '@angular/core/testing';

import { RestApiService } from './rest-api.service';
import { HttpClientModule } from '@angular/common/http/';

describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
  }));

  it('should be created', () => {
    const service: RestApiService = TestBed.get(RestApiService);
    expect(service).toBeTruthy();
  });
});
