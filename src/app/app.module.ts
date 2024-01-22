import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { OpinionsComponent } from './components/opinions/opinions.component';
import { InterceptorService } from './services/interceptor.service';
import { SearchComponent } from './components/search/search.component';
import { GraphQLModule } from './graphql.module';
import { CoreModule } from './components/core/core.module';
import { ComponentsModule } from './components/components.module';
import { CategoryService } from './services/shared/category.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OpinionsComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    GraphQLModule,
    CoreModule,
    ComponentsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    CategoryService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
