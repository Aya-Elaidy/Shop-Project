import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Productparent } from './components/productparent/productparent';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { NotFound } from './components/not-found/not-found';
import { ProductDetails } from './components/product-details/product-details';
import { Register } from './components/register/register';
import { Login } from './components/login/login';
import { authGuard } from './guards/auth-guard';
import { Search } from './components/search/search';
export const routes: Routes = [

{ path:'', redirectTo:'home',pathMatch:'full'},
    {
        path:'home',
        component:Home
    },
  { path: 'details/:id', component: ProductDetails },

     {
        path:'about',
        component:About
    },
      {
        path:'contatct',
        component:Contact
    },  {
        path:'product',
        component:Productparent
        

    },
     {
        path:'register',
        component:Register,
        title:'Register page',
        canActivate:[authGuard]
        
    },
     {
        path:'login',
        component:Login,
        title:'Login page',
        canActivate:[authGuard]

    },
    { path: 'search-products', component: Search },
    {
    path:'**',
        component:NotFound,
    },

    
    

];
