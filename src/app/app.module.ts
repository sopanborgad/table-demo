import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { SortDirective } from './directives/sort.directive';
import { JwPaginationModule } from 'jw-angular-pagination';
import { FileServiceService } from './services/file-service.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    SortDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JwPaginationModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FileServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
