import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './add-client/add-client.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientMainDataComponent } from './client-main-data/client-main-data.component';
import { ClientRusPassportComponent } from './client-rus-passport/client-rus-passport.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientsComponent } from './clients.component';

const routes: Routes = [
  {
    path:'',
    component: ClientsComponent,
    children:[
      {
        path:'',
        component: ClientsListComponent
      },
      {
        path:'add-client',
        component: AddClientComponent,
        children:[
          {
            path:'',
            redirectTo: 'main-data',
            pathMatch: 'full'

          },
          {
            path:'main-data',
            component:ClientMainDataComponent
          },
          {
            path:'rus-passport/:id',
            component:ClientRusPassportComponent
          }
        ]
      },
      {
        path:'clientdetail',
        component: ClientDetailComponent
      },
      {
        path:'clientdetail/:id',
        component: ClientDetailComponent,
        children:[
          {
            path:'',
            redirectTo: 'main-data/:id',
            pathMatch: 'full'
          },
          {
            path:'main-data/:id',
            component:ClientMainDataComponent
          },
          {
            path:'rus-passport/:id',
            component:ClientRusPassportComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
