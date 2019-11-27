import { Component, OnInit } from '@angular/core';
import {AllCommunityModules} from '@ag-grid-community/all-modules';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  columnDefs = [
        {headerName: 'ID', field: 'id', sortable: true, filter: true, checkboxSelection: true },
        {headerName: 'Name', field: 'name', sortable: true, filter: true },
        {headerName: 'Phone', field: 'phone', sortable: true, filter: true },
        {headerName: 'Email', field: 'email', sortable: true, filter: true },
        {headerName: 'Pincode', field: 'pincode', sortable: true, filter: true }
];

rowData: any;

modules = AllCommunityModules;
  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.contactsService.getContactList().subscribe(res => {
      this.rowData = res;
    });
  }
 
}
