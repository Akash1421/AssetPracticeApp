import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RolesServiceService } from 'src/app/services/roles-service.service';
import { AddRolesComponent } from '../add-roles/add-roles.component';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit { 
   
  roles:any[]=[];
  displayedColumns:string[]=['id','name','description','elevatedPrivilage','CreatedOn','action'];

  constructor(private rolesService:RolesServiceService,private _dialogRef:MatDialog) { 
    this.getRoles();
  }

  ngOnInit(): void {
  }
  getRoles():void{ 
    this.rolesService.getAllRoles().subscribe(data=>{ 
      this.roles = data;
      console.log(this.roles);
    })
  } 

  //code for updating roles
  editRoles(data:any){ 
      const dialogRef = this._dialogRef.open(AddRolesComponent,{ 
        data
      }); 
      console.log(data)
      dialogRef.afterClosed().subscribe({ 
        next:(val)=>{ 
          if(val){ 
            this.getRoles();
          }
        }
      })
    }
   //code for deleting the roles
   deleteRoles(id:number){ 
    //calling the roleservice delete api method
    this.rolesService.deleteRole(id).subscribe({ 
      next:(res)=>{ 
        alert("role deleted");
        this.getRoles();
      },
      error:console.log
    })
   }

   addRolesForm(){ 
    const dialogRef= this._dialogRef.open(AddRolesComponent);

   }
}
