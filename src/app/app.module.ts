import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppComponent} from './view/app.component';
import {WordComponent} from './view/word/word.component';
import {WordlistComponent} from './view/wordlist/wordlist.component';
import { WordInputComponent } from './view/word-input/word-input.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    WordlistComponent,
    WordInputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
