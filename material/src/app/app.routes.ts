import { Routes } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { ListarComponent } from './listar/listar.component'

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'listar', component: ListarComponent },
]