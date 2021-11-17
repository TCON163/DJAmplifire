import { RoomService } from './../room.service';
import {
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync,
} from '@angular/core/testing';
import { ActivatedRoute, Params } from '@angular/router';
import { CreateRoomComponent } from './create-room.component';

describe('CreateRoomComponent', () => {
  let component: CreateRoomComponent;
  let fixture: ComponentFixture<CreateRoomComponent>;
  let testService: ActivatedRoute;
  let roomTestService: RoomService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateRoomComponent],
      providers: [RoomService],
    }).compileComponents();
  });

  //basic boiler plate testing for compnents.
  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRoomComponent);
    component = fixture.componentInstance;

    //checks to see if there are any changes in the component
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //checks to see if the subscribe button worked
  it('testing subscribe method is getting called', fakeAsync(() => {
    let subSpy = spyOn(testService.queryParamMap, 'subscribe');
    component.ngOnInit();

    tick();
    expect(subSpy).toHaveBeenCalled();
  }));
});
