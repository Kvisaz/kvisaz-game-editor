import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './view/app.component';
import {WordComponent} from './view/word/word.component';
import {WordlistComponent} from './view/wordlist/wordlist.component';
import {WordInputComponent} from './view/word-input/word-input.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {CopyComponent} from './view/copy/copy.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {NavbarComponent} from './view/navbar/navbar.component';
import { EditorLoadingComponent } from './view/editor-loading/editor-loading.component';
import { EditorWorkingComponent } from './view/editor-working/editor-working.component';


@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    WordlistComponent,
    WordInputComponent,
    CopyComponent,
    NavbarComponent,
    EditorLoadingComponent,
    EditorWorkingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatTooltipModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
