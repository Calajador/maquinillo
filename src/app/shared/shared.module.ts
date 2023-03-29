import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { MaterialModule } from './material.module';
import { ButtonComponent } from './components/button/button.component';
import { TableComponent } from './components/table/table.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SidenavItemComponent } from './components/sidenav/sidenav-item/sidenav-item.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    ButtonComponent,
    TableComponent,
    SidenavComponent,
    SidenavItemComponent,
    ToolbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      isolate: false,
    }),
  ],
  exports: [
    MaterialModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonComponent,
    TableComponent,
    SidenavComponent,
    SidenavComponent,
    ToolbarComponent,
  ],
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
    };
  }
}
