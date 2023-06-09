import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'home',
  // },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  // {
  //   path: 'voucher',
  //   loadChildren: () =>
  //     import('./voucher/voucher.module').then((m) => m.VoucherModule),
  // },
  // {
  //   path: 'wallet',
  //   loadChildren: () =>
  //     import('./wallet/wallet.module').then((m) => m.WalletModule),
  // },
  // {
  //   path: 'settings',
  //   loadChildren: () =>
  //     import('./settings/settings.module').then((m) => m.SettingsModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
