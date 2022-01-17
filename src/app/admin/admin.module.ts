import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminLyoutComponent } from './shared/admin-layout/admin-lyout/admin-lyout.component';
import { LoginPageComponent } from './login-page/login-page/login-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page/dashboard-page.component';
import { AddPageComponent } from './add-page/add-page/add-page.component';
import { OrdersPageComponent } from './orders-page/orders-page/orders-page.component';
import { EditPageComponent } from './edit-page/edit-page/edit-page.component';

@NgModule({
  declarations: [
    AdminLyoutComponent,
    LoginPageComponent,
    DashboardPageComponent,
    AddPageComponent,
    OrdersPageComponent,
    EditPageComponent,
  ],
  imports: [
  CommonModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLyoutComponent, children: [
          {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
          {path: 'login', component: LoginPageComponent},
          {path: 'dashboard', component: DashboardPageComponent},
          {path: 'add', component: AddPageComponent},
          {path: 'orders', component: OrdersPageComponent},
          {path: 'product/:id/edit', component: EditPageComponent},
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AdminModule { }
