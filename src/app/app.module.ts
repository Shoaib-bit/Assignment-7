import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path : '',
        redirectTo : 'nurses',
        pathMatch : 'full'
      },
      {
        path : 'nurses',
        loadChildren : () => import('./nurses/nurses.module')
        .then((mod) => mod.NursesModule)
      },
      {
        path : 'profile/:id',
        loadChildren : () => import('./profile/profile.module')
        .then((mod) => mod.ProfileModule)
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
