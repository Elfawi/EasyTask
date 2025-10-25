import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';
@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent], // for non-standalone components
  bootstrap: [AppComponent],
  imports: [BrowserModule, SharedModule, TasksModule], // for standalone components && modules
})
export class AppModule {}
