import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { ComponentePaiComponent } from './components/componente-pai/componente-pai.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "users",
        component: UsersComponent
    },
    {
        path: "pai",
        component: ComponentePaiComponent
    }
];
