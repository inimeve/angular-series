import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import es from '@angular/common/locales/es';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { es_ES, NZ_I18N } from 'ng-zorro-antd/i18n';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetRepository } from './core/pet/pet.repository';
import { VetRepository } from './core/vet/vet.repository';
import { PetMockRepository } from './data/pet/pet-mock-api/pet-mock.repository';
import { VetMockRepository } from './data/vet/vet-mock-api/vet-mock.repository';
import { VetWebRepository } from './data/vet/vet-web-api/vet-web.repository';
import { SharedModule } from './ui/shared/shared.module';


registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    SharedModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: es_ES },
    { provide: PetRepository, useClass: PetMockRepository },
    { provide: VetRepository, useClass: VetWebRepository }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
