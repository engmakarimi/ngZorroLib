import { NzModalService } from 'ng-zorro-antd/modal';
import { ColumnItem } from '../_models/columnItem';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ApiService } from 'src/app/_services';
import { User } from '../_models';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs';
import { UserLocationComponent } from '..';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  private baseUrl: string = 'users';
  userList: User[] = [];
  listOfCurrentPageData: User[] = [];
  resultSearch: User[] = [];
  searchControl = new FormControl('');
  //#region declare column
  listOfColumns: ColumnItem<User>[] = [
    {
      name: 'Name',
      sortOrder: null,
      sortFn: (a: User, b: User) => a.name.localeCompare(b.name),
      searchVisible: false,
      searchValue: '',
    },

    {
      name: 'Username',
      sortOrder: null,
      sortFn: (a: User, b: User) => a.username.localeCompare(b.username),
      searchVisible: false,
      searchValue: '',
    },
    {
      name: 'Email',
      sortOrder: null,
      sortFn: (a: User, b: User) => a.email.localeCompare(b.email),
      searchVisible: false,
      searchValue: '',
    },
    {
      name: 'Phone',
      sortOrder: null,
      sortFn: (a: User, b: User) => a.phone.localeCompare(b.phone),
      searchVisible: false,
      searchValue: '',
    },

    {
      name: 'Website',
      sortOrder: null,
      sortFn: (a: User, b: User) => a.website.localeCompare(b.website),
      searchVisible: false,
      searchValue: '',
    },
    {
      name: 'Company',
      sortOrder: null,
      sortFn: (a: User, b: User) =>
        a.company.name.localeCompare(b.company.name),
      searchVisible: false,
      searchValue: '',
    },
  ];
  //#endregion
  constructor(
    private apiService: ApiService<User>,
    private modal: NzModalService,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.getUser();

    this.searchControl.valueChanges
      .pipe(
        startWith(''),
        map((text) => this.filterAll(text))
      )
      .subscribe();
  }

  trackByName(_: number, item: ColumnItem<User>): string {
    return item.name;
  }

  //#region get data
  getUser() {
    this.apiService.get(this.baseUrl).subscribe((p: User[]) => {
      this.userList = [...p];
      //for pagination test add tree time of data;
      this.userList.push(...p, ...p);

      this.listOfCurrentPageData = [...this.userList];
      this.resultSearch = [...this.userList];
    });
  }
  //#endregion

  //#region search
  search(column: ColumnItem<User>) {
    //clear oldest search and search again by new column and search term
    this.listOfCurrentPageData = [...this.userList];
    this.listOfColumns.forEach((p) => {
      if (column.name != p.name) {
        p.searchVisible = false;
        p.searchValue = '';
      }
    });
    column.searchVisible = false;
    let columnName: keyof User = column.name.toLowerCase() as keyof User;
    this.filter(columnName, column.searchValue);
  }
  reset(column: ColumnItem<User>) {
    column.searchVisible = false;
    column.searchValue = '';
    this.listOfCurrentPageData = [...this.userList];
  }

  filter(key: keyof User, searchValue: string) {
    let temp = [
      ...this.userList.filter((item) =>
        (<string>item[key]).toLowerCase().includes(searchValue)
      ),
    ];
    this.listOfCurrentPageData = [...temp];
  }
  // search by input search

  filterAll(text: string) {
    let temp = this.userList.filter((info) => {
      const term = text.toLowerCase();
      return (
        info.name.toLowerCase().includes(term) ||
        info.username.toLowerCase().includes(term) ||
        info.email.toLowerCase().includes(term) ||
        info.company.name.toLowerCase().includes(term) ||
        info.website.toLowerCase().includes(term) ||
        info.phone.toLowerCase().includes(term)
      );
    });
    this.listOfCurrentPageData = [...temp];
  }
  //#endregion

  //#region pagination
  onCurrentPageDataChange($event: User[]): void {
    this.listOfCurrentPageData = $event;
  }
  //#endregion


  createComponentModal(data:User): void {
    if(data){
    const modal = this.modal.create({

      nzContent: UserLocationComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzComponentParams: {
        data:data
      },
      nzWidth:'700px',
      nzFooter:null,
      // nzOnOk: () => new Promise(resolve => setTimeout(resolve, 1000)),
    });
    const instance = modal.getContentComponent();
    // modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
    // Return a result when closed
    // modal.afterClose.subscribe(result => console.log('[afterClose] The result is:', result));

  }
}
}

