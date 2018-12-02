import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PrincipalComponent } from './principal/principal.component';
import { AgregarComponent } from './agregar/agregar.component';
import { LoginComponent } from './login/login.component';
import { SecondComponent } from './second/second.component';
import { RegisterComponent } from './register/register.component';
import { ContactoComponent } from './principal/contacto/contacto.component';
const routes: Routes = [
    {
        path: '', redirectTo: '/principal', pathMatch: 'full'
    },
    {
        path: 'principal', component: PrincipalComponent
    },
    {
        path: 'agregar', component: AgregarComponent
    },
    {
        path: 'second', component: SecondComponent
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'register', component: RegisterComponent
    },
    {
        path: 'contacto', component: ContactoComponent
    }

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
