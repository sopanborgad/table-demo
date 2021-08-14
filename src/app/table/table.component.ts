import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from '../data-layer/user';
import { FileServiceService } from '../services/file-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  userList: Array<User> = [
    {
      userId: 123,
      name: "Sopan",
      email: "sopan.borgad@gmail.com",
      age: 27,
      gender: "Male",
      dob: "05-04-1994",
      profilePhoto: "string",
      isSelected: false
    },
    {
      userId: 124,
      name: "Sopan1",
      email: "sopan.borgad@gmail.com",
      age: 28,
      gender: "Male",
      dob: "05-04-1994",
      profilePhoto: "string",
      isSelected: false
    },
    {
      userId: 125,
      name: "Sopan2",
      email: "sopan2.borgad@gmail.com",
      age: 29,
      gender: "Male",
      dob: "05-04-1994",
      profilePhoto: "string",
      isSelected: false
    },
    {
      userId: 123,
      name: "Sopan",
      email: "sopan.borgad@gmail.com",
      age: 26,
      gender: "Male",
      dob: "05-04-1994",
      profilePhoto: "string",
      isSelected: false
    }
  ]
  uerData: any[];
  fileToUpload: File | null = null;
  imageSrc: string | ArrayBuffer;
  selectAll: boolean = false;
  constructor(private fileUploadService: FileServiceService) { }

  ngOnInit(): void {
  }

  onChangePage(uerData: Array<any>) {
    this.uerData = uerData;
  }

  handleFileInput(files: FileList, userId) {
    this.fileToUpload = files.item(0);
    this.fileUploadService.postFile(this.fileToUpload).pipe(map(data => { })).subscribe((result: any) => {
      this.updateProfile(userId, result.path)
    });
  }

  updateProfile(userId, profilePhoto) {
    for (let i in this.uerData) {
      if (this.uerData[i].userId == userId) {
        this.uerData[i].profilePhoto = profilePhoto;
        break;
      }
    }
  }
  blob: any;
  downloadFile(data) {
    this.blob = new Blob([data], { type: '' });
    var downloadURL = window.URL.createObjectURL(data);
    var link = document.createElement('a');
    link.href = downloadURL;
    link.download = "file";
    link.click();
  }
  selectAllChanged(event) {
    console.log(event);
    for (let i = 0; i < this.uerData.length; i++) {
      this.uerData[i].isSelected = event;
    }
  }
}