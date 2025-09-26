import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../components/service/auth';

export const authGuard: CanActivateFn = (route, state) => {
  const auth =inject(Auth);
  const router=inject(Router);

  if(auth.isLoggedIN()){
    return router.createUrlTree(['/product']);

  }
  else{
    return true;
  }
};
