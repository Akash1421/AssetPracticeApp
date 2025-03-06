import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';  
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout'; 
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { MatTableModule } from '@angular/material/table'; 
import { MatIconModule } from '@angular/material/icon';
import { FrontpagesComponent } from './frontpages/frontpages.component'; 
import { MatButtonModule } from '@angular/material/button';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component'; 
import { MatDialogModule } from '@angular/material/dialog'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';  
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; 
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { PracticeComponent } from './practice/practice.component';
import { MatSortModule } from '@angular/material/sort'; 
import {MatMenuModule} from '@angular/material/menu';
import { RouterModule, Routes } from '@angular/router';
import { RolesComponent } from './components/roles/roles.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { AssestsComponent } from './components/assests/assests.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AddRolesComponent } from './components/add-roles/add-roles.component';
import { AddAssestComponent } from './components/add-assest/add-assest.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { RegisterComponent } from './components/register/register.component';


const routes:Routes=[ 
  { 
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  },
  { 
    path:'roles',
    component:RolesComponent
  },
  { 
    path:'employee-details',
    component:EmployeeDetailsComponent
  },
  { 
    path:'assests',
    component:AssestsComponent
  },
  { 
    path:'employee',
    component:FrontpagesComponent
  },
  { 
    path:'login',
    component:LoginComponent
  },
  { 
    path:'home',
    component:HomeComponent
  },{ 
    path:'register',
    component:RegisterComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    FrontpagesComponent,
    EmpAddEditComponent,
    PracticeComponent,
    PracticeComponent,
    RolesComponent,
    EmployeeDetailsComponent,
    AssestsComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    AddRolesComponent,
    AddAssestComponent,
    AddEmployeeComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,  
    FlexLayoutModule, 
    MatToolbarModule,
    MatAutocompleteModule, 
    MatPaginatorModule,
    MatTableModule, 
    MatIconModule,
    MatButtonModule, 
    MatDialogModule,  
    BrowserAnimationsModule,  
    MatInputModule, 
    HttpClientModule,
    MatNativeDateModule, 
    ReactiveFormsModule, 
    MatFormFieldModule, 
    MatSelectModule,   
    MatDatepickerModule, 
    MatSortModule, 
    MatMenuModule,
    MatMenuModule,
    RouterModule,
    RouterModule.forRoot(routes),
    MatSlideToggleModule,
    

    
    
  ],
  providers: [
    
  ], 
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
