import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PrincipalComponent } from './principal/principal.component';
import { AgregarComponent } from './agregar/agregar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { SugerenciasComponent } from './principal/sugerencias/sugerencias.component';
import { AgregarFinishComponent } from './agregar/agregar-finish/agregar-finish.component';

const routes: Routes = [
    {
        path: '', redirectTo: '/principal', pathMatch: 'full'
    },
    {
        path: 'principal', component: PrincipalComponent
    },
    {
        path: 'agregar', component: AgregarComponent, canActivate:[AuthGuard], children:[
            {path:'resultado', component:AgregarFinishComponent}
        ]
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'register', component: RegisterComponent
    },
    {
        path: 'sugerencias', component: SugerenciasComponent
    }

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
