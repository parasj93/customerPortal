import { TestBed, inject, fakeAsync } from '@angular/core/testing';
import { ApiServiceService } from './api-service.service'
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { IUser } from '../Iuser';


fdescribe('Test the service only', () => {

  let apiService: ApiServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiServiceService]
    });
    apiService = TestBed.get(ApiServiceService);
    httpMock = TestBed.get(HttpTestingController);
  });



  afterEach(() => {
    httpMock.verify();
  });

  it('should get the user', () => {
    const user: IUser = {
      id: 1315,
      name: 'Paras'
    };

    // apiService.getUsers().subscribe(data => {
    //   //expect(data).toBe(1);
    //   expect(data.id).toBe(1316);
    //   expect(data.name).toBe(user.name);
    // });

    // apiService.getUsers().subscribe(data => {
    //   //expect(data).toBe(1);
    //   expect(data.id).toBe(1316);
    //   expect(data.name).toBe(user.name);
    // });

    const request = httpMock.expectOne('http://localhost:3000'+'/users');
    console.log('reqyekdkjdjksn'+request.request.url)
    expect(request.request.method).toBe('GET');
    request.flush(user);
  })
})

